/* ============ PANTALLAS: inicio, presentación, mapa, álbum, cabaña, final ============ */
function voice(text){lastLine=text;narr.classList.remove('gone');quiet(true);return speak(text)}
tapped(narr.querySelector('.owl'),()=>{SFX.hoot();if(!lastLine)return;if($('.modal'))voice(lastLine);else say(lastLine)});

function logoSVG(w=760){
  return `<svg viewBox="0 0 760 270" width="${w}" role="img" aria-label="Guardianes del Valle Dormilón" style="overflow:visible">
  <defs><linearGradient id="lgT" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFEFB8"/><stop offset="1" stop-color="#FFB02E"/></linearGradient>
  <path id="lgArc" d="M10 246 Q380 116 750 246" fill="none"/></defs>
  <text x="380" y="74" text-anchor="middle" font-family="Sniglet,'Baloo 2',sans-serif" font-weight="800" font-size="58" fill="#FFF4DE" stroke="#26235A" stroke-width="14" paint-order="stroke" stroke-linejoin="round" letter-spacing="3">Guardianes del</text>
  <text font-family="Sniglet,'Baloo 2',sans-serif" font-weight="800" font-size="94" fill="url(#lgT)" stroke="#26235A" stroke-width="18" paint-order="stroke" stroke-linejoin="round"><textPath href="#lgArc" startOffset="50%" text-anchor="middle">Valle Dormilón</textPath></text>
  ${starPath(58,40,20,'#FFE08A','#26235A')}${starPath(706,52,16,'#FFE08A','#26235A')}${starPath(640,18,10,'#fff')}
  </svg>`;
}

/* ---------- Pantalla de inicio ---------- */
function splash(scr){
  hideNarr();
  scr.innerHTML=`${bgValley()}
  <div class="abs" style="left:0;right:0;top:34px;display:grid;place-items:center">${logoSVG(780)}</div>
  <div class="abs float" style="left:535px;top:300px;width:220px">${lumiSVG({mood:'happy'})}</div>
  <div class="abs bob" style="left:120px;top:380px;width:200px">${owlSVG()}</div>
  <div class="abs bob" style="left:800px;top:330px;width:130px;animation-delay:-.6s">${saltarinSVG()}</div>
  <div class="abs bob" style="left:1010px;top:430px;width:130px;animation-delay:-1s">${sombraSVG()}</div>
  <div class="abs bob" style="left:1120px;top:500px;width:90px;animation-delay:-.4s">${sombraSVG()}</div>
  <div class="abs" style="left:0;right:0;top:560px;display:flex;justify-content:center"><button class="btn verde" id="bPlay" style="font-size:46px;padding:22px 64px 26px">${ICON.play} ¡Jugar!</button></div>
  <div class="abs" style="right:22px;top:20px"><button class="ibtn" id="bTeach" aria-label="Opciones para docentes">${ICON.gear}</button></div>`;
  $('#bPlay',scr).addEventListener('click',()=>{ac();try{const u=new SpeechSynthesisUtterance(' ');u.volume=0;speechSynthesis.speak(u)}catch(e){}SFX.unlock();if(!G.intro)go(introScreen);else go(mapScreen)});
  $('#bTeach',scr).addEventListener('click',()=>{ac();teacherPanel()});
}

/* ---------- Presentación de personajes ---------- */
const INTRO=[
  {who:'owl',t:'¡Hola! Soy Don Plumas, el búho sabio del Valle Dormilón. Yo te voy a acompañar en esta aventura.'},
  {who:'lumi',t:'Este es Lumi, un espíritu de nube. Cuando está sano y descansado brilla azul. Si tiene sueño o está en peligro, se pone gris.'},
  {who:'saltarin',t:'Él es Saltarín, el mejor amigo de Lumi. Es un conejito, no una nube, ¡y le encanta jugar!'},
  {who:'sombras',t:'Ellos son los Traviesos del Ruido. No son malos, pero hacen mucho ruido y dejan cosas peligrosas tiradas.'},
  {who:'todos',t:'Todos los niños y niñas tienen derecho a jugar y a descansar. Jugar nos hace felices y nos ayuda a aprender, y descansar nos da energía. ¿Me ayudas a cuidar a Lumi?'}
];
function introScreen(scr){
  hideNarr();let k=0;
  scr.innerHTML=`${bgValley()}
  <div class="abs" id="who" style="left:60px;top:150px;width:520px;height:440px;display:grid;place-items:center"></div>
  <div class="abs" style="left:610px;top:170px;width:620px">
    <div class="card" style="text-align:left;padding:30px 36px;animation:none;max-width:none"><p id="itext" style="font-size:34px;font-weight:600;margin:0;text-wrap:pretty"></p></div>
    <div class="row" style="justify-content:space-between;margin-top:34px">
      <div class="row" id="dots" style="gap:12px"></div>
      <div class="row" style="gap:16px"><button class="ibtn" id="iRep" aria-label="Escuchar otra vez">${ICON.speaker}</button><button class="btn verde" id="iNext">${ICON.next}</button></div>
    </div>
  </div>
  <div class="abs" style="right:22px;top:20px"><button class="btn papel sm" id="iSkip">Saltar</button></div>`;
  const who=$('#who',scr),txt=$('#itext',scr),dots=$('#dots',scr);
  let swap=null;
  function show(){
    clearInterval(swap);const s=INTRO[k];txt.textContent=s.t;
    dots.innerHTML=INTRO.map((_,i)=>`<span style="width:22px;height:22px;border-radius:50%;background:${i===k?'#FFC94D':'rgba(255,255,255,.5)'};display:block"></span>`).join('');
    if(s.who==='owl')who.innerHTML=`<div class="bob" style="width:330px">${owlSVG()}</div>`;
    if(s.who==='lumi'){who.innerHTML=`<div class="float" style="width:330px">${lumiSVG({mood:'happy'})}</div>`;let blue=true;swap=setInterval(()=>{blue=!blue;setLumi(who,{color:blue?AZUL:GRIS,mood:blue?'happy':'tired'})},1700);onLeave(()=>clearInterval(swap))}
    if(s.who==='saltarin')who.innerHTML=`<div class="bob" style="width:250px">${saltarinSVG()}</div>`;
    if(s.who==='sombras')who.innerHTML=`<div class="row" style="gap:0;align-items:flex-end"><div class="bob" style="width:150px">${sombraSVG()}</div><div class="bob" style="width:210px;animation-delay:-.7s">${sombraSVG()}</div><div class="bob" style="width:130px;animation-delay:-1.3s">${sombraSVG()}</div></div>`;
    if(s.who==='todos')who.innerHTML=`<div style="position:relative;width:520px;height:420px"><div class="abs bob" style="left:0;top:130px;width:230px">${owlSVG()}</div><div class="abs float" style="left:190px;top:30px;width:220px">${lumiSVG({mood:'happy'})}</div><div class="abs bob" style="left:390px;top:150px;width:130px;animation-delay:-.5s">${saltarinSVG()}</div><div class="abs bob" style="left:250px;top:300px;width:100px">${sombraSVG()}</div></div>`;
    $('#iNext',scr).innerHTML=k===INTRO.length-1?`${ICON.check} ¡Sí, vamos!`:ICON.next;
    speak(s.t).then(()=>{
      if(INTRO[k]!==s)return;
      if(s.who==='lumi')talk('lumi',who.firstElementChild,'¡Hola! ¡Soy Lumi!');
      if(s.who==='saltarin')talk('saltarin',who.firstElementChild,'¡Hola! ¿Jugamos?');
    });
  }
  $('#iNext',scr).addEventListener('click',()=>{SFX.tap();if(k<INTRO.length-1){k++;show()}else{G.intro=true;save();go(mapScreen)}});
  $('#iRep',scr).addEventListener('click',()=>speak(INTRO[k].t));
  $('#iSkip',scr).addEventListener('click',()=>{G.intro=true;save();go(mapScreen)});
  show();
}

/* ---------- Mapa del valle (menú de niveles) ---------- */
const NODES=[[250,250],[640,250],[1030,250],[1030,445],[640,445],[250,445]];
function totalStars(){return G.stars.reduce((a,b)=>a+b,0)}
const MAXSTARS=()=>LEVELS.length*3;
function mapScreen(scr){
  const pts=[[-30,250],...NODES.slice(0,3),[1180,300],[1180,395],...NODES.slice(3),[100,465],[-30,455]];
  scr.innerHTML=`${bgValley()}
  <svg class="bg" viewBox="0 0 1280 720" aria-hidden="true"><path d="${smooth(pts)}" fill="none" stroke="#FFF4DE" stroke-width="16" stroke-linecap="round" stroke-dasharray="2 30" opacity=".95"/></svg>
  <div class="topbar">
    <div style="font-family:var(--display);font-weight:800;font-size:40px;color:#FFE08A;-webkit-text-stroke:9px var(--noche);paint-order:stroke fill">Valle Dormilón</div>
    <div class="counter">${ICON.star}<span>${totalStars()} / ${MAXSTARS()}</span></div>
    <span style="flex:1"></span>
    <div><button class="ibtn" id="bAlbum" aria-label="Álbum de los Sueños">${ICON.book}</button><div class="label-under">Álbum</div></div>
    <div><button class="ibtn" id="bCabin" aria-label="Cabaña de Lumi">${ICON.cabin}</button><div class="label-under">Cabaña</div></div>
    <div><button class="ibtn ${G.sound?'':'off'}" id="bSound" aria-label="Sonido">${G.sound?ICON.speaker:ICON.mute}</button><div class="label-under">Sonido</div></div>
    <div><button class="ibtn" id="bTeach" aria-label="Opciones para docentes">${ICON.gear}</button><div class="label-under">Docente</div></div>
  </div>`;
  const last=LEVELS.length-1;const fz=G.stars.findIndex(s=>s===0);const nextIdx=fz<0?last:Math.min(fz,G.unlocked-1);
  NODES.forEach(([x,y],i)=>{
    const L=LEVELS[i];const locked=i>=G.unlocked;const isNext=!locked&&G.stars[i]===0;
    const b=el(`<button class="node ${locked?'locked':''} ${isNext?'next':''}" aria-label="Nivel ${i+1}: ${L.title}${locked?' (bloqueado)':''}">${LVICON[i]}<span class="num">${i+1}</span>${locked?`<span class="lock">${ICON.lock}</span>`:''}</button>`);
    place(b,x,y);scr.appendChild(b);
    scr.appendChild(place(el(`<div class="nname" style="font-size:20px">${L.title}</div>`),x,y+76));
    scr.appendChild(place(el(`<div class="nstars">${[0,1,2].map(k=>k<G.stars[i]?ICON.star:ICON.starOff).join('')}</div>`),x,y+110));
    b.addEventListener('click',()=>{
      ac();
      if(locked){SFX.oops();flash(b,'wiggle',460);say('Ese lugar todavía está dormido. Primero termina el nivel anterior.');return}
      SFX.tap();go(levelScreen,i);
    });
  });
  const [lx,ly]=NODES[nextIdx];
  scr.appendChild(place(el(`<div class="abs float" style="width:76px;pointer-events:none">${lumiSVG({mood:'happy'})}</div>`),lx+70,ly-40));
  if(G.done){
    const m=el(`<button class="btn" style="position:absolute;right:30px;bottom:34px">${ICON.medal} Mi medalla</button>`);scr.appendChild(m);
    m.addEventListener('click',()=>{SFX.tap();go(finalScreen)});
  }
  $('#bAlbum',scr).addEventListener('click',()=>{SFX.tap();go(albumScreen)});
  $('#bCabin',scr).addEventListener('click',()=>{SFX.tap();go(cabinScreen)});
  $('#bSound',scr).addEventListener('click',e=>{G.sound=!G.sound;save();const b=e.currentTarget;b.innerHTML=G.sound?ICON.speaker:ICON.mute;b.classList.toggle('off',!G.sound);SFX.tap()});
  $('#bTeach',scr).addEventListener('click',()=>{SFX.tap();teacherPanel()});
  const msg=G.done?'¡Completaste todo el valle! Toca tu medalla, o vuelve a jugar para ganar más estrellas.':G.unlocked===1&&G.stars[0]===0?'Este es el Valle Dormilón. Toca el lugar que brilla para empezar.':'¡Muy bien! Se abrió un nuevo lugar. Tócalo para seguir.';
  later(()=>say(msg),350);
}

/* ---------- Pantalla de un nivel ---------- */
const RIGHT_ICON={shield:ICON.shieldS,smile:ICON.smile,amigos:ICON_AMIGOS,balance:ICON_BALANCE,moonI:ICON.moonI,zzz:ICON.zzz};
function levelScreen(scr,i){
  const L=LEVELS[i];
  scr.innerHTML=`<div class="abs play" style="inset:0"></div>
  <div class="hud"><button class="ibtn" id="bHome" aria-label="Volver al mapa">${ICON.home}</button>
  <span class="chip"><b style="font-weight:800">${i+1}</b> ${L.title}</span><span class="chip derecho">${RIGHT_ICON[L.ico]}${L.right}</span><span class="grow"></span><div class="meter" id="meter" style="visibility:hidden"></div></div>`;
  const play=$('.play',scr);
  const ctx={i,L,scr,play,errors:0,done:false,
    err(msg){ctx.errors++;SFX.oops();if(msg)say(msg)},
    meter(total,icon,blue){const m=$('#meter',scr);m.style.visibility='visible';m.classList.toggle('blue',!!blue);m.innerHTML=`<span class="mi">${icon}</span><span class="segs">${'<b></b>'.repeat(total)}</span>`},
    fill(n){$$('#meter .segs b',scr).forEach((b,k)=>b.classList.toggle('on',k<n))},
    win(delay=0){if(ctx.done)return;ctx.done=true;later(()=>waitQuiet().then(ok=>{if(ok)winLevel(i,ctx.errors)}),delay)}
  };
  $('#bHome',scr).addEventListener('click',()=>{SFX.tap();go(mapScreen)});
  play.innerHTML=L.bg();
  const m=modal(`<div style="font-family:var(--display);font-size:30px;color:#7A6CFF">Nivel ${i+1}</div>
    <div class="row" style="gap:30px;flex-wrap:nowrap;margin:8px 0 6px">
      <div style="width:170px;height:170px;flex:none;display:grid;place-items:center;background:#fff;border-radius:50%;box-shadow:0 6px 0 #EADBC0">${LVICON[i].replace('class="ico"','style="width:120px;height:120px"')}</div>
      <div style="text-align:left;max-width:560px"><h2 style="font-size:54px">${L.title}</h2><span class="chip derecho" style="font-size:24px">${RIGHT_ICON[L.ico]}${L.right}</span><p style="margin-top:14px">${L.intro}</p></div>
    </div>
    <div class="row" style="margin-top:18px"><button class="btn papel sm" id="lRep">${ICON.speaker} Escuchar</button><button class="btn verde" id="lGo">${ICON.play} ¡A jugar!</button></div>`);
  later(()=>voice(L.intro),300);
  $('#lRep',m).addEventListener('click',()=>voice(L.intro));
  $('#lGo',m).addEventListener('click',()=>{ac();SFX.tap();stopSpeech();closeModal();L.build(ctx)});
}
function winLevel(i,errors){
  const L=LEVELS[i];const th=L.th||[0,2];const st=errors<=th[0]?3:errors<=th[1]?2:1;
  const LAST=LEVELS.length-1;G.stars[i]=Math.max(G.stars[i],st);G.unlocked=Math.max(G.unlocked,Math.min(LEVELS.length,i+2));
  if(!G.poses.includes(i))G.poses.push(i);if(!G.stickers.includes(i))G.stickers.push(i);if(i===LAST)G.done=true;save();
  const m=modal(`<h2>${pick(['¡Lo lograste!','¡Excelente trabajo!','¡Muy bien hecho!'])}</h2>
    <div class="stars3">${[0,1,2].map(()=>`<span class="s">${ICON.star}</span>`).join('')}</div>
    <div class="row">
      <div class="reward"><div class="pic">${poseSVG(i)}</div><b>Nueva postura</b><span>${POSES[i].name}</span></div>
      <div class="reward"><div class="pic">${STICKERS[i].svg.replace('<svg','<svg width="110" height="110"')}</div><b>Nuevo sticker</b><span>${STICKERS[i].name}</span></div>
    </div>
    <div class="lesson">${L.lesson}</div>
    <div class="row"><button class="btn papel sm" id="wMap">${ICON.home} Mapa</button><button class="btn papel sm" id="wAgain">${ICON.replay} Otra vez</button><button class="btn verde" id="wNext">${i<LAST?`Siguiente ${ICON.next}`:`${ICON.medal} ¡Mi medalla!`}</button></div>`,'win');
  SFX.win();sparkle(640,200,16);
  $$('.stars3 .s',m).forEach((s,k)=>{if(k<st)later(()=>{s.classList.add('on');SFX.star(k);const c=centerOf(s);sparkle(c.x,c.y,8)},600+k*420)});
  later(()=>voice(`¡Muy bien! Ganaste ${st} ${st===1?'estrella':'estrellas'}. ${L.lesson}`),500);
  $('#wMap',m).addEventListener('click',()=>{SFX.tap();go(mapScreen)});
  $('#wAgain',m).addEventListener('click',()=>{SFX.tap();go(levelScreen,i)});
  $('#wNext',m).addEventListener('click',()=>{SFX.tap();if(i<LAST)go(levelScreen,i+1);else go(finalScreen)});
}

/* ---------- Álbum de los Sueños ---------- */
function albumScreen(scr){
  scr.innerHTML=`${bgCabinDay()}
  <div class="hud"><button class="ibtn" id="bBack" aria-label="Volver al mapa">${ICON.back}</button><span class="chip" style="font-size:30px">${ICON.book} Álbum de los Sueños</span></div>
  <div class="abs" style="left:250px;right:250px;top:118px;display:grid;grid-template-columns:repeat(3,1fr);gap:22px 30px" id="polas"></div>`;
  const box=$('#polas',scr);
  POSES.forEach((p,i)=>{
    const has=G.poses.includes(i);
    const c=el(`<button class="card" style="position:relative;padding:12px 12px 12px;border:none;cursor:pointer;transform:rotate(${[-3,2,-1.5,3,-2,1.5][i]}deg);animation-delay:${i*.06}s;background:#fff">
      <div style="height:150px;display:grid;place-items:center;background:${has?'#DFF2FF':'#ECE6F2'};border-radius:16px;overflow:hidden">${has?poseSVG(i):`<div style="opacity:.25;filter:grayscale(1) brightness(.4);width:150px">${lumiSVG({mood:'sleep',color:'#888'})}</div>`}</div>
      <div style="font-family:var(--display);font-size:21px;margin-top:8px;line-height:1.1;min-height:46px;display:grid;place-items:center">${has?p.name:'Nivel '+(i+1)}</div>
      ${has?'':`<div style="position:absolute;left:50%;top:60px;transform:translateX(-50%);width:60px">${ICON.lock}</div>`}</button>`);
    box.appendChild(c);
    c.addEventListener('click',()=>{if(has){SFX.boing();flash(c.querySelector('.lumi').parentElement,'hop',620);voice(p.name)}else{SFX.oops();voice(`Gana el nivel ${i+1} para descubrir esta postura.`)}});
  });
  $('#bBack',scr).addEventListener('click',()=>{SFX.tap();go(mapScreen)});
  later(()=>voice(G.poses.length?'Aquí guardas las posturas de sueño de Lumi. Toca una para verla.':'Aquí se guardan las posturas de sueño de Lumi. ¡Gana niveles para llenarlo!'),300);
}

/* ---------- Cabaña de Lumi (stickers) ---------- */
function cabinScreen(scr){
  scr.innerHTML=`${bgCabinDay()}
  <div class="hud"><button class="ibtn" id="bBack" aria-label="Volver al mapa">${ICON.back}</button><span class="chip" style="font-size:30px">${ICON.cabin} La cabaña de Lumi</span></div>
  <div class="abs float" style="left:555px;top:300px;width:180px">${lumiSVG({mood:'happy'})}</div>
  <div class="abs" style="left:230px;right:60px;top:588px;height:118px;background:rgba(255,244,222,.92);border-radius:30px;box-shadow:0 7px 0 var(--papel2)"></div>`;
  const slot=i=>({x:290+i*150,y:598});
  STICKERS.forEach((s,i)=>{
    const has=G.stickers.includes(i);
    const node=el(`<div class="abs" style="width:100px;height:100px">${s.svg}</div>`);
    const p=G.placed[i]||slot(i);place(node,p.x,p.y);
    if(!has){node.style.opacity='.22';node.style.filter='grayscale(1)';scr.appendChild(node);return}
    node.style.filter='drop-shadow(0 6px 4px rgba(0,0,0,.25))';scr.appendChild(node);
    makeDraggable(node,{onStart:()=>{SFX.tap()},onDrop:(pt)=>{
      if(pt.y>580){const sl=slot(i);node.classList.add('returning');place(node,sl.x,sl.y);delete G.placed[i];save();return true}
      const x=Math.max(10,Math.min(1160,parseFloat(node.style.left))),y=Math.max(110,Math.min(470,parseFloat(node.style.top)));
      node.classList.add('returning');place(node,x,y);G.placed[i]={x,y};save();SFX.pop();sparkle(x+50,y+50,6);return true}});
  });
  $('#bBack',scr).addEventListener('click',()=>{SFX.tap();go(mapScreen)});
  later(()=>say(G.stickers.length?'Arrastra tus stickers para decorar la cabaña de Lumi.':'Gana niveles para conseguir stickers y decorar la cabaña.'),300);
}

/* ---------- Pantalla final ---------- */
function finalScreen(scr){
  const RIGHTS=[['shield','Jugar seguro'],['smile','Divertirse y aprender'],['amigos','Todos juegan'],['balance','Escuchar al cuerpo'],['moonI','Rutina para dormir'],['zzz','Dormir bien']];
  const ic=RIGHT_ICON;
  scr.innerHTML=`${bgMeadow()}<canvas class="bg" id="conf" width="1280" height="720"></canvas>
  <div class="abs" style="left:0;right:0;top:22px;text-align:center">
    <div style="font-family:var(--display);font-weight:800;font-size:58px;color:#FFE08A;-webkit-text-stroke:13px var(--noche);paint-order:stroke fill;line-height:1.05">¡Ya eres parte de los<br>Guardianes del Valle!</div>
  </div>
  <div class="abs pulse" style="left:565px;top:168px;width:150px">${ICON.medal.replace('<svg','<svg width="150" height="150"')}</div>
  <div class="abs float" style="left:250px;top:170px;width:180px">${lumiSVG({mood:'happy',acc:['gorro']})}</div>
  <div class="abs bob" style="left:400px;top:150px;width:110px;animation-delay:-.5s">${saltarinSVG()}</div>
  <div class="abs bob" style="left:840px;top:160px;width:160px">${owlSVG()}</div>
  <div class="abs" style="left:150px;right:150px;top:345px;display:flex;justify-content:center;gap:10px;flex-wrap:wrap">
    ${RIGHTS.map(([k,t])=>`<span class="chip" style="font-size:23px;padding:8px 18px 10px">${ic[k]}${t}</span>`).join('')}
  </div>
  <div class="abs" style="left:0;right:0;top:500px;display:flex;justify-content:center"><div class="counter" style="font-size:34px">${ICON.star}<span>${totalStars()} de ${MAXSTARS()} estrellas</span></div></div>
  <div class="abs" style="left:0;right:0;top:600px;display:flex;justify-content:center;gap:20px"><button class="btn papel sm" id="fMap">${ICON.home} Mapa</button><button class="btn verde sm" id="fAgain">${ICON.replay} Jugar de nuevo</button></div>`;
  hideNarr();
  SFX.win();
  const cv=$('#conf',scr),cx=cv.getContext('2d');const cols=['#FFC94D','#FF8FB1','#5EC6FF','#6CC07A','#7A6CFF','#fff'];
  const P=Array.from({length:130},()=>({x:rand(0,1280),y:rand(-720,0),vy:rand(60,150),vx:rand(-30,30),r:rand(0,6.28),vr:rand(-4,4),c:pick(cols),s:rand(8,16)}));
  loop(dt=>{cx.clearRect(0,0,1280,720);P.forEach(p=>{p.y+=p.vy*dt;p.x+=p.vx*dt;p.r+=p.vr*dt;if(p.y>740){p.y=-20;p.x=rand(0,1280)}cx.save();cx.translate(p.x,p.y);cx.rotate(p.r);cx.fillStyle=p.c;cx.fillRect(-p.s/2,-p.s/4,p.s,p.s/2);cx.restore()})});
  later(()=>speak('¡Felicidades! Cuidaste a Lumi en todo el valle. Recuerda: tienes derecho a jugar y a descansar. Juega en lugares seguros, juega con todos, escucha a tu cuerpo y duerme bien. ¡Eres un gran guardián!'),500);
  $('#fMap',scr).addEventListener('click',()=>{SFX.tap();go(mapScreen)});
  $('#fAgain',scr).addEventListener('click',()=>{SFX.tap();resetProgress();go(mapScreen)});
}

/* ---------- Panel para docentes ---------- */
function teacherPanel(){
  const m=modal(`<h2 style="font-size:38px">Opciones para docentes</h2>
    <div class="row" style="margin:6px 0 10px;gap:14px">
      <button class="btn papel sm" id="tVoice">${G.voice?ICON.speaker:ICON.mute} Voz: ${G.voice?'sí':'no'}</button>
      <button class="btn papel sm" id="tSound">${G.sound?ICON.speaker:ICON.mute} Sonidos: ${G.sound?'sí':'no'}</button>
      <button class="btn papel sm" id="tTest">${ICON.speaker} Probar voces</button>
    </div>
    <table style="font-size:17px;border-collapse:collapse;margin:0 auto 14px;text-align:left">
      <tr><th style="padding:2px 10px"></th><th style="padding:2px 10px">Nivel</th><th style="padding:2px 10px">Juego</th><th style="padding:2px 10px">Lo que aprende</th><th style="padding:2px 10px">Habilidad</th></tr>
      ${LEVELS.map((L,i)=>`<tr style="border-top:2px solid #EADBC0"><td style="padding:2px 12px;font-family:var(--display)">${i+1}</td><td style="padding:2px 10px">${L.title}</td><td style="padding:2px 10px">${L.mech}</td><td style="padding:2px 10px;color:#C2416E;font-weight:700">${L.right}</td><td style="padding:2px 10px">${L.skill}</td></tr>`).join('')}
    </table>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px 14px;justify-items:stretch">
      <button class="btn sm" id="tUnlock" style="justify-content:center">Abrir todos los niveles</button>
      <button class="btn papel sm" id="tIntro" style="justify-content:center">Ver personajes</button>
      <button class="btn papel sm" id="tReset" style="justify-content:center">Borrar progreso</button>
      <button class="btn verde sm" id="tClose" style="justify-content:center">${ICON.check} Listo</button>
    </div>`);
  $('#tVoice',m).addEventListener('click',()=>{G.voice=!G.voice;save();if(!G.voice)stopSpeech();teacherPanel()});
  $('#tSound',m).addEventListener('click',()=>{G.sound=!G.sound;save();teacherPanel()});
  $('#tTest',m).addEventListener('click',async()=>{ac();await speak('Hola, soy Don Plumas, el búho sabio.',{who:'plumas'});await speak('¡Hola! ¡Soy Lumi!',{who:'lumi'});await speak('¡Y yo soy Saltarín!',{who:'saltarin'})});
  $('#tUnlock',m).addEventListener('click',()=>{G.unlocked=LEVELS.length;save();closeModal();go(mapScreen)});
  $('#tIntro',m).addEventListener('click',()=>{closeModal();go(introScreen)});
  const r=$('#tReset',m);r.addEventListener('click',()=>{if(r.dataset.sure){resetProgress();closeModal();go(mapScreen)}else{r.dataset.sure='1';r.textContent='¿Seguro? Toca otra vez';r.style.background='#FF8FB1'}});
  $('#tClose',m).addEventListener('click',()=>{SFX.tap();closeModal()});
}
