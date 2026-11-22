/* ============ MOTOR: escenario, progreso, voz, sonido, arrastre ============ */
const W=1280,H=720;
const stage=document.getElementById('stage');
let SCALE=1;
function fit(){
  SCALE=Math.min(innerWidth/W,innerHeight/H);
  stage.style.transform=`translate(-50%,-50%) scale(${SCALE})`;
  const rh=document.getElementById('rotHint');
  if(rh&&!rh.dataset.dismissed)rh.classList.toggle('show',innerHeight>innerWidth*1.15&&innerWidth<820);
}
addEventListener('resize',fit);

/* ---------- Progreso ---------- */
const SAVE_KEY='guardianes-valle-v3';
const DEFAULT={stars:[0,0,0,0,0,0],unlocked:1,poses:[],stickers:[],placed:{},intro:false,voice:true,sound:true,done:false};
let G=JSON.parse(JSON.stringify(DEFAULT));
function save(){try{localStorage.setItem(SAVE_KEY,JSON.stringify(G))}catch(e){}}
function fixStars(){G.stars=G.stars.slice(0,6);while(G.stars.length<6)G.stars.push(0)}
function loadSaved(){try{const s=JSON.parse(localStorage.getItem(SAVE_KEY)||'null');if(s&&Array.isArray(s.stars))G=Object.assign(JSON.parse(JSON.stringify(DEFAULT)),s)}catch(e){}fixStars()}
function resetProgress(){const v=G.voice,s=G.sound;G=JSON.parse(JSON.stringify(DEFAULT));G.voice=v;G.sound=s;G.intro=true;save()}

/* ---------- Utilidades ---------- */
const $=(s,r=stage)=>r.querySelector(s);
const $$=(s,r=stage)=>[...r.querySelectorAll(s)];
function el(html){const t=document.createElement('template');t.innerHTML=html.trim();return t.content.firstElementChild}
const rand=(a,b)=>a+Math.random()*(b-a);
const pick=a=>a[Math.random()*a.length|0];
function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a}
function place(node,x,y){node.style.left=x+'px';node.style.top=y+'px';return node}

/* ---------- Pantallas ---------- */
let leaveFns=[];let TOKEN=0;
function onLeave(f){leaveFns.push(f)}
function later(fn,ms){const t=TOKEN;const id=setTimeout(()=>{if(t===TOKEN)fn()},ms);onLeave(()=>clearTimeout(id));return id}
function wait(ms){const t=TOKEN;return new Promise((res,rej)=>setTimeout(()=>t===TOKEN?res():rej('salio'),ms))}
function loop(fn){let last=performance.now(),run=true,id;const f=now=>{if(!run)return;const dt=Math.min(.05,(now-last)/1000);last=now;if(fn(dt,now)===false)return;id=requestAnimationFrame(f)};id=requestAnimationFrame(f);const stop=()=>{run=false;cancelAnimationFrame(id)};onLeave(stop);return stop}
function go(builder,...args){
  leaveFns.forEach(f=>{try{f()}catch(e){}});leaveFns=[];TOKEN++;
  stopSpeech();closeModal();
  $$('.screen').forEach(s=>s.remove());
  const scr=el('<div class="screen"></div>');stage.prepend(scr);
  narr.classList.remove('gone');quiet(true);
  builder(scr,...args);
}

/* ---------- Sonido (Web Audio, sin archivos) ---------- */
let AC=null;
function ac(){if(!AC){try{AC=new(window.AudioContext||window.webkitAudioContext)()}catch(e){AC=null}}if(AC&&AC.state==='suspended')AC.resume().catch(()=>{});return AC}
function tone(f,{t=0,d=.2,type='sine',v=.18,to=null,attack=.012}={}){
  if(!G.sound)return;const a=ac();if(!a)return;
  const now=a.currentTime+t;const o=a.createOscillator(),g=a.createGain();
  o.type=type;o.frequency.setValueAtTime(f,now);if(to)o.frequency.exponentialRampToValueAtTime(to,now+d);
  g.gain.setValueAtTime(.0001,now);g.gain.exponentialRampToValueAtTime(v,now+attack);g.gain.exponentialRampToValueAtTime(.0001,now+d);
  o.connect(g).connect(a.destination);o.start(now);o.stop(now+d+.05);
}
function noise({t=0,d=.25,v=.08,f=900}={}){
  if(!G.sound)return;const a=ac();if(!a)return;const now=a.currentTime+t;
  const b=a.createBuffer(1,a.sampleRate*d,a.sampleRate);const ch=b.getChannelData(0);for(let i=0;i<ch.length;i++)ch[i]=Math.random()*2-1;
  const s=a.createBufferSource();s.buffer=b;const fl=a.createBiquadFilter();fl.type='bandpass';fl.frequency.value=f;fl.Q.value=.8;
  const g=a.createGain();g.gain.setValueAtTime(v,now);g.gain.exponentialRampToValueAtTime(.0001,now+d);
  s.connect(fl).connect(g).connect(a.destination);s.start(now);
}
const NOTE={C4:262,D4:294,E4:330,G4:392,A4:440,C5:523,D5:587,E5:659,G5:784,A5:880};
const SFX={
  tap:()=>tone(660,{d:.09,type:'triangle',v:.12}),
  good:()=>[523,659,784].forEach((f,i)=>tone(f,{t:i*.09,d:.28,type:'triangle',v:.15})),
  oops:()=>{tone(392,{d:.2,v:.13});tone(311,{t:.17,d:.32,v:.13})},
  pop:()=>{tone(880,{d:.1,v:.14,to:260});noise({d:.08,v:.05,f:2500})},
  softpop:()=>{tone(620,{d:.14,v:.09,to:240});tone(1760,{t:.03,d:.25,v:.03,to:2600})},
  boing:()=>tone(200,{d:.32,v:.16,to:620}),
  giggle:()=>{for(let i=0;i<5;i++)tone(760+Math.random()*260,{t:i*.075,d:.07,type:'triangle',v:.07,to:980+Math.random()*300})},
  star:i=>tone(784*Math.pow(1.26,i||0),{d:.4,type:'triangle',v:.13}),
  win:()=>[523,659,784,1047,784,1047].forEach((f,i)=>tone(f,{t:i*.12,d:i==5?.7:.22,type:'triangle',v:.14})),
  note:(f,t=0)=>{tone(f,{t,d:1.3,v:.17,attack:.004});tone(f*2,{t,d:.7,v:.05,attack:.004});tone(f*3,{t,d:.35,v:.02,attack:.004})},
  click:()=>{tone(1400,{d:.03,type:'square',v:.05});tone(700,{t:.03,d:.04,type:'square',v:.04})},
  shield:()=>{tone(440,{d:.35,v:.12,to:1320,type:'triangle'});tone(1320,{t:.25,d:.4,v:.08})},
  chomp:()=>{tone(320,{d:.07,type:'square',v:.06,to:160});tone(320,{t:.1,d:.07,type:'square',v:.06,to:160})},
  thud:()=>{tone(120,{d:.3,v:.2,to:60});noise({d:.2,v:.06,f:300})},
  whoosh:()=>noise({d:.5,v:.06,f:600}),
  unlock:()=>[659,784,988,1319].forEach((f,i)=>tone(f,{t:i*.08,d:.3,type:'triangle',v:.12}))
};

/* ---------- Voz de Don Plumas (síntesis de voz del navegador) ---------- */
let VOICE=null;
function pickVoice(){
  if(!('speechSynthesis' in window))return;
  const vs=speechSynthesis.getVoices().filter(v=>/^es(-|_|$)/i.test(v.lang));
  if(!vs.length)return;
  const pref=['es-MX','es-US','es-419','es-CO','es-AR','es-ES'];
  const score=v=>{let s=0;const i=pref.findIndex(p=>v.lang.replace('_','-').toLowerCase()===p.toLowerCase());s+=i<0?0:(10-i)*10;if(/natural|neural|online|google/i.test(v.name))s+=25;if(/paulina|sabina|dalia|jorge|elvira|helena/i.test(v.name))s+=8;return s};
  VOICE=vs.sort((a,b)=>score(b)-score(a))[0];
}
if('speechSynthesis' in window){pickVoice();speechSynthesis.onvoiceschanged=pickVoice}
let speakId=0;
function stopSpeech(){speakId++;try{speechSynthesis.cancel()}catch(e){}stage.classList.remove('talking')}
function speak(text,opt={}){
  const my=++speakId;
  return new Promise(res=>{
    let done=false;const finish=()=>{if(done)return;done=true;if(my===speakId)stage.classList.remove('talking');res()};
    stage.classList.add('talking');
    const est=900+text.length*62;
    if(!G.voice||!('speechSynthesis' in window)){setTimeout(finish,Math.min(4200,est*.6));return}
    try{
      speechSynthesis.cancel();
      const u=new SpeechSynthesisUtterance(text.replace(/[¡¿]/g,''));
      if(VOICE){u.voice=VOICE;u.lang=VOICE.lang}else u.lang='es-MX';
      u.rate=opt.rate||.95;u.pitch=opt.pitch||1.08;u.onend=finish;u.onerror=finish;
      setTimeout(()=>{if(my===speakId)speechSynthesis.speak(u)},60);
      setTimeout(finish,est*1.6+1500);
    }catch(e){setTimeout(finish,est)}
  });
}

/* ---------- Narrador en pantalla ---------- */
const narr=el(`<div id="narr" class="quiet">${owlSVG()}<div class="bubble"><span class="txt"></span></div></div>`);
let lastLine='';let quietTimer=null;
function quiet(now){clearTimeout(quietTimer);if(now)narr.classList.add('quiet');else quietTimer=setTimeout(()=>narr.classList.add('quiet'),2600)}
function say(text,{stay=false}={}){
  lastLine=text;narr.classList.remove('gone','quiet');
  narr.querySelector('.txt').textContent=text;clearTimeout(quietTimer);
  return speak(text).then(()=>{if(!stay&&lastLine===text)quiet()});
}
let lastThrottle=0;
function sayThrottled(text,ms=3200){const n=performance.now();if(n-lastThrottle<ms)return;lastThrottle=n;say(text)}
function hideNarr(){narr.classList.add('gone')}

/* ---------- Coordenadas del escenario y arrastre ---------- */
function stagePt(e){const r=stage.getBoundingClientRect();return{x:(e.clientX-r.left)/SCALE,y:(e.clientY-r.top)/SCALE}}
function rectOf(n){const r=n.getBoundingClientRect(),s=stage.getBoundingClientRect();return{x:(r.left-s.left)/SCALE,y:(r.top-s.top)/SCALE,w:r.width/SCALE,h:r.height/SCALE}}
function centerOf(n){const r=rectOf(n);return{x:r.x+r.w/2,y:r.y+r.h/2}}
function hit(p,n,pad=0){const r=rectOf(n);return p.x>=r.x-pad&&p.x<=r.x+r.w+pad&&p.y>=r.y-pad&&p.y<=r.y+r.h+pad}
function makeDraggable(node,{onDrop,onStart,onMove}={}){
  node.classList.add('drag');let sx=0,sy=0,ox=0,oy=0,id=null,on=false;
  node.addEventListener('pointerdown',e=>{
    if(node.dataset.locked)return;e.preventDefault();ac();
    if(onStart&&onStart()===false){node.classList.add('wiggle');setTimeout(()=>node.classList.remove('wiggle'),460);return}
    id=e.pointerId;try{node.setPointerCapture(id)}catch(_){}
    const p=stagePt(e);ox=parseFloat(node.style.left)||0;oy=parseFloat(node.style.top)||0;sx=p.x;sy=p.y;on=true;node.classList.add('dragging');node.classList.remove('returning');
  });
  node.addEventListener('pointermove',e=>{if(!on||e.pointerId!==id)return;const p=stagePt(e);node.style.left=(ox+p.x-sx)+'px';node.style.top=(oy+p.y-sy)+'px';onMove&&onMove(p)});
  const end=e=>{
    if(!on||e.pointerId!==id)return;on=false;node.classList.remove('dragging');
    const p=stagePt(e);const ok=onDrop?onDrop(p,{ox,oy}):false;
    if(!ok){node.classList.add('returning');node.style.left=ox+'px';node.style.top=oy+'px';setTimeout(()=>node.classList.remove('returning'),340)}
  };
  node.addEventListener('pointerup',end);node.addEventListener('pointercancel',end);
}
function tapped(node,fn){node.addEventListener('pointerdown',e=>{e.preventDefault();ac();fn(e)})}

/* ---------- Efectos ---------- */
const SPARK_SVG=`<svg viewBox="0 0 100 100">${starPath(50,50,46,'#FFE08A','#fff')}</svg>`;
function sparkle(x,y,n=10,host=stage){
  for(let i=0;i<n;i++){const s=el(`<div class="spark">${SPARK_SVG}</div>`);const a=Math.random()*Math.PI*2,d=rand(60,150);
    s.style.left=(x-13)+'px';s.style.top=(y-13)+'px';s.style.setProperty('--dx',Math.cos(a)*d+'px');s.style.setProperty('--dy',Math.sin(a)*d+'px');
    host.appendChild(s);setTimeout(()=>s.remove(),850)}
}
function floatText(x,y,t,color){const f=el(`<div class="ftext">${t}</div>`);place(f,x,y-30);if(color)f.style.color=color;stage.appendChild(f);setTimeout(()=>f.remove(),1150)}
function flash(node,cls,ms=600){node.classList.remove(cls);void node.offsetWidth;node.classList.add(cls);setTimeout(()=>node.classList.remove(cls),ms)}

function talkBubble(x,y,text,ms=2600){const b=el(`<div class="tbub">${text}</div>`);place(b,x,y);stage.appendChild(b);setTimeout(()=>b.remove(),ms);onLeave(()=>b.remove());return b}

/* ---------- Modales ---------- */
function modal(html,cls=''){closeModal();quiet(true);const m=el(`<div class="modal ${cls}"><div class="card">${html}</div></div>`);stage.appendChild(m);return m}
function closeModal(){$$('.modal').forEach(m=>m.remove())}

/* ---------- Textura de papel ---------- */
function makeGrain(){
  try{const c=document.createElement('canvas');c.width=c.height=256;const x=c.getContext('2d');const d=x.createImageData(256,256);
    for(let i=0;i<d.data.length;i+=4){const v=128+(Math.random()-.5)*160;d.data[i]=d.data[i+1]=d.data[i+2]=v;d.data[i+3]=255}
    x.putImageData(d,0,0);const g=el('<div class="grain"></div>');g.style.backgroundImage=`url(${c.toDataURL()})`;stage.appendChild(g)}catch(e){}
}
