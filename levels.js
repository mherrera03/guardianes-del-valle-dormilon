/* ============ NIVELES ============ */
const LEVELS=[
  {title:'Un Lugar Seguro para Jugar',right:'Jugar en lugares seguros',ico:'shield',bg:bgGarden,th:[0,2],build:L1,skill:'Causa y efecto: reconocer peligros',
   intro:'Lumi quiere salir a jugar al jardín, pero hay peligros. Los niños tienen derecho a jugar en lugares seguros. ¡Ayúdalo a proteger el jardín!',
   lesson:'Tienes derecho a jugar en lugares seguros.'},
  {title:'¡Hora de Recreo!',right:'Jugar para divertirse y aprender',ico:'smile',bg:bgMeadow,th:[2,6],build:L3,skill:'Razonamiento espacial y movimiento',
   intro:'¡Llegó la hora del recreo! Jugar nos ayuda a pensar, aprender y hacer amigos. Primero vamos a armar el parque.',
   lesson:'Jugar te ayuda a aprender y a ser feliz.'},
  {title:'Todos Pueden Jugar',right:'Nadie se queda fuera del juego',ico:'amigos',bg:bgMeadow,th:[0,2],build:LAmigos,skill:'Empatía y convivencia',
   intro:'En el valle todos somos diferentes: nubes, conejos, grandes y pequeños. Todos tienen derecho a jugar. ¡Ayuda a que nadie se quede fuera!',
   lesson:'Todos tienen derecho a jugar. Nadie se queda fuera.'},
  {title:'¿Jugar o Descansar?',right:'Escuchar las señales del cuerpo',ico:'balance',bg:bgCabinDay,th:[0,2],build:LSenales,skill:'Autorregulación',
   intro:'El cuerpo de Lumi le avisa cuando tiene energía y cuando está cansado. ¡Ayúdalo a saber si es momento de jugar o de descansar!',
   lesson:'Escucha a tu cuerpo: hay tiempo para jugar y tiempo para descansar.'},
  {title:'El Ritual de las Estrellas',right:'Una rutina para descansar',ico:'moonI',bg:bgCabinNight,th:[0,2],build:L4,skill:'Secuencias y rutinas',
   intro:'Lumi jugó todo el día y ahora está muy cansado. Descansar también es un derecho. ¡Sigamos su rutina para dormir!',
   lesson:'Tienes derecho a descansar. Una rutina te ayuda a dormir mejor.'},
  {title:'El Sueño de Lumi',right:'Dormir bien para jugar mañana',ico:'zzz',bg:bgNight,th:[1,3],build:L5,skill:'Atención sostenida',
   intro:'Lumi ya duerme, pero los Traviesos del Ruido quieren despertarlo. ¡Cuida su sueño hasta que salga el sol, para que despierte con energía!',
   lesson:'Dormir bien te da energía para jugar al día siguiente.'}
];

/* ---------- Dibujos de objetos ---------- */
const OBJ={
  enchufe:`<svg viewBox="0 0 110 170"><rect x="45" y="60" width="20" height="110" rx="6" fill="#8A5A3B"/><rect x="14" y="8" width="82" height="88" rx="16" fill="#fff" stroke="${INK}" stroke-width="5"/><rect x="36" y="34" width="9" height="24" rx="3" fill="${INK}"/><rect x="65" y="34" width="9" height="24" rx="3" fill="${INK}"/><circle cx="55" cy="74" r="6" fill="${INK}"/><path class="twinkle" d="M92 6 L104 -6 L98 10 L110 4" stroke="#FFC94D" stroke-width="6" fill="none" stroke-linejoin="round" stroke-linecap="round"/><path class="twinkle" style="animation-delay:-1s" d="M6 18 L-6 10 L4 26 L-8 24" stroke="#FFC94D" stroke-width="6" fill="none" stroke-linejoin="round" stroke-linecap="round"/></svg>`,
  charco:`<svg viewBox="0 0 200 100"><ellipse cx="100" cy="55" rx="96" ry="40" fill="#2F6FB5"/><ellipse cx="100" cy="58" rx="66" ry="25" fill="#1D4E8C"/><ellipse cx="100" cy="60" rx="34" ry="12" fill="#123A6E"/><path d="M40 44 Q60 36 80 44 M120 70 Q140 62 160 70" stroke="#9AD9FF" stroke-width="5" fill="none" stroke-linecap="round"/></svg>`,
  fuego:`<svg viewBox="0 0 150 160"><path d="M20 140 L130 115 M20 115 L130 140" stroke="#8A5A3B" stroke-width="18" stroke-linecap="round"/><g class="flame"><path d="M75 20 C100 50 118 70 110 100 C104 124 88 130 75 130 C62 130 44 124 40 100 C34 72 58 60 62 40 C70 56 76 58 75 20Z" fill="#FF6B3D"/><path d="M76 58 C92 76 98 92 92 108 C88 120 82 124 75 124 C66 124 58 118 56 106 C54 90 66 84 68 70 C72 78 76 76 76 58Z" fill="#FFB02E"/><path d="M75 92 C84 102 86 110 82 118 C78 124 70 124 67 116 C65 108 72 104 75 92Z" fill="#FFE08A"/></g></svg>`,
  tijeras:`<svg viewBox="0 0 130 100"><path d="M60 52 L124 18 L128 26 L66 58Z" fill="#C7CED9" stroke="${INK}" stroke-width="3"/><path d="M60 52 L124 86 L128 78 L66 46Z" fill="#DDE3EC" stroke="${INK}" stroke-width="3"/><circle cx="30" cy="30" r="20" fill="none" stroke="#E2574C" stroke-width="11"/><circle cx="30" cy="74" r="20" fill="none" stroke="#E2574C" stroke-width="11"/><path d="M46 40 L62 50 M46 64 L62 54" stroke="#E2574C" stroke-width="11" stroke-linecap="round"/><circle cx="64" cy="52" r="5" fill="${INK}"/></svg>`,
  flor:`<svg viewBox="0 0 100 130"><path d="M50 60 Q56 96 50 128" stroke="#3E9A5C" stroke-width="7" fill="none"/><path d="M52 100 Q74 84 86 96 Q70 110 52 100Z" fill="#4FA868"/>${[0,60,120,180,240,300].map(a=>`<ellipse cx="${50+Math.cos(a*Math.PI/180)*22}" cy="${42+Math.sin(a*Math.PI/180)*22}" rx="16" ry="16" fill="#FF8FB1"/>`).join('')}<circle cx="50" cy="42" r="15" fill="#FFC94D"/><circle cx="45" cy="39" r="2.6" fill="${INK}"/><circle cx="55" cy="39" r="2.6" fill="${INK}"/><path d="M44 47 Q50 52 56 47" stroke="${INK}" stroke-width="2.5" fill="none" stroke-linecap="round"/></svg>`,
  pelota:`<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="44" fill="#FFC94D" stroke="${INK}" stroke-width="4"/><path d="M12 36 Q50 54 88 36 M10 62 Q50 80 90 62" stroke="#E2574C" stroke-width="10" fill="none"/><circle cx="34" cy="28" r="7" fill="#fff" opacity=".7"/></svg>`,
  escudo:`<svg viewBox="0 0 100 110"><path d="M50 4 L92 18 V50 Q92 86 50 106 Q8 86 8 50 V18Z" fill="#5EC6FF" stroke="#fff" stroke-width="7"/><path d="M50 4 L92 18 V50 Q92 86 50 106 Q8 86 8 50 V18Z" fill="none" stroke="${INK}" stroke-width="3"/><path d="M50 78 C28 64 24 50 32 43 C39 37 47 40 50 48 C53 40 61 37 68 43 C76 50 72 64 50 78Z" fill="#fff"/><path d="M24 24 L40 18" stroke="#fff" stroke-width="6" stroke-linecap="round" opacity=".7"/></svg>`,
  domo:`<svg viewBox="0 0 100 100" style="overflow:visible"><circle cx="50" cy="50" r="58" fill="#7FD3FF" opacity=".42" stroke="#fff" stroke-width="5"/><path d="M20 30 Q30 12 52 8" stroke="#fff" stroke-width="7" fill="none" stroke-linecap="round" opacity=".85"/><path d="M50 74 C32 62 28 50 35 44 C41 39 48 42 50 49 C52 42 59 39 65 44 C72 50 68 62 50 74Z" fill="#fff" opacity=".9"/></svg>`,
  manzana:`<svg viewBox="0 0 100 100"><path d="M50 28 C32 16 10 28 16 56 C20 76 38 90 50 84 C62 90 80 76 84 56 C90 28 68 16 50 28Z" fill="#E2574C"/><path d="M50 28 Q50 14 58 8" stroke="#7A4E33" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M54 18 Q66 6 78 16 Q66 26 54 18Z" fill="#3E9A5C"/><ellipse cx="34" cy="44" rx="7" ry="11" fill="#fff" opacity=".45"/></svg>`,
  banana:`<svg viewBox="0 0 100 100"><path d="M16 30 Q22 80 84 74 Q88 70 84 66 Q36 66 28 26Z" fill="#FFD84D" stroke="#C99A1E" stroke-width="4" stroke-linejoin="round"/><path d="M14 30 L22 22 L30 26" stroke="#7A4E33" stroke-width="6" fill="none" stroke-linecap="round"/></svg>`,
  zanahoria:`<svg viewBox="0 0 100 100"><path d="M30 30 L76 40 L28 92 Q18 84 22 72Z" fill="#FF8A2E"/><path d="M34 52 L44 54 M30 66 L40 68" stroke="#D96A12" stroke-width="4" stroke-linecap="round"/><path d="M60 34 Q66 12 78 8 M66 38 Q82 24 94 26 M58 32 Q54 14 60 4" stroke="#3E9A5C" stroke-width="7" fill="none" stroke-linecap="round"/></svg>`,
  agua:`<svg viewBox="0 0 100 100"><path d="M50 6 C66 32 80 46 80 64 A30 30 0 0 1 20 64 C20 46 34 32 50 6Z" fill="#5EC6FF" stroke="#2F8AD1" stroke-width="4"/><path d="M36 60 Q36 74 48 80" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round" opacity=".8"/></svg>`,
  brocoli:`<svg viewBox="0 0 100 100"><path d="M42 56 L38 92 H62 L58 56Z" fill="#8ED081"/><circle cx="32" cy="44" r="18" fill="#3E9A5C"/><circle cx="50" cy="30" r="20" fill="#4FA868"/><circle cx="68" cy="44" r="18" fill="#3E9A5C"/><circle cx="50" cy="52" r="16" fill="#2F8A55"/></svg>`,
  sandia:`<svg viewBox="0 0 100 100"><path d="M8 34 A42 42 0 0 0 92 34Z" fill="#3E9A5C"/><path d="M14 34 A36 36 0 0 0 86 34Z" fill="#E9F7D9"/><path d="M19 34 A31 31 0 0 0 81 34Z" fill="#FF5E6C"/><g fill="${INK}"><ellipse cx="36" cy="46" rx="3" ry="5"/><ellipse cx="50" cy="54" rx="3" ry="5"/><ellipse cx="64" cy="46" rx="3" ry="5"/></g></svg>`,
  piedra:`<svg viewBox="0 0 100 100"><path d="M14 70 Q10 40 36 30 Q56 18 76 34 Q94 48 86 72 Q70 86 44 84 Q20 84 14 70Z" fill="#9A97A8" stroke="#6E6B80" stroke-width="5"/><path d="M36 44 Q46 38 56 44" stroke="#C3C0D0" stroke-width="5" fill="none" stroke-linecap="round"/></svg>`,
  zapato:`<svg viewBox="0 0 100 100"><path d="M12 40 L40 40 Q50 56 72 58 Q92 60 92 74 V80 H12Z" fill="#7A4E33" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/><rect x="10" y="78" width="84" height="10" rx="4" fill="${INK}"/><path d="M42 48 L50 44 M48 54 L56 50" stroke="#FFF4DE" stroke-width="4" stroke-linecap="round"/></svg>`,
  pila:`<svg viewBox="0 0 100 100"><rect x="20" y="30" width="60" height="44" rx="8" fill="#3B3880" stroke="${INK}" stroke-width="4"/><rect x="80" y="42" width="10" height="20" rx="3" fill="#C7CED9" stroke="${INK}" stroke-width="3"/><rect x="20" y="30" width="22" height="44" rx="6" fill="#FFC94D"/><path d="M58 40 L50 54 H60 L52 66" stroke="#FFC94D" stroke-width="5" fill="none" stroke-linejoin="round" stroke-linecap="round"/></svg>`,
  termometro:`<svg viewBox="0 0 100 100"><g transform="rotate(-35 50 50)"><rect x="40" y="6" width="20" height="70" rx="10" fill="#fff" stroke="${INK}" stroke-width="4"/><rect x="46" y="30" width="8" height="50" rx="4" fill="#E2574C"/><circle cx="50" cy="82" r="14" fill="#E2574C" stroke="${INK}" stroke-width="4"/><path d="M60 22 H66 M60 34 H66 M60 46 H66" stroke="${INK}" stroke-width="3"/></g></svg>`,
  curita:`<svg viewBox="0 0 100 100"><g transform="rotate(-25 50 50)"><rect x="6" y="34" width="88" height="32" rx="16" fill="#F2C29B" stroke="#C98A62" stroke-width="4"/><rect x="36" y="38" width="28" height="24" rx="5" fill="#FFE3CF"/><g fill="#C98A62"><circle cx="20" cy="45" r="2.5"/><circle cx="20" cy="55" r="2.5"/><circle cx="80" cy="45" r="2.5"/><circle cx="80" cy="55" r="2.5"/></g></g></svg>`,
  cepillo:`<svg viewBox="0 0 100 100"><g transform="rotate(-30 50 50)"><rect x="10" y="44" width="62" height="14" rx="7" fill="#5EC6FF" stroke="${INK}" stroke-width="4"/><rect x="68" y="34" width="24" height="14" rx="3" fill="#fff" stroke="${INK}" stroke-width="3"/><path d="M72 34 V24 M78 34 V24 M84 34 V24 M90 34 V24" stroke="#9AD9FF" stroke-width="4" stroke-linecap="round"/><path d="M70 24 Q80 12 92 22" stroke="#fff" stroke-width="7" fill="none" stroke-linecap="round"/></g></svg>`,
  lapiz:`<svg viewBox="0 0 100 100"><g transform="rotate(-40 50 50)"><rect x="12" y="40" width="58" height="20" fill="#FFC94D" stroke="${INK}" stroke-width="4"/><rect x="2" y="40" width="14" height="20" rx="4" fill="#FF8FB1" stroke="${INK}" stroke-width="4"/><path d="M70 40 L94 50 L70 60Z" fill="#F2D2A8" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/><path d="M86 47 L94 50 L86 53Z" fill="${INK}"/></g></svg>`,
  cuaderno:`<svg viewBox="0 0 100 100"><rect x="18" y="10" width="66" height="80" rx="8" fill="#5EC6FF" stroke="${INK}" stroke-width="4"/><rect x="34" y="26" width="40" height="18" rx="4" fill="#fff"/>${[20,32,44,56,68,80].map(y=>`<circle cx="18" cy="${y}" r="4" fill="#fff" stroke="${INK}" stroke-width="2.5"/>`).join('')}</svg>`,
  libro:`<svg viewBox="0 0 100 100"><rect x="16" y="12" width="66" height="78" rx="6" fill="#E2574C" stroke="${INK}" stroke-width="4"/><rect x="76" y="16" width="10" height="70" fill="#FFF4DE" stroke="${INK}" stroke-width="3"/>${starPath(48,48,18,'#FFE08A')}</svg>`,
  crayones:`<svg viewBox="0 0 100 100">${[['#E2574C',-14],['#6CC07A',0],['#5EC6FF',14]].map(([c,a],i)=>`<g transform="rotate(${a} 50 90)"><rect x="${40}" y="24" width="20" height="62" rx="4" fill="${c}" stroke="${INK}" stroke-width="3.5"/><path d="M40 24 L50 6 L60 24Z" fill="${c}" stroke="${INK}" stroke-width="3.5" stroke-linejoin="round"/><rect x="40" y="46" width="20" height="10" fill="#fff" opacity=".6"/></g>`).join('')}</svg>`,
  mochila:`<svg viewBox="0 0 190 180"><path d="M30 60 Q30 30 95 30 Q160 30 160 60 V160 Q160 176 144 176 H46 Q30 176 30 160Z" fill="#4FA868" stroke="${INK}" stroke-width="5"/><path d="M30 64 Q95 40 160 64 L150 34 Q95 6 40 34Z" fill="#2F7A48" stroke="${INK}" stroke-width="5" stroke-linejoin="round"/><rect x="58" y="104" width="74" height="50" rx="12" fill="#6CC07A" stroke="${INK}" stroke-width="4"/><path d="M95 104 V118" stroke="${INK}" stroke-width="4"/><path d="M70 30 Q95 0 120 30" stroke="${INK}" stroke-width="6" fill="none"/></svg>`,
  regalo:`<svg viewBox="0 0 100 100"><rect x="14" y="40" width="72" height="52" rx="6" fill="#FF8FB1" stroke="${INK}" stroke-width="4"/><rect x="8" y="28" width="84" height="18" rx="5" fill="#E2779F" stroke="${INK}" stroke-width="4"/><rect x="44" y="28" width="12" height="64" fill="#FFC94D"/><path d="M50 28 Q30 4 22 18 Q20 28 50 28 Q80 28 78 18 Q70 4 50 28Z" fill="#FFC94D" stroke="${INK}" stroke-width="3.5"/></svg>`,
  helado:`<svg viewBox="0 0 100 100"><ellipse cx="46" cy="80" rx="36" ry="12" fill="#FF9EC4"/><circle cx="40" cy="72" r="18" fill="#FF9EC4"/><path d="M52 66 L92 50 L86 76Z" fill="#E0A06E" stroke="${INK}" stroke-width="3.5" stroke-linejoin="round"/><path d="M64 62 L82 70 M72 58 L88 64" stroke="#B9824F" stroke-width="3"/><circle cx="34" cy="68" r="3" fill="#fff" opacity=".7"/></svg>`,
  trueno:`<svg viewBox="0 0 100 100"><circle cx="34" cy="40" r="17" fill="#6E6B80"/><circle cx="56" cy="30" r="22" fill="#6E6B80"/><circle cx="74" cy="42" r="15" fill="#6E6B80"/><rect x="28" y="40" width="50" height="17" fill="#6E6B80"/><path d="M54 54 L42 76 H54 L44 96 L70 66 H58 L66 54Z" fill="#FFC94D" stroke="${INK}" stroke-width="2.5" stroke-linejoin="round"/></svg>`,
  escondidas:`<svg viewBox="0 0 100 100"><circle cx="28" cy="62" r="22" fill="#3E9A5C"/><circle cx="50" cy="48" r="28" fill="#4FA868"/><circle cx="74" cy="62" r="22" fill="#3E9A5C"/><rect x="8" y="62" width="86" height="26" rx="10" fill="#3E9A5C"/><circle cx="42" cy="56" r="7" fill="#fff"/><circle cx="60" cy="56" r="7" fill="#fff"/><circle cx="43" cy="57" r="3.5" fill="${INK}"/><circle cx="61" cy="57" r="3.5" fill="${INK}"/></svg>`,
  cometa:`<svg viewBox="0 0 100 100"><path d="M50 6 L80 40 L50 74 L20 40Z" fill="#FFC94D" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/><path d="M50 6 L50 74 M20 40 L80 40" stroke="#E2574C" stroke-width="5"/><path d="M50 74 Q40 84 52 90 Q62 96 50 100" stroke="#5EC6FF" stroke-width="5" fill="none"/></svg>`,
  canasta:`<svg viewBox="0 0 160 76"><path d="M8 18 H152 L136 72 H24Z" fill="#C9875A" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/><path d="M18 36 H142 M24 54 H136" stroke="#A86B43" stroke-width="5"/><path d="M48 18 L56 72 M80 18 V72 M112 18 L104 72" stroke="#A86B43" stroke-width="4"/><rect x="4" y="10" width="152" height="14" rx="7" fill="#E0A06E" stroke="${INK}" stroke-width="4"/></svg>`
};

/* ======================= NIVEL 1: Un Lugar Seguro para Jugar (función L1) ======================= */
function L1(ctx){
  const {play}=ctx;
  const lumi=place(el(`<div class="abs bob" style="width:130px">${lumiSVG({mood:'sad',color:lumiColor(.15)})}</div>`),24,404);
  play.appendChild(lumi);
  const HZ=[
    {k:'enchufe',x:300,y:228,w:110,h:170,msg:'¡Bien! Los enchufes pueden dar toques. Ya está tapado.'},
    {k:'charco',x:420,y:440,w:200,h:100,msg:'¡Muy bien! En el agua profunda solo se entra con un adulto.'},
    {k:'fuego',x:700,y:280,w:150,h:160,msg:'¡Excelente! El fuego quema. Lumi ya no se acercará.'},
    {k:'tijeras',x:870,y:480,w:130,h:100,msg:'¡Genial! Las tijeras con punta se guardan en su lugar.'}
  ];
  const SAFE=[
    {k:'flor',x:540,y:250,w:90,h:118,msg:'Esa flor es bonita y no hace daño. Busca algo peligroso.'},
    {k:'pelota',x:150,y:280,w:96,h:96,msg:'La pelota sirve para jugar, no es peligrosa. ¡Intenta otra vez!'}
  ];
  [...HZ,...SAFE].forEach(o=>{o.node=place(el(`<div class="abs" style="width:${o.w}px;height:${o.h}px">${OBJ[o.k]}</div>`),o.x,o.y);play.appendChild(o.node)});
  // Fuente de escudos
  play.appendChild(place(el(`<div class="abs" style="width:160px;height:150px;border-radius:50%;background:radial-gradient(circle,#FFF4DE 0 55%,rgba(255,244,222,0) 70%)"></div>`),1110,560));
  let covered=0,idle;
  const remaining=()=>HZ.filter(h=>!h.done);
  function resetIdle(){clearTimeout(idle);idle=later(()=>{const r=remaining();if(!r.length)return;flash(r[0].node,'wiggle',460);say('Busca algo que pueda lastimar a Lumi y arrastra un escudo encima.');resetIdle()},15000)}
  function spawnShield(){
    const s=place(el(`<div class="abs pulse" style="width:96px;height:106px;z-index:5">${OBJ.escudo}</div>`),1142,580);
    play.appendChild(s);
    makeDraggable(s,{onStart:()=>{s.classList.remove('pulse');resetIdle()},onDrop:p=>{
      const h=HZ.find(h=>!h.done&&hit(p,h.node,26));
      if(h){
        h.done=true;covered++;s.remove();SFX.shield();
        const d=el(`<div class="abs" style="left:0;top:0;width:100%;height:100%;animation:popIn .5s cubic-bezier(.3,1.5,.5,1) both">${OBJ.domo}</div>`);
        h.node.appendChild(d);h.node.style.filter='saturate(.5)';
        const c=centerOf(h.node);sparkle(c.x,c.y,12);floatText(c.x,c.y-40,'¡Seguro!');
        ctx.fill(covered);setLumi(lumi,{color:lumiColor(.15+covered*.21),mood:covered>=HZ.length?'happy':'sad'});
        if(covered<HZ.length){say(h.msg);spawnShield()}else finish();
        return true;
      }
      const sf=SAFE.find(o=>hit(p,o.node,10));
      if(sf){ctx.err(sf.msg);flash(sf.node,'wiggle',460)}
      return false;
    }});
  }
  async function finish(){
    clearTimeout(idle);
    await say('¡Todo está seguro! Ahora Lumi puede salir a jugar.');
    if(ctx.done)return;
    setLumi(lumi,{mood:'happy',color:AZUL});
    lumi.classList.remove('bob');lumi.style.transition='left .7s ease-in-out, top .7s ease-in-out';
    place(lumi,250,292);try{await wait(760)}catch(e){return}
    const ball=SAFE.find(o=>o.k==='pelota').node;
    ball.animate([{transform:'translateY(0)'},{transform:'translateY(-130px)'},{transform:'translateY(0)'}],{duration:700,iterations:4,easing:'ease-in-out'});
    lumi.firstElementChild.animate([{transform:'translateY(0)'},{transform:'translateY(-50px)'},{transform:'translateY(0)'}],{duration:700,iterations:4,delay:350,easing:'ease-in-out'});
    for(let k=0;k<4;k++)later(SFX.boing,k*700);
    sparkle(250,300,14);say('¡Qué divertido es jugar en un lugar seguro!');
    ctx.win(3400);
  }
  ctx.meter(HZ.length,ICON.shieldS);
  say('Arrastra los escudos y ponlos encima de las cosas peligrosas.');
  spawnShield();resetIdle();
}

/* ======================= NIVEL 2: ¡Hora de Recreo! (función L3) ======================= */
function L3(ctx){
  const {play}=ctx;
  play.insertAdjacentHTML('beforeend',parkSymbol());
  const T=150,BX=730,BY=132;
  play.insertAdjacentHTML('beforeend',`<div class="abs card" style="left:190px;top:160px;width:290px;padding:18px;animation:none;transform:rotate(-2deg)"><div style="font-family:var(--display);font-size:24px;margin-bottom:8px">Así debe quedar</div><svg viewBox="0 0 480 480" style="width:254px;border-radius:14px;display:block"><use href="#park" width="480" height="480"/></svg></div>`);
  const board=place(el(`<div class="board" style="width:${3*T+12}px;height:${3*T+12}px"></div>`),BX,BY);play.appendChild(board);
  let pos=[0,1,2,3,4,5,6,7];let empty=8;let moves=0,wrongs=0,solved=false;
  const tiles=pos.map(t=>{const r=Math.floor(t/3),c=t%3;const n=el(`<div class="tile" style="width:${T-6}px;height:${T-6}px"><svg viewBox="${c*160} ${r*160} 160 160" preserveAspectRatio="none"><use href="#park" width="480" height="480"/></svg></div>`);board.appendChild(n);return n});
  const adj=(a,b)=>{const ra=Math.floor(a/3),ca=a%3,rb=Math.floor(b/3),cb=b%3;return Math.abs(ra-rb)+Math.abs(ca-cb)===1};
  function shuffleBoard(){let last=-1;for(let s=0;s<16;s++){const opts=pos.map((p,t)=>t).filter(t=>adj(pos[t],empty)&&t!==last);const t=pick(opts);[pos[t],empty]=[empty,pos[t]];last=t}}
  do{pos=[0,1,2,3,4,5,6,7];empty=8;shuffleBoard()}while(pos.filter((p,t)=>p===t).length>4);
  function layout(){tiles.forEach((n,t)=>{const p=pos[t];place(n,6+(p%3)*T,6+Math.floor(p/3)*T);n.classList.toggle('can',!solved&&adj(p,empty))})}
  layout();
  tiles.forEach((n,t)=>tapped(n,()=>{
    if(solved)return;
    if(adj(pos[t],empty)){[pos[t],empty]=[empty,pos[t]];moves++;SFX.tap();layout();
      if(pos.every((p,i)=>p===i))win();}
    else{wrongs++;ctx.errors++;flash(n,'wiggle',460);SFX.oops();if(wrongs<=2||wrongs%4===0)say('Esa pieza no se puede mover. Toca una pieza que brille, junto al espacio vacío.')}
  }));
  say('Toca las piezas que brillan para moverlas y arma el parque igual al dibujo.');
  function win(){
    solved=true;layout();
    const last=el(`<div class="tile" style="width:${T-6}px;height:${T-6}px;animation:popIn .5s both"><svg viewBox="320 320 160 160" preserveAspectRatio="none"><use href="#park" width="480" height="480"/></svg></div>`);
    place(last,6+2*T,6+2*T);board.appendChild(last);
    SFX.win();const c=centerOf(board);sparkle(c.x,c.y,20);
    say('¡Armaste el parque! Ahora, ¡a jugar con los amigos de Lumi!');
    later(phaseB,3000);
  }
  function phaseB(){
    play.innerHTML=bgMeadow();
    const GOAL=12;let joy=0;ctx.meter(GOAL,ICON.smile);
    const friends=[{n:'Saltarín',salt:true,x:330},{n:'Lumi',c:AZUL,acc:[],x:565},{n:'Bru',c:'#8EE3B5',acc:['hoja'],x:800}];
    friends.forEach((f,k)=>{
      const box=place(el(`<div class="abs" style="width:170px;height:260px;cursor:pointer">
        <svg class="rope" viewBox="0 0 230 260" style="position:absolute;left:-30px;top:-10px;width:230px;height:260px;overflow:visible;transform-origin:50% 210px"><path d="M30 210 Q115 -60 200 210" stroke="#E2574C" stroke-width="6" fill="none" stroke-linecap="round"/><rect x="20" y="196" width="18" height="30" rx="6" fill="#FFC94D"/><rect x="192" y="196" width="18" height="30" rx="6" fill="#FFC94D"/></svg>
        ${f.salt?`<div class="who" style="position:absolute;left:33px;top:44px;width:104px">${saltarinSVG()}</div>`:`<div class="who" style="position:absolute;left:10px;top:70px;width:150px">${lumiSVG({mood:'happy',color:f.c,acc:f.acc})}</div>`}
        <div class="nname" style="left:85px;top:228px">${f.n}</div></div>`),f.x,250);
      play.appendChild(box);
      const who=box.querySelector('.who'),rope=box.querySelector('.rope');let busy=false;
      tapped(box,()=>{
        if(busy||joy>=GOAL)return;busy=true;
        who.animate([{transform:'translateY(0) scale(1.08,.92)'},{transform:'translateY(-110px) scale(.95,1.05)',offset:.5},{transform:'translateY(0) scale(1)'}],{duration:620,easing:'ease-in-out'});
        rope.animate([{transform:'scaleY(1)'},{transform:'scaleY(-.55)',offset:.5},{transform:'scaleY(1)'}],{duration:620,easing:'ease-in-out'});
        SFX.boing();later(SFX.giggle,300);setLumi(who,{mood:'wow'});later(()=>setLumi(who,{mood:'happy'}),620);
        joy++;ctx.fill(joy);const c=centerOf(box);floatText(c.x,c.y-120,pick(['¡Ji ji!','¡Yupi!','¡Je je!']));
        later(()=>{busy=false},420);
        if(joy===6)say('¡Mira cómo se ríen! Sigue tocándolos.');
        if(joy>=GOAL)allJump();
      });
    });
    say('Toca a Lumi y a sus amigos para que salten la cuerda. ¡Llena la barra de alegría!');
    function allJump(){
      SFX.win();sparkle(640,300,24);
      $$('.who',play).forEach((w,k)=>{setLumi(w,{mood:'wow'});w.animate([{transform:'translateY(0)'},{transform:'translateY(-90px)'},{transform:'translateY(0)'}],{duration:600,iterations:4,delay:k*120,easing:'ease-in-out'})});
      say('¡Qué divertido! Jugar con amigos nos hace muy felices.');
      ctx.win(3200);
    }
  }
}

/* ======================= NIVEL 5: El Ritual de las Estrellas (función L4) ======================= */
function L4(ctx){
  const {play}=ctx;let step=1,off=0,starsIn=0;
  const halo=c=>`<div class="halo" style="position:absolute;left:50%;top:50%;width:260px;height:260px;margin:-130px 0 0 -130px;border-radius:50%;background:radial-gradient(circle,${c} 0,rgba(255,224,138,0) 65%);pointer-events:none;transition:opacity .5s"></div>`;
  const LIGHTS=[
    {x:470,y:34,w:130,h:200,svg:on=>`<svg viewBox="0 0 130 200" style="overflow:visible"><path d="M65 0 V80" stroke="#3A2418" stroke-width="5"/><path d="M20 130 Q20 80 65 78 Q110 80 110 130Z" fill="#FF8FB1" stroke="#3A2418" stroke-width="4"/><circle cx="65" cy="140" r="18" fill="${on?'#FFF1B0':'#6E6585'}"/></svg>`,hx:'50%',hy:'70%'},
    {x:236,y:318,w:110,h:130,svg:on=>`<svg viewBox="0 0 110 130"><path d="M20 60 L35 10 H75 L90 60Z" fill="#FFC94D" stroke="#3A2418" stroke-width="4" stroke-linejoin="round"/><rect x="50" y="60" width="10" height="50" fill="#3A2418"/><ellipse cx="55" cy="118" rx="32" ry="10" fill="#3A2418"/><ellipse cx="55" cy="62" rx="14" ry="6" fill="${on?'#FFF1B0':'#6E6585'}"/></svg>`,hx:'50%',hy:'40%'},
    {x:1072,y:276,w:160,h:128,msg:'Las pantallas también se apagan antes de dormir.',svg:on=>`<svg viewBox="0 0 160 128"><rect x="6" y="6" width="148" height="100" rx="12" fill="#2E2A4F"/><rect x="16" y="16" width="128" height="80" rx="6" fill="${on?'#5EC6FF':'#1A1838'}"/>${on?`<circle cx="50" cy="56" r="16" fill="#FFC94D"/><path d="M80 80 L100 46 L124 80Z" fill="#6CC07A"/><circle cx="118" cy="32" r="7" fill="#fff"/>`:''}<rect x="66" y="106" width="28" height="16" fill="#2E2A4F"/></svg>`,hx:'50%',hy:'45%'}
  ];
  LIGHTS.forEach(L=>{
    L.node=place(el(`<div class="abs light" style="width:${L.w}px;height:${L.h}px">${halo('rgba(255,224,138,.55)')}<div class="art" style="position:relative">${L.svg(true)}</div></div>`),L.x,L.y);
    play.appendChild(L.node);
    tapped(L.node,()=>{
      if(L.off)return;if(step!==1)return;
      L.off=true;off++;SFX.click();L.node.querySelector('.art').innerHTML=L.svg(false);L.node.querySelector('.halo').style.opacity='0';
      dark.style.opacity=[0,.18,.32,.46][off];const c=centerOf(L.node);floatText(c.x,c.y,'¡Apagada!');if(L.msg)say(L.msg);
      if(off===3){step=2;later(()=>{say('¡Qué tranquilo está todo! Ahora arropa a Lumi: arrastra la manta hasta la cama.');blanket.classList.add('glowbox')},500)}
    });
  });
  const lumi=place(el(`<div class="abs" style="width:170px">${lumiSVG({mood:'tired',color:lumiColor(.2)})}</div>`),430,360);play.appendChild(lumi);
  const onBed=place(el(`<div class="abs" style="width:470px;height:150px;opacity:0;transition:opacity .5s;pointer-events:none"><svg viewBox="0 0 470 150"><path d="M10 30 Q235 0 460 30 L470 140 Q235 156 0 140Z" fill="#FF9EC4" stroke="#fff" stroke-width="6"/>${[60,140,220,300,380].map(x=>`<circle cx="${x}" cy="80" r="12" fill="#fff" opacity=".7"/>`).join('')}<path d="M10 30 Q235 0 460 30" stroke="#E2779F" stroke-width="10" fill="none"/></svg></div>`),385,450);
  play.appendChild(onBed);
  const dark=el('<div class="dark"></div>');play.appendChild(dark);
  const box=place(el(`<div class="abs" style="width:120px;height:100px"><svg viewBox="0 0 120 100" style="overflow:visible"><rect x="8" y="40" width="104" height="56" rx="10" fill="#C2416E" stroke="#3A2418" stroke-width="4"/><path class="lid" d="M4 40 Q60 10 116 40Z" fill="#E2779F" stroke="#3A2418" stroke-width="4"/>${starPath(60,68,14,'#FFC94D')}<path d="M112 64 H124 V52" stroke="#3A2418" stroke-width="5" fill="none"/></svg></div>`),878,400);
  play.appendChild(box);
  const blanket=place(el(`<div class="abs" style="width:140px;height:84px"><svg viewBox="0 0 140 84"><rect x="6" y="10" width="128" height="68" rx="16" fill="#FF9EC4" stroke="#fff" stroke-width="6"/><path d="M6 34 H134 M6 56 H134" stroke="#E2779F" stroke-width="6"/><circle cx="34" cy="22" r="5" fill="#fff"/><circle cx="70" cy="22" r="5" fill="#fff"/><circle cx="106" cy="22" r="5" fill="#fff"/></svg></div>`),1088,560);
  play.appendChild(blanket);
  makeDraggable(blanket,{onStart:()=>{if(step<2){ctx.err('Espera, primero hay que apagar las luces. Toca cada luz.');return false}},onDrop:p=>{
    if(p.x>370&&p.x<880&&p.y>330&&p.y<640){
      blanket.remove();onBed.style.opacity='1';SFX.whoosh();setLumi(lumi,{mood:'tired',color:lumiColor(.45)});sparkle(620,500,10);step=3;
      later(()=>{say('¡Qué calientito! Ahora lleva las estrellas de la ventana a la caja musical.');box.classList.add('glowbox');stars.forEach(s=>s.classList.add('pulse'))},500);
      return true}
    return false}});
  const MEL=[NOTE.C5,NOTE.E5,NOTE.G5,NOTE.A5,NOTE.G5];
  const stars=[[784,92],[862,176],[930,96],[978,196],[812,214]].map(([x,y],k)=>{
    const s=place(el(`<div class="abs" style="width:56px;height:56px;z-index:6;filter:drop-shadow(0 0 10px #FFE08A)"><svg viewBox="0 0 100 100" style="width:100%;height:100%">${starPath(50,52,46,'#FFE08A','#fff')}</svg></div>`),x,y);
    play.appendChild(s);
    makeDraggable(s,{onStart:()=>{if(step<3){ctx.err(step===1?'Primero apaga las luces. Toca cada luz.':'Primero arropa a Lumi con su manta.');return false}},onDrop:p=>{
      if(hit(p,box,40)){s.remove();SFX.note(MEL[starsIn]);starsIn++;const c=centerOf(box);sparkle(c.x,c.y-20,8);flash(box,'hop',620);
        if(starsIn<5)floatText(c.x,c.y-60,'♪');else lullaby();return true}
      return false}});
    return s;
  });
  ctx.meter(3,ICON.moonI,true);
  const progress=()=>ctx.fill(step===1?0:step===2?1:starsIn<5?2:3);
  const prog=setInterval(progress,300);onLeave(()=>clearInterval(prog));
  say('Lumi necesita descansar. Primero, toca las tres luces para apagarlas.');
  function lullaby(){
    box.classList.remove('glowbox');
    const song=[NOTE.G4,NOTE.E4,NOTE.G4,NOTE.A4,NOTE.G4,NOTE.E4,NOTE.D4,NOTE.E4,NOTE.C4];
    song.forEach((f,k)=>SFX.note(f,.3+k*.42));
    setLumi(lumi,{mood:'sleep',color:'#8EC9F0'});
    for(let k=0;k<3;k++)later(()=>{const z=el('<div class="zzz">z</div>');place(z,560,350);play.appendChild(z)},k*900);
    later(()=>say('Shhh. Lumi ya está dormido. Dormir nos da energía para jugar mañana.'),1200);
    ctx.win(6200);
  }
}

/* ======================= NIVEL 6: El Sueño de Lumi (función L5) ======================= */
const NOISE_ICONS={
  reloj:`<circle cx="50" cy="54" r="24" fill="#E2574C" stroke="#fff" stroke-width="4"/><circle cx="50" cy="54" r="17" fill="#fff"/><path d="M50 54 V42 M50 54 L58 58" stroke="${INK}" stroke-width="4" stroke-linecap="round"/><circle cx="32" cy="30" r="8" fill="#FFC94D"/><circle cx="68" cy="30" r="8" fill="#FFC94D"/><path d="M22 20 L14 14 M78 20 L86 14" stroke="#FFC94D" stroke-width="4" stroke-linecap="round"/>`,
  trompeta:`<path d="M20 50 H56 L80 32 V68 L56 54 H20Z" fill="#FFC94D" stroke="#fff" stroke-width="4" stroke-linejoin="round"/><circle cx="34" cy="44" r="4" fill="#DE8F17"/><circle cx="44" cy="44" r="4" fill="#DE8F17"/><path d="M86 38 L94 34 M88 50 H96 M86 62 L94 66" stroke="#fff" stroke-width="4" stroke-linecap="round"/>`,
  tambor:`<ellipse cx="50" cy="40" rx="28" ry="10" fill="#fff"/><path d="M22 40 V66 Q50 80 78 66 V40" fill="#E2574C" stroke="#fff" stroke-width="4"/><path d="M22 46 L36 72 L50 48 L64 72 L78 46" stroke="#FFC94D" stroke-width="4" fill="none"/><path d="M36 30 L20 12 M64 30 L80 12" stroke="#C9875A" stroke-width="6" stroke-linecap="round"/>`,
  trueno:`<circle cx="36" cy="44" r="14" fill="#9A97A8"/><circle cx="54" cy="36" r="18" fill="#9A97A8"/><circle cx="70" cy="46" r="13" fill="#9A97A8"/><rect x="30" y="44" width="46" height="14" fill="#9A97A8"/><path d="M54 56 L44 74 H54 L46 90 L66 66 H56 L62 56Z" fill="#FFC94D"/>`,
  sombra:`<g transform="translate(14 14) scale(.6)"><path d="M18 70 Q18 22 60 20 Q102 22 102 70 L102 104 Q94 94 86 104 Q78 94 70 104 Q62 94 54 104 Q46 94 38 104 Q30 94 18 104Z" fill="#5B4B8A" stroke="#fff" stroke-width="5"/><ellipse cx="46" cy="58" rx="11" ry="13" fill="#fff"/><ellipse cx="74" cy="58" rx="11" ry="13" fill="#fff"/><circle cx="49" cy="61" r="5.5" fill="${INK}"/><circle cx="71" cy="61" r="5.5" fill="${INK}"/><ellipse cx="60" cy="84" rx="12" ry="9" fill="#fff"/></g>`
};
const DREAM_ICONS={
  luna:`<path d="M58 22 A30 30 0 1 0 80 64 A24 24 0 1 1 58 22Z" fill="#FFE08A"/>`,
  estrella:starPath(50,52,28,'#FFE08A'),
  corazon:`<path d="M50 80 C22 62 16 46 26 36 C34 28 46 32 50 42 C54 32 66 28 74 36 C84 46 78 62 50 80Z" fill="#FF8FB1"/>`,
  arcoiris:`<path d="M18 70 A32 32 0 0 1 82 70" stroke="#E2574C" stroke-width="7" fill="none"/><path d="M25 70 A25 25 0 0 1 75 70" stroke="#FFC94D" stroke-width="7" fill="none"/><path d="M32 70 A18 18 0 0 1 68 70" stroke="#6CC07A" stroke-width="7" fill="none"/><path d="M39 70 A11 11 0 0 1 61 70" stroke="#5EC6FF" stroke-width="7" fill="none"/>`
};
function bubbleSVG(noisy,icon){
  if(noisy){let d='';for(let i=0;i<16;i++){const a=i/16*Math.PI*2,r=i%2?44:50;d+=(i?'L':'M')+(50+Math.cos(a)*r).toFixed(1)+' '+(50+Math.sin(a)*r).toFixed(1)}
    return `<svg viewBox="0 0 100 100"><path d="${d}Z" fill="#3B2E6E" stroke="#B9A6FF" stroke-width="3" stroke-linejoin="round" opacity=".92"/>${icon}</svg>`}
  return `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="#BFE8FF" opacity=".55" stroke="#fff" stroke-width="3"/><path d="M24 34 Q30 20 46 16" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".9"/>${icon}</svg>`;
}
function popB(n){n.style.pointerEvents='none';n.firstElementChild.classList.add('popping');setTimeout(()=>n.remove(),380)}
function L5(ctx){
  const {play}=ctx;const DUR=40,TARGET={x:640,y:450};
  const dawn=el(`<svg class="bg" viewBox="0 0 1280 720" preserveAspectRatio="xMidYMid slice" style="opacity:0;transition:opacity 3s;pointer-events:none"><rect width="1280" height="720" fill="url(#skyDawn)"/><circle class="sunr" cx="640" cy="560" r="80" fill="#FFC94D"/>${hill(500,30,1.2,.8,'#7CCB6A')}${hill(590,20,1.8,2.5,'#5DB97A')}</svg>`);
  play.appendChild(dawn);
  play.insertAdjacentHTML('beforeend',`<div class="abs" style="left:500px;top:470px;width:280px;height:120px"><svg viewBox="0 0 280 120"><path d="M30 110 Q0 110 6 84 Q10 60 40 62 Q46 30 86 34 Q110 6 150 24 Q190 10 214 40 Q258 38 262 72 Q284 86 270 104 Q262 112 240 110Z" fill="#fff" opacity=".95"/></svg></div>`);
  const lumi=place(el(`<div class="abs" style="width:180px">${lumiSVG({mood:'sleep',color:'#8EC9F0',acc:['gorro']})}</div>`),548,368);play.appendChild(lumi);
  const zz=place(el('<div class="zzz">z</div>'),690,360);play.appendChild(zz);
  const night=el(`<div class="abs" style="left:420px;top:118px;width:440px;height:56px;display:flex;align-items:center;gap:10px;background:rgba(255,244,222,.92);border-radius:999px;padding:6px 14px;box-shadow:0 5px 0 var(--papel2)"><span style="width:40px;height:40px">${ICON.moonI}</span><span style="flex:1;height:18px;border-radius:9px;background:#D9CDB6;overflow:hidden"><b id="nf" style="display:block;height:100%;width:0;background:linear-gradient(90deg,#7A6CFF,#FFC94D);border-radius:9px"></b></span><span style="width:40px;height:40px">${ICON.sun}</span></div>`);
  play.appendChild(night);const nf=night.querySelector('#nf');
  let t=0,spawnT=2.6,bubbles=[],sleep=5,hits=0,popped=0,state='play';
  ctx.meter(5,ICON.moonI,true);ctx.fill(5);
  function spawn(){
    const noisy=Math.random()<.66;const set=noisy?NOISE_ICONS:DREAM_ICONS;const k=pick(Object.keys(set));
    const side=pick(['l','r','t']);let x,y;
    if(side==='l'){x=-60;y=rand(180,380)}else if(side==='r'){x=1340;y=rand(180,520)}else{x=pick([rand(180,380),rand(900,1100)]);y=170}
    const n=el(`<div class="bubble5">${bubbleSVG(noisy,set[k])}</div>`);n.style.transform=`translate(${x}px,${y}px)`;play.appendChild(n);
    if(side==='t')n.firstElementChild.animate([{transform:'scale(0)'},{transform:'scale(1)'}],{duration:400,easing:'ease-out'});
    const b={n,noisy,x,y,ph:rand(0,6.28),sp:(side==='t'?55:rand(80,95))+t*.8};
    tapped(n,()=>{
      if(b.gone||state!=='play')return;
      if(b.noisy){b.gone=true;popped++;popB(n);SFX.softpop();sparkle(b.x,b.y,6);floatText(b.x,b.y-30,'¡Shh!');}
      else{ctx.errors++;SFX.oops();flash(n.firstElementChild,'wiggle',460);sayThrottled('Esa burbuja es un sueño bonito. ¡Déjala pasar!',2500)}
    });
    bubbles.push(b);
  }
  say('Revienta las burbujas oscuras de ruido. Las burbujas claras son sueños bonitos: ¡déjalas pasar!');
  loop(dt=>{
    if(state!=='play')return;
    t+=dt;nf.style.width=Math.min(100,t/DUR*100)+'%';
    spawnT-=dt;if(t<DUR-5&&spawnT<=0){spawn();spawnT=rand(1.25,1.7)-Math.min(.35,t/DUR*.4)}
    for(const b of bubbles){
      if(b.gone)continue;
      const dx=TARGET.x-b.x,dy=TARGET.y-b.y,d=Math.hypot(dx,dy);
      b.x+=dx/d*b.sp*dt;b.y+=dy/d*b.sp*dt;b.ph+=dt*3;
      b.n.style.transform=`translate(${b.x}px,${b.y+Math.sin(b.ph)*8}px)`;
      if(d<95){b.gone=true;popB(b.n);
        if(b.noisy){sleep--;hits++;ctx.fill(sleep);SFX.thud();flash(lumi,'shake',500);setLumi(lumi,{mood:'tired'});later(()=>state==='play'&&setLumi(lumi,{mood:'sleep'}),900);
          if(sleep<=0){fail();return}
          sayThrottled('¡Uy, un ruido! Toca las burbujas oscuras antes de que lleguen.',3500)}
        else{SFX.star(1);sparkle(TARGET.x,TARGET.y-60,6)}
      }
    }
    bubbles=bubbles.filter(b=>!b.gone);
    if(t>=DUR&&!bubbles.some(b=>b.noisy))morning();
  });
  function clearBubbles(){bubbles.forEach(b=>{b.gone=true;popB(b.n)});bubbles=[]}
  function fail(){
    state='fail';clearBubbles();setLumi(lumi,{mood:'sad',color:GRIS});zz.style.display='none';
    say('Lumi se despertó con tanto ruido. ¡No pasa nada! Intentemos otra vez.',{stay:true});
    const m=modal(`<div style="width:160px;margin:0 auto">${lumiSVG({mood:'sad',color:GRIS,acc:['gorro']})}</div><h2 style="font-size:46px">¡Casi lo logras!</h2><p>Revienta las burbujas oscuras antes de que lleguen a Lumi.</p><div class="row" style="margin-top:16px"><button class="btn verde" id="again">${ICON.replay} Intentar otra vez</button></div>`);
    $('#again',m).addEventListener('click',()=>{SFX.tap();closeModal();t=0;sleep=5;spawnT=2;hits=0;ctx.errors++;ctx.fill(5);setLumi(lumi,{mood:'sleep',color:'#8EC9F0'});zz.style.display='';state='play';say('¡Tú puedes! Revienta las burbujas oscuras.')});
  }
  function morning(){
    state='end';clearBubbles();ctx.errors+=hits;
    dawn.style.opacity='1';dawn.querySelector('.sunr').animate([{transform:'translateY(0)'},{transform:'translateY(-300px)'}],{duration:3200,fill:'forwards',easing:'ease-out'});
    later(()=>{zz.remove();setLumi(lumi,{mood:'happy',color:AZUL});lumi.classList.add('float');SFX.win();sparkle(640,420,20);
      const c=centerOf(lumi);talkBubble(c.x,c.y-90,'¡Ya descansé! ¡Vamos a jugar!',3600);
      speak('¡Ya descansé! ¡Vamos a jugar!',{pitch:1.6,rate:1.05}).then(()=>say('¡Buenos días! Lumi durmió toda la noche y despertó con energía para jugar.'))},2200);
    ctx.win(6000);
  }
}

/* Lentes para la nube Nubi (nivel 3) */
ACC.lentes=`<circle cx="80" cy="100" r="16" fill="none" stroke="${INK}" stroke-width="4"/><circle cx="122" cy="100" r="16" fill="none" stroke="${INK}" stroke-width="4"/><path d="M96 98 H106" stroke="${INK}" stroke-width="4"/>`;
/* ======================= NIVEL 3: Todos Pueden Jugar (función LAmigos) ======================= */
function LAmigos(ctx){
  const {play}=ctx;
  const mini=(svg,w)=>`<div style="width:${w}px">${svg}</div>`;
  const heart=`<div style="width:46px">${ICON.heart}</div>`;
  const Q=[
    {q:'Este es Saltarín. Es un conejo, no es una nube. ¿Puede jugar con todos?',
     good:['¡Sí! Todos juegan',`<div class="row" style="gap:4px;flex-wrap:nowrap;align-items:center">${mini(lumiSVG({mood:'happy'}),120)}${heart}${mini(saltarinSVG(),100)}</div>`],
     bad:['No, porque es diferente',`${mini(saltarinSVG({mood:'sad'}),126)}`],
     ok:'¡Muy bien! Ser diferente no está mal. Todos podemos jugar juntos.',why:'Mmm, ser diferente no es malo. Todos tienen derecho a jugar. ¡Intenta otra vez!'},
    {q:'Nubi usa lentes y algunos se ríen de ella. ¿Qué hacemos?',
     good:['La respetamos y jugamos con ella',`<div class="row" style="gap:4px;flex-wrap:nowrap">${mini(lumiSVG({mood:'happy',color:'#C7B8FF',front:['lentes']}),190)}${heart}</div>`],
     bad:['Nos reímos también',`${mini(sombraSVG(),170)}`],
     ok:'¡Eso es! Burlarse lastima. Todos merecemos respeto.',why:'Reírse de alguien lo pone triste. Mejor lo respetamos. ¡Intenta otra vez!'},
    {q:'Tito es muy pequeñito y no alcanza el columpio. ¿Qué hacemos?',
     good:['Lo ayudamos',`<div class="row" style="gap:6px;flex-wrap:nowrap;align-items:flex-end">${mini(lumiSVG({mood:'happy'}),130)}${mini(ICON_SWING.replace('class="ico"',''),70)}${mini(lumiSVG({mood:'happy',color:'#FFD84D'}),74)}</div>`],
     bad:['Lo dejamos solo',`${mini(lumiSVG({mood:'sad',color:'#FFD84D'}),130)}`],
     ok:'¡Muy bien! Lo ayudamos para que también pueda jugar.',why:'Si lo dejamos solo, se siente triste. Ayudar es de buenos amigos. ¡Intenta otra vez!'}
  ];
  let r=0;ctx.meter(4,ICON_AMIGOS);
  function round(){
    $$('.choice',play).forEach(c=>c.remove());
    const q=Q[r];const opts=shuffle([['good',q.good],['bad',q.bad]]);
    opts.forEach(([kind,[label,pic]],k)=>{
      const c=place(el(`<button class="choice" style="width:320px;height:310px"><div class="pic" style="height:200px">${pic}</div><div>${label}</div></button>`),300+k*380,170);
      play.appendChild(c);
      c.addEventListener('click',async()=>{
        if(c.dataset.used)return;
        if(kind==='good'){
          $$('.choice',play).forEach(x=>x.dataset.used='1');c.classList.add('right');SFX.good();const cc=centerOf(c);sparkle(cc.x,cc.y,12);r++;ctx.fill(r);
          try{await say(q.ok);await wait(400)}catch(e){return}
          if(r<Q.length)round();else ronda();
        }else{ctx.err(q.why);flash(c,'wiggle',460)}
      });
    });
    say(q.q+' Toca tu respuesta.');
  }
  function ronda(){
    $$('.choice',play).forEach(c=>c.remove());
    const C={x:590,y:320},RX=250,RY=140;
    const spots=[-90,-30,30,90,150,210].map(a=>({x:C.x+Math.cos(a*Math.PI/180)*RX,y:C.y+Math.sin(a*Math.PI/180)*RY,taken:false}));
    const cushion=['#FF8FB1','#FFC94D','#5EC6FF','#E2574C','#7A6CFF','#FFB02E'];
    spots.forEach((s,k)=>play.appendChild(place(el(`<div class="abs" style="width:120px;height:40px;margin:-20px 0 0 -60px;border-radius:50%;background:${cushion[k]};box-shadow:0 6px 0 rgba(0,0,0,.15)"></div>`),s.x,s.y)));
    const seat=(node,s,w,h)=>{s.taken=true;place(node,s.x-w/2,s.y-h+12)};
    const sitters=[[lumiSVG({mood:'happy'}),0],[lumiSVG({mood:'happy',color:'#FF9EC4',acc:['lazo']}),2],[lumiSVG({mood:'happy',color:'#8EE3B5',acc:['hoja']}),4]];
    sitters.forEach(([svg,k])=>{const n=el(`<div class="abs friend" style="width:110px">${svg}</div>`);play.appendChild(n);seat(n,spots[k],110,94)});
    const wait3=[{svg:saltarinSVG(),w:92,h:132,y:140},{svg:lumiSVG({mood:'happy',color:'#C7B8FF',front:['lentes']}),w:110,h:94,y:320},{svg:lumiSVG({mood:'happy',color:'#FFD84D'}),w:76,h:65,y:470}];
    let placed=0;
    wait3.forEach(f=>{
      const n=place(el(`<div class="abs friend" style="width:${f.w}px;height:${f.h}px">${f.svg}</div>`),1090,f.y);play.appendChild(n);
      makeDraggable(n,{onDrop:p=>{
        const s=spots.filter(s=>!s.taken).sort((a,b)=>Math.hypot(a.x-p.x,a.y-p.y)-Math.hypot(b.x-p.x,b.y-p.y))[0];
        if(!s||Math.hypot(s.x-p.x,s.y-p.y)>120)return false;
        n.classList.add('returning');seat(n,s,f.w,f.h);n.dataset.locked='1';placed++;SFX.pop();sparkle(s.x,s.y-50,8);floatText(s.x,s.y-90,'¡Bienvenido!');
        if(placed===3){
          ctx.fill(4);SFX.win();
          $$('.friend',play).forEach((x,k)=>x.firstElementChild.animate([{transform:'translateY(0)'},{transform:'translateY(-30px)'},{transform:'translateY(0)'}],{duration:700,iterations:5,delay:k*110,easing:'ease-in-out'}));
          later(()=>sparkle(C.x,C.y,24),300);
          say('¡Ahora todos están en la ronda! Ser diferentes nos hace especiales.');ctx.win(4200);
        }
        return true}});
    });
    say('¡Hagamos una ronda! Arrastra a cada amigo hasta un cojín para que nadie se quede fuera.');
  }
  round();
}

/* ======================= NIVEL 4: ¿Jugar o Descansar? (función LSenales) ======================= */
const TABLETA=`<svg viewBox="0 0 100 100"><rect x="14" y="20" width="72" height="56" rx="8" fill="#2E2A4F"/><rect x="21" y="27" width="58" height="42" rx="4" fill="#5EC6FF"/><circle cx="38" cy="46" r="8" fill="#FFC94D"/><path d="M50 62 L62 42 L74 62Z" fill="#6CC07A"/><path d="M8 12 L18 22 M92 12 L82 22 M50 4 V14" stroke="#E2574C" stroke-width="4" stroke-linecap="round"/></svg>`;
function LSenales(ctx){
  const {play}=ctx;
  const lumi=place(el(`<div class="abs" style="width:230px">${lumiSVG({mood:'neutral'})}</div>`),170,262);play.appendChild(lumi);
  const prop=place(el(`<div class="abs" style="width:170px;height:170px;display:grid;place-items:center"></div>`),430,320);play.appendChild(prop);
  const R=[
    {p:`<div style="width:150px">${ICON.sun}</div>`,mood:'happy',color:AZUL,lumi:'¡Tengo mucha energía!',q:'Es de día y Lumi brilla azul. ¿Qué necesita Lumi?',ok:'jugar',yes:'¡Sí! Cuando tenemos energía, es un buen momento para jugar.',why:'Lumi está azul y lleno de energía. ¡Es hora de jugar! Intenta otra vez.'},
    {p:`<div style="width:140px">${OBJ.pelota}</div>`,mood:'tired',color:GRIS,lumi:'Uf... jugué mucho y estoy cansado.',q:'Lumi corrió mucho y se puso gris. ¿Qué necesita ahora?',ok:'descansar',yes:'¡Muy bien! Cuando el cuerpo se cansa, necesita descansar un ratito.',why:'Lumi está gris y cansado. Si sigue jugando así, se puede lastimar. ¡Intenta otra vez!'},
    {p:`<div style="width:140px">${OBJ.libro}</div>`,mood:'happy',color:lumiColor(.8),lumi:'¡Ya terminé mi tarea!',q:'Lumi terminó su tarea y tiene energía. ¿Qué puede hacer ahora?',ok:'jugar',yes:'¡Eso es! Después de estudiar, también hay tiempo para jugar.',why:'Lumi ya terminó y tiene energía. ¡Ahora le toca jugar! Intenta otra vez.'},
    {p:`<div style="width:150px">${ICON.moonI}</div>`,mood:'tired',color:'#8EA6C8',lumi:'Tengo mucho sueño...',q:'Ya es de noche y a Lumi se le cierran los ojos. ¿Qué necesita?',ok:'descansar',yes:'¡Así es! En la noche dormimos para que el cuerpo recupere su energía.',why:'Es de noche y Lumi tiene sueño. Mañana podrá jugar. ¡Intenta otra vez!'},
    {p:`<div style="width:150px">${TABLETA}</div>`,mood:'tired',color:lumiColor(.4),lumi:'Me duelen los ojos de ver la pantalla.',q:'Lumi lleva mucho rato con la tableta. ¿Qué le conviene?',ok:'descansar',yes:'¡Muy bien! Los ojos y la mente también descansan de las pantallas.',why:'Mucho rato con pantallas cansa los ojos. Mejor un descanso. ¡Intenta otra vez!'}
  ];
  const OPT=[['jugar','Jugar',`<div style="width:130px">${OBJ.pelota}</div>`],['descansar','Descansar',`<div style="width:130px">${ICON.moonI}</div>`]];
  let r=0,busy=true;ctx.meter(R.length+1,ICON_BALANCE);
  const cards=OPT.map(([k,label,pic],n)=>{
    const c=place(el(`<button class="choice" style="width:250px;height:280px"><div class="pic" style="height:170px">${pic}</div><div style="font-size:34px">${label}</div></button>`),715+n*280,190);
    play.appendChild(c);
    c.addEventListener('click',async()=>{
      if(busy)return;const q=R[r];
      if(k===q.ok){
        busy=true;c.classList.add('right');SFX.good();const lc=centerOf(lumi);sparkle(lc.x,lc.y,8);r++;ctx.fill(r);
        if(k==='descansar')setLumi(lumi,{mood:'sleep',color:'#8EC9F0'});else{setLumi(lumi,{mood:'happy'});flash(lumi,'hop',620)}
        try{await say(q.yes);await wait(500)}catch(e){return}
        c.classList.remove('right');
        if(r<R.length)round();else vote();
      }else{ctx.err(q.why);flash(c,'wiggle',460)}
    });
    return c;
  });
  async function round(){
    const q=R[r];prop.innerHTML=q.p;prop.animate([{transform:'scale(0)'},{transform:'scale(1)'}],{duration:400,easing:'cubic-bezier(.3,1.5,.5,1)'});
    setLumi(lumi,{mood:q.mood,color:q.color});const lc=centerOf(lumi);$$('.tbub').forEach(b=>b.remove());talkBubble(lc.x,lc.y-95,q.lumi,3800);
    try{await speak(q.lumi,{pitch:1.6,rate:1.05})}catch(e){}
    busy=false;say(q.q);
  }
  function vote(){
    $$('.tbub').forEach(b=>b.remove());cards.forEach(c=>c.remove());prop.remove();
    place(lumi,1000,330);lumi.style.width='170px';setLumi(lumi,{mood:'happy',color:AZUL});
    play.appendChild(place(el(`<div class="abs bob" style="width:120px">${saltarinSVG()}</div>`),1110,270));
    [['pelota','la pelota'],['cometa','la cometa'],['escondidas','las escondidas']].forEach(([k,name],i)=>{
      const c=place(el(`<button class="choice" style="width:230px;height:250px"><div class="pic" style="width:140px;height:140px">${OBJ[k]}</div><div>${name[0].toUpperCase()+name.slice(1)}</div></button>`),180+i*260,170);
      play.appendChild(c);
      c.addEventListener('click',()=>{
        if(c.dataset.used)return;$$('.choice',play).forEach(x=>x.dataset.used='1');
        c.classList.add('right');ctx.fill(R.length+1);SFX.win();const cc=centerOf(c);sparkle(cc.x,cc.y,16);flash(lumi,'hop',620);
        say(`¡Tú decides! Lumi y Saltarín van a jugar a ${name}. Jugar con energía es mucho más divertido.`);ctx.win(4200);
      });
    });
    say('Lumi ya descansó y tiene energía. ¿A qué juegan Lumi y Saltarín? ¡Tú eliges!');
  }
  say('Mira cómo está Lumi y escucha lo que dice. Luego toca: ¿necesita jugar o descansar?');
  later(round,3600);
}
