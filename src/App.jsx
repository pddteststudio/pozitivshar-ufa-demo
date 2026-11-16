import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {shop, products, categoryFilters, occasionFilters, bundlePalettes} from './data.js';
import {Icon,Flower,ProductArt,HeroArt,BundleArt,DeliveryArt,MapIllustration} from './illustrations.jsx';

const occasionProducts={
 birthday:['silver-pink','silver-blue','gold-pink','bright','transformer-number','football','gold-black','unicorn'],
 baby:['mint-blue','silver-pink','green-white','rose-black','unicorn'],
 love:['heart','rose-black','gold-black','surprise-box','silver-pink'],
 party:['bright','chrome','star','gold-black','silver-blue','gold-pink','silver-pink']
};

function ArrowLink({href,children,className='',icon='arrow',external=false,...props}){
 return <a className={`link-with-icon ${className}`} href={href} {...(external?{target:'_blank',rel:'noopener noreferrer'}:{})} {...props}>{children}<Icon name={icon} size={18}/></a>;
}

function Button({children,variant='primary',className='',icon='arrow',onClick,href,external=false,disabled=false,type='button',...props}){
 const cn=`btn btn-${variant} ${className}`;
 const content=<>{children}<span className="btn-icon"><Icon name={icon} size={19}/></span></>;
 return href?<a className={cn} href={href} {...(external?{target:'_blank',rel:'noopener noreferrer'}:{})} {...props}>{content}</a>:<button className={cn} onClick={onClick} type={type} disabled={disabled} {...props}>{content}</button>;
}

function Eyebrow({children,className=''}){return <div className={`eyebrow ${className}`}><span className="eyebrow-spark"><Flower size={17} color="#EC719F"/></span>{children}</div>;}

function SectionIntro({eyebrow,title,description,align='left',className=''}){
 return <div className={`section-intro intro-${align} ${className} reveal`}>
  <Eyebrow>{eyebrow}</Eyebrow><h2>{title}</h2>{description&&<p>{description}</p>}
 </div>;
}

function useReveal(){
 useEffect(()=>{
   if(typeof window==='undefined')return;
   const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
   if(reduced||!('IntersectionObserver' in window))return;
   const nodes=[...document.querySelectorAll('.reveal')];
   const io=new IntersectionObserver(entries=>{
     entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target);}});
   },{threshold:.07,rootMargin:'0px 0px -35px 0px'});
   nodes.forEach(el=>io.observe(el));
   // Фильтры каталога и кнопка «Показать ещё» добавляют новые элементы после первого рендера.
   // Следим за ними, иначе они останутся скрытыми эффектом появления.
   const mutations=new MutationObserver(records=>records.forEach(record=>record.addedNodes.forEach(node=>{
     if(node.nodeType!==1)return;
     if(node.matches?.('.reveal'))io.observe(node);
     node.querySelectorAll?.('.reveal').forEach(el=>io.observe(el));
   })));
   mutations.observe(document.body,{subtree:true,childList:true});
   document.documentElement.classList.add('js-motion');
   return ()=>{mutations.disconnect();io.disconnect();document.documentElement.classList.remove('js-motion');};
 },[]);
}

function useToast(){
 const [toast,setToast]=useState('');
 const timeout=useRef(null);
 const notify=useCallback(message=>{
   setToast(message); if(timeout.current)clearTimeout(timeout.current);
   timeout.current=setTimeout(()=>setToast(''),3800);
 },[]);
 useEffect(()=>()=>{if(timeout.current)clearTimeout(timeout.current);},[]);
 return {toast,notify};
}

async function copyToClipboard(text){
 if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(text);return true;}
 const textarea=document.createElement('textarea');
 textarea.value=text;textarea.style.cssText='position:fixed;top:-9999px;left:-9999px';
 document.body.appendChild(textarea);textarea.focus();textarea.select();
 const ok=document.execCommand('copy');document.body.removeChild(textarea);
 if(!ok)throw new Error('Не удалось скопировать');return true;
}

function Header({count,onOpenBasket}){
 const [open,setOpen]=useState(false);
 useEffect(()=>{
  function onEsc(e){if(e.key==='Escape')setOpen(false);}
  window.addEventListener('keydown',onEsc);return()=>window.removeEventListener('keydown',onEsc);
 },[]);
 const nav=[['Каталог','#catalog'],['Собрать набор','#builder'],['Доставка','#delivery'],['Контакты','#contacts']];
 return <>
  <div className="top-note"><span><Icon name="sparkles" size={14}/> Воздушные шары для маленьких и больших поводов</span><span className="top-note-city">Уфа <span className="top-note-dot"/> ул. Софьи Перовской, 52/2</span></div>
  <header className="site-header" id="top">
    <div className="container header-inner">
      <a href="#top" className="brand" aria-label="Позитившар — на главную" onClick={()=>setOpen(false)}><span className="brand-mark"><Flower size={35} color="#F36D9C"/></span><span>позитив<span className="brand-strong">шар</span><span className="brand-dot">.</span></span></a>
      <nav className={`header-nav ${open?'is-open':''}`} id="main-nav" aria-label="Основная навигация">
        {nav.map(([label,to])=><a key={label} href={to} onClick={()=>setOpen(false)}>{label}</a>)}
        <a className="mobile-only" href={shop.phoneHref} onClick={()=>setOpen(false)}>{shop.phone}</a>
      </nav>
      <div className="header-actions">
        <a className="header-phone" href={shop.phoneHref}><Icon name="phone" size={16}/>{shop.phone}</a>
        <button type="button" className="basket-trigger" onClick={onOpenBasket} aria-label={`Открыть подборку, товаров: ${count}`}><Icon name="bag" size={20}/>{count>0&&<span className="basket-count">{count}</span>}</button>
        <button type="button" className="mobile-menu-btn" onClick={()=>setOpen(v=>!v)} aria-label={open?'Закрыть меню':'Открыть меню'} aria-controls="main-nav" aria-expanded={open}><Icon name={open?'close':'menu'} size={24}/></button>
      </div>
    </div>
  </header>
 </>;
}

function Hero(){return <section className="hero">
 <div className="hero-orb hero-orb-left" aria-hidden="true"/><div className="hero-orb hero-orb-right" aria-hidden="true"/>
 <div className="container hero-grid">
  <div className="hero-copy">
    <div className="hero-kicker"><span className="hero-kicker-dot"/> ПРАЗДНИК ЖИВЁТ В ДЕТАЛЯХ</div>
    <h1>Добавим в день <span>немного</span> <span className="hero-underline">волшебства<svg viewBox="0 0 384 28" preserveAspectRatio="none" aria-hidden="true"><path d="M4 20C104-2 241 37 379 10" stroke="#EF78A2" strokeWidth="11" strokeLinecap="round" fill="none"/></svg></span></h1>
    <p>Воздушные шары, яркие композиции и маленькие сюрпризы для самых важных моментов. Выбирайте настроение — мы поможем собрать идею праздника.</p>
    <div className="hero-actions"><Button href="#catalog">Выбрать набор</Button><Button variant="ghost" href="#builder">Собрать свой</Button></div>
    <div className="hero-trust"><div className="trust-stars" aria-label="Рейтинг 4,6 из 5"><Icon name="star" size={15}/><Icon name="star" size={15}/><Icon name="star" size={15}/><Icon name="star" size={15}/><Icon name="star" size={15}/></div><div><strong>{shop.verifiedRating} из 5 в 2ГИС</strong><span>По опубликованным оценкам · <a href={shop.maps} target="_blank" rel="noopener noreferrer">Читать отзывы <Icon name="arrow-up-right" size={13}/></a></span></div></div>
  </div>
  <div className="hero-visual">
    <HeroArt/>
    <div className="hero-sticker"><Flower size={26} color="#F8C765"/><span>Пусть будет<br/><strong>красиво!</strong></span></div>
    <div className="hero-chip"><Icon name="heart" size={18}/> сделано с любовью</div>
  </div>
 </div>
 <div className="hero-bottom-line"/>
 </section>}

function Marquee(){return <div className="marquee" aria-label="Поводы для праздника"><div className="marquee-track">{[0,1].map(k=><div className="marquee-repeat" key={k}><span>ДЕНЬ РОЖДЕНИЯ</span><Flower color="#F9D66D" size={27}/><span>ТЁПЛЫЕ МОМЕНТЫ</span><Flower color="#FFCBD8" size={27}/><span>СЮРПРИЗЫ</span><Flower color="#E8C4FF" size={27}/><span>ПРАЗДНИЧНОЕ НАСТРОЕНИЕ</span><Flower color="#FFC6D6" size={27}/></div>)}</div></div>}

function OccasionSection({onChoose}){
 return <section className="occasion-section section-padding" id="occasions"><div className="container">
  <SectionIntro eyebrow="Для любого повода" title={<>Повод найдётся. <em>Красоту придумаем.</em></>} description="Первый день рождения, неожиданное признание или просто пятница — для каждого момента найдётся свой цвет."/>
  <div className="occasion-grid">{occasionFilters.map((item,i)=><button type="button" onClick={()=>onChoose(item.id)} className={`occasion-card occasion-${item.id} reveal`} key={item.id} style={{'--occasion-bg':item.color,'--reveal-delay':`${i*.07}s`}}>
   <span className="occasion-art"><span className="occasion-art-circle"><Icon name={item.icon} size={52} strokeWidth={1.3}/></span><span className="occasion-mini-balloon"/><span className="occasion-confetti occasion-confetti-a"/><span className="occasion-confetti occasion-confetti-b"/></span>
   <span className="occasion-card-label">{item.label}</span><span className="occasion-arrow"><Icon name="arrow-up-right" size={20}/></span>
  </button>)}</div>
 </div></section>;
}

function Catalog({activeOccasion,setActiveOccasion,selected,onAdd}){
 const [category,setCategory]=useState('all');
 const [query,setQuery]=useState('');
 const [limit,setLimit]=useState(9);
 useEffect(()=>setLimit(9),[category,activeOccasion,query]);
 const filtered=useMemo(()=>products.filter(item=>{
   const cat=category==='all'||item.category===category;
   const occ=!activeOccasion||occasionProducts[activeOccasion]?.includes(item.id);
   const text=`${item.name} ${item.desc} ${item.tag}`.toLowerCase();
   return cat&&occ&&text.includes(query.trim().toLowerCase());
 }),[category,query,activeOccasion]);
 const chosenOccasion=occasionFilters.find(x=>x.id===activeOccasion);
 return <section className="catalog-section section-padding" id="catalog"><div className="container">
  <div className="catalog-head"><SectionIntro eyebrow="Каталог вдохновения" title={<>Найдите то самое <em>«вау!»</em></>} description="От маленьких деталей до целых композиций. Перед заказом уточните цены, доступные цвета и наличие."/><div className="catalog-side-note"><Flower color="#F5C783" size={53}/><span>Много разных шаров.<br/>Одно большое счастье.</span></div></div>
  <div className="catalog-controls">
    <div className="filter-tabs" role="group" aria-label="Категории товаров">{categoryFilters.map(f=><button key={f.id} className={`filter-tab ${category===f.id?'is-active':''}`} type="button" aria-pressed={category===f.id} onClick={()=>{setCategory(f.id);setActiveOccasion(null)}}>{f.label}</button>)}</div>
    <label className="search-field"><Icon name="search" size={19}/><input type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Поиск по каталогу" aria-label="Поиск по каталогу"/>{query&&<button type="button" aria-label="Очистить поиск" onClick={()=>setQuery('')}><Icon name="close" size={16}/></button>}</label>
  </div>
  {chosenOccasion&&<div className="occasion-filter-note"><span>Подборка: <strong>{chosenOccasion.label}</strong></span><button onClick={()=>setActiveOccasion(null)} type="button">Показать все <Icon name="close" size={14}/></button></div>}
  <div className="product-grid">{filtered.slice(0,limit).map((p,i)=>{
    const inList=selected.some(x=>x.id===p.id);
    return <article className="product-card reveal" key={p.id} style={{'--reveal-delay':`${Math.min(i%3,.2)*.07}s`}}>
      <div className={`product-image product-art-${p.art}`} style={{'--product-bg':p.palette[0]+'30'}}>
       <span className="product-image-glint"/><ProductArt product={p} id={p.id}/>
       <span className="art-disclaimer">SVG-иллюстрация</span>
       <button onClick={()=>onAdd(p.id)} type="button" className="product-plus" aria-label={`Добавить ${p.name} в подборку`} title="Добавить в подборку"><Icon name={inList?'check':'plus'} size={21}/></button>
      </div>
      <div className="product-info"><div><span className="product-tag">{p.tag}</span><h3>{p.name}</h3><p>{p.desc}</p></div><div className="product-bottom"><span className="product-price">{p.displayPrice}</span><button type="button" className="product-action" onClick={()=>onAdd(p.id)}>{inList?'Добавить ещё':'В подборку'}<Icon name={inList?'check':'arrow'} size={17}/></button></div></div>
    </article>;
  })}</div>
  {filtered.length===0&&<div className="catalog-empty"><Icon name="search" size={32}/><h3>Пока ничего не нашлось</h3><p>Попробуйте изменить запрос или выбрать другую категорию.</p><button className="text-link" onClick={()=>{setQuery('');setCategory('all');setActiveOccasion(null)}}>Сбросить фильтры <Icon name="arrow" size={17}/></button></div>}
  {filtered.length>limit&&<div className="more-products"><Button variant="outline" onClick={()=>setLimit(v=>v+9)} icon="plus">Показать ещё {Math.min(9,filtered.length-limit)} товаров</Button></div>}
  <div className="catalog-footnote"><Icon name="info" size={18}/><span>Названия и цены взяты из опубликованного каталога 2ГИС, обновлённого {shop.priceDate}. Это не актуальная оферта: наличие и стоимость могут отличаться. Все изображения на этой странице — авторские демонстрационные SVG, а не фотографии продукции магазина.</span></div>
 </div></section>;
}

function ValueSection(){return <section className="value-section"><div className="container value-content">
 <div className="value-heading reveal"><span className="value-doodle"><Flower size={70} color="#F2D082"/></span><Eyebrow>Красота в деталях</Eyebrow><h2>Не просто шары.<br/><em>Ваши воспоминания.</em></h2></div>
 <div className="value-items"><div className="value-item reveal"><span className="value-icon"><Icon name="heart" size={28}/></span><h3>Сочетания на любой вкус</h3><p>Нежная пастель, сияющее золото или яркий микс — выберите настроение, которое подходит именно вам.</p></div><div className="value-item reveal"><span className="value-icon"><Icon name="sparkles" size={28}/></span><h3>Индивидуальные детали</h3><p>В каталоге встречаются наборы с цифрами и персональными надписями. Возможности оформления уточняются при заказе.</p></div><div className="value-item reveal"><span className="value-icon"><Icon name="gift" size={28}/></span><h3>Идеи для сюрприза</h3><p>Шары, композиции и коробка-сюрприз — можно подобрать решение к поводу и бюджету.</p></div></div>
 </div></section>}

function Builder({notify}){
 const [occasion,setOccasion]=useState('День рождения');
 const [paletteIndex,setPaletteIndex]=useState(0);
 const [count,setCount]=useState(9);
 const [foil,setFoil]=useState(false);
 const [number,setNumber]=useState('');
 const [message,setMessage]=useState('');
 const [delivery,setDelivery]=useState('Самовывоз');
 const palette=bundlePalettes[paletteIndex];
 const description=`Здравствуйте! Хочу уточнить возможность заказа воздушных шаров.\nПовод: ${occasion}.\nЦвета: ${palette.name}.\nКоличество латексных шаров: ${count}.\nФольгированное сердце: ${foil?'да':'нет'}.\nЦифра: ${number||'не нужна'}.\nИндивидуальная надпись: ${message||'не требуется'}.\nПолучение: ${delivery}.\nПодскажите, пожалуйста, актуальную стоимость, доступность цветов и условия оформления.`;
 async function submit(){try{await copyToClipboard(description);notify('Запрос скопирован. Его можно вставить в чат с магазином.');}catch{notify('Не получилось скопировать автоматически. Попробуйте в другом браузере.');}}
 return <section className="builder-section section-padding" id="builder"><div className="container">
   <SectionIntro eyebrow="Ваш личный конструктор" title={<>Соберите своё <em>настроение</em></>} description="Немного цвета, любимая цифра и ваша идея — попробуйте разные варианты. Это визуальный конструктор, окончательный состав и стоимость уточняются у магазина." align="center"/>
   <div className="builder-shell reveal">
    <div className="builder-view" style={{'--builder-accent':palette.accent}}>
     <div className="builder-preview-head"><span className="preview-label"><span/> Живой предпросмотр</span><span className="preview-label-small">Авторская SVG-иллюстрация</span></div>
     <BundleArt count={count} palette={palette} withFoil={foil} withNumber={number} message={message}/>
     <div className="builder-preview-footer"><span>{palette.name}</span><span>{count} шаров{foil?' + сердце':''}{number?` + цифра ${number}`:''}</span></div>
     <span className="builder-decor builder-decor-one"><Flower size={45} color="#F7D988"/></span><span className="builder-decor builder-decor-two"><Flower size={32} color="#E4C9F6"/></span>
    </div>
    <div className="builder-form">
      <div className="builder-form-top"><div><span className="form-eyebrow">СОЗДАЙТЕ СВОЙ НАБОР</span><h3>Какой будет ваш праздник?</h3></div><span className="builder-form-art"><Flower size={42} color="#EEB5CB"/></span></div>
      <fieldset className="option-group"><legend>Повод</legend><div className="choice-row">{['День рождения','Выписка','Признание','Просто так'].map(p=><button type="button" key={p} className={`choice-chip ${p===occasion?'selected':''}`} onClick={()=>setOccasion(p)} aria-pressed={p===occasion}>{p}</button>)}</div></fieldset>
      <fieldset className="option-group"><legend>Цветовая история</legend><div className="palette-grid">{bundlePalettes.map((item,i)=><button type="button" key={item.name} className={`palette-tile ${paletteIndex===i?'selected':''}`} onClick={()=>setPaletteIndex(i)} aria-label={`Цветовая гамма: ${item.name}`} aria-pressed={paletteIndex===i}><span className="palette-dots">{item.colors.slice(0,3).map((c,j)=><i key={j} style={{background:c}}/>)}</span><span>{item.name}</span>{paletteIndex===i&&<Icon name="check" size={15}/>}</button>)}</div></fieldset>
      <div className="builder-inline-groups">
       <div className="option-group"><label className="builder-label">Количество шаров</label><div className="stepper"><button type="button" disabled={count<=3} onClick={()=>setCount(v=>Math.max(3,v-1))} aria-label="Уменьшить количество"><Icon name="minus" size={18}/></button><span>{count}<small>шт.</small></span><button type="button" disabled={count>=21} onClick={()=>setCount(v=>Math.min(21,v+1))} aria-label="Увеличить количество"><Icon name="plus" size={18}/></button></div></div>
       <div className="option-group"><label className="builder-label" htmlFor="builder-number">Праздничная цифра</label><select id="builder-number" value={number} onChange={e=>setNumber(e.target.value)} className="form-control"><option value="">Не нужна</option>{['1','2','3','4','5','6','7','8','9','10','18','20','25','30','35','40','45','50','55','60'].map(n=><option value={n} key={n}>{n}</option>)}</select></div>
      </div>
      <label className="foil-toggle"><span className="foil-copy"><Icon name="heart" size={22}/><span><strong>Добавить фольгированное сердце</strong><small>Если есть в ассортименте</small></span></span><span className={`toggle-switch ${foil?'is-on':''}`}><input type="checkbox" checked={foil} onChange={e=>setFoil(e.target.checked)} aria-label="Добавить фольгированное сердце"/><span/></span></label>
      <div className="option-group"><label className="builder-label" htmlFor="builder-message">Надпись или пожелание</label><input type="text" id="builder-message" value={message} onChange={e=>setMessage(e.target.value.slice(0,60))} maxLength={60} className="form-control" placeholder="Например, С днём рождения!"/></div>
      <fieldset className="option-group"><legend>Как удобнее получить?</legend><div className="choice-row"><button type="button" className={`choice-chip ${delivery==='Самовывоз'?'selected':''}`} onClick={()=>setDelivery('Самовывоз')} aria-pressed={delivery==='Самовывоз'}>Самовывоз</button><button type="button" className={`choice-chip ${delivery==='Доставка (условия уточнить)'?'selected':''}`} onClick={()=>setDelivery('Доставка (условия уточнить)')} aria-pressed={delivery==='Доставка (условия уточнить)'}>Доставка</button></div></fieldset>
      <Button className="builder-submit" onClick={submit} icon="copy">Скопировать запрос</Button>
      <p className="form-note"><Icon name="shield" size={16}/> Не отправляет заказ автоматически и не рассчитывает цену без подтверждённого прайса.</p>
    </div>
   </div>
 </div></section>;
}

function InspoSection({onChoose}){
 const scenes=[{label:'Нежные оттенки',sub:'Пастельные сочетания',id:'silver-pink',cls:'inspo-soft'},{label:'Больше блеска',sub:'Золото, звёзды, настроение',id:'gold-black',cls:'inspo-gold'},{label:'Сказочный праздник',sub:'Для самых ярких историй',id:'unicorn',cls:'inspo-fun'}];
 return <section className="inspo-section section-padding" id="inspiration"><div className="container">
  <SectionIntro eyebrow="Соберите впечатление" title={<>Каждый оттенок — <em>история</em></>} description="Можно начать с любимого цвета, героя или атмосферы. Ниже — авторские иллюстрации для вдохновения, не фотографии работ магазина."/>
  <div className="inspo-grid">{scenes.map((scene,i)=>{const product=products.find(p=>p.id===scene.id);return <button type="button" className={`inspo-card reveal ${scene.cls}`} onClick={()=>onChoose(scene.id)} key={scene.id} style={{'--reveal-delay':`${i*.08}s`}}><ProductArt product={product} id={`inspo-${i}`}/><span className="inspo-caption"><strong>{scene.label}</strong><span>{scene.sub}</span></span><span className="inspo-circle"><Icon name="arrow-up-right" size={23}/></span></button>;})}</div>
 </div></section>
}

function Steps(){return <section className="steps-section section-padding"><div className="container">
  <SectionIntro eyebrow="Просто и удобно" title={<>Чуть-чуть планирования.<br/><em>Много радости.</em></>} align="center"/>
  <div className="steps-grid">
   <div className="step-item reveal"><div className="step-illustration step-illustration-pink"><Icon name="sparkles" size={52}/><Flower size={36} color="#F2BECC"/></div><h3>Выберите идею</h3><p>Посмотрите композиции или соберите свой набор из любимых оттенков.</p></div>
   <div className="step-item reveal"><div className="step-illustration step-illustration-lavender"><Icon name="message-circle" size={52}/><Flower size={36} color="#C4B0EC"/></div><h3>Уточните детали</h3><p>Подготовьте запрос на стоимость, надпись, наличие и удобное время получения.</p></div>
   <div className="step-item reveal"><div className="step-illustration step-illustration-gold"><Icon name="heart" size={52}/><Flower size={36} color="#EFC96B"/></div><h3>Подарите эмоции</h3><p>Согласуйте заказ напрямую с магазином и наслаждайтесь моментом.</p></div>
  </div>
 </div></section>}

function Delivery(){return <section className="delivery-section" id="delivery"><div className="container delivery-grid">
  <div className="delivery-copy reveal"><Eyebrow>Мы рядом</Eyebrow><h2>Праздник там,<br/>где вы <em>его ждёте</em></h2><p>Магазин находится в Уфе, в ТК «Южный полюс». В публичной карточке указана доставка — условия, стоимость и доступное время нужно уточнить у компании.</p><div className="delivery-bits"><div><Icon name="pin" size={23}/><span>Уфа, Софьи Перовской, 52/2</span></div><div><Icon name="truck" size={23}/><span>Самовывоз и доставка по согласованию</span></div></div><Button variant="light" href="#contacts">Как нас найти</Button></div>
  <div className="delivery-art-wrap reveal"><DeliveryArt/></div>
 </div></section>}

function Reviews(){return <section className="reviews-section section-padding"><div className="container reviews-grid">
 <div className="reviews-left reveal"><Eyebrow>Ваше доверие</Eyebrow><h2>Тёплые моменты<br/><em>остаются с нами</em></h2><p>Не будем выдумывать благодарности. Почитать настоящие впечатления покупателей можно в независимой карточке компании на 2ГИС.</p><ArrowLink href={shop.maps} external className="review-link">Перейти к отзывам в 2ГИС</ArrowLink></div>
 <div className="reviews-right reveal"><div className="rating-burst"><span className="rating-main">{shop.verifiedRating}</span><span>из 5</span><Flower size={76} color="#F2D577" className="rating-flower"/></div><div className="review-metrics"><span><strong>{shop.reviewsCount}</strong> оценки</span><span><strong>{shop.photosCount}</strong> фотографии</span></div><p>По данным опубликованной карточки 2ГИС при подготовке демонстрации. Показатели могут измениться.</p></div>
 </div></section>}

const faqs=[
 ['Можно ли заказать композицию в своих цветах?','В отзывах и каталоге встречаются индивидуальные композиции и надписи. Доступность конкретных цветов и оформление под ваш запрос лучше уточнить у магазина.'],
 ['Сколько стоят шары и наборы?','В каталоге на этой странице указаны цены, опубликованные в 2ГИС 13 марта 2026 года. Они могли измениться. Перед оформлением заказа запросите у продавца актуальную стоимость.'],
 ['Как долго летают гелиевые шары?','Это зависит от материала, размера шара, обработки, температуры и условий хранения. Фиксированный срок полёта без подтверждения условий магазина мы не обещаем.'],
 ['Есть ли доставка по Уфе?','В карточке компании отмечена доставка. Адрес, стоимость, сроки и возможность доставки к определённому времени нужно согласовать непосредственно с магазином.'],
 ['Можно ли добавить цифру или надпись?','В опубликованном каталоге есть наборы с цифрами и надписями. В конструкторе можно подготовить пожелания, но точный состав и исполнение необходимо подтвердить у магазина.'],
 ['Можно оформить заказ прямо на сайте?','Пока нет: это независимая демонстрационная версия сайта. Конструктор создаёт текст обращения для копирования. Реальная отправка заказов возможна только после согласования с компанией.'],
];

function FAQ(){const [expanded,setExpanded]=useState(0);return <section className="faq-section section-padding" id="faq"><div className="container faq-grid">
  <div className="faq-left reveal"><Eyebrow>Полезно знать</Eyebrow><h2>Частые <em>вопросы</em></h2><p>Собрали важные детали перед выбором шаров. Если останутся вопросы — лучше уточнить их у магазина.</p><div className="faq-decoration"><Flower size={98} color="#F4C6D4"/><Flower size={46} color="#E2C5F0"/></div></div>
  <div className="faq-list">{faqs.map(([q,a],i)=><div className={`faq-item reveal ${expanded===i?'is-open':''}`} key={q}><button type="button" onClick={()=>setExpanded(expanded===i?-1:i)} aria-expanded={expanded===i}><span>{q}</span><span className="faq-button-icon"><Icon name={expanded===i?'minus':'plus'} size={20}/></span></button><div className="faq-answer" style={{gridTemplateRows:expanded===i?'1fr':'0fr'}}><div><p>{a}</p></div></div></div>)}</div>
 </div></section>}

function Contacts(){return <section className="contacts-section section-padding" id="contacts"><div className="container">
  <div className="contact-panel"><div className="contact-copy reveal"><Eyebrow>До встречи!</Eyebrow><h2>Найдёмся<br/><em>в Уфе</em></h2><p>Загляните за праздничным настроением или уточните детали будущего заказа по телефону и в мессенджерах.</p>
     <div className="contact-list"><a href={shop.phoneHref} className="contact-major">{shop.phone}<Icon name="arrow-up-right" size={23}/></a><div className="contact-address"><Icon name="pin" size={23}/><span>{shop.address}</span></div></div>
     <div className="contact-actions"><ArrowLink href={shop.telegram} external className="contact-social"><Icon name="telegram" size={20}/> Telegram</ArrowLink><ArrowLink href={shop.vk} external className="contact-social">ВКонтакте</ArrowLink><ArrowLink href={shop.maps} external className="contact-social">2ГИС</ArrowLink></div>
     <p className="contact-small">Время работы, актуальность адреса и условия заказов уточняйте перед посещением.</p>
    </div><div className="contact-map reveal"><MapIllustration/><div className="map-ribbon"><Icon name="pin" size={16}/><span>Южный полюс · Софьи Перовской, 52/2</span></div><a className="map-button" href={shop.maps} target="_blank" rel="noopener noreferrer">Открыть настоящую карту <Icon name="arrow-up-right" size={17}/></a></div></div>
 </div></section>}

function Footer(){return <footer className="footer"><div className="container footer-main"><a href="#top" className="brand footer-brand"><span className="brand-mark"><Flower size={32} color="#F36D9C"/></span><span>позитив<span className="brand-strong">шар</span><span className="brand-dot">.</span></span></a><p>Больше поводов улыбаться.</p><div className="footer-links"><a href="#catalog">Каталог</a><a href="#builder">Конструктор</a><a href="#delivery">Доставка</a><a href="#contacts">Контакты</a></div></div>
  <div className="container footer-bottom"><p><strong>Независимый демонстрационный концепт.</strong> Сайт не является официальным ресурсом магазина «Позитившар». Заявки не принимаются и не отправляются. Изображения — авторские SVG, цены требуют подтверждения.</p><a className="developer-tag" href="https://t.me/milmak11" target="_blank" rel="noopener noreferrer"><span>Разработчик</span><strong>@milmak11</strong><Icon name="arrow-up-right" size={15}/></a></div>
 </footer>}

function BasketDrawer({items,onClose,onRemove,onClear,notify}){
 const selected=items.map(({id,quantity})=>({...products.find(p=>p.id===id),quantity}));
 async function copyList(){
  const list=selected.map(p=>`• ${p.name} — ${p.quantity} шт.`).join('\n');
  const text=`Здравствуйте! Хочу уточнить наличие и стоимость следующих товаров:\n${list}\nПодскажите актуальные цены, условия получения и возможность оформления заказа.`;
  try{await copyToClipboard(text);notify('Список скопирован, можно отправить магазину.');onClose();}catch{notify('Не удалось скопировать список. Попробуйте ещё раз.');}
 }
 useEffect(()=>{
  document.body.classList.add('drawer-open');
  function onKey(e){if(e.key==='Escape')onClose();}
  window.addEventListener('keydown',onKey);
  return ()=>{document.body.classList.remove('drawer-open');window.removeEventListener('keydown',onKey);};
 },[onClose]);
 return <div className="drawer-overlay" role="presentation" onMouseDown={e=>{if(e.target===e.currentTarget)onClose()}}><aside className="basket-drawer" role="dialog" aria-modal="true" aria-label="Моя подборка товаров">
  <div className="drawer-header"><div><span className="form-eyebrow">ВАШИ ИДЕИ</span><h3>Моя подборка</h3></div><button className="drawer-close" type="button" onClick={onClose} aria-label="Закрыть подборку"><Icon name="close" size={23}/></button></div>
  {selected.length?<><div className="drawer-items">{selected.map(p=><div className="drawer-product" key={p.id}><div className="drawer-product-art"><ProductArt product={p} id={`drawer-${p.id}`}/></div><div className="drawer-product-text"><strong>{p.name}</strong><span>Количество: {p.quantity}</span><small>{p.displayPrice} · цена за позицию из старого прайса</small></div><button type="button" className="drawer-delete" onClick={()=>onRemove(p.id)} aria-label={`Убрать ${p.name}`}><Icon name="close" size={17}/></button></div>)}</div><div className="drawer-footer"><p>Цены и наличие уточняются у магазина. Сайт не отправляет заказы.</p><Button icon="copy" onClick={copyList}>Скопировать подборку</Button><button type="button" className="clear-button" onClick={onClear}>Очистить список</button></div></>:<div className="drawer-empty"><Flower size={68} color="#F7B1C9"/><h4>Здесь пока пусто</h4><p>Добавьте понравившиеся товары из каталога, чтобы составить запрос.</p><Button onClick={onClose}>Вернуться к выбору</Button></div>}
 </aside></div>;
}

function MobileBar({onOpenBasket,count}){return <div className="mobile-bar"><a href="#catalog"><Icon name="bag" size={20}/><span>Каталог</span></a><a href="#builder"><Icon name="sparkles" size={20}/><span>Собрать набор</span></a><button type="button" onClick={onOpenBasket}><Icon name="heart" size={20}/><span>Подборка{count>0?` (${count})`:''}</span></button></div>}

export default function App(){
 useReveal();
 const {toast,notify}=useToast();
 const [selected,setSelected]=useState([]);
 const [basketOpen,setBasketOpen]=useState(false);
 const [activeOccasion,setActiveOccasion]=useState(null);
 const totalCount=selected.reduce((sum,item)=>sum+item.quantity,0);
 const addItem=useCallback(id=>{
  setSelected(prev=>{const item=prev.find(x=>x.id===id);return item?prev.map(x=>x.id===id?{...x,quantity:x.quantity+1}:x):[...prev,{id,quantity:1}];});
  notify('Добавлено в подборку. Откройте значок сумки, чтобы скопировать список.');
 },[notify]);
 const removeItem=useCallback(id=>setSelected(prev=>prev.filter(x=>x.id!==id)),[]);
 const clearBasket=useCallback(()=>setSelected([]),[]);
 const closeBasket=useCallback(()=>setBasketOpen(false),[]);
 const chooseOccasion=useCallback(id=>{setActiveOccasion(id);document.getElementById('catalog')?.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});},[]);
 const chooseProduct=useCallback(id=>{addItem(id);setBasketOpen(true);},[addItem]);
 return <>
   <div className="demo-strip"><span><Icon name="info" size={15}/> Независимая демоверсия, не официальный магазин. Заказы здесь не принимаются.</span></div>
   <Header count={totalCount} onOpenBasket={()=>setBasketOpen(true)}/>
   <main><Hero/><Marquee/><OccasionSection onChoose={chooseOccasion}/><Catalog selected={selected} onAdd={addItem} activeOccasion={activeOccasion} setActiveOccasion={setActiveOccasion}/><ValueSection/><Builder notify={notify}/><InspoSection onChoose={chooseProduct}/><Steps/><Delivery/><Reviews/><FAQ/><Contacts/></main>
   <Footer/>
   <MobileBar count={totalCount} onOpenBasket={()=>setBasketOpen(true)}/>
   {basketOpen&&<BasketDrawer items={selected} onClose={closeBasket} onRemove={removeItem} onClear={clearBasket} notify={notify}/>}
   {toast&&<div className="toast" role="status" aria-live="polite"><Icon name="check" size={20}/><span>{toast}</span></div>}
 </>;
}
