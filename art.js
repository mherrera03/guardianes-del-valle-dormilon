/* ============ ARTE: personajes, iconos y escenarios (SVG original) ============ */
const INK='#2E2A4F';
let _uid=0; const uid=p=>(p||'u')+(++_uid);

/* PRNG con semilla para que los escenarios sean siempre iguales */
function seeded(s){return function(){s|=0;s=s+0x6D2B79F5|0;let t=Math.imul(s^s>>>15,1|s);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}

function smooth(pts){
  let d=`M${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`;
  for(let i=1;i<pts.length-1;i++){const[x,y]=pts[i],[nx,ny]=pts[i+1];d+=` Q${x.toFixed(1)} ${y.toFixed(1)} ${((x+nx)/2).toFixed(1)} ${((y+ny)/2).toFixed(1)}`}
  const l=pts[pts.length-1];return d+` L${l[0].toFixed(1)} ${l[1].toFixed(1)}`;
}
function hill(y0,amp,waves,phase,fill,cut=true,W=1280,H=720){
  const pts=[];const N=28;
  for(let i=0;i<=N;i++){const t=i/N;pts.push([t*W,y0+Math.sin(t*Math.PI*2*waves+phase)*amp+Math.sin(t*Math.PI*2*waves*2.3+phase*1.7)*amp*.35])}
  return `<path d="${smooth(pts)} L${W} ${H} L0 ${H} Z" fill="${fill}" ${cut?'filter="url(#cut)"':''}/>`;
}
function tree(x,y,s=1,c='#3E9A5C',fruit){
  let f='';if(fruit){const r=seeded(x*7+y);for(let i=0;i<6;i++)f+=`<circle cx="${(r()*60-30).toFixed(0)}" cy="${(-20-r()*45).toFixed(0)}" r="6" fill="${fruit}"/>`}
  return `<g transform="translate(${x} ${y}) scale(${s})" filter="url(#cut)"><rect x="-8" y="-14" width="16" height="44" rx="6" fill="#8A5A3B"/><circle cx="0" cy="-42" r="36" fill="${c}"/><circle cx="-26" cy="-22" r="25" fill="${c}"/><circle cx="26" cy="-22" r="25" fill="${c}"/><circle cx="-12" cy="-56" r="13" fill="#fff" opacity=".14"/>${f}</g>`;
}
function pine(x,y,s=1,c='#2F7A55'){
  return `<g transform="translate(${x} ${y}) scale(${s})" filter="url(#cut)"><rect x="-6" y="-6" width="12" height="26" fill="#7A4E33"/><path d="M0 -110 L34 -50 L18 -50 L44 -6 L-44 -6 L-18 -50 L-34 -50 Z" fill="${c}"/></g>`;
}
function bush(x,y,s=1,c='#4FA868'){
  return `<g transform="translate(${x} ${y}) scale(${s})" filter="url(#cut)"><circle cx="-24" cy="0" r="22" fill="${c}"/><circle cx="0" cy="-12" r="28" fill="${c}"/><circle cx="26" cy="0" r="22" fill="${c}"/><rect x="-46" y="0" width="92" height="20" fill="${c}"/></g>`;
}
function flower(x,y,c='#FF8FB1',s=1){
  let p='';for(let i=0;i<5;i++){const a=i*72*Math.PI/180;p+=`<circle cx="${(Math.cos(a)*9).toFixed(1)}" cy="${(Math.sin(a)*9).toFixed(1)}" r="7" fill="${c}"/>`}
  return `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 0 Q3 16 0 30" stroke="#3E9A5C" stroke-width="4" fill="none"/>${p}<circle r="6" fill="#FFC94D"/></g>`;
}
function cloudShape(x,y,s=1,o=.9){
  return `<g transform="translate(${x} ${y}) scale(${s})" opacity="${o}"><circle cx="0" cy="0" r="26" fill="#fff"/><circle cx="30" cy="-12" r="32" fill="#fff"/><circle cx="62" cy="0" r="24" fill="#fff"/><rect x="0" y="0" width="62" height="24" fill="#fff"/></g>`;
}
function starField(n,seed,y1=0,y2=360,tw=true){
  const r=seeded(seed);let s='';
  for(let i=0;i<n;i++){const x=r()*1280,y=y1+r()*(y2-y1),rad=r()*2.2+.8;s+=`<circle cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" r="${rad.toFixed(1)}" fill="#FFF6D8" ${tw&&i%3==0?`class="twinkle" style="animation-delay:${(r()*3).toFixed(1)}s"`:''}/>`}
  return s;
}
function starPath(cx,cy,r,fill,stroke){
  let d='';for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,rr=i%2?r*.48:r;d+=(i?'L':'M')+(cx+Math.cos(a)*rr).toFixed(1)+' '+(cy+Math.sin(a)*rr).toFixed(1)}
  return `<path d="${d}Z" fill="${fill}" ${stroke?`stroke="${stroke}" stroke-width="${r*.16}" stroke-linejoin="round"`:''}/>`;
}
function moon(x,y,r){
  return `<g><circle cx="${x}" cy="${y}" r="${r*1.9}" fill="#FFF1C1" opacity=".12"/><circle cx="${x}" cy="${y}" r="${r}" fill="#FFF1C1"/><circle cx="${x-r*.3}" cy="${y-r*.2}" r="${r*.18}" fill="#EBD9A0"/><circle cx="${x+r*.35}" cy="${y+r*.3}" r="${r*.12}" fill="#EBD9A0"/><circle cx="${x+r*.1}" cy="${y-r*.45}" r="${r*.08}" fill="#EBD9A0"/></g>`;
}
function cabin(x,y,s=1,lit=true){
  return `<g transform="translate(${x} ${y}) scale(${s})" filter="url(#cut)">
  <rect x="-90" y="-80" width="180" height="120" rx="14" fill="#C9875A"/>
  <path d="M-90 -50 H90 M-90 -20 H90 M-90 10 H90" stroke="#A86B43" stroke-width="5"/>
  <path d="M-118 -70 Q0 -190 118 -70 Q0 -96 -118 -70Z" fill="#E2574C"/>
  <circle cx="-50" cy="-118" r="9" fill="#fff" opacity=".9"/><circle cx="20" cy="-136" r="10" fill="#fff" opacity=".9"/><circle cx="62" cy="-104" r="8" fill="#fff" opacity=".9"/>
  <rect x="44" y="-180" width="24" height="56" fill="#8C5B3F"/>
  <path d="M-26 40 V-14 Q0 -46 26 -14 V40Z" fill="#6B3F27"/><circle cx="14" cy="10" r="4" fill="#FFC94D"/>
  <circle cx="-58" cy="-30" r="20" fill="${lit?'#FFE08A':'#3B3880'}" stroke="#6B3F27" stroke-width="6"/>
  <circle cx="58" cy="-30" r="20" fill="${lit?'#FFE08A':'#3B3880'}" stroke="#6B3F27" stroke-width="6"/>
  </g>`;
}

/* ---------- Lumi ---------- */
const CLOUD='M48 150 C18 150 8 128 14 110 C20 92 34 86 44 86 C40 58 60 38 86 42 C96 20 128 14 146 34 C170 32 186 52 182 76 C198 84 200 110 190 128 C182 144 166 150 150 150 Z';
function lumiFace(mood){
  const e={
    happy:`<ellipse cx="80" cy="100" rx="9" ry="12" fill="${INK}"/><ellipse cx="122" cy="100" rx="9" ry="12" fill="${INK}"/><circle cx="83" cy="95" r="3.6" fill="#fff"/><circle cx="125" cy="95" r="3.6" fill="#fff"/>`,
    wow:`<circle cx="80" cy="99" r="12" fill="${INK}"/><circle cx="122" cy="99" r="12" fill="${INK}"/><circle cx="84" cy="94" r="4.5" fill="#fff"/><circle cx="126" cy="94" r="4.5" fill="#fff"/>`,
    sleep:`<path d="M70 101 Q80 110 90 101" stroke="${INK}" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M112 101 Q122 110 132 101" stroke="${INK}" stroke-width="5" fill="none" stroke-linecap="round"/>`,
    tired:`<path d="M70 102 L90 98 Q89 110 80 110 Q71 110 70 102Z" fill="${INK}"/><path d="M112 98 L132 102 Q131 110 122 110 Q113 110 112 98Z" fill="${INK}"/><path d="M67 103 L92 97 M110 97 L135 103" stroke="${INK}" stroke-width="4" stroke-linecap="round"/>`,
    neutral:`<circle cx="80" cy="101" r="7.5" fill="${INK}"/><circle cx="122" cy="101" r="7.5" fill="${INK}"/><circle cx="82" cy="98" r="2.5" fill="#fff"/><circle cx="124" cy="98" r="2.5" fill="#fff"/>`,
    scared:`<ellipse cx="80" cy="102" rx="7" ry="12" fill="${INK}"/><ellipse cx="122" cy="102" rx="7" ry="12" fill="${INK}"/><circle cx="82" cy="97" r="2.6" fill="#fff"/><circle cx="124" cy="97" r="2.6" fill="#fff"/><path d="M68 86 Q76 78 90 82 M134 86 Q126 78 112 82" stroke="${INK}" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M156 66 Q164 80 156 88 Q148 80 156 66Z" fill="#7FD3FF" stroke="#fff" stroke-width="2"/>`,
    angry:`<ellipse cx="80" cy="102" rx="8" ry="9" fill="${INK}"/><ellipse cx="122" cy="102" rx="8" ry="9" fill="${INK}"/><path d="M66 86 L91 94 M136 86 L111 94" stroke="${INK}" stroke-width="5" stroke-linecap="round"/>`,
    sad:`<ellipse cx="80" cy="102" rx="8" ry="10" fill="${INK}"/><ellipse cx="122" cy="102" rx="8" ry="10" fill="${INK}"/><path d="M68 90 L89 84 M134 90 L113 84" stroke="${INK}" stroke-width="4" stroke-linecap="round"/>`
  }[mood]||'';
  const m={
    happy:`<path d="M89 117 Q101 131 113 117" stroke="${INK}" stroke-width="5" fill="#FF7E9E" stroke-linecap="round" stroke-linejoin="round"/>`,
    wow:`<ellipse cx="101" cy="124" rx="8" ry="10" fill="${INK}"/>`,
    sleep:`<ellipse cx="101" cy="122" rx="5" ry="4" fill="${INK}"/>`,
    tired:`<ellipse cx="101" cy="124" rx="6" ry="7.5" fill="${INK}"/>`,
    sad:`<path d="M90 126 Q101 116 112 126" stroke="${INK}" stroke-width="4.5" fill="none" stroke-linecap="round"/>`,
    neutral:`<path d="M93 122 H109" stroke="${INK}" stroke-width="4.5" stroke-linecap="round"/>`,
    scared:`<path d="M88 126 q4 -5 8 0 q4 5 8 0 q4 -5 8 0" stroke="${INK}" stroke-width="4" fill="none" stroke-linecap="round"/>`,
    angry:`<path d="M90 127 Q101 118 112 127" stroke="${INK}" stroke-width="5" fill="none" stroke-linecap="round"/>`
  }[mood]||'';
  return e+`<ellipse cx="64" cy="118" rx="11" ry="6.5" fill="#FF8FB1" opacity=".75"/><ellipse cx="138" cy="118" rx="11" ry="6.5" fill="#FF8FB1" opacity=".75"/>`+m;
}
const ACC={
  gorro:`<path d="M96 46 Q120 -6 176 14 Q150 26 150 50 Q122 36 96 46Z" fill="#7A6CFF"/><path d="M110 34 Q130 14 160 20" stroke="#fff" stroke-width="6" opacity=".6" fill="none"/><circle cx="178" cy="14" r="11" fill="#fff"/>`,
  peluche:`<g transform="translate(150 118)"><circle cx="-14" cy="-26" r="9" fill="#B07A4F"/><circle cx="14" cy="-26" r="9" fill="#B07A4F"/><circle cx="0" cy="-12" r="20" fill="#C68E5E"/><ellipse cx="0" cy="16" rx="24" ry="20" fill="#C68E5E"/><circle cx="-7" cy="-14" r="3" fill="${INK}"/><circle cx="7" cy="-14" r="3" fill="${INK}"/><ellipse cx="0" cy="-6" rx="6" ry="4" fill="#8A5A3B"/><ellipse cx="0" cy="16" rx="12" ry="10" fill="#E9C49B"/></g>`,
  manta:`<path d="M6 120 Q100 96 196 120 L192 156 Q100 170 10 156Z" fill="#FF9EC4"/><path d="M6 120 Q100 96 196 120" stroke="#fff" stroke-width="6" fill="none" opacity=".7"/><circle cx="50" cy="138" r="6" fill="#fff" opacity=".7"/><circle cx="100" cy="132" r="6" fill="#fff" opacity=".7"/><circle cx="150" cy="138" r="6" fill="#fff" opacity=".7"/>`,
  lazo:`<g transform="translate(70 48) rotate(-20)"><path d="M0 0 L-24 -14 L-24 14Z M0 0 L24 -14 L24 14Z" fill="#E2574C"/><circle r="7" fill="#C23A31"/></g>`,
  hoja:`<path d="M110 30 Q112 10 104 0" stroke="#2F7A48" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M106 6 Q126 -12 144 2 Q126 18 106 6Z" fill="#3E9A5C"/>`,
  libro:`<g transform="translate(100 132)"><path d="M-44 -14 Q-22 -24 0 -12 Q22 -24 44 -14 V18 Q22 8 0 20 Q-22 8 -44 18Z" fill="#7A6CFF" stroke="${INK}" stroke-width="3.5" stroke-linejoin="round"/><path d="M0 -12 V20" stroke="${INK}" stroke-width="3.5"/><path d="M-34 -6 Q-18 -12 -6 -4 M6 -4 Q18 -12 34 -6" stroke="#fff" stroke-width="3" fill="none" opacity=".7"/></g>`,
  antifaz:`<path d="M58 88 Q80 80 100 92 Q120 80 144 88 Q148 104 132 110 Q116 112 101 102 Q86 112 70 110 Q54 104 58 88Z" fill="#7A6CFF" stroke="${INK}" stroke-width="3"/><path d="M58 92 L30 84 M144 92 L172 84" stroke="#7A6CFF" stroke-width="5" stroke-linecap="round"/>${starPath(78,96,5,'#FFE08A')}${starPath(124,96,5,'#FFE08A')}`,
  estrellas:`${starPath(20,40,12,'#FFE08A')}${starPath(186,30,10,'#FFE08A')}${starPath(176,150,8,'#FFE08A')}${starPath(14,140,7,'#FFE08A')}`,
  estrella:''
};
function lumiSVG(o={}){
  const id=uid('lg');const mood=o.mood||'happy';const col=o.color||'#5EC6FF';
  const acc=(o.acc||[]).map(a=>ACC[a]||'').join('');
  const front=(o.front||[]).map(a=>ACC[a]||'').join('');
  return `<svg class="lumi ${o.cls||''}" viewBox="0 0 200 170" style="--lc:${col}" aria-hidden="true">
  <defs><radialGradient id="${id}" cx="35%" cy="28%" r="70%"><stop offset="0" stop-color="#fff" stop-opacity=".8"/><stop offset=".5" stop-color="#fff" stop-opacity="0"/></radialGradient></defs>
  <g class="lumi-body">${acc}<path class="lumi-fill" d="${CLOUD}"/><path d="${CLOUD}" fill="url(#${id})"/><g class="face">${lumiFace(mood)}</g>${front}</g></svg>`;
}
function setLumi(node,{mood,color}={}){
  const svg=node.matches('svg')?node:node.querySelector('svg.lumi');if(!svg)return;
  if(color)svg.style.setProperty('--lc',color);
  if(mood){const f=svg.querySelector('.face');if(f)f.innerHTML=lumiFace(mood)}
}
function mix(a,b,t){t=Math.max(0,Math.min(1,t));const p=h=>[1,3,5].map(i=>parseInt(h.slice(i,i+2),16));const A=p(a),B=p(b);return'#'+A.map((v,i)=>Math.round(v+(B[i]-v)*t).toString(16).padStart(2,'0')).join('')}
const GRIS='#A9B1C2',AZUL='#5EC6FF';
const lumiColor=t=>mix(GRIS,AZUL,t);

/* ---------- Don Plumas ---------- */
function owlSVG(cls=''){
  return `<svg class="owl ${cls}" viewBox="0 0 200 220" aria-hidden="true">
  <path d="M80 200 l-10 14 M80 200 l0 16 M80 200 l10 14 M120 200 l-10 14 M120 200 l0 16 M120 200 l10 14" stroke="#F2A23A" stroke-width="7" stroke-linecap="round"/>
  <path d="M38 66 L26 14 L78 46Z M162 66 L174 14 L122 46Z" fill="#9A6A43"/>
  <path class="wing-l" d="M30 112 Q2 158 34 200 Q52 160 46 112Z" fill="#7C5232"/>
  <path class="wing-r" d="M170 112 Q198 158 166 200 Q148 160 154 112Z" fill="#7C5232"/>
  <ellipse cx="100" cy="124" rx="80" ry="88" fill="#9A6A43"/>
  <ellipse cx="100" cy="160" rx="50" ry="48" fill="#F1D7AE"/>
  <path d="M74 150 q6 7 12 0 q6 7 12 0 q6 7 12 0 q6 7 12 0 M80 170 q6 7 12 0 q6 7 12 0 q6 7 12 0 M86 190 q7 7 14 0 q7 7 14 0" stroke="#D9B583" stroke-width="3.5" fill="none" stroke-linecap="round"/>
  <path d="M100 138 L80 126 L80 150Z M100 138 L120 126 L120 150Z" fill="#3E9A5C"/><circle cx="100" cy="138" r="7" fill="#2F7A48"/>
  <circle cx="72" cy="90" r="33" fill="#C99B6D"/><circle cx="128" cy="90" r="33" fill="#C99B6D"/>
  <circle cx="72" cy="90" r="24" fill="#fff"/><circle cx="128" cy="90" r="24" fill="#fff"/>
  <circle cx="76" cy="93" r="12" fill="${INK}"/><circle cx="124" cy="93" r="12" fill="${INK}"/>
  <circle cx="80" cy="88" r="4.5" fill="#fff"/><circle cx="128" cy="88" r="4.5" fill="#fff"/>
  <ellipse class="lid" cx="72" cy="90" rx="26" ry="26" fill="#C99B6D"/><ellipse class="lid" cx="128" cy="90" rx="26" ry="26" fill="#C99B6D"/>
  <circle cx="72" cy="90" r="28" fill="none" stroke="#E0A93B" stroke-width="5.5"/><circle cx="128" cy="90" r="28" fill="none" stroke="#E0A93B" stroke-width="5.5"/>
  <path d="M98 88 Q100 82 102 88" stroke="#E0A93B" stroke-width="5" fill="none"/>
  <path d="M52 54 Q70 46 88 54 M112 54 Q130 46 148 54" stroke="#F1D7AE" stroke-width="6" fill="none" stroke-linecap="round"/>
  <path class="beak-low" d="M92 114 L108 114 L100 132Z" fill="#D9822B"/>
  <path d="M86 106 L114 106 L100 126Z" fill="#F2A23A"/>
  </svg>`;
}

/* ---------- Saltarín: conejito original del valle ---------- */
function saltarinSVG(o={}){
  const mood=o.mood||'happy';
  const eyes=mood==='sad'
    ?`<ellipse cx="62" cy="104" rx="8" ry="9" fill="${INK}"/><ellipse cx="98" cy="104" rx="8" ry="9" fill="${INK}"/><path d="M50 90 L70 86 M110 90 L90 86" stroke="${INK}" stroke-width="3.5" stroke-linecap="round"/>`
    :`<ellipse cx="62" cy="102" rx="9" ry="11" fill="${INK}"/><ellipse cx="98" cy="102" rx="9" ry="11" fill="${INK}"/><circle cx="65" cy="97" r="3.5" fill="#fff"/><circle cx="101" cy="97" r="3.5" fill="#fff"/><circle cx="59" cy="106" r="1.8" fill="#fff"/><circle cx="95" cy="106" r="1.8" fill="#fff"/>`;
  const mouth=mood==='sad'?`<path d="M72 128 Q80 122 88 128" stroke="${INK}" stroke-width="3.5" fill="none" stroke-linecap="round"/>`
    :`<path d="M72 122 Q76 128 80 122 Q84 128 88 122" stroke="${INK}" stroke-width="3.5" fill="none" stroke-linecap="round"/>`;
  return `<svg class="saltarin ${o.cls||''}" viewBox="0 0 160 230" aria-hidden="true" style="overflow:visible">
  <g transform="rotate(-9 58 60)"><ellipse cx="58" cy="40" rx="15" ry="42" fill="#F7B88F"/><ellipse cx="58" cy="42" rx="7" ry="31" fill="#FFE3CF"/></g>
  <g transform="rotate(9 102 60)"><ellipse cx="102" cy="40" rx="15" ry="42" fill="#F7B88F"/><ellipse cx="102" cy="42" rx="7" ry="31" fill="#FFE3CF"/></g>
  <rect x="26" y="150" width="20" height="46" rx="10" fill="#4FA868"/><rect x="114" y="150" width="20" height="46" rx="10" fill="#4FA868"/>
  <ellipse cx="80" cy="182" rx="40" ry="40" fill="#F7B88F"/><ellipse cx="80" cy="190" rx="25" ry="26" fill="#FFE3CF"/>
  <path d="M52 150 L62 210 M108 150 L98 210" stroke="#3E9A5C" stroke-width="7" stroke-linecap="round"/>
  <ellipse cx="60" cy="222" rx="18" ry="9" fill="#F7B88F"/><ellipse cx="100" cy="222" rx="18" ry="9" fill="#F7B88F"/>
  <ellipse cx="38" cy="186" rx="10" ry="15" fill="#F7B88F" transform="rotate(20 38 186)"/><ellipse cx="122" cy="186" rx="10" ry="15" fill="#F7B88F" transform="rotate(-20 122 186)"/>
  <circle cx="80" cy="106" r="50" fill="#F7B88F"/>
  ${eyes}
  <path d="M75 113 Q80 110 85 113 Q82 119 80 119 Q78 119 75 113Z" fill="#E2779F"/>${mouth}
  <ellipse cx="46" cy="120" rx="10" ry="6" fill="#FF8FB1" opacity=".6"/><ellipse cx="114" cy="120" rx="10" ry="6" fill="#FF8FB1" opacity=".6"/>
  <g fill="#C98A62"><circle cx="40" cy="113" r="1.8"/><circle cx="47" cy="110" r="1.8"/><circle cx="45" cy="117" r="1.8"/><circle cx="120" cy="113" r="1.8"/><circle cx="113" cy="110" r="1.8"/><circle cx="115" cy="117" r="1.8"/></g>
  ${o.acc==='lentes'?`<circle cx="62" cy="102" r="15" fill="none" stroke="${INK}" stroke-width="3.5"/><circle cx="98" cy="102" r="15" fill="none" stroke="${INK}" stroke-width="3.5"/><path d="M77 100 H83" stroke="${INK}" stroke-width="3.5"/>`:''}
  </svg>`;
}

/* ---------- Traviesos del Ruido (Sombras) ---------- */
function sombraSVG(cls='',extra=''){
  return `<svg class="sombra ${cls}" viewBox="0 0 120 120" aria-hidden="true">
  <path d="M44 26 L38 6 L56 20Z M76 26 L82 6 L64 20Z" fill="#5B4B8A"/>
  <path d="M18 70 Q18 22 60 20 Q102 22 102 70 L102 104 Q94 94 86 104 Q78 94 70 104 Q62 94 54 104 Q46 94 38 104 Q30 94 18 104Z" fill="#5B4B8A"/>
  <ellipse cx="46" cy="58" rx="11" ry="13" fill="#fff"/><ellipse cx="74" cy="58" rx="11" ry="13" fill="#fff"/>
  <circle cx="49" cy="61" r="5.5" fill="${INK}"/><circle cx="71" cy="61" r="5.5" fill="${INK}"/>
  <path d="M42 78 Q60 92 78 78" stroke="#fff" stroke-width="4.5" fill="none" stroke-linecap="round"/><rect x="55" y="82" width="7" height="7" rx="2" fill="#fff"/>
  <ellipse cx="34" cy="74" rx="6" ry="4" fill="#8A78C4"/><ellipse cx="86" cy="74" rx="6" ry="4" fill="#8A78C4"/>${extra}</svg>`;
}

/* ---------- Iconos de interfaz ---------- */
const ICON={
  star:`<svg viewBox="0 0 100 100">${starPath(50,52,44,'#FFC94D','#DE8F17')}</svg>`,
  starOff:`<svg viewBox="0 0 100 100">${starPath(50,52,44,'#E8DCC6','#C9B793')}</svg>`,
  home:`<svg viewBox="0 0 64 64"><path d="M8 32 L32 10 L56 32" stroke="${INK}" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 30 V54 H49 V30" fill="#FF8FB1" stroke="${INK}" stroke-width="6" stroke-linejoin="round"/><rect x="27" y="38" width="10" height="16" fill="${INK}"/></svg>`,
  speaker:`<svg viewBox="0 0 64 64"><path d="M10 24 H22 L36 12 V52 L22 40 H10Z" fill="${INK}"/><path d="M44 22 Q52 32 44 42 M50 14 Q64 32 50 50" stroke="${INK}" stroke-width="5" fill="none" stroke-linecap="round"/></svg>`,
  mute:`<svg viewBox="0 0 64 64"><path d="M10 24 H22 L36 12 V52 L22 40 H10Z" fill="${INK}"/><path d="M44 24 L58 40 M58 24 L44 40" stroke="#E2574C" stroke-width="6" stroke-linecap="round"/></svg>`,
  book:`<svg viewBox="0 0 64 64"><path d="M6 14 Q20 8 32 16 Q44 8 58 14 V52 Q44 46 32 54 Q20 46 6 52Z" fill="#7A6CFF" stroke="${INK}" stroke-width="5" stroke-linejoin="round"/><path d="M32 16 V54" stroke="${INK}" stroke-width="5"/>${starPath(19,31,7,'#FFC94D')}<circle cx="45" cy="31" r="6" fill="#fff"/></svg>`,
  cabin:`<svg viewBox="0 0 64 64"><path d="M6 30 Q32 -2 58 30Z" fill="#E2574C" stroke="${INK}" stroke-width="5" stroke-linejoin="round"/><rect x="13" y="28" width="38" height="28" rx="4" fill="#C9875A" stroke="${INK}" stroke-width="5"/><path d="M27 56 V42 Q32 36 37 42 V56" fill="${INK}"/></svg>`,
  gear:`<svg viewBox="0 0 64 64"><g fill="${INK}">${[0,45,90,135].map(a=>`<rect x="27" y="4" width="10" height="56" rx="3" transform="rotate(${a} 32 32)"/>`).join('')}</g><circle cx="32" cy="32" r="17" fill="${INK}"/><circle cx="32" cy="32" r="7" fill="#FFF4DE"/></svg>`,
  play:`<svg viewBox="0 0 64 64"><path d="M18 10 L54 32 L18 54Z" fill="${INK}" stroke="${INK}" stroke-width="6" stroke-linejoin="round"/></svg>`,
  next:`<svg viewBox="0 0 64 64"><path d="M10 32 H50 M34 14 L52 32 L34 50" stroke="${INK}" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  back:`<svg viewBox="0 0 64 64"><path d="M54 32 H14 M30 14 L12 32 L30 50" stroke="${INK}" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  replay:`<svg viewBox="0 0 64 64"><path d="M50 32 A18 18 0 1 1 40 16" stroke="${INK}" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M34 6 L46 16 L34 26Z" fill="${INK}"/></svg>`,
  lock:`<svg viewBox="0 0 64 64"><path d="M20 30 V20 Q20 8 32 8 Q44 8 44 20 V30" stroke="#6E6585" stroke-width="7" fill="none"/><rect x="12" y="28" width="40" height="30" rx="8" fill="#6E6585"/><circle cx="32" cy="42" r="5" fill="#CFC8DA"/></svg>`,
  heart:`<svg viewBox="0 0 64 64"><path d="M32 56 C8 40 4 26 12 16 C20 6 30 12 32 20 C34 12 44 6 52 16 C60 26 56 40 32 56Z" fill="#E2574C"/></svg>`,
  apple:`<svg viewBox="0 0 64 64"><path d="M32 18 C20 10 6 18 10 36 C13 50 24 58 32 54 C40 58 51 50 54 36 C58 18 44 10 32 18Z" fill="#E2574C"/><path d="M32 18 Q32 8 38 4" stroke="#7A4E33" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M34 12 Q44 4 50 12 Q42 18 34 12Z" fill="#3E9A5C"/></svg>`,
  smile:`<svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="26" fill="#FFC94D"/><circle cx="23" cy="27" r="4" fill="${INK}"/><circle cx="41" cy="27" r="4" fill="${INK}"/><path d="M20 37 Q32 50 44 37" stroke="${INK}" stroke-width="4.5" fill="none" stroke-linecap="round"/></svg>`,
  moonI:`<svg viewBox="0 0 64 64"><path d="M40 8 A26 26 0 1 0 56 44 A20 20 0 1 1 40 8Z" fill="#FFE08A"/></svg>`,
  sun:`<svg viewBox="0 0 64 64"><g stroke="#FFB02E" stroke-width="5" stroke-linecap="round">${[0,45,90,135,180,225,270,315].map(a=>`<path d="M32 4 V12" transform="rotate(${a} 32 32)"/>`).join('')}</g><circle cx="32" cy="32" r="15" fill="#FFC94D"/></svg>`,
  shieldS:`<svg viewBox="0 0 64 64"><path d="M32 6 L54 14 V30 Q54 48 32 58 Q10 48 10 30 V14Z" fill="#5EC6FF" stroke="${INK}" stroke-width="4"/><path d="M32 44 C20 36 18 28 22 24 C26 20 31 22 32 26 C33 22 38 20 42 24 C46 28 44 36 32 44Z" fill="#fff"/></svg>`,
  medal:`<svg viewBox="0 0 64 64"><path d="M20 4 L32 26 L44 4" fill="none" stroke="#E2574C" stroke-width="9"/><circle cx="32" cy="40" r="20" fill="#FFC94D" stroke="#DE8F17" stroke-width="4"/>${starPath(32,41,10,'#fff')}</svg>`,
  check:`<svg viewBox="0 0 64 64"><path d="M12 34 L26 48 L52 16" stroke="${INK}" stroke-width="9" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  zzz:`<svg viewBox="0 0 64 64"><text x="8" y="50" font-family="Sniglet,sans-serif" font-weight="800" font-size="40" fill="#7A6CFF">Z</text><text x="34" y="30" font-family="Sniglet,sans-serif" font-weight="800" font-size="26" fill="#7A6CFF">z</text></svg>`,
  rotate:`<svg viewBox="0 0 64 64"><rect x="18" y="6" width="28" height="48" rx="6" fill="none" stroke="#fff" stroke-width="5"/><path d="M8 40 Q6 58 26 60" stroke="#FFC94D" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M22 54 L28 60 L22 64" stroke="#FFC94D" stroke-width="4" fill="none"/></svg>`
};

/* Iconos de nivel (mapa) */
const LVICON=[
  `<svg viewBox="0 0 100 100" class="ico"><path d="M50 8 L84 20 V46 Q84 74 50 90 Q16 74 16 46 V20Z" fill="#5EC6FF" stroke="${INK}" stroke-width="5"/><path d="M50 68 C30 55 27 42 34 36 C40 30 48 33 50 40 C52 33 60 30 66 36 C73 42 70 55 50 68Z" fill="#fff"/></svg>`,
  `<svg viewBox="0 0 100 100" class="ico"><path d="M18 50 H82 L74 86 H26Z" fill="#C9875A" stroke="${INK}" stroke-width="5" stroke-linejoin="round"/><path d="M30 50 Q50 18 70 50" stroke="${INK}" stroke-width="5" fill="none"/><circle cx="40" cy="44" r="12" fill="#E2574C"/><circle cx="60" cy="44" r="11" fill="#FFC94D"/><path d="M26 62 H74 M28 74 H72" stroke="#A86B43" stroke-width="4"/></svg>`,
  `<svg viewBox="0 0 100 100" class="ico"><path d="M14 90 L26 14 M86 90 L74 14 M20 16 H80" stroke="#E2574C" stroke-width="7" stroke-linecap="round"/><path d="M40 16 V60 M60 16 V60" stroke="${INK}" stroke-width="4"/><rect x="34" y="58" width="32" height="10" rx="4" fill="#FFC94D" stroke="${INK}" stroke-width="3"/></svg>`,
  `<svg viewBox="0 0 100 100" class="ico"><path d="M62 10 A40 40 0 1 0 90 66 A32 32 0 1 1 62 10Z" fill="#FFE08A" stroke="#DE8F17" stroke-width="4"/>${starPath(30,30,10,'#FFC94D')}${starPath(22,62,7,'#FFC94D')}</svg>`,
  `<svg viewBox="0 0 200 170" class="ico" style="--lc:#8EC9F0"><path d="${CLOUD}" fill="#8EC9F0"/>${lumiFace('sleep')}${ACC.gorro}</svg>`
];

/* Iconos de los niveles nuevos: escuela, amigos, voz */
LVICON.splice(2,0,`<svg viewBox="0 0 100 100" class="ico"><path d="M12 30 Q30 22 50 32 Q70 22 88 30 V80 Q70 72 50 82 Q30 72 12 80Z" fill="#7A6CFF" stroke="${INK}" stroke-width="5" stroke-linejoin="round"/><path d="M50 32 V82" stroke="${INK}" stroke-width="5"/><path d="M62 70 L84 14 L92 18 L70 74Z" fill="#FFC94D" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/><path d="M62 70 L64 82 L70 74" fill="#2E2A4F"/></svg>`);
LVICON.splice(4,0,
 `<svg viewBox="0 0 100 100" class="ico"><circle cx="30" cy="42" r="18" fill="#5EC6FF"/><circle cx="70" cy="42" r="18" fill="#F7B88F"/><path d="M12 84 Q14 62 30 62 Q46 62 48 84Z" fill="#5EC6FF"/><path d="M52 84 Q54 62 70 62 Q86 62 88 84Z" fill="#F7B88F"/><path d="M50 40 C40 32 38 26 42 22 C45 19 49 20 50 24 C51 20 55 19 58 22 C62 26 60 32 50 40Z" fill="#E2574C"/><path d="M40 74 Q50 66 60 74" stroke="${INK}" stroke-width="5" fill="none" stroke-linecap="round"/></svg>`,
 `<svg viewBox="0 0 100 100" class="ico"><path d="M14 22 H86 Q92 22 92 28 V62 Q92 68 86 68 H44 L26 84 L30 68 H14 Q8 68 8 62 V28 Q8 22 14 22Z" fill="#FFC94D" stroke="${INK}" stroke-width="5" stroke-linejoin="round"/><circle cx="32" cy="45" r="6" fill="${INK}"/><circle cx="50" cy="45" r="6" fill="${INK}"/><circle cx="68" cy="45" r="6" fill="${INK}"/></svg>`);

/* Stickers para la cabaña */
const STICKERS=[
  {name:'Flor del jardín',svg:`<svg viewBox="0 0 100 100"><g stroke="#fff" stroke-width="10" paint-order="stroke">${[0,72,144,216,288].map(a=>`<circle cx="${50+Math.cos(a*Math.PI/180)*20}" cy="${50+Math.sin(a*Math.PI/180)*20}" r="17" fill="#FF8FB1"/>`).join('')}</g>${[0,72,144,216,288].map(a=>`<circle cx="${50+Math.cos(a*Math.PI/180)*20}" cy="${50+Math.sin(a*Math.PI/180)*20}" r="17" fill="#FF8FB1"/>`).join('')}<circle cx="50" cy="50" r="13" fill="#FFC94D"/><circle cx="46" cy="47" r="2.5" fill="${INK}"/><circle cx="54" cy="47" r="2.5" fill="${INK}"/></svg>`},
  {name:'Manzana feliz',svg:`<svg viewBox="0 0 100 100"><path d="M50 26 C32 14 10 26 16 54 C20 74 38 88 50 82 C62 88 80 74 84 54 C90 26 68 14 50 26Z" fill="#E2574C" stroke="#fff" stroke-width="7"/><path d="M52 18 Q62 4 74 14 Q62 24 52 18Z" fill="#3E9A5C"/><circle cx="40" cy="50" r="4" fill="${INK}"/><circle cx="60" cy="50" r="4" fill="${INK}"/><path d="M40 62 Q50 72 60 62" stroke="${INK}" stroke-width="4" fill="none" stroke-linecap="round"/></svg>`},
  {name:'Cometa de colores',svg:`<svg viewBox="0 0 100 100"><path d="M50 6 L80 40 L50 74 L20 40Z" fill="#FFC94D" stroke="#fff" stroke-width="7" stroke-linejoin="round"/><path d="M50 6 L50 74 M20 40 L80 40" stroke="#E2574C" stroke-width="5"/><path d="M50 74 Q40 84 52 90 Q62 96 50 100" stroke="#5EC6FF" stroke-width="5" fill="none"/></svg>`},
  {name:'Luna dormilona',svg:`<svg viewBox="0 0 100 100"><path d="M60 10 A40 40 0 1 0 90 66 A32 32 0 1 1 60 10Z" fill="#FFE08A" stroke="#fff" stroke-width="7" stroke-linejoin="round"/><path d="M34 52 Q40 58 46 52" stroke="${INK}" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M60 8 Q74 -2 86 10 L70 22Z" fill="#7A6CFF"/></svg>`},
  {name:'Sol del amanecer',svg:`<svg viewBox="0 0 100 100"><g stroke="#FFB02E" stroke-width="7" stroke-linecap="round">${[0,45,90,135,180,225,270,315].map(a=>`<path d="M50 6 V18" transform="rotate(${a} 50 50)"/>`).join('')}</g><circle cx="50" cy="50" r="26" fill="#FFC94D" stroke="#fff" stroke-width="7"/><circle cx="42" cy="46" r="3.5" fill="${INK}"/><circle cx="58" cy="46" r="3.5" fill="${INK}"/><path d="M40 56 Q50 66 60 56" stroke="${INK}" stroke-width="4" fill="none" stroke-linecap="round"/></svg>`}
];

STICKERS.splice(2,0,{name:'Libro mágico',svg:`<svg viewBox="0 0 100 100"><path d="M10 26 Q30 16 50 28 Q70 16 90 26 V80 Q70 70 50 82 Q30 70 10 80Z" fill="#7A6CFF" stroke="#fff" stroke-width="7" stroke-linejoin="round"/><path d="M50 28 V82" stroke="#fff" stroke-width="5"/>${starPath(30,50,10,'#FFE08A')}${starPath(70,50,10,'#FFE08A')}</svg>`});
STICKERS.splice(4,0,
 {name:'Corazón de amigos',svg:`<svg viewBox="0 0 100 100"><path d="M50 88 C14 64 6 44 18 30 C30 16 46 22 50 36 C54 22 70 16 82 30 C94 44 86 64 50 88Z" fill="#FF8FB1" stroke="#fff" stroke-width="7"/><path d="M28 50 Q50 34 72 50" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round"/><circle cx="36" cy="44" r="4" fill="${INK}"/><circle cx="64" cy="44" r="4" fill="${INK}"/></svg>`},
 {name:'Globito de palabras',svg:`<svg viewBox="0 0 100 100"><path d="M14 18 H86 Q94 18 94 26 V62 Q94 70 86 70 H46 L26 88 L30 70 H14 Q6 70 6 62 V26 Q6 18 14 18Z" fill="#5EC6FF" stroke="#fff" stroke-width="7" stroke-linejoin="round"/><path d="M32 46 Q50 60 68 46" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round"/></svg>`});

/* Posturas de sueño para el Álbum */
const POSES=[
  {name:'Boca arriba',o:{mood:'sleep',color:'#8EC9F0'},style:'transform:rotate(-14deg)'},
  {name:'Abrazando su peluche',o:{mood:'sleep',color:'#8EC9F0',front:['peluche']},style:''},
  {name:'Con su libro de cuentos',o:{mood:'sleep',color:'#8EC9F0',front:['libro']},style:''},
  {name:'Flotando en el aire',o:{mood:'sleep',color:'#9AD7FF',cls:'float'},style:''},
  {name:'Con antifaz de dormir',o:{mood:'sleep',color:'#8EC9F0',front:['antifaz']},style:''},
  {name:'Hecho bolita',o:{mood:'sleep',color:'#8EC9F0',front:['manta']},style:'transform:scale(.88,.78) translateY(16px)'},
  {name:'Con gorrito de dormir',o:{mood:'sleep',color:'#8EC9F0',acc:['gorro']},style:''},
  {name:'Soñando con estrellas',o:{mood:'sleep',color:'#9AD7FF',acc:['estrellas']},style:''}
];
function poseSVG(i){const p=POSES[i];return `<div style="width:150px;${p.style}">${lumiSVG(p.o)}</div>`}

/* ---------- Escenarios ---------- */
function bgValley(){
  return `<svg class="bg" viewBox="0 0 1280 720" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
  <rect width="1280" height="720" fill="url(#skyDusk)"/>${starField(60,7,0,260)}${moon(1090,110,48)}
  ${cloudShape(160,120,1.1,.5)}${cloudShape(760,80,.9,.4)}
  ${hill(300,34,1.1,.6,'#9A8FE0')}${hill(372,26,1.7,2.2,'#86C9A0')}
  ${pine(1000,370,.9,'#3D8A63')}${pine(1050,380,.7,'#3D8A63')}${pine(140,372,.8,'#3D8A63')}
  ${hill(440,22,2.1,1.1,'#62B97C')}
  <path d="M-20 520 Q240 470 420 540 T820 520 T1300 560 L1300 600 Q1000 580 820 560 T420 580 T-20 560Z" fill="#7FCBF0" filter="url(#cut)"/>
  ${hill(590,18,1.5,3.1,'#4DA766')}
  ${tree(70,560,1.1,'#2F8A55')}${tree(1210,540,1.2,'#2F8A55')}${tree(330,610,.8,'#3E9A5C')}${tree(1000,640,.9,'#3E9A5C')}
  ${bush(560,650,1,'#3E9A5C')}${bush(780,690,1.1,'#3E9A5C')}
  ${flower(240,660,'#FF8FB1')}${flower(470,690,'#FFC94D')}${flower(900,670,'#FF8FB1')}${flower(1130,690,'#fff')}
  </svg>`;
}
function bgGarden(){
  return `<svg class="bg" viewBox="0 0 1280 720" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
  <rect width="1280" height="720" fill="url(#skyDay)"/>
  <circle cx="150" cy="110" r="56" fill="#FFE08A"/><circle cx="150" cy="110" r="80" fill="#FFE08A" opacity=".25"/>
  ${cloudShape(400,110,1,.95)}${cloudShape(820,70,1.2,.9)}
  ${hill(290,30,1.2,.3,'#A8DDB0')}${hill(360,22,1.8,1.4,'#86CF8A')}
  ${pine(620,350,.7,'#4FA868')}${pine(680,356,.55,'#4FA868')}
  <rect x="0" y="380" width="1280" height="340" fill="#7CCB6A"/>
  <path d="M-10 500 C200 470 300 600 520 560 S820 420 960 430 S1080 420 1100 420 L1100 470 C1000 470 900 470 820 500 S560 640 380 640 S120 560 -10 560Z" fill="#F3DDB0" filter="url(#cut)"/>
  ${cabin(1110,400,1.15,true)}
  <g stroke="#B9824F" stroke-width="10" stroke-linecap="round">${[0,1,2,3,4,5,6].map(i=>`<path d="M${40+i*60} 400 V440"/>`).join('')}<path d="M30 412 H420"/></g>
  ${bush(1210,560,1.1,'#4FA868')}${tree(40,700,1.2,'#3E9A5C')}
  ${flower(80,470,'#FF8FB1')}${flower(260,690,'#FFC94D')}${flower(980,690,'#FF8FB1')}${flower(1240,640,'#fff')}${flower(820,700,'#FFC94D')}
  </svg>`;
}
function bgOrchard(){
  return `<svg class="bg" viewBox="0 0 1280 720" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
  <rect width="1280" height="720" fill="url(#skyDay)"/>
  ${cloudShape(220,90,1,.9)}${cloudShape(940,120,1.1,.85)}
  ${hill(330,30,1.3,1,'#A8DDB0')}
  ${tree(120,420,1.4,'#3E9A5C','#E2574C')}${tree(1160,410,1.5,'#3E9A5C','#FFB02E')}${tree(330,400,1,'#4FA868','#E2574C')}${tree(950,395,1.05,'#4FA868','#FF8FB1')}
  ${hill(470,16,1.6,2.4,'#7CCB6A')}
  <rect x="0" y="600" width="1280" height="120" fill="#62B05A"/>
  ${flower(200,640,'#FF8FB1')}${flower(520,660,'#FFC94D')}${flower(860,650,'#fff')}${flower(1100,670,'#FF8FB1')}
  </svg>`;
}
function bgMeadow(){
  return `<svg class="bg" viewBox="0 0 1280 720" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
  <rect width="1280" height="720" fill="url(#skyDay)"/>
  <circle cx="1130" cy="110" r="54" fill="#FFE08A"/>
  ${cloudShape(160,100,1,.9)}${cloudShape(620,70,1.3,.9)}
  ${hill(330,28,1.4,.9,'#A8DDB0')}${hill(420,20,2,2.1,'#86CF8A')}
  ${tree(90,470,1.2,'#3E9A5C')}${tree(1190,480,1.3,'#3E9A5C')}
  <rect x="0" y="470" width="1280" height="250" fill="#7CCB6A"/>
  <ellipse cx="640" cy="560" rx="460" ry="60" fill="#6BBE5B"/>
  ${flower(240,650,'#FF8FB1')}${flower(400,690,'#FFC94D')}${flower(900,680,'#FF8FB1')}${flower(1060,640,'#fff')}${flower(720,700,'#FFC94D')}
  </svg>`;
}
/* Imagen del parque para el rompecabezas (480x480) */
function parkSymbol(){
  return `<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
  <linearGradient id="parkSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7CCBFF"/><stop offset="1" stop-color="#CDEFFF"/></linearGradient>
  <symbol id="park" viewBox="0 0 480 480">
  <rect width="480" height="480" fill="url(#parkSky)"/>
  <g transform="translate(78 78)"><g stroke="#FFB02E" stroke-width="7" stroke-linecap="round">${[0,45,90,135,180,225,270,315].map(a=>`<path d="M0 -62 V-48" transform="rotate(${a})"/>`).join('')}</g><circle r="40" fill="#FFC94D"/><circle cx="-13" cy="-6" r="5" fill="${INK}"/><circle cx="13" cy="-6" r="5" fill="${INK}"/><path d="M-15 12 Q0 26 15 12" stroke="${INK}" stroke-width="5" fill="none" stroke-linecap="round"/></g>
  <g transform="translate(240 60)"><path d="M0 -40 L30 0 L0 40 L-30 0Z" fill="#E2574C"/><path d="M0 -40 V40 M-30 0 H30" stroke="#fff" stroke-width="4"/><path d="M0 40 Q-14 60 4 74 Q20 90 2 110" stroke="#7A6CFF" stroke-width="4" fill="none"/><path d="M-6 66 l-8 -6 l2 10z M6 92 l8 -6 l-2 10z" fill="#FFC94D"/></g>
  ${cloudShape(340,70,.9,1)}<path d="M380 130 q8 -8 16 0 q8 -8 16 0" stroke="${INK}" stroke-width="4" fill="none"/>
  <rect y="300" width="480" height="180" fill="#7CCB6A"/>
  <g transform="translate(470 260)"><rect x="-8" y="0" width="16" height="60" fill="#8A5A3B"/><circle cx="0" cy="-30" r="58" fill="#3E9A5C"/><circle cx="-30" cy="-80" r="30" fill="#4FA868"/></g>
  <g transform="translate(60 240)"><circle cx="0" cy="0" r="56" fill="#4FA868"/><circle cx="34" cy="-30" r="34" fill="#62B97C"/><rect x="-8" y="40" width="16" height="66" fill="#8A5A3B"/><circle cx="-18" cy="-10" r="7" fill="#E2574C"/><circle cx="16" cy="12" r="7" fill="#E2574C"/></g>
  <g><path d="M140 330 V190 M190 330 V190" stroke="#5B4B8A" stroke-width="8"/>${[0,1,2,3,4].map(i=>`<path d="M140 ${210+i*26} H190" stroke="#5B4B8A" stroke-width="6"/>`).join('')}<rect x="130" y="176" width="70" height="20" rx="8" fill="#FFC94D"/><path d="M196 186 Q260 200 280 270 Q292 310 330 320" stroke="#E2574C" stroke-width="22" fill="none" stroke-linecap="round"/></g>
  <g><path d="M310 330 L340 170 M450 330 L420 170 M330 170 H430" stroke="#2F8AD1" stroke-width="10" stroke-linecap="round"/><path d="M360 172 V262 M384 172 V262" stroke="${INK}" stroke-width="3.5"/><rect x="350" y="258" width="44" height="12" rx="5" fill="#FF8FB1"/><path d="M402 172 V236 M422 172 V236" stroke="${INK}" stroke-width="3.5"/><rect x="394" y="232" width="36" height="11" rx="5" fill="#FFC94D"/></g>
  <g><rect x="20" y="380" width="130" height="70" rx="12" fill="#F3DDB0" stroke="#C9875A" stroke-width="8"/><path d="M60 412 L86 412 L82 440 L64 440Z" fill="#E2574C"/><path d="M62 412 Q73 396 84 412" stroke="${INK}" stroke-width="3" fill="none"/><circle cx="118" cy="428" r="12" fill="#5EC6FF"/></g>
  ${flower(200,410,'#FF8FB1',1.3)}${flower(250,440,'#FFC94D',1.3)}${flower(290,400,'#fff',1.3)}
  <g transform="translate(232 380)"><circle r="20" fill="#E2574C"/><path d="M-20 0 H20 M0 -20 V20" stroke="#fff" stroke-width="5"/></g>
  <g transform="translate(400 420)"><path d="M-62 14 L62 -14" stroke="#E2574C" stroke-width="12" stroke-linecap="round"/><path d="M-8 30 L0 2 L8 30Z" fill="#5B4B8A"/><rect x="-70" y="2" width="16" height="16" rx="4" fill="#FFC94D"/><rect x="54" y="-24" width="16" height="16" rx="4" fill="#FFC94D"/></g>
  <path d="M0 470 H480" stroke="#62B05A" stroke-width="20"/>
  </symbol></defs></svg>`;
}
function bgCabinNight(){
  let planks='';for(let i=0;i<17;i++)planks+=`<rect x="${i*80}" y="0" width="80" height="560" fill="${i%2?'#6E4A3A':'#78523F'}"/>`;
  return `<svg class="bg" viewBox="0 0 1280 720" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
  ${planks}<rect y="0" width="1280" height="34" fill="#4E3226"/>
  <rect x="760" y="70" width="290" height="220" rx="20" fill="#1C1A4A" stroke="#4E3226" stroke-width="16"/>
  ${[[790,100],[840,250],[880,130],[930,230],[960,95],[1020,250],[800,200],[1030,190]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="2" fill="#FFF6D8"/>`).join('')}
  ${moon(1000,120,22)}
  <path d="M905 74 V286 M764 180 H1046" stroke="#4E3226" stroke-width="10"/>
  <path d="M740 60 Q770 180 740 310 L720 310 V60Z M1070 60 Q1040 180 1070 310 L1090 310 V60Z" fill="#7A6CFF" filter="url(#cut)"/>
  <rect y="560" width="1280" height="160" fill="#8A5E44"/><path d="M0 600 H1280 M0 650 H1280 M0 700 H1280" stroke="#7A503A" stroke-width="4"/>
  <ellipse cx="620" cy="660" rx="300" ry="44" fill="#C2416E" opacity=".7"/>
  <rect x="380" y="380" width="30" height="230" rx="10" fill="#5A3828"/><rect x="830" y="420" width="26" height="190" rx="10" fill="#5A3828"/>
  <rect x="390" y="470" width="460" height="110" rx="24" fill="#EADBC0"/><rect x="396" y="540" width="450" height="60" rx="14" fill="#5A3828"/>
  <ellipse cx="470" cy="470" rx="64" ry="32" fill="#fff"/>
  <rect x="220" y="440" width="140" height="130" rx="10" fill="#5A3828"/><rect x="232" y="470" width="116" height="30" rx="6" fill="#4A2D20"/>
  <rect x="870" y="490" width="130" height="90" rx="10" fill="#5A3828"/>
  <rect x="1040" y="400" width="210" height="170" rx="12" fill="#5A3828"/><rect x="1054" y="430" width="182" height="34" rx="6" fill="#4A2D20"/><rect x="1054" y="480" width="182" height="34" rx="6" fill="#4A2D20"/>
  <path d="M1080 600 h150 l-16 90 h-118z" fill="#C9875A" filter="url(#cut)"/>
  </svg>`;
}
function bgNight(){
  return `<svg class="bg" viewBox="0 0 1280 720" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
  <rect width="1280" height="720" fill="url(#skyNight)"/>${starField(110,51,0,520)}
  ${hill(500,30,1.2,.8,'#2A2F66')}${pine(160,520,1,'#1F2350')}${pine(220,530,.8,'#1F2350')}${pine(1100,515,1.1,'#1F2350')}${pine(1170,525,.8,'#1F2350')}
  ${hill(590,20,1.8,2.5,'#1F2350')}
  </svg>`;
}
function bgSchool(){
  const flags=['#E2574C','#FFC94D','#6CC07A','#5EC6FF','#7A6CFF','#FF8FB1','#FFB02E'];const L='ABCDEFG';
  return `<svg class="bg" viewBox="0 0 1280 720" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
  <rect width="1280" height="720" fill="#BFE6D4"/><rect y="0" width="1280" height="40" fill="#8FCFB4"/>
  <path d="M20 60 Q640 130 1260 60" stroke="#8A5A3B" stroke-width="4" fill="none"/>
  ${flags.map((c,i)=>{const x=150+i*165,y=60+Math.sin((i+.5)/7*Math.PI)*58;return `<g transform="translate(${x} ${y})"><path d="M-30 0 H30 L0 52Z" fill="${c}"/><text x="0" y="28" text-anchor="middle" font-family="Sniglet,sans-serif" font-weight="800" font-size="26" fill="#fff">${L[i]}</text></g>`}).join('')}
  <rect y="560" width="1280" height="160" fill="#D9A877"/><path d="M0 600 H1280 M0 650 H1280 M0 700 H1280" stroke="#C99766" stroke-width="4"/>
  <rect x="1020" y="150" width="200" height="22" rx="6" fill="#B9824F"/><rect x="1020" y="320" width="200" height="22" rx="6" fill="#B9824F"/>
  <g filter="url(#cut)"><rect x="1050" y="104" width="26" height="46" rx="4" fill="#E2574C"/><rect x="1080" y="96" width="22" height="54" rx="4" fill="#5EC6FF"/><rect x="1106" y="110" width="28" height="40" rx="4" fill="#FFC94D"/><circle cx="1180" cy="128" r="22" fill="#6CC07A"/></g>
  </svg>`;
}
function bgCabinDay(){
  let planks='';for(let i=0;i<17;i++)planks+=`<rect x="${i*80}" y="0" width="80" height="560" fill="${i%2?'#E3B184':'#EBBE93'}"/>`;
  return `<svg class="bg" viewBox="0 0 1280 720" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
  ${planks}<rect width="1280" height="34" fill="#B9824F"/>
  <rect x="140" y="90" width="260" height="200" rx="20" fill="#9AD9FF" stroke="#B9824F" stroke-width="16"/>${cloudShape(190,180,.8,1)}<path d="M270 94 V286 M144 190 H396" stroke="#B9824F" stroke-width="10"/>
  <path d="M120 80 Q150 190 120 300 L100 300 V80Z M420 80 Q390 190 420 300 L440 300 V80Z" fill="#FF8FB1" filter="url(#cut)"/>
  <rect x="820" y="150" width="320" height="22" rx="6" fill="#B9824F"/><rect x="820" y="300" width="320" height="22" rx="6" fill="#B9824F"/>
  <rect y="560" width="1280" height="160" fill="#C9875A"/><path d="M0 600 H1280 M0 650 H1280 M0 700 H1280" stroke="#B57650" stroke-width="4"/>
  <ellipse cx="640" cy="640" rx="320" ry="46" fill="#7A6CFF" opacity=".55"/>
  </svg>`;
}

/* Definiciones globales (filtros y degradados) */
const GLOBAL_DEFS=`<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
<filter id="cut" x="-10%" y="-10%" width="120%" height="130%"><feDropShadow dx="0" dy="6" stdDeviation="3" flood-color="#1b1640" flood-opacity=".28"/></filter>
<linearGradient id="skyDusk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3E3D9A"/><stop offset=".55" stop-color="#8E7BD8"/><stop offset="1" stop-color="#FFB7A8"/></linearGradient>
<linearGradient id="skyDay" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7CCBFF"/><stop offset="1" stop-color="#D9F2FF"/></linearGradient>
<linearGradient id="skyNight" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#121236"/><stop offset=".6" stop-color="#2E2A6E"/><stop offset="1" stop-color="#4B3F8F"/></linearGradient>
<linearGradient id="skyDawn" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8FD3FF"/><stop offset=".55" stop-color="#FFE3A1"/><stop offset="1" stop-color="#FFB36B"/></linearGradient>
</defs></svg>`;

/* ===== Versión de 6 niveles: derecho a jugar y descansar ===== */
const ICON_SWING=LVICON[3],ICON_AMIGOS=LVICON[4];
const ICON_BALANCE=`<svg viewBox="0 0 100 100" class="ico"><path d="M50 8 A42 42 0 0 0 50 92Z" fill="#FFC94D" stroke="${INK}" stroke-width="5"/><path d="M50 8 A42 42 0 0 1 50 92Z" fill="#7A6CFF" stroke="${INK}" stroke-width="5"/><circle cx="32" cy="50" r="10" fill="#FFF4DE"/><path d="M68 30 A16 16 0 1 0 74 64 A12 12 0 1 1 68 30Z" fill="#FFE08A"/>${starPath(74,30,6,'#fff')}</svg>`;
LVICON.splice(0,LVICON.length,LVICON[0],ICON_SWING,ICON_AMIGOS,ICON_BALANCE,LVICON[6],LVICON[7]);
{const ST=STICKERS.slice();STICKERS.splice(0,STICKERS.length,ST[0],ST[3],ST[4],
  {name:'Día y noche',svg:`<svg viewBox="0 0 100 100"><path d="M50 6 A44 44 0 0 0 50 94Z" fill="#FFC94D" stroke="#fff" stroke-width="7"/><path d="M50 6 A44 44 0 0 1 50 94Z" fill="#7A6CFF" stroke="#fff" stroke-width="7"/><circle cx="31" cy="44" r="3.5" fill="${INK}"/><path d="M24 56 Q31 62 38 56" stroke="${INK}" stroke-width="3.5" fill="none" stroke-linecap="round"/><path d="M68 30 A16 16 0 1 0 74 64 A12 12 0 1 1 68 30Z" fill="#FFE08A"/></svg>`},
  ST[6],ST[7]);}
{const PO=POSES.slice();POSES.splice(0,POSES.length,PO[0],PO[1],PO[3],PO[4],PO[6],PO[7]);}
