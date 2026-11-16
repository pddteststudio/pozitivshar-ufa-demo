// Демонстрационные товарные данные на основе опубликованного прайса 2ГИС,
// дата обновления в источнике: 13.03.2026. Ни цена, ни наличие не подтверждены на текущую дату.
// Все изображения создаются локальным SVG-генератором и НЕ являются фотографиями товаров.
export const shop = {
  name: 'Позитившар',
  phone: '+7 (917) 793-91-11',
  phoneHref: 'tel:+79177939111',
  address: 'Уфа, ул. Софьи Перовской, 52/2, ТК «Южный полюс», 1 этаж',
  telegram: 'https://t.me/pozitivshar_ufa',
  vk: 'https://vk.com/pozitivshar_ufa',
  whatsapp: 'https://wa.me/79177939111',
  maps: 'https://2gis.ru/ufa/firm/70000001006209052',
  verifiedRating: '4,6',
  reviewsCount: '42',
  photosCount: '83',
  priceDate: '13 марта 2026',
};

// category: loose | bouquets | sets | gift
// displayPrice is historical publication, not a checkout amount.
export const products = [
  {id:'latex',name:'Гелиевый шар',desc:'Однотонный, без рисунка',category:'loose',displayPrice:'от 150 ₽',palette:['#F7A8C4','#FFF0A6','#A3E3E3'],art:'basic',tag:'База для любого праздника'},
  {id:'chrome',name:'Хромированные шары',desc:'Зеркальный эффект и сияние',category:'loose',displayPrice:'190 ₽',palette:['#D2D6E9','#D1A9E7','#F4D891'],art:'chrome',tag:'С эффектом металлик'},
  {id:'heart',name:'Фольгированное сердце',desc:'Для тёплых слов и признаний',category:'loose',displayPrice:'от 350 ₽',palette:['#FE83A4','#F9BAC8','#E5507B'],art:'heart',tag:'Идея для сюрприза'},
  {id:'star',name:'Фольгированная звезда',desc:'Яркий акцент в любой композиции',category:'loose',displayPrice:'от 350 ₽',palette:['#F1C668','#F5E3A0','#E6AC55'],art:'star',tag:'Добавьте немного блеска'},
  {id:'silver-pink',name:'Серебро + розовый',desc:'Нежная композиция из шаров',category:'sets',displayPrice:'2 550 ₽',palette:['#CBD0DA','#F3B2CA','#EBD3E7'],art:'bouquet',tag:'Нежная палитра'},
  {id:'silver-blue',name:'Серебро + синий',desc:'Композиция с цифрой',category:'sets',displayPrice:'от 2 390 ₽',palette:['#C6CCDB','#75A9E5','#B9DDFC'],art:'number',number:'5',tag:'С цифрой'},
  {id:'gold-black',name:'Золото + чёрный',desc:'Композиция с индивидуальной надписью',category:'sets',displayPrice:'1 610 ₽',palette:['#F2C96D','#343342','#E2B857'],art:'bouquet',tag:'Контрастный акцент'},
  {id:'rose-black',name:'Розовое золото + чёрный',desc:'Набор с надписью',category:'sets',displayPrice:'1 215 ₽',palette:['#E7AAB1','#343342','#F2C7C4'],art:'bouquet',tag:'Стильная классика'},
  {id:'gold-pink',name:'Золото + розовый',desc:'Композиция с цифрой',category:'sets',displayPrice:'1 535 ₽',palette:['#EFC66B','#F5BDD5','#F3D7A0'],art:'number',number:'8',tag:'На день рождения'},
  {id:'mint-blue',name:'Мята + голубой',desc:'Лёгкое сочетание пастельных оттенков',category:'sets',displayPrice:'1 290 ₽',palette:['#A4E3CE','#9DD6F1','#E1F4EF'],art:'bouquet',tag:'Пастельная гамма'},
  {id:'bright',name:'Яркий день',desc:'Праздничная композиция',category:'sets',displayPrice:'5 000 ₽',palette:['#FE7A87','#FCE087','#7DC3F2','#B69DEA','#9EE0C9'],art:'big',tag:'Максимум цвета'},
  {id:'unicorn',name:'Розовый единорог',desc:'Сказочная композиция',category:'sets',displayPrice:'от 1 410 ₽',palette:['#F2B3D5','#C5B8F5','#FFF0A9'],art:'unicorn',tag:'Для маленьких мечтателей'},
  {id:'cat-unicorn',name:'Котоединорог',desc:'Забавный праздничный набор',category:'sets',displayPrice:'от 1 715 ₽',palette:['#EDB7DE','#F8D5DF','#B8B5F1'],art:'cat',tag:'Милый сюрприз'},
  {id:'transformer-number',name:'Трансформеры с цифрой',desc:'Тематическая композиция',category:'sets',displayPrice:'2 140 ₽',palette:['#4F9AE3','#F5D15B','#E35C67'],art:'robot',number:'7',tag:'Тематический набор'},
  {id:'transformer',name:'Трансформеры без цифры',desc:'Набор в ярких цветах',category:'sets',displayPrice:'2 430 ₽',palette:['#608FDE','#F1D466','#D95B77'],art:'robot',tag:'Тематический набор'},
  {id:'football',name:'Футбол',desc:'Композиция для фанатов игры',category:'sets',displayPrice:'от 1 930 ₽',palette:['#A5DC9D','#FFFFFF','#2F6547'],art:'football',tag:'Для будущего чемпиона'},
  {id:'green-white',name:'Зелёный + белый',desc:'Композиция с надписью',category:'sets',displayPrice:'1 800 ₽',palette:['#A7D8B1','#FFFFFF','#5DA583'],art:'bouquet',tag:'Свежая палитра'},
  {id:'surprise-box',name:'Коробка-сюрприз',desc:'Большая коробка с индивидуальной надписью',category:'gift',displayPrice:'1 400 ₽',palette:['#F8B0C8','#E8C9EE','#E9D59D'],art:'box',tag:'Эффект неожиданности'},
];

export const categoryFilters = [
  {id:'all',label:'Все идеи'},
  {id:'sets',label:'Готовые наборы'},
  {id:'loose',label:'Отдельные шары'},
  {id:'gift',label:'Для сюрприза'},
];

export const occasionFilters = [
  {id:'birthday',label:'День рождения',icon:'cake',color:'#FFCFDA'},
  {id:'baby',label:'Выписка',icon:'heart',color:'#D5E9FA'},
  {id:'love',label:'Для любимых',icon:'gift',color:'#F6D6E6'},
  {id:'party',label:'Вечеринка',icon:'sparkles',color:'#F9E4BC'},
];

export const bundlePalettes = [
  {name:'Розовый зефир',colors:['#F4A7BF','#FFD5E4','#FFFFFF'],accent:'#ED719D'},
  {name:'Лаванда',colors:['#B6A4E6','#DBCCF7','#F3E9FF'],accent:'#9173C7'},
  {name:'Мятный бриз',colors:['#8EDDC9','#BEEFE2','#E9FFF6'],accent:'#51B5A3'},
  {name:'Золотой вечер',colors:['#E1B657','#F8DB8B','#3A3543'],accent:'#C79C43'},
  {name:'Синий космос',colors:['#80B3E5','#BECDF3','#4776BF'],accent:'#618BDA'},
  {name:'Яркий микс',colors:['#F97F9C','#9ACFF6','#EBD26F','#B8B1E9'],accent:'#E6769D'},
];
