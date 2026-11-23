/* ============ NIVELES ============ */
const LEVELS=[
  {title:'Un Lugar Seguro para Jugar',right:'Jugar en lugares seguros',ico:'shield',bg:bgGarden,th:[0,2],build:L1,skill:'Causa y efecto',mech:'Arrastrar y soltar',
   intro:'Lumi quiere salir a jugar al jardín, pero hay peligros. Los niños tienen derecho a jugar en lugares seguros. ¡Ayúdalo a proteger el jardín!',
   lesson:'Tienes derecho a jugar en lugares seguros.'},
  {title:'¡Hora de Recreo!',right:'Jugar para divertirse y aprender',ico:'smile',bg:bgMeadow,th:[3,6],build:LMemo,skill:'Memoria',mech:'Memorama',
   intro:'¡Llegó la hora del recreo! Jugar nos ayuda a pensar y a recordar. ¡Encuentra las parejas de juegos del parque!',
   lesson:'Jugar te ayuda a aprender y a ser feliz.'},
  {title:'Todos Pueden Jugar',right:'Nadie se queda fuera del juego',ico:'amigos',bg:bgMeadow,th:[1,3],build:LPelota,skill:'Empatía y turnos',mech:'Lanzar la pelota',
   intro:'Lumi y sus amigos juegan a la pelota. Saltarín es nuevo y está solito. ¡Pasa la pelota para que todos tengan su turno!',
   lesson:'Todos tienen derecho a jugar. ¡Nadie se queda fuera!'},
  {title:'¿Jugar o Descansar?',right:'Escuchar las señales del cuerpo',ico:'balance',bg:bgMeadow,th:[0,2],build:LEnergia,skill:'Autorregulación',mech:'Equilibrar la energía',
   intro:'Lumi quiere divertirse mucho, pero cuando se cansa se pone gris. Tú decides cuándo juega y cuándo descansa. ¡Llena la barra de diversión sin que se agote!',
   lesson:'Escucha a tu cuerpo: hay tiempo para jugar y tiempo para descansar.'},
  {title:'El Ritual de las Estrellas',right:'Una rutina para descansar',ico:'moonI',bg:bgCabinNight,th:[1,3],build:LSimon,skill:'Memoria y secuencias',mech:'Repetir la melodía',
   intro:'Lumi jugó todo el día y está muy cansado. Una rutina tranquila nos ayuda a dormir. ¡Repite la canción de las estrellas para que Lumi se duerma!',
   lesson:'Tienes derecho a descansar. Una rutina te ayuda a dormir mejor.'},
  {title:'El Sueño de Lumi',right:'Dormir bien para jugar mañana',ico:'zzz',bg:bgNight,th:[1,3],build:L5,skill:'Atención y reacción',mech:'Reventar burbujas',
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

/* ======================= NIVEL 1: Un Lugar Seguro para Jugar — Arrastrar escudos ======================= */
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
    sparkle(250,300,14);talk('lumi',lumi,'¡Gracias! ¡Ahora puedo jugar seguro!').then(()=>say('¡Qué divertido es jugar en un lugar seguro!'));
    ctx.win(4600);
  }
  ctx.meter(HZ.length,ICON.shieldS);
  say('Arrastra los escudos y ponlos encima de las cosas peligrosas.');
  spawnShield();resetIdle();
}

/* ======================= NIVEL 6: El Sueño de Lumi — Reventar burbujas (función L5) ======================= */
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
      talk('lumi',lumi,'¡Ya descansé! ¡Vamos a jugar!').then(()=>say('¡Buenos días! Lumi durmió toda la noche y despertó con energía para jugar.'))},2200);
    ctx.win(6000);
  }
}

/* Lentes para la nube Nubi */
ACC.lentes=`<circle cx="80" cy="100" r="16" fill="none" stroke="${INK}" stroke-width="4"/><circle cx="122" cy="100" r="16" fill="none" stroke="${INK}" stroke-width="4"/><path d="M96 98 H106" stroke="${INK}" stroke-width="4"/>`;

/* ======================= NIVEL 2: ¡Hora de Recreo! — Memorama ======================= */
const RESBALADERO=`<svg viewBox="0 0 100 100"><path d="M18 92 V22 M38 92 V22" stroke="#5B4B8A" stroke-width="6" stroke-linecap="round"/><path d="M18 40 H38 M18 56 H38 M18 72 H38" stroke="#5B4B8A" stroke-width="5"/><rect x="12" y="14" width="32" height="12" rx="5" fill="#FFC94D" stroke="${INK}" stroke-width="3"/><path d="M40 22 Q70 26 78 64 Q82 84 96 88" stroke="#E2574C" stroke-width="13" fill="none" stroke-linecap="round"/></svg>`;
function LMemo(ctx){
  const {play}=ctx;
  const FACES=[['columpio','el columpio',ICON_SWING.replace('class="ico"','')],['resbaladero','el resbaladero',RESBALADERO],['pelota','la pelota',OBJ.pelota],['cometa','la cometa',OBJ.cometa]];
  const deck=shuffle([...FACES,...FACES].map(f=>({k:f[0],name:f[1],svg:f[2]})));
  const CW=166,CH=196,GAP=24,X0=300,Y0=140;
  const lumi=place(el(`<div class="abs bob" style="width:150px">${lumiSVG({mood:'happy'})}</div>`),1090,250);
  const salt=place(el(`<div class="abs bob" style="width:96px;animation-delay:-.8s">${saltarinSVG()}</div>`),1120,400);
  play.append(lumi,salt);
  let open=[],lock=true,pairs=0;
  const cards=deck.map((d,i)=>{
    const c=place(el(`<button class="mcard flipped" aria-label="Tarjeta"><div class="inner"><div class="back"><svg viewBox="0 0 100 100">${starPath(50,46,26,'#FFE08A','#fff')}</svg></div><div class="front"><div style="width:120px">${d.svg}</div></div></div></button>`),X0+(i%4)*(CW+GAP),Y0+Math.floor(i/4)*(CH+GAP));
    c.style.width=CW+'px';c.style.height=CH+'px';play.appendChild(c);
    tapped(c,()=>{
      if(lock||d.done||open.includes(i))return;
      c.classList.add('flipped');SFX.flip();open.push(i);
      if(open.length<2)return;
      lock=true;const [a,b]=open;open=[];
      if(deck[a].k===deck[b].k){
        deck[a].done=deck[b].done=true;pairs++;ctx.fill(pairs);
        later(()=>{SFX.good();[a,b].forEach(j=>{cards[j].classList.add('matched');const cc=centerOf(cards[j]);sparkle(cc.x,cc.y,8)});
          talk('lumi',lumi,pick(['¡Yupi!','¡Qué divertido!','¡Esa es!']));lock=false;
          if(pairs===FACES.length)finish()},350);
      }else{
        ctx.errors++;
        later(()=>{cards[a].classList.remove('flipped');cards[b].classList.remove('flipped');lock=false},1000);
      }
    });
    return c;
  });
  ctx.meter(FACES.length,ICON.smile);
  say('¡Mira bien dónde está cada juego del parque! Luego busca las parejas.');
  later(()=>{cards.forEach(c=>c.classList.remove('flipped'));SFX.flip();lock=false;say('Ahora toca dos tarjetas para encontrar los juegos iguales.')},4200);
  function finish(){
    lock=true;
    later(()=>{SFX.win();cards.forEach((c,k)=>c.animate([{transform:'translateY(0)'},{transform:'translateY(-24px)'},{transform:'translateY(0)'}],{duration:500,delay:k*70}));
      say('¡Muy bien! Jugar a recordar entrena tu memoria y es muy divertido.');ctx.win(3400)},1300);
  }
}

/* ======================= NIVEL 3: Todos Pueden Jugar — Pasa la pelota ======================= */
function LPelota(ctx){
  const {play}=ctx;
  const lumi=place(el(`<div class="abs" style="width:150px">${lumiSVG({mood:'happy'})}</div>`),565,452);play.appendChild(lumi);
  const F=[
    {n:'Saltarín',who:'saltarin',svg:saltarinSVG({mood:'sad'}),w:96,h:138,x:110,y:250,salt:true},
    {n:'Nubi',who:'amigo',svg:lumiSVG({mood:'happy',color:'#C7B8FF',front:['lentes']}),w:130,h:111,x:330,y:150},
    {n:'Tito',who:'amigo',svg:lumiSVG({mood:'happy',color:'#FFD84D'}),w:84,h:72,x:605,y:150},
    {n:'Bru',who:'amigo',svg:lumiSVG({mood:'happy',color:'#8EE3B5',acc:['hoja']}),w:130,h:111,x:850,y:150},
    {n:'Pip',who:'amigo',svg:lumiSVG({mood:'happy',color:'#FF9EC4',acc:['lazo']}),w:130,h:111,x:1060,y:290}
  ];
  F.forEach(f=>{
    f.node=place(el(`<div class="abs" style="width:${f.w}px;height:${f.h}px">${f.svg}<div class="nname" style="left:${f.w/2}px;top:${f.h+6}px">${f.n}</div><div class="turno" style="left:${f.w-20}px;top:-14px">${ICON.star}</div></div>`),f.x,f.y);
    play.appendChild(f.node);
  });
  const BALL={x:640,y:440};
  const ball=place(el(`<div class="abs" style="width:66px;height:66px;margin:-33px 0 0 -33px;z-index:6;pointer-events:none">${OBJ.pelota}</div>`),BALL.x,BALL.y);play.appendChild(ball);
  const aim=el(`<svg class="bg" viewBox="0 0 1280 720" style="pointer-events:none;z-index:5"><line id="aimL" x1="0" y1="0" x2="0" y2="0" stroke="#fff" stroke-width="8" stroke-dasharray="4 18" stroke-linecap="round" opacity="0"/></svg>`);play.appendChild(aim);
  const aimL=aim.querySelector('#aimL');
  const hand=place(el(`<div class="abs swipehint" style="width:70px;height:70px;pointer-events:none;z-index:7"><svg viewBox="0 0 64 64"><path d="M32 58 V22 M18 34 L32 18 L46 34" stroke="#fff" stroke-width="9" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M32 58 V22 M18 34 L32 18 L46 34" stroke="#2E2A4F" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg></div>`),605,330);
  play.appendChild(hand);
  const zone=place(el(`<div class="abs" style="width:340px;height:300px;cursor:grab;touch-action:none;z-index:8"></div>`),470,330);play.appendChild(zone);
  let busy=false,start=null,turns=0;
  const ang=(a,b)=>Math.atan2(b.y-a.y,b.x-a.x);
  const diff=(a,b)=>{let d=Math.abs(a-b)%(2*Math.PI);return d>Math.PI?2*Math.PI-d:d};
  zone.addEventListener('pointerdown',e=>{if(busy)return;e.preventDefault();ac();start=stagePt(e);try{zone.setPointerCapture(e.pointerId)}catch(_){}});
  zone.addEventListener('pointermove',e=>{if(!start)return;const p=stagePt(e);const L=Math.hypot(p.x-start.x,p.y-start.y);if(L<10)return;
    const a=ang(start,p);aimL.setAttribute('x1',BALL.x);aimL.setAttribute('y1',BALL.y);aimL.setAttribute('x2',BALL.x+Math.cos(a)*Math.min(320,L*2.2));aimL.setAttribute('y2',BALL.y+Math.sin(a)*Math.min(320,L*2.2));aimL.setAttribute('opacity','.9')});
  const end=e=>{
    if(!start)return;const p=stagePt(e);const s=start;start=null;aimL.setAttribute('opacity','0');
    const L=Math.hypot(p.x-s.x,p.y-s.y);
    if(L<28){sayThrottled('Desliza el dedo desde la pelota hacia un amigo.',2500);return}
    const a=ang(s,p);
    let best=null,bd=9;
    F.forEach(f=>{const c=centerOf(f.node);const d=diff(a,ang(BALL,c));if(d<bd){bd=d;best=f}});
    if(best&&bd<.5)throwTo(best);else miss(a);
  };
  zone.addEventListener('pointerup',end);zone.addEventListener('pointercancel',()=>{start=null;aimL.setAttribute('opacity','0')});
  function fly(to,ms=700){
    const dx=to.x-BALL.x,dy=to.y-BALL.y;
    return ball.animate([{transform:'translate(0,0) scale(1)'},{transform:`translate(${dx/2}px,${dy/2-140}px) scale(1.25)`,offset:.5},{transform:`translate(${dx}px,${dy}px) scale(1)`}],{duration:ms,easing:'ease-in-out',fill:'forwards'}).finished;
  }
  async function throwTo(f){
    busy=true;hand.remove();SFX.throw();
    const c=centerOf(f.node);
    try{await fly({x:c.x,y:c.y-10});}catch(e){return}
    if(ctx.done)return;
    SFX.pop();f.node.firstElementChild.animate([{transform:'translateY(0)'},{transform:'translateY(-30px)'},{transform:'translateY(0)'}],{duration:420});
    if(!f.played){
      f.played=true;turns++;ctx.fill(turns);f.node.classList.add('jugo');sparkle(c.x,c.y,10);
      if(f.salt){f.node.firstElementChild.outerHTML=saltarinSVG();await talk('saltarin',f.node,'¡Gracias por invitarme!');}
      else await talk(f.who,f.node,pick(['¡Gracias!','¡Mi turno!','¡Qué divertido!']));
    }else{
      ctx.errors++;SFX.oops();await say(`${f.n} ya tuvo su turno. ¿Quién falta por jugar?`);
    }
    if(ctx.done)return;
    SFX.throw();
    try{await ball.animate([{transform:`translate(${c.x-BALL.x}px,${c.y-10-BALL.y}px)`},{transform:`translate(${(c.x-BALL.x)/2}px,${(c.y-BALL.y)/2-140}px) scale(1.25)`,offset:.5},{transform:'translate(0,0)'}],{duration:700,easing:'ease-in-out',fill:'forwards'}).finished}catch(e){return}
    flash(lumi,'hop',620);
    if(turns===F.length)return finish();
    busy=false;
  }
  async function miss(a){
    busy=true;SFX.throw();
    try{await fly({x:BALL.x+Math.cos(a)*260,y:BALL.y+Math.sin(a)*260},600);}catch(e){return}
    sayThrottled('¡Casi! Desliza la pelota justo hacia un amigo.',2000);
    try{await ball.animate([{transform:`translate(${Math.cos(a)*260}px,${Math.sin(a)*260}px)`},{transform:'translate(0,0)'}],{duration:600,easing:'ease-out',fill:'forwards'}).finished}catch(e){return}
    busy=false;
  }
  function finish(){
    SFX.win();const all=[lumi,...F.map(f=>f.node)];
    all.forEach((n,k)=>n.firstElementChild.animate([{transform:'translateY(0)'},{transform:'translateY(-40px)'},{transform:'translateY(0)'}],{duration:600,iterations:4,delay:k*90,easing:'ease-in-out'}));
    sparkle(640,330,24);
    say('¡Todos jugaron! Cuando todos tienen su turno, el juego es más divertido.');ctx.win(4200);
  }
  ctx.meter(F.length,ICON_AMIGOS);
  say('Desliza la pelota hacia un amigo para pasársela. ¡Que todos tengan su turno, también Saltarín, que está solito!');
}

/* ======================= NIVEL 4: ¿Jugar o Descansar? — Equilibrio de energía ======================= */
function LEnergia(ctx){
  const {play}=ctx;
  play.insertAdjacentHTML('beforeend',`<div class="abs" style="left:182px;top:128px;width:96px;text-align:center;font-family:var(--display);font-size:24px;color:#fff;-webkit-text-stroke:6px var(--noche);paint-order:stroke fill">Energía</div>
    <div class="abs ebar" style="left:196px;top:166px;width:68px;height:360px"><div class="efill" id="efill"></div><div class="emark" style="bottom:25%"></div></div>`);
  const efill=$('#efill',play);
  const cushion=place(el(`<div class="abs" style="width:300px;height:70px;border-radius:50%;background:#7A6CFF;box-shadow:0 8px 0 #5B4B8A;opacity:0;transition:opacity .4s"></div>`),430,470);
  const lumi=place(el(`<div class="abs" style="width:220px">${lumiSVG({mood:'happy',color:lumiColor(.55)})}</div>`),470,280);
  const ball=place(el(`<div class="abs" style="width:80px;height:80px">${OBJ.pelota}</div>`),720,440);
  const zz=place(el('<div class="zzz" style="display:none">z</div>'),660,280);
  play.append(cushion,lumi,ball,zz);
  const bPlay=place(el(`<button class="choice ebtn" style="width:290px;height:160px;flex-direction:row;gap:16px"><div style="width:90px">${OBJ.pelota}</div><div style="font-size:38px">Jugar</div></button>`),900,170);
  const bRest=place(el(`<button class="choice ebtn" style="width:290px;height:160px;flex-direction:row;gap:16px"><div style="width:90px">${ICON.moonI}</div><div style="font-size:38px">Descansar</div></button>`),900,370);
  play.append(bPlay,bRest);
  let energy=55,fun=0,mode=null,warned=false,fullTold=false,fullT=0,hinted=false,anim=null,running=true;
  function setMode(m){
    mode=m;bPlay.classList.toggle('right',m==='play');bRest.classList.toggle('right',m==='rest');
    anim&&anim.cancel();anim=null;
    if(m==='play'){cushion.style.opacity='0';zz.style.display='none';
      anim=ball.animate([{transform:'translateY(0)'},{transform:'translateY(-150px)'},{transform:'translateY(0)'}],{duration:800,iterations:Infinity,easing:'ease-in-out'});
      lumi.firstElementChild.animate([{transform:'translateY(0)'},{transform:'translateY(-40px)'},{transform:'translateY(0)'}],{duration:800,iterations:Infinity,easing:'ease-in-out',delay:400});}
    else{lumi.firstElementChild.getAnimations().forEach(a=>a.cancel());cushion.style.opacity='1';zz.style.display='';setLumi(lumi,{mood:'sleep'})}
  }
  tapped(bPlay,()=>{
    if(!running||mode==='play')return;
    if(energy<15){ctx.errors++;SFX.oops();talk('lumi',lumi,'Estoy muy cansado para jugar...');return}
    SFX.tap();warned=false;setMode('play');
  });
  tapped(bRest,()=>{
    if(!running||mode==='rest')return;
    if(energy>90){ctx.errors++;SFX.oops();talk('lumi',lumi,'¡Pero si tengo mucha energía!').then(()=>running&&mode!=='rest'&&say('Lumi tiene mucha energía. ¡Es un buen momento para jugar!'));return}
    SFX.tap();fullTold=false;fullT=0;hinted=false;setMode('rest');
  });
  ctx.meter(10,ICON.smile);
  say('Toca Jugar para que Lumi se divierta. Cuando se ponga gris y cansado, toca Descansar. ¡Llena la barra de diversión!');
  loop(dt=>{
    if(!running)return false;
    if(mode==='play'){
      energy-=8*dt;fun+=(energy>22?3.4:.8)*dt;
      setLumi(lumi,{mood:energy>25?'happy':'tired'});
      if(energy<=25&&!warned){warned=true;talk('lumi',lumi,'Estoy muy cansado...').then(()=>{if(running&&mode==='play')say('Lumi se puso gris. ¿Qué necesita ahora?')})}
      if(energy<=0){energy=0;ctx.errors++;SFX.thud();flash(lumi,'shake',500);setMode('rest');say('¡Uy! Lumi jugó tanto que se agotó. Ahora tiene que descansar.')}
    }else if(mode==='rest'){
      energy=Math.min(100,energy+15*dt);
      if(energy>=100){fullT+=dt;
        if(!fullTold){fullTold=true;setLumi(lumi,{mood:'happy'});zz.style.display='none';talk('lumi',lumi,'¡Ya descansé! ¡Quiero jugar!')}
        if(fullT>5&&!hinted){hinted=true;say('Lumi ya tiene energía. ¡Puede volver a jugar!')}}
    }
    efill.style.height=energy+'%';efill.style.background=energy>60?'#6CC07A':energy>25?'#FFC94D':'#E2574C';
    setLumi(lumi,{color:lumiColor(energy/100)});
    ctx.fill(Math.floor(fun/10));
    if(fun>=100){running=false;finish()}
  });
  function finish(){
    anim&&anim.cancel();lumi.firstElementChild.getAnimations().forEach(a=>a.cancel());
    bPlay.classList.remove('right');bRest.classList.remove('right');
    SFX.win();setLumi(lumi,{mood:'wow'});sparkle(580,340,20);
    talk('lumi',lumi,'¡Me divertí muchísimo!').then(()=>say('¡Excelente! Jugaste y descansaste a tiempo. Así se escucha al cuerpo.'));
    ctx.win(5600);
  }
}

/* ======================= NIVEL 5: El Ritual de las Estrellas — Repite la canción ======================= */
function LSimon(ctx){
  const {play}=ctx;
  const lumi=place(el(`<div class="abs" style="width:170px">${lumiSVG({mood:'tired',color:lumiColor(.3)})}</div>`),430,360);play.appendChild(lumi);
  play.appendChild(place(el(`<div class="abs" style="width:470px;height:150px;pointer-events:none"><svg viewBox="0 0 470 150"><path d="M10 30 Q235 0 460 30 L470 140 Q235 156 0 140Z" fill="#FF9EC4" stroke="#fff" stroke-width="6"/>${[60,140,220,300,380].map(x=>`<circle cx="${x}" cy="80" r="12" fill="#fff" opacity=".7"/>`).join('')}<path d="M10 30 Q235 0 460 30" stroke="#E2779F" stroke-width="10" fill="none"/></svg></div>`),385,450));
  const dark=el('<div class="dark"></div>');play.appendChild(dark);
  const box=place(el(`<div class="abs" style="width:120px;height:100px;z-index:6"><svg viewBox="0 0 120 100" style="overflow:visible"><rect x="8" y="40" width="104" height="56" rx="10" fill="#C2416E" stroke="#3A2418" stroke-width="4"/><path d="M4 40 Q60 10 116 40Z" fill="#E2779F" stroke="#3A2418" stroke-width="4"/>${starPath(60,68,14,'#FFC94D')}<path d="M112 64 H124 V52" stroke="#3A2418" stroke-width="5" fill="none"/></svg></div>`),878,400);
  play.appendChild(box);
  const COL=['#FFE08A','#FF9EC4','#9AD9FF','#B9F2A1'];const NOTES=[NOTE.C5,NOTE.E5,NOTE.G5,NOTE.A5];
  const POS=[[250,150],[470,100],[690,100],[910,150]];
  const stars=COL.map((c,i)=>{
    const s=place(el(`<button class="sstar" aria-label="Estrella ${i+1}" style="width:130px;height:130px;--sc:${c}"><svg viewBox="0 0 100 100" style="width:100%;height:100%">${starPath(50,53,46,c,'#fff')}</svg></button>`),POS[i][0],POS[i][1]);
    play.appendChild(s);return s;
  });
  let seq=[],pos=0,round=0,busy=true;
  const LENS=[2,3,4];
  const light=(i,ms=420)=>{const s=stars[i];s.classList.add('lit');SFX.note(NOTES[i]);setTimeout(()=>s.classList.remove('lit'),ms)};
  async function playSeq(){
    busy=true;box.classList.add('glowbox');
    try{await wait(700);for(const i of seq){light(i,480);await wait(720)}}catch(e){return}
    box.classList.remove('glowbox');busy=false;pos=0;say('¡Tu turno!');
  }
  function newRound(){while(seq.length<LENS[round])seq.push(Math.floor(Math.random()*4));playSeq()}
  stars.forEach((s,i)=>tapped(s,async()=>{
    if(busy)return;light(i,300);
    if(i===seq[pos]){
      pos++;
      if(pos===seq.length){
        busy=true;round++;ctx.fill(round);SFX.good();const lc=centerOf(lumi);sparkle(lc.x,lc.y-20,8);
        dark.style.opacity=[0,.2,.33,.46][round];setLumi(lumi,{color:lumiColor(.3+round*.18),mood:round>=2?'sleep':'tired'});
        if(round<LENS.length){try{await say(round===1?'¡Muy bien! Ahora la canción es un poquito más larga.':'¡Qué bonito! Una más y Lumi se dormirá.');await wait(300)}catch(e){return}newRound()}
        else finish();
      }
    }else{
      busy=true;ctx.errors++;SFX.oops();
      try{await say('Casi. Escuchemos la canción otra vez.');}catch(e){}
      playSeq();
    }
  }));
  ctx.meter(LENS.length,ICON.moonI,true);
  dark.style.opacity='.12';
  (async()=>{
    try{await say('Ya apagamos las luces y la tableta. Ahora mira y escucha qué estrellas suenan, y luego tócalas en el mismo orden.')}catch(e){}
    if(!ctx.done)newRound();
  })();
  function finish(){
    const song=[...seq,...seq.slice().reverse()];
    song.forEach((i,k)=>{later(()=>light(i,380),400+k*430)});
    setLumi(lumi,{mood:'sleep',color:'#8EC9F0'});
    later(()=>talk('lumi',lumi,'Buenas noches...').then(()=>say('Shhh. Lumi ya duerme. Una rutina tranquila nos ayuda a descansar.')),400+song.length*430);
    for(let k=0;k<3;k++)later(()=>{const z=el('<div class="zzz">z</div>');place(z,560,350);play.appendChild(z)},900+song.length*430+k*900);
    ctx.win(400+song.length*430+5200);
  }
}
