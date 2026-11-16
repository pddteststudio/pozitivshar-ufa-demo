import React from 'react';

const paths = {
  arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
  chevron: <path d="m6 9 6 6 6-6"/>,
  'arrow-up-right': <><path d="M6 18 18 6"/><path d="M9 6h9v9"/></>,
  close: <><path d="M5 5 19 19M19 5 5 19"/></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
  phone: <path d="M7 3h4l1.1 4.2-2.3 1.6a14 14 0 0 0 5.4 5.4l1.6-2.3L21 13v4c0 2-1.6 4-3.8 4A14.2 14.2 0 0 1 3 6.8C3 4.6 5 3 7 3Z"/>,
  pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.6"/></>,
  sparkles: <><path d="m12 2 2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2Z"/><path d="m19 2 .8 2.2L22 5l-2.2.8L19 8l-.8-2.2L16 5l2.2-.8Z"/></>,
  balloon: <><path d="M12 3c-5 0-8 4-8 9 0 5 4 8 8 10 4-2 8-5 8-10 0-5-3-9-8-9Z"/><path d="m10 21 2 2 2-2"/></>,
  heart: <path d="M20.8 8.5c0 4.8-8.8 11.4-8.8 11.4S3.2 13.3 3.2 8.5A5.4 5.4 0 0 1 12 4.6a5.4 5.4 0 0 1 8.8 3.9Z"/>,
  cake: <><path d="M4 11h16v9H4zM4 15h16"/><path d="M8 7v4m4-5v5m4-4v4"/><path d="M8 4h.01M12 3h.01M16 4h.01"/></>,
  gift: <><rect x="3" y="9" width="18" height="12" rx="2"/><path d="M2 9h20M12 9v12"/><path d="M12 9C7 9 6 6 8.5 4.5c2.5-1.5 3.5 2 3.5 4.5Zm0 0c5 0 6-3 3.5-4.5S12 7 12 9Z"/></>,
  check: <path d="m5 12 4.5 4.5L19 7"/>,
  star: <path d="m12 3 2.8 5.9 6.5.9-4.7 4.5 1.1 6.5-5.7-3-5.7 3 1.1-6.5L2.7 9.8l6.5-.9Z"/>,
  bag: <><path d="M5 9h14l-1 12H6L5 9Z"/><path d="M9 10V7a3 3 0 0 1 6 0v3"/></>,
  truck: <><path d="M3 7h11v11H3zM14 10h4l3 4v4h-7"/><circle cx="7" cy="19" r="2"/><circle cx="18" cy="19" r="2"/></>,
  layers: <><path d="m12 3 9 5-9 5-9-5 9-5ZM3 12l9 5 9-5M3 16l9 5 9-5"/></>,
  clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
  info: <><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.4"/></>,
  copy: <><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/></>,
  plus: <path d="M12 4v16M4 12h16"/>,
  minus: <path d="M4 12h16"/>,
  search: <><circle cx="11" cy="11" r="7"/><path d="m16.5 16.5 4 4"/></>,
  'message-circle': <path d="M20 11.5a8.5 8.5 0 0 1-8.5 8.5 9 9 0 0 1-4-.8L3 21l1.8-4.4a8.5 8.5 0 1 1 15.2-5.1Z"/>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18"/></>,
  'external-link': <><path d="M10 5H5v14h14v-5"/><path d="M13 4h7v7M20 4l-9 9"/></>,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/></>,
  telegram: <><path d="m3 11.5 17.7-7-3.5 15-5-4.2-3.1 3 .4-5L20.7 4.5 8.8 13.3 3 11.5Z"/></>,
  shield: <><path d="M12 3 20 6v5c0 5-3.4 8.1-8 10-4.6-1.9-8-5-8-10V6Z"/><path d="m8.5 11.5 2.5 2.5 4.5-4.5"/></>,
  quote: <path d="M10 7H5v7h5l-3 4M20 7h-5v7h5l-3 4"/>,
};

export function Icon({name, size=20, strokeWidth=1.75, className='', ...rest}) {
  return <svg {...rest} className={`icon ${className}`} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">{paths[name] || paths.sparkles}</svg>;
}

export function Flower({size=30, color='currentColor', className=''}) {
  return <svg className={className} width={size} height={size} viewBox="0 0 60 60" aria-hidden="true" focusable="false"><g fill={color}><ellipse cx="30" cy="14" rx="9" ry="13"/><ellipse cx="30" cy="46" rx="9" ry="13"/><ellipse cx="14" cy="30" rx="13" ry="9"/><ellipse cx="46" cy="30" rx="13" ry="9"/><ellipse cx="19" cy="19" rx="9" ry="12" transform="rotate(-45 19 19)"/><ellipse cx="41" cy="41" rx="9" ry="12" transform="rotate(-45 41 41)"/><ellipse cx="41" cy="19" rx="9" ry="12" transform="rotate(45 41 19)"/><ellipse cx="19" cy="41" rx="9" ry="12" transform="rotate(45 19 41)"/></g><circle cx="30" cy="30" r="9" fill="#FFEFBE"/></svg>;
}

const balloonPositions = [
  [-82,-42,-9],[-49,-84,-6],[-11,-46,5],[27,-90,7],[63,-51,11],[-69,7,-9],[-23,8,0],[24,1,8],[75,11,7],[-46,-8,-4],[3,-110,0],[-92,-99,-15],[92,-105,16],[-5,-4,3],[48,-22,-3],[8,-40,2],[-38,-125,-8],[40,-126,7],[89,-15,5],[-85,-21,-6],[61,-132,11],[-62,-120,-7],[-14,-128,-1]
];

function StringLine({x,y,base=230,offset=0}) {
  return <path d={`M${x} ${y} Q${x+offset*0.4} ${Math.round((y+base)/2)} ${190+offset} ${base}`} fill="none" stroke="#9C829C" strokeWidth="1.1" opacity=".7"/>;
}

function LatexBalloon({x, y, fill, id, rotate=0, scale=1, glossy=false, i=0, cls=''}) {
  const gradient = `${id}-grad-${i}`;
  return <g className={cls} transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}>
    <defs><radialGradient id={gradient} cx="32%" cy="25%" r="92%"><stop offset="0%" stopColor="#FFFFFF" stopOpacity={glossy ? '.88' : '.43'}/><stop offset="38%" stopColor={fill} stopOpacity="1"/><stop offset="100%" stopColor={fill} stopOpacity="1"/></radialGradient></defs>
    <path d="M0 26 Q-27 54 -2 54 L0 64 2 54 Q27 54 0 26Z" fill={fill}/>
    <path d="M0-49 C-29-49-39-22-34 4c3 24 20 40 34 53C14 44 31 28 34 4c5-26-5-53-34-53Z" fill={`url(#${gradient})`}/>
    <ellipse cx="-14" cy="-29" rx="6" ry="15" transform="rotate(30 -14 -29)" fill="#fff" opacity=".33"/>
    <path d="M0 57q-3 3-6 9m6-9q3 3 7 9" fill="none" stroke={fill} strokeWidth="1.6"/>
  </g>;
}

function HeartFoil({x,y,fill,scale=1}) {
  return <g transform={`translate(${x} ${y}) scale(${scale})`}>
    <path d="M0 28C-14 12-42-3-42-25c0-18 23-29 42-6 19-23 42-12 42 6 0 22-28 37-42 53Z" fill={fill}/>
    <path d="M0 28C-14 12-42-3-42-25c0-18 23-29 42-6 19-23 42-12 42 6 0 22-28 37-42 53Z" fill="none" stroke="white" strokeOpacity=".65" strokeWidth="2"/>
    <path d="M-27-23c-6 2-7 10-4 16" stroke="white" strokeWidth="6" strokeLinecap="round" strokeOpacity=".45" fill="none"/>
    <path d="M0 29v12" stroke={fill} strokeWidth="2"/>
  </g>;
}

function StarFoil({x,y,fill,scale=1}) {
  return <g transform={`translate(${x} ${y}) scale(${scale})`}>
    <path d="M0-50 14-17 50-14 23 9 32 44 0 26-32 44-23 9-50-14-14-17Z" fill={fill} stroke="white" strokeOpacity=".55" strokeWidth="2"/>
    <path d="M0-31 7-12 24-9" stroke="white" strokeOpacity=".55" strokeWidth="6" strokeLinecap="round" fill="none"/>
    <path d="M0 27v19" stroke={fill} strokeWidth="2"/>
  </g>;
}

function Confetti({color='#F29BBB', cx=200, cy=150, count=12, spread=145, seed=0}) {
  return <g aria-hidden="true">{Array.from({length:count},(_,i)=>{
    const a=(i*137.5+seed*22)*Math.PI/180;
    const r=spread*(.42+((i*13+7)%13)/20);
    const x=cx+Math.cos(a)*r, y=cy+Math.sin(a)*r*.78;
    return <g key={i} transform={`translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${i*31})`} opacity={i%3===0?.8:.6}>
      {i%4===0?<path d="M-4 0h8M0-4v8" stroke={color} strokeWidth="2" strokeLinecap="round"/>:<circle r={i%3===0?3:2} fill={i%3===0?'#F8D77A':color}/>}
    </g>;
  })}</g>;
}

export function ProductArt({product, id, className=''}) {
  const pal = product.palette;
  const type = product.art;
  const small = ['basic','chrome','heart','star'].includes(type);
  const positions = small ? [[0,-35,0],[-77,20,-8],[77,24,9]] : [[-85,16,-12],[-52,-45,-7],[-14,-9,-2],[22,-59,8],[56,-6,8],[81,47,12],[-50,48,-7],[9,47,0]];
  const count = type==='big'?12:(small?3:7);
  const simpleBalloons=positions.slice(0,count).map(([dx,dy,rot],i)=>{
    const x=200+dx, y=134+dy;
    return <g key={i}>
      <StringLine x={x} y={y+54} base={294} offset={dx/4}/>
      <LatexBalloon x={x} y={y} fill={pal[i%pal.length]} glossy={type==='chrome'} id={`${id}-p`} rotate={rot} scale={small?1.05:.78} i={i}/>
    </g>;
  });
  const decoration = type==='heart'?<HeartFoil x={200} y={127} fill={pal[0]} scale={1.52}/>
  :type==='star'?<StarFoil x={200} y={132} fill={pal[0]} scale={1.36}/>
  :type==='number'?<g transform="translate(200 143)"><text x="0" y="35" textAnchor="middle" fontFamily="ui-rounded,system-ui,sans-serif" fontSize="136" fontWeight="950" fill={pal[0]} stroke="#FFF6E8" strokeWidth="2" paintOrder="stroke">{product.number}</text><path d="M0 49v90" stroke="#9C829C" strokeWidth="1.5"/></g>
  :type==='unicorn'?<g transform="translate(205 128)"><path d="M0-84-16-36h32Z" fill="#E7C26F"/><circle cy="0" r="52" fill="#FFEDF8" stroke="#D5ACDB" strokeWidth="2"/><path d="M-27-31-49-54l1 31M27-31 49-54l-1 31" fill="#ECA4CD"/><path d="M-28-1q7-8 14 0m28 0q7-8 14 0" fill="none" stroke="#855D89" strokeLinecap="round" strokeWidth="4"/><circle cx="-7" cy="16" r="4" fill="#EC9FB5"/><circle cx="7" cy="16" r="4" fill="#EC9FB5"/><path d="M-34-40Q0-68 30-44" stroke="#B9A2DF" strokeWidth="9" fill="none"/></g>
  :type==='cat'?<g transform="translate(202 126)"><path d="M-50-30-40-75l36 21 36-21 15 45" fill="#FFDFEB"/><circle cy="0" r="50" fill="#FFEBF3" stroke="#DEB9DF" strokeWidth="2"/><path d="M0-93-13-52h26Z" fill="#E8C07E"/><ellipse cx="-18" cy="0" rx="4" ry="6" fill="#665071"/><ellipse cx="18" cy="0" rx="4" ry="6" fill="#665071"/><path d="m-5 14 5 4 5-4M-27 14l-18-3m18 9-18 2m72-8 18-3m-18 9 18 2" fill="none" stroke="#90718C" strokeWidth="2" strokeLinecap="round"/></g>
  :type==='robot'?<g transform="translate(204 126)"><path d="m0-61 45 27v55L0 54l-45-33v-55Z" fill="#5F8BCE" stroke="#FFFFFF" strokeWidth="4"/><path d="m-27-6 15-8 15 8-15 8Zm24 0 15-8 15 8-15 8" fill="#F2D063"/><path d="M-17 22h34" stroke="#172D55" strokeWidth="8" strokeLinecap="round"/><path d="M-8-58 8-37-3-36 14-13" fill="none" stroke="#F2D063" strokeWidth="7"/></g>
  :type==='football'?<g transform="translate(204 123)"><circle r="54" fill="white" stroke="#56785C" strokeWidth="3"/><path d="m0-18 20 15-7 24h-26l-7-24Z" fill="#263B32"/><path d="M0-18V-45m20 42 25-12M13 21l14 24m-40-24-14 24m7-48-25-12" stroke="#263B32" strokeWidth="9"/></g>
  :type==='box'?<g transform="translate(205 155)"><rect x="-72" y="-15" width="144" height="95" rx="5" fill="#F2C3D3"/><rect x="-82" y="-31" width="164" height="27" rx="4" fill="#E69CBB"/><path d="M-15-31V80H15V-31" fill="#FAE0EA"/><path d="M0-32C-14-74-52-76-43-53c6 13 30 20 43 21Zm0 0C14-74 52-76 43-53c-6 13-30 20-43 21Z" fill="#F8D478"/><path d="M-18-15h36" stroke="#E69CBB" strokeWidth="2"/><text y="39" textAnchor="middle" fontSize="11" fontWeight="700" letterSpacing="2" fill="#8B527A">СЮРПРИЗ</text></g>
  :null;
  return <svg className={`product-svg ${className}`} viewBox="0 0 400 340" role="img" aria-label={`Авторская иллюстрация товара: ${product.name}`} xmlns="http://www.w3.org/2000/svg">
    <defs><radialGradient id={`${id}-bg`}><stop stopColor="#FFFFFF" stopOpacity=".6"/><stop offset="100%" stopColor="#FFFFFF" stopOpacity="0"/></radialGradient></defs>
    <circle cx="205" cy="161" r="137" fill={`url(#${id}-bg)`}/>
    <ellipse cx="200" cy="312" rx="89" ry="9" fill="#A98A94" opacity=".11"/>
    <Confetti cx={200} cy={155} count={9} spread={155} color={pal[0]} seed={product.name.length}/>
    {type==='box'?simpleBalloons.slice(0,5):simpleBalloons}
    {decoration}
    <path d="M178 292q22 12 44 0" fill="none" stroke="#CBA4AB" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>;
}

export function HeroArt() {
 return <svg className="hero-svg" viewBox="0 0 700 700" role="img" aria-label="Воздушная праздничная композиция с розовыми, сиреневыми и золотистыми шарами, лентами и конфетти" xmlns="http://www.w3.org/2000/svg">
   <defs>
     <radialGradient id="heroGlow"><stop offset="0" stopColor="#FBE1E7"/><stop offset="1" stopColor="#FBE1E7" stopOpacity="0"/></radialGradient>
     <linearGradient id="heroPink" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#FEE0E8"/><stop offset=".56" stopColor="#F293B8"/><stop offset="1" stopColor="#D86196"/></linearGradient>
   </defs>
   <circle cx="346" cy="335" r="316" fill="url(#heroGlow)"/>
   <path d="M88 488q-75-85-6-157" fill="none" stroke="#EAD0D4" strokeWidth="2" strokeDasharray="5 12"/>
   <path d="M607 155q70 111 0 217" fill="none" stroke="#EAD0D4" strokeWidth="2" strokeDasharray="5 12"/>
   <g className="floating-group-b">
      <StringLine x={153} y={325} base={586} offset={-43}/>
      <LatexBalloon id="hero" i={1} x={153} y={252} fill="#D7C2ED" scale={1.53} rotate={-12}/>
   </g>
   <g className="floating-group-a">
      <StringLine x={488} y={313} base={590} offset={64}/>
      <LatexBalloon id="hero" i={2} x={488} y={234} fill="#F4CE78" scale={1.48} rotate={11}/>
   </g>
   <g className="floating-group-c">
      <StringLine x={355} y={240} base={602} offset={0}/>
      <LatexBalloon id="hero" i={3} x={355} y={161} fill="#F6AFC9" scale={1.7} rotate={-3}/>
   </g>
   <g className="floating-group-b">
      <StringLine x={239} y={389} base={602} offset={-16}/>
      <LatexBalloon id="hero" i={4} x={239} y={320} fill="#A9E4D6" scale={1.4} rotate={-5}/>
   </g>
   <g className="floating-group-a">
      <StringLine x={458} y={446} base={605} offset={30}/>
      <LatexBalloon id="hero" i={5} x={458} y={381} fill="#B9A2EA" scale={1.43} rotate={7}/>
   </g>
   <g className="floating-group-c">
     <StringLine x={330} y={445} base={602} offset={-4}/>
     <LatexBalloon id="hero" i={6} x={330} y={367} fill="#F7B4C9" scale={1.6} rotate={3}/>
   </g>
   <g className="floating-group-b">
     <path d="M511 370Q535 461 374 589" stroke="#A68AA8" strokeWidth="1.3" fill="none"/>
     <HeartFoil x={528} y={307} fill="url(#heroPink)" scale={1.05}/>
   </g>
   <g className="floating-group-a">
     <path d="M175 486 Q220 540 357 601" fill="none" stroke="#AE91A2" strokeWidth="1.4"/>
     <StarFoil x={158} y={438} fill="#F6D481" scale={.82}/>
   </g>
   <path d="M348 602q-37-17-77 4 44 17 79-3 37 14 72-3-32-16-74 2" stroke="#D57892" strokeWidth="3" strokeLinecap="round" fill="none"/>
   <g className="hero-confetti"><Confetti color="#EAA0BA" cx={350} cy={342} count={29} spread={318} seed={5}/></g>
   <g transform="translate(584 440) rotate(18)"><Flower size={68} color="#DEB0E9"/></g>
   <g transform="translate(55 110) rotate(-12)"><Flower size={44} color="#F4B6C8"/></g>
   <g transform="translate(100 560) rotate(7)"><Flower size={31} color="#F9D688"/></g>
   <path d="m591 114 8 18 18 8-18 8-8 18-8-18-18-8 18-8Z" fill="#F1CF7E"/>
   <path d="m73 280 5 11 11 5-11 5-5 11-5-11-11-5 11-5Z" fill="#D4B7E8"/>
 </svg>;
}

export function BundleArt({palette,count=9,withFoil=false,withNumber='',message='',className=''}) {
  const actual=Array.from({length:Math.min(21, Math.max(3, Number(count)||9))},(_,i)=>{
    const ring=i%3, x=240+(i%7-3)*29+ring*3, y=200-Math.floor(i/7)*54+(i%3)*12;
    return {x,y,rot:((i%5)-2)*6};
  });
  return <svg className={`bundle-svg ${className}`} viewBox="0 0 480 430" role="img" aria-label={`Иллюстрация набора из ${count} шаров, палитра ${palette.name}`} xmlns="http://www.w3.org/2000/svg">
    <circle cx="240" cy="191" r="166" fill="#FFFFFF" opacity=".38"/>
    <circle cx="240" cy="191" r="134" fill="#FFFFFF" opacity=".2"/>
    <ellipse cx="240" cy="402" rx="72" ry="9" fill="#A68E9B" opacity=".11"/>
    <Confetti cx={240} cy={195} count={16} spread={190} color={palette.accent} seed={8}/>
    {actual.map((p,i)=><g key={i}>
      <StringLine x={p.x} y={p.y+45} base={390} offset={(i%7-3)*8}/>
      <LatexBalloon x={p.x} y={p.y} fill={palette.colors[i%palette.colors.length]} id="bundle" rotate={p.rot} scale={.75} i={i}/>
    </g>)}
    {withFoil&&<HeartFoil x={315} y={127} fill="#F2C76E" scale={.85}/>}
    {!!withNumber&&<g transform="translate(160 175)"><text x="0" y="26" fontSize="97" textAnchor="middle" fontFamily="ui-rounded,system-ui,sans-serif" fontWeight="900" fill="#EFC779" stroke="#FFF7EB" strokeWidth="3" paintOrder="stroke">{withNumber}</text><path d="M0 40v119" stroke="#A58F98" strokeWidth="1.4" fill="none"/></g>}
    <g><path d="M211 389q30 18 58 0" stroke={palette.accent} strokeWidth="3" strokeLinecap="round" fill="none"/></g>
    {!!message&&<g><rect x="135" y="343" width="210" height="31" rx="15.5" fill="#FFFFFF" opacity=".88"/><text x="240" y="363" fontSize="12" fontWeight="650" textAnchor="middle" fill="#624659">{message.length>26?message.slice(0,26)+'…':message}</text></g>}
  </svg>;
}

export function DeliveryArt(){
  return <svg className="delivery-svg" viewBox="0 0 540 390" role="img" aria-label="Рисунок праздничной доставки с велосипедом и воздушными шарами" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" stroke="#B38F9F" strokeWidth="2" opacity=".45"><path d="M20 323h500"/><path d="M36 282v-51h55v51M101 282v-79h45v79M172 282v-108h54v108M411 282v-97h49v97M471 282v-68h37v68"/><path d="M47 246h12m11 0h12m33-25h15m-15 14h15m56-39h21m-21 15h21m207-7h20m-20 15h20"/></g>
    <circle cx="170" cy="304" r="49" fill="#F9E6EF" stroke="#664E69" strokeWidth="6"/><circle cx="370" cy="304" r="49" fill="#F9E6EF" stroke="#664E69" strokeWidth="6"/>
    <path d="M170 304 231 242 292 304h-122l-4-74h39m26 12 45-43h37" fill="none" stroke="#E5749F" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/><path d="m294 304 29-73 47 73" fill="none" stroke="#664E69" strokeWidth="8" strokeLinecap="round"/><circle cx="292" cy="304" r="9" fill="#E5749F"/>
    <path d="M228 231c-8-33 6-55 32-59 24-4 38 17 38 37v33h-70Z" fill="#7E66B7"/><circle cx="268" cy="148" r="21" fill="#F9D6C1"/><path d="M245 142q4-28 33-17 13 11 6 27-18-6-39-10" fill="#665374"/><path d="m255 243 45 30 42-10" fill="none" stroke="#665374" strokeWidth="10" strokeLinecap="round"/>
    <rect x="328" y="194" width="61" height="56" rx="7" fill="#ED9DBB"/><path d="M330 208h58M359 195v55" stroke="#FFF1F5" strokeWidth="5"/>
    <path d="M358 193Q342 146 340 112m16 82q23-40 50-92m-48 92q-10-58-54-101" fill="none" stroke="#A18AA0" strokeWidth="1.8"/>
    <g><LatexBalloon x={340} y={83} fill="#F3C0D5" scale={.75} id="delivery" i={1}/><LatexBalloon x={307} y={66} fill="#A5DBDB" scale={.72} id="delivery" i={2}/><LatexBalloon x={410} y={64} fill="#F1D17E" scale={.75} id="delivery" i={3}/></g>
    <Confetti color="#D7A4C5" cx={260} cy={150} count={9} spread={228} seed={2}/>
  </svg>;
}

export function MapIllustration() {
  return <svg viewBox="0 0 570 330" className="map-svg" role="img" aria-label="Декоративная карта с обозначением местоположения магазина, не схема проезда" xmlns="http://www.w3.org/2000/svg">
    <rect width="570" height="330" fill="#F0E9F3"/>
    <path d="M-30 52 610 310M180-50 510 390M-30 235 310-35M360-40 80 400" stroke="#FFFFFF" strokeWidth="36"/>
    <path d="M-30 52 610 310M180-50 510 390M-30 235 310-35M360-40 80 400" stroke="#DDD6E6" strokeWidth="2" strokeDasharray="8 8"/>
    <g fill="#D7E9D8"><path d="M20 20h130v68H20z"/><path d="M412 18h132v78H412z"/><path d="M68 264h130v46H68z"/><path d="M389 264h155v50H389z"/></g>
    <g fill="#FFFDFE"><rect x="72" y="123" width="90" height="68" rx="6"/><rect x="211" y="22" width="73" height="74" rx="6"/><rect x="429" y="145" width="88" height="74" rx="6"/><rect x="242" y="259" width="64" height="55" rx="6"/></g>
    <g transform="translate(295 170)"><path d="M0-75C-39-75-62-50-62-16c0 40 62 96 62 96s62-56 62-96c0-34-23-59-62-59Z" fill="#F26B97"/><circle cy="-17" r="23" fill="#FFFFFF"/><path d="M-6-18q6-8 12 0m-17 11q11 9 22 0" stroke="#F26B97" strokeWidth="3" strokeLinecap="round" fill="none"/></g>
    <path d="M297 255v30" stroke="#F26B97" strokeWidth="2" strokeDasharray="4 7"/>
  </svg>;
}
