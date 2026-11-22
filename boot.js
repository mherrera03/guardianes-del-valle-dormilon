/* ============ ARRANQUE ============ */
function start(data){
  if(data&&Array.isArray(data.stars)){G=Object.assign(JSON.parse(JSON.stringify(DEFAULT)),data);fixStars()}else loadSaved();
  document.body.insertAdjacentHTML('afterbegin',GLOBAL_DEFS);
  stage.appendChild(narr);makeGrain();
  const rh=el(`<div id="rotHint" class="rot-hint">${ICON.rotate}<div>Gira tu teléfono para ver el juego más grande</div><button class="btn sm">Jugar así</button></div>`);
  document.body.appendChild(rh);rh.querySelector('button').addEventListener('click',()=>{rh.dataset.dismissed='1';rh.classList.remove('show')});
  fit();
  try{window.claude?.hot?.snapshot?.(()=>G)}catch(e){}
  go(splash);
}
if(window.claude?.hot?.ready)window.claude.hot.ready(start);else start(window.claude?.hot?.data??{});
