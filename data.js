// ===== Translations =====
const translations = {
    en: {
        barName: "The Garrison Bar",
        barSubtitle: "Where Moments Become Memories",
        viewMenu: "View Menu",
        aboutTitle: "Welcome to The Garrison Bar",
        aboutDesc: "Experience the finest selection of cocktails, wines, beers, and non-alcoholic beverages in an atmosphere of elegance and sophistication. Our carefully curated menu reflects our commitment to quality and excellence.",
        ourMenu: "Our Menu",
        allItems: "All Items",
        hotDrinks: "Hot Drinks",
        coldDrinks: "Cold Drinks",
        naturalJuice: "Natural Juice",
        beersWines: "Beers & Wines",
        cocktails: "Cocktails",
        mocktails: "Mocktails",
        alcoholicDrinks: "Alcoholic",
        food: "Food",
        snacks: "Snacks",
        featuredTitle: "Featured Drinks",
        followUs: "Follow Us",
        footerDesc: "Crafting memories, one drink at a time.",
        contact: "Contact"
    },
    sq: {
        barName: "The Garrison Bar",
        barSubtitle: "Ku Momentet Bëhen Kujtime",
        viewMenu: "Shiko Menynë",
        aboutTitle: "Mirësevini në The Garrison Bar",
        aboutDesc: "Përjetoni përzgjedhjen më të mirë të koktejeve, verërave, birrës dhe pijeve pa alkool në një atmosferë të elegancës dhe sofistikimit. Menyja jonë e kujdesshme pasqyron angazhimin tonë ndaj cilësisë dhe përsosmërisë.",
        ourMenu: "Menyja Jonë",
        allItems: "Të Gjitha Artikujt",
        hotDrinks: "Pije të Nxehtë",
        coldDrinks: "Pije të Ftohta",
        naturalJuice: "Lëngje Natyrale",
        beersWines: "Birrë & Verë",
        cocktails: "Koktejat",
        mocktails: "Koktejat pa Alkool",
        alcoholicDrinks: "Alkoolike",
        food: "Ushqim",
        snacks: "Shacka",
        featuredTitle: "Pije të Zgjedhura",
        followUs: "Ndiqni Ne",
        footerDesc: "Duke krijuar kujtime, një pije në një herë.",
        contact: "Kontakti"
    },
    mk: {
        barName: "The Garrison Bar",
        barSubtitle: "Каде Моментите Стануваат Успомени",
        viewMenu: "Погледнете Мени",
        aboutTitle: "Добредојдовте во The Garrison Bar",
        aboutDesc: "Искусете ја најфината селекција на коктели, вина, пива и безалкохолни пијалоци во атмосфера на елеганција и софистицираност. Нашето внимателно одредено мени го одразува нашето посветување на квалитет и совршенство.",
        ourMenu: "Наша Мени",
        allItems: "Сите Ставки",
        hotDrinks: "Топли Пијалоци",
        coldDrinks: "Ладни Пијалоци",
        naturalJuice: "Природни Сокови",
        beersWines: "Пива & Вина",
        cocktails: "Коктели",
        mocktails: "Коктели без Алкохол",
        alcoholicDrinks: "Алкохолни",
        food: "Храна",
        snacks: "Закуски",
        featuredTitle: "Истакнати Пијалаци",
        followUs: "Следете ни",
        footerDesc: "Создавајќи успомени, еден пијалок во исто време.",
        contact: "Контакт"
    }
};

// ===== Menu Items with Macedonian Denars Pricing =====
const menuItems = [

    {
        name: { en: "Espresso", sq: "Espresso", mk: "Еспресо" },
        description: { en: "Rich Italian coffee", sq: "Kafe e pasur italiane", mk: "Богато италијанско кафе" },
        price: 60,
        category: "hot-drinks",
        image: "https://www.sugacoffee.id/wp-content/uploads/2024/04/17.-Espresso-Pengertian-Jenis-Proses-dan-Teknik-Penyeduhannya-Suga-Coffee-1.jpg",
        featured: false
    },
    {
        name: { en: "Macchiato", sq: "Makiato", mk: "Макиато" },
        description: { en: "Espresso with milk", sq: "Espresso me qumesht", mk: "Еспресо со млеко" },
        price: 60,
        category: "hot-drinks",
        image: "https://i.imgur.com/bPiYoYX.png",
        featured: false
    },
    {
        name: { en: "Strawberry Macchiato", sq: "Makiato Dredhze", mk: "Макиато" },
        description: { en: "Strawberry macchiato", sq: "Makiato Dredhze", mk: "Еспресо со млеко" },
        price: 200,
        category: "hot-drinks",
        image: "https://thumbs.dreamstime.com/b/pink-latte-heart-cookies-fresh-strawberries-background-385306274.jpg",
        featured: false
    },
    {
        name: { en: "Large Macchiato", sq: "Makiato e madhe", mk: "Голем макиато" },
        description: { en: "Espresso with more milk", sq: "Espresso me më shumë qumësht", mk: "Еспресо со повеќе млеко" },
        price: 100,
        category: "hot-drinks",
        image: "https://i.imgur.com/KyOjRdZ.png",
        featured: false
    },
    {
        name: { en: "Large Cappuccino", sq: "Kapucino e madhe", mk: "Голем капучино" },
        description: { en: "Large cappuccino", sq: "Kapucino i madh", mk: "Голем капучино" },
        price: 100,
        category: "hot-drinks",
        image: "https://i.imgur.com/q58v56I.png",
        featured: false
    },
    {
        name: { en: "Ice Caffe", sq: "Kafe e ftohtë", mk: "Ладно кафе" },
        description: { en: "Cold espresso with ice", sq: "Espresso e ftohtë me akull", mk: "Ладно еспресо со мраз" },
        price: 80,
        category: "hot-drinks",
        image: "https://i.imgur.com/kfQinb3.png",
        featured: false
    },
    {
        name: { en: "Latte Macchiato", sq: "Latte makiato", mk: "Лате макиато" },
        description: { en: "Espresso with lots of milk", sq: "Espresso me shumë qumësht", mk: "Еспресо со многу млеко" },
        price: 70,
        category: "hot-drinks",
        image: "https://i.imgur.com/UvoNuZH.png",
        featured: false
    },
    {
        name: { en: "Nescafe", sq: "Neskafe", mk: "Нескафе" },
        description: { en: "Instant coffee", sq: "Kafe instant", mk: "Инстант кафе" },
        price: 90,
        category: "hot-drinks",
        image: "https://i.imgur.com/3NeFk1h.png",
        featured: false
    },
    {
        name: { en: "Nescafe Ice", sq: "Neskafe e ftohtë", mk: "Ладно Нескафе" },
        description: { en: "Instant coffee with ice", sq: "Neskafe me akull", mk: "Нескафе со мраз" },
        price: 100,
        category: "hot-drinks",
        image: "https://i.imgur.com/UxqaWSH.png",
        featured: false
    },
    {
        name: { en: "American Coffee", sq: "Kafe amerikane", mk: "Американско кафе" },
        description: { en: "Diluted espresso", sq: "Kafe e holluar", mk: "Разредено еспресо" },
        price: 80,
        category: "hot-drinks",
        image: "https://i.imgur.com/4PeR22r.png",
        featured: false
    },
    {
        name: { en: "Frappe", sq: "Frape", mk: "Фрапе" },
        description: { en: "Shaken instant coffee with ice", sq: "Kafe e rrahur me akull", mk: "Нескафе со пена и мраз" },
        price: 110,
        category: "hot-drinks",
        image: "https://i.imgur.com/8aLv7Rv.png",
        featured: false
    },
    {
        name: { en: "Nesquik", sq: "Nesquik", mk: "Несквик" },
        description: { en: "Chocolate milk drink", sq: "Qumësht me çokollatë", mk: "Млеко со чоколадо" },
        price: 90,
        category: "hot-drinks",
        image: "https://i.imgur.com/9V73T4A.png",
        featured: false
    },
    {
        name: { en: "Cappuccino", sq: "Cappuccino", mk: "Капучино" },
        description: { en: "Espresso with steamed milk foam", sq: "Espresso me shkumë qumështi", mk: "Еспресо со млечна пена" },
        price: 60,
        category: "hot-drinks",
        image: "https://i.imgur.com/q58v56I.png",
        featured: false
    },
    {
        name: { en: "Tea", sq: "Caj", mk: "Чај" },
        description: { en: "Tea", sq: "Caj", mk: "Чај" },
        price: 70,
        category: "hot-drinks",
        image: "https://i.imgur.com/n881xWQ.png",
        featured: false
    },
    {
        name: { en: "Hot Chocolate", sq: "Çokollatë e Nxehtë", mk: "Топла Чоколада" },
        description: { en: "Premium chocolate", sq: "Çokollatë premium", mk: "Премиум белгиска чоколада" },
        price: 110,
        category: "hot-drinks",
        image: "https://i.imgur.com/GmgFGlx.png",
        featured: false
    },

    // Cold Drinks
   {
        name: { en: "Water", sq: "Ujë", mk: "Вода" },
        description: { en: "Water", sq: "Ujë", mk: "Вода" },
        price: 60,
        category: "cold-drinks",
        image: "https://i.imgur.com/nEWkuCS.png",
        featured: false
    },
    {
        name: { en: "Sparkling Water", sq: "Ujë me Gaz", mk: "Газирана Вода" },
        description: { en: "Sparkling Water", sq: "Ujë me Gaz", mk: "Газирана Вода" },
        price: 70,
        category: "cold-drinks",
        image: "https://i.imgur.com/FWOx4HA.png",
        featured: false
    },
    {
        name: { en: "Coca Cola", sq: "Coca Cola", mk: "Кока Кола" },
        description: { en: "Coca Cola", sq: "Coca Cola", mk: "Кока Кола" },
        price: 90,
        category: "cold-drinks",
        image: "https://i.imgur.com/WyHQhgz.png",
        featured: false
    },
    {
        name: { en: "Coca Cola Zero", sq: "Coca Cola Zero", mk: "Кока Кола Зеро" },
        description: { en: "Coca Cola Zero", sq: "Coca Cola Zero", mk: "Кока Кола Зеро" },
        price: 90,
        category: "cold-drinks",
        image: "https://i.imgur.com/ZGVd5WV.png",
        featured: false
    },
    {
        name: { en: "Fanta Orange", sq: "Fanta Portokalli", mk: "Фанта Портокал" },
        description: { en: "Fanta Orange", sq: "Fanta Portokalli", mk: "Фанта Портокал" },
        price: 90,
        category: "cold-drinks",
        image: "https://i.imgur.com/qHsQNKm.png",
        featured: false
    },
    {
        name: { en: "Schweppes", sq: "Schweppes", mk: "Швепс" },
        description: { en: "Schweppes", sq: "Schweppes", mk: "Швепс" },
        price: 90,
        category: "cold-drinks",
        image: "https://i.imgur.com/yzGbBvR.png",
        featured: false
    },
    {
        name: { en: "Schweppes Tonic", sq: "Schweppes Tonik", mk: "Швепс Тоник" },
        description: { en: "Schweppes Tonic", sq: "Schweppes Tonik", mk: "Швепс Тоник" },
        price: 90,
        category: "cold-drinks",
        image: "https://i.imgur.com/Ump7oge.png",
        featured: false
    },
    {
        name: { en: "Schweppes Tangerine", sq: "Schweppes Mandarine", mk: "Швепс Мандарина" },
        description: { en: "Schweppes Tangerine", sq: "Schweppes Mandarine", mk: "Швепс Мандарина" },
        price: 90,
        category: "cold-drinks",
        image: "https://ba.coca-colahellenic.com/content/dam/cch/ba/images/our-24-7-portfolio/schweppes/schweppes-tangerine.jpg",
        featured: false
    },
    {
        name: { en: "Sprite", sq: "Sprite", mk: "Спрајт" },
        description: { en: "Sprite", sq: "Sprite", mk: "Спрајт" },
        price: 90,
        category: "cold-drinks",
        image: "https://i.imgur.com/YZD07n1.png",
        featured: false
    },
    {
        name: { en: "Red Bull", sq: "Red Bull", mk: "Ред Бул" },
        description: { en: "Red Bull", sq: "Red Bull", mk: "Ред Бул" },
        price: 200,
        category: "cold-drinks",
        image: "https://i.imgur.com/hJMmBTg.png",
        featured: false
    },
    {
        name: { en: "Red Bull Orange", sq: "Red Bull Orange", mk: "Ред Бул Орењ" },
        description: { en: "Red Bull Orange", sq: "Red Bull Orange", mk: "Ред Бул Орењ" },
        price: 200,
        category: "cold-drinks",
        image: "https://www.onestop.co.uk/wp-content/uploads/f04bb26c-f3e9-45d0-a2f4-757c4d4695a6.png",
        featured: false
    },
    {
        name: { en: "Red Bull White Peach", sq: "Red Bull White Peach", mk: "Ред Бул Бела Праска" },
        description: { en: "Red Bull White Peach", sq: "Red Bull White Peach", mk: "Ред Бул Бела Праска" },
        price: 200,
        category: "cold-drinks",
        image: "https://www.redbull.com/energydrink/v1/resources/storyblok/images/f/287059/528x1348/2e3f4eff5e/ca_ph_250ml_the-peach-edition_country_rgb_do243398_cold_closed_front_com_full.png/m/",
        featured: false
    },
    {
        name: { en: "Red Bull Red", sq: "Red Bull Red", mk: "Ред Бул Црвен" },
        description: { en: "Red Bull Red", sq: "Red Bull Red", mk: "Ред Бул Црвен" },
        price: 200,
        category: "cold-drinks",
        image: "https://www.redbull.com/energydrink/v1/resources/storyblok/images/f/287059/870x2200/7d77a8f904/us_wm_250ml_ac_the-red-edition_country_rgb__cold_closed_front_com_25.png/m/1000x0",
        featured: false
    },
    {
        name: { en: "Red Bull Sugarfree", sq: "Red Bull Sugarfree", mk: "Ред Бул Без Шеќер" },
        description: { en: "Red Bull Sugarfree", sq: "Red Bull Sugarfree", mk: "Ред Бул Без Шеќер" },
        price: 200,
        category: "cold-drinks",
        image: "https://i0.wp.com/aperitivo.mk/wp-content/uploads/2017/12/red_bull_energy_drink_sugarfree_25cl_23561.webp?fit=1000%2C1000&ssl=1",
        featured: false
    },
    {
        name: { en: "Golden Eagle", sq: "Golden Eagle", mk: "Голден Игл" },
        description: { en: "Golden Eagle", sq: "Golden Eagle", mk: "Голден Игл" },
        price: 110,
        category: "cold-drinks",
        image: "https://i.imgur.com/Ye38i76.png",
        featured: false
    },
    {
        name: { en: "Apple Juice", sq: "Lëng Molle", mk: "Сок од Јаболко" },
        description: { en: "Apple Juice", sq: "Lëng Molle", mk: "Сок од Јаболко" },
        price: 100,
        category: "cold-drinks",
        image: "https://i.imgur.com/6FgAtMo.png",
        featured: false
    },
    {
        name: { en: "Peach Juice", sq: "Lëng Pjeshke", mk: "Сок од Праска" },
        description: { en: "Peach Juice", sq: "Lëng Pjeshke", mk: "Сок од Праска" },
        price: 100,
        category: "cold-drinks",
        image: "https://i.imgur.com/eChfrZN.png",
        featured: false
    },
    {
        name: { en: "Ice Tea", sq: "Ice Tea", mk: "Леден Чај" },
        description: { en: "Ice Tea", sq: "Ice Tea", mk: "Леден Чај" },
        price: 100,
        category: "cold-drinks",
        image: "https://i.imgur.com/fwVg5H5.png",
        featured: false
    },
    {
        name: { en: "Strawberry Juice", sq: "Lëng Dredhëz", mk: "Сок од Јагода" },
        description: { en: "Strawberry Juice", sq: "Lëng Dredhëz", mk: "Сок од Јагода" },
        price: 100,
        category: "cold-drinks",
        image: "https://i.imgur.com/fe7QHfO.png",
        featured: false
    },
    {
        name: { en: "Sour Cherry Juice", sq: "Lëng Vishnje", mk: "Сок од Вишна" },
        description: { en: "Sour Cherry Juice", sq: "Lëng Vishnje", mk: "Сок од Вишна" },
        price: 100,
        category: "cold-drinks",
        image: "https://i.imgur.com/pL0fAuq.png",
        featured: false
    },
    {
        name: { en: "Pineapple Juice", sq: "Lëng Ananasi", mk: "Сок од Ananas" },
        description: { en: "Pineapple Juice", sq: "Lëng Ananasi", mk: "Сок од Ananas" },
        price: 100,
        category: "cold-drinks",
        image: "https://i.imgur.com/cVoPHFN.png",
        featured: false
    },
// ===== Natural Juices =====
{
    name: { en: "Orange Juice", sq: "Lëng Portokalli", mk: "Сок од Портокал" },
    description: { en: "Orange Juice", sq: "Lëng Portokalli", mk: "Сок од Портокал" },
    price: 130,
    category: "natural-juice",
    image: "https://i.imgur.com/gGL9tYV.png",
    featured: false
},
{
    name: { en: "Red Juice", sq: "Lëng i Kuq", mk: "Црвен Сок" },
    description: { en: "Apple, banana, raspberry", sq: "Mollë, banane, aronija", mk: "Јаболко, банана, аронија" },
    price: 150,
    category: "natural-juice",
    image: "https://i.imgur.com/yFinNmf.png",
    featured: false
},
{
    name: { en: "Wake Me Up Juice", sq: "Wake Me Up Lëng", mk: "Разбуди ме Сок" },
    description: { en: "Orange, lemon", sq: "Portokall, limon", mk: "Портокал, лимон" },
    price: 130,
    category: "natural-juice",
    image: "https://i.imgur.com/Qdj4MIp.png",
    featured: false
},
{
    name: { en: "Garrison Juice", sq: "Lëng Garrison", mk: "Гарисон Сок" },
    description: { en: "Banana, orange", sq: "Banane, portokall", mk: "Банана, портокал" },
    price: 140,
    category: "natural-juice",
    image: "https://i.imgur.com/x8wn6TN.png",
    featured: false
},
{
    name: { en: "Dr Juice", sq: "Dr Juice", mk: "Др Џус" },
    description: { en: "Lemon, apple, orange", sq: "Limon, mollë, portokall", mk: "Лимон, јаболко, портокал" },
    price: 140,
    category: "natural-juice",
    image: "https://i.imgur.com/v2SYOzP.png",
    featured: false
},
{
    name: { en: "ABC Juice", sq: "Lëng ABC", mk: "АБЦ Сок" },
    description: { en: "Carrot, ginger, orange", sq: "Karotë, xhenxhefil, portokall", mk: "Морков, ѓумбир, портокал" },
    price: 140,
    category: "natural-juice",
    image: "https://i.imgur.com/OqEhTBO.png",
    featured: false
},
{
    name: { en: "Green Life", sq: "Green Life", mk: "Зелен Живот" },
    description: { en: "Apple, kiwi, spinach", sq: "Mollë, kivi, spinaq", mk: "Јаболко, киви, спанаќ" },
    price: 140,
    category: "natural-juice",
    image: "https://i.imgur.com/FuouCw9.png",
    featured: false
},
{
    name: { en: "Popeye Juice", sq: "Lëng Popeye", mk: "Попај Сок" },
    description: { en: "Apple, pineapple, spinach", sq: "Mollë, ananas, spinaq", mk: "Јаболко, ананас, спанаќ" },
    price: 150,
    category: "natural-juice",
    image: "https://i.imgur.com/xe4trP5.png",
    featured: false
},
{
    name: { en: "Ginger Shot", sq: "Ginger Shot", mk: "Ѓумбир Шот" },
    description: { en: "Energizing ginger drink", sq: "Pije energjike me xhenxhefil", mk: "Енергетски пијалок со ѓумбир" },
    price: 70,
    category: "natural-juice",
    image: "https://i.imgur.com/efFIAwU.png",
    featured: false
},
    // Beers and Wines
     // === Beers & Wines ===
{
    name: { en: "Skopsko", sq: "Skopsko", mk: "Скопско" },
    description: { 
        en: "Local Macedonian beer",
        sq: "Birrë vendase maqedonase",
        mk: "Домашно македонско пиво"
    },
    price: 130,
    category: "beers-wines",
    image: "https://static.wixstatic.com/media/b53f62_91953786aafa47f6b89810548481512e~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    featured: false
},
{
    name: { en: "Tuborg", sq: "Tuborg", mk: "Туборг" },
    description: { 
        en: "Danish lager beer",
        sq: "Birrë daneze",
        mk: "Данско пиво"
    },
    price: 150,
    category: "beers-wines",
    image: "https://webshop.rotodinamic.hr/image/cache/cache/2001-3000/2173/main/647a-01753-0-3-1200x630.jpg",
    featured: false
},
{
    name: { en: "Heineken", sq: "Heineken", mk: "Хајнекен" },
    description: { 
        en: "Premium Dutch beer",
        sq: "Birrë premium holandeze",
        mk: "Премиум холандско пиво"
    },
    price: 160,
    category: "beers-wines",
    image: "https://players.mk/wp-content/uploads/2021/09/heinkeken-makedonija.jpg",
    featured: false
},
{
    name: { en: "Corona", sq: "Korona", mk: "Корона" },
    description: { 
        en: "Mexican Beer",
        sq: "Birrë Meksikane",
        mk: "Мексично Светло Пиво"
    },
    price: 200,
    category: "beers-wines",
    image: "https://produits.bienmanger.com/34491-0w470h470_Corona_Extra_Mexican_Blonde_Beer.jpg",
    featured: false
},
{
    name: { en: "Zlaten Dab", sq: "Zlaten Dab", mk: "Златен Даб" },
    description: { 
        en: "Golden Macedonian beer",
        sq: "Birrë maqedonase e artë",
        mk: "Златно македонско пиво"
    },
    price: 130,
    category: "beers-wines",
    image: "https://zlatendab.mk/wp-content/uploads/2024/05/zlatendab-portfolio-shishe-i-chasha.png",
    featured: false
},
{
    name: { en: "Alexandria (Small)", sq: "Aleksandria (e Vogël)", mk: "Александрија (мало)" },
    description: { 
        en: "Red or white wine glass",
        sq: "Gotë vere e kuqe ose e bardhë",
        mk: "Чаша црвено или бело вино"
    },
    price: 200,
    category: "beers-wines",
    image: "https://dani-distribution.com/wp-content/uploads/2025/05/Tikves-Alexandria-Belo-0.187-vere-mini.jpg",
    featured: false
},
{
    name: { en: "Alexandria (Bottle)", sq: "Aleksandria (Shishe)", mk: "Александрија (шише)" },
    description: { 
        en: "Full bottle of Alexandria wine",
        sq: "Shishe vere Aleksandria",
        mk: "Шише вино Александрија"
    },
    price: 1000,
    category: "beers-wines",
    image: "https://tikves.com.mk/wp-content/uploads/2019/06/Alexandria_White.jpg",
    featured: false
},
{
    name: { en: "T'ga za Jug (Small)", sq: "T'ga për Jug (e Vogël)", mk: "Т'га за Југ (мало)" },
    description: { 
        en: "Glass of T'ga za Jug wine",
        sq: "Gotë verë T'ga për Jug",
        mk: "Чаша Т'га за Југ вино"
    },
    price: 160,
    category: "beers-wines",
    image: "https://fino-vino.ch/images/com_hikashop/upload/tga-za-jug-von-tikves-2dl.png",
    featured: false
},
{
    name: { en: "T'ga za Jug (Bottle)", sq: "T'ga për Jug (Shishe)", mk: "Т'га за Југ (шише)" },
    description: { 
        en: "Full bottle of T'ga za Jug wine",
        sq: "Shishe e plotë e verës T'ga për Jug",
        mk: "Шише Т'га за Југ вино"
    },
    price: 800,
    category: "beers-wines",
    image: "https://tikves.com.mk/wp-content/uploads/2021/12/T_GA_new.jpg",
    featured: false
},
{
    name: { en: "Merlot", sq: "Merlot", mk: "Мерло" },
    description: { 
        en: "Bottle of Merlot wine",
        sq: "Shishe verë Merlot",
        mk: "Шише вино Мерло"
    },
    price: 1000,
    category: "beers-wines",
    image: "https://cdn.shopify.com/s/files/1/0871/2640/9530/files/jcell_merlot_1x1-1670442033875.png?v=1715281810",
    featured: false
},
{
    name: { en: "Cabernet Sauvignon", sq: "Cabernet Sauvignon", mk: "Каберне Совињон" },
    description: { 
        en: "Bottle of Cabernet Sauvignon wine",
        sq: "Shishe verë Cabernet Sauvignon",
        mk: "Шише вино Каберне Совињон"
    },
    price: 1000,
    category: "beers-wines",
    image: "https://www.compagniesdrift.com/wp-content/uploads/2021/08/cab-sa-2023-product.jpg",
    featured: false
},
{
    name: { en: "Temjanika", sq: "Temjanika", mk: "Темјаника" },
    description: { 
        en: "Bottle of Temjanika wine",
        sq: "Shishe verë Temjanika",
        mk: "Шише вино Темјаника"
    },
    price: 3000,
    category: "beers-wines",
    image: "https://tikves.com.mk/wp-content/uploads/2025/03/Temjanika-White-Wine.png",
    featured: false
},
{
    name: { en: "Chardonnay", sq: "Chardonnay", mk: "Шардоне" },
    description: { 
        en: "Bottle of Chardonnay wine",
        sq: "Shishe verë Chardonnay",
        mk: "Шише вино Шардоне"
    },
    price: 1000,
    category: "beers-wines",
    image: "https://tikves.com.mk/wp-content/uploads/2025/03/Chardonney-White-Wine.png",
    featured: false
},
{
    name: { en: "Barovo White", sq: "Barovo e Bardhë", mk: "Барово Бело" },
    description: { 
        en: "Bottle of Barovo white wine",
        sq: "Shishe vere Barovo e bardhë",
        mk: "Шише Барово бело вино"
    },
    price: 2500,
    category: "beers-wines",
    image: "https://tikves.com.mk/wp-content/uploads/2019/06/Barovo_White-1.jpg",
    featured: false
},
{
    name: { en: "Barovo Red", sq: "Barovo e Kuqe", mk: "Барово Црвено" },
    description: { 
        en: "Bottle of Barovo red wine",
        sq: "Shishe vere Barovo e kuqe",
        mk: "Шише Барово црвено вино"
    },
    price: 2500,
    category: "beers-wines",
    image: "https://wine.mk/wp-content/uploads/2017/11/Barovo-red-png.png",
    featured: false
},
{
    name: { en: "Bela Voda White", sq: "Bela Voda e Bardhë", mk: "Бела Вода Бело" },
    description: { 
        en: "Bottle of Bela Voda white wine",
        sq: "Shishe vere Bela Voda e bardhë",
        mk: "Шише Бела Вода бело вино"
    },
    price: 2500,
    category: "beers-wines",
    image: "https://wine.mk/wp-content/uploads/2017/11/Bela-voda-White-png.png",
    featured: false
},
{
    name: { en: "Bela Voda Red", sq: "Bela Voda e Kuqe", mk: "Бела Вода Црвено" },
    description: { 
        en: "Bottle of Bela Voda red wine",
        sq: "Shishe vere Bela Voda e kuqe",
        mk: "Шише Бела Вода црвено вино"
    },
    price: 2500,
    category: "beers-wines",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyHO0ESR5gzBJck27ecWmjiEb-dDGoqpUSyg&s",
    featured: false
},

    // Cocktails
      {
        name: { en: "Malibu Bay Breeze", sq: "Malibu Bay Breeze", mk: "Малибу Беј Бриз" },
        description: { en: "Malibu rum, cranberry juice, pineapple juice", sq: "Rum Malibu, lëng boronice, lëng ananasi", mk: "Малибу рум, сок од брусница, ананасов сок" },
        price: 350,
        category: "cocktails",
        image: "https://i.imgur.com/h8tmdLl.png",
        featured: false
    },
    {
        name: { en: "Gin Daisy", sq: "Gin Daisy", mk: "Џин Дејзи" },
        description: { en: "Gin, lemon juice, grenadine, soda", sq: "Xhin, lëng limoni, grenadinë, sodë", mk: "Џин, лимонов сок, гренадин, сода" },
        price: 350,
        category: "cocktails",
        image: "https://i.imgur.com/XGDWpTb.png",
        featured: false
    },
    {
        name: { en: "Tequila Sunrise", sq: "Tequila Sunrise", mk: "Текила Санрајз" },
        description: { en: "Tequila, orange juice, grenadine", sq: "Tekilë, lëng portokalli, grenadinë", mk: "Текила, сок од портокал, гренадин" },
        price: 350,
        category: "cocktails",
        image: "https://i.imgur.com/UlfsOUz.png",
        featured: false
    },
    {
        name: { en: "Mama Mia", sq: "Mama Mia", mk: "Мама Миа" },
        description: { en: "Vodka, strawberry purée, lime, mint", sq: "Vodkë, pure luleshtrydheje, gëlqere, mentë", mk: "Водка, јагодово пире, лајм, мента" },
        price: 450,
        category: "cocktails",
        image: "https://i.imgur.com/Uu8sQbI.png",
        featured: false
    },
    {
        name: { en: "Rainbow Paradise", sq: "Rainbow Paradise", mk: "Раинбоу Парадајс" },
        description: { en: "Rum, orange juice, blue curaçao, grenadine", sq: "Rum, lëng portokalli, curaçao blu, grenadinë", mk: "Рум, портокалов сок, сино кирасо, гренадин" },
        price: 350,
        category: "cocktails",
        image: "https://i.imgur.com/m7h140v.png",
        featured: false
    },
    {
        name: { en: "Cuba Libre", sq: "Cuba Libre", mk: "Куба Либре" },
        description: { en: "Rum, Coca-Cola, lime", sq: "Rum, Coca-Cola, limë", mk: "Рум, Кока-Кола, лајм" },
        price: 350,
        category: "cocktails",
        image: "https://i.imgur.com/v9Wli4S.png",
        featured: true
    },
    {
        name: { en: "Woo Woo", sq: "Woo Woo", mk: "Ву Ву" },
        description: { en: "Vodka, peach schnapps, cranberry juice", sq: "Vodkë, pije pjeshke, lëng boronice", mk: "Водка, праска ликер, сок од брусница" },
        price: 350,
        category: "cocktails",
        image: "https://i.imgur.com/OJUY3QF.png",
        featured: false
    },
    {
        name: { en: "Red Explosion", sq: "Red Explosion", mk: "Црвена Експлозија" },
        description: { en: "Vodka, blackberry juice, grenadine", sq: "Vodkë, lëng manaferre, grenadinë", mk: "Водка, сок од капина, гренадин" },
        price: 350,
        category: "cocktails",
        image: "https://i.imgur.com/MEpQVQH.png",
        featured: false
    },
    // Mocktails
      {
    name: { en: "Blue Lagoon", sq: "Blue Lagoon", mk: "Блу Лагун" },
    description: { 
        en: "A refreshing mix of vodka, blue curaçao, and lemon soda, served over ice and garnished with a lemon wheel", 
        sq: "Një përzierje freskuese e vodkës, blue curaçao dhe soda limoni, shërbyer mbi akull dhe e zbukuruar me një fetë limoni", 
        mk: "Освежувачка мешавина од вотка, сино кираско и лимонада, послужена со мраз и украсена со лимон" 
    },
    price: 250,
    category: "mocktails",
    image: "https://i.imgur.com/6Uv80LG.png",
    featured: false
},
  {
        name: { en: "Blue Hawai", sq: "Blue Hawai", mk: "Блу Хаваи" },
        description: { 
            en: "Tropical juice blend with pineapple and blue syrup", 
            sq: "Pije tropikale me ananas dhe shurup blu", 
            mk: "Тропски сок со ананас и син сируп" 
        },
        price: 190,
        category: "mocktails",
        image: "https://i.imgur.com/0MQ2yNO.png",
        featured: false
    },
    {
        name: { en: "Watermelon", sq: "Watermelon", mk: "Лубеница" },
        description: { 
            en: "Fresh watermelon juice with mint", 
            sq: "Lëng shalqiri i freskët me mentë", 
            mk: "Свеж сок од лубеница со мента" 
        },
        price: 200,
        category: "mocktails",
        image: "https://i.imgur.com/7gms7Yz.png",
        featured: false
    },
    {
        name: { en: "Strawberry", sq: "Strawberry", mk: "Јагода" },
        description: { 
            en: "Strawberry purée with citrus and ice", 
            sq: "Pure luleshtrydheje me agrume dhe akull", 
            mk: "Јагодово пире со цитрус и мраз" 
        },
        price: 200,
        category: "mocktails",
        image: "https://i.imgur.com/JeniSMV.png",
        featured: false
    },
    {
        name: { en: "Pina Colada", sq: "Pina Colada", mk: "Пина Колада" },
        description: { 
            en: "Coconut cream with pineapple juice", 
            sq: "Krem kokosi me lëng ananasi", 
            mk: "Кокосов крем со ананасов сок" 
        },
        price: 200,
        category: "mocktails",
        image: "https://i.imgur.com/NcJxULS.png",
        featured: false
    },
    {
        name: { en: "Fruit Punch", sq: "FruitPunch", mk: "Овошен Пунч" },
        description: { 
            en: "Mixed tropical fruit juices", 
            sq: "Lëngje të përziera frutash tropikale", 
            mk: "Мешани тропски овошни сокови" 
        },
        price: 210,
        category: "mocktails",
        image: "https://i.imgur.com/GQyL0cy.png",
        featured: false
    },
    {
        name: { en: "Mojito", sq: "Mojito", mk: "Мохито" },
        description: { 
            en: "Lime, mint, sugar and soda water", 
            sq: "Gëlqere, mentë, sheqer dhe ujë sodik", 
            mk: "Лајм, мента, шеќер и сода вода" 
        },
        price: 190,
        category: "mocktails",
        image: "https://www.cruzanrum.com/sites/default/files/styles/original/public/2021-11/CZ_Batch_7_CocktailCard_1000x1000_Mojito_Static%20%281%29.png.webp?itok=IRCdLXGt",
        featured: false
    },
    {
        name: { en: "Cocktail Redbull", sq: "Koktel Redbull", mk: "Коктел Редбул" },
        description: { 
            en: "Redbull with citrus and ice", 
            sq: "Redbull me agrume dhe akull", 
            mk: "Редбул со цитрус и мраз" 
        },
        price: 400,
        category: "mocktails",
        image: "https://i.imgur.com/suPvKS7.png",
        featured: false
    },
    {
        name: { en: "Candy Crush", sq: "Candy Crush", mk: "Кенди Краш" },
        description: { 
            en: "Fruity cocktail with candy notes", 
            sq: "Koktejl me shije frutash dhe ëmbëlsira", 
            mk: "Коктел со овошни вкусови и бонбони" 
        },
        price: 230,
        category: "mocktails",
        image: "https://i.imgur.com/uHjUQkP.png",
        featured: false
    },
    {
        name: { en: "Cola Mojito", sq: "Cola Mojito", mk: "Кола Мохито" },
        description: { 
            en: "Refreshing mojito flavor with cola", 
            sq: "Koktejl me shije freskuese të mojitos dhe kola", 
            mk: "Освежителен коктел со вкус на мохито и кола" 
        },
        price: 220,
        category: "mocktails",
        image: "https://i.imgur.com/caFTikA.png",
        featured: false
    },
  

    // Alcoholic Drinks
// Alcoholic Drinks
// Vodka
{
    name: { en: "Vodka Absolut", sq: "Vodka Absolut", mk: "Vodka Absolut" },
    description: { en: "Vodka Absolut", sq: "Vodka Absolut", mk: "Vodka Absolut" },
    price: 200,
    category: "alcoholic",
    image: "https://bevvyco.s3.amazonaws.com/img/drinks/dy/tody/21b31022be58a60e611b330d3fdece47-lg.jpg",
    featured: false
},
{
    name: { en: "Vodka Smirnoff", sq: "Vodka Smirnoff", mk: "Vodka Smirnoff" },
    description: { en: "Vodka Smirnoff", sq: "Vodka Smirnoff", mk: "Vodka Smirnoff" },
    price: 150,
    category: "alcoholic",
    image: "https://a-static.mlcdn.com.br/1500x1500/vodka-smirnoff-original-175l/magazineluiza/230203600/8d8d4414543940c01b863f9fd88d3865.jpg",
    featured: false
},
{
    name: { en: "Vodka Belvedere", sq: "Vodka Belvedere", mk: "Vodka Belvedere" },
    description: { en: "Vodka Belvedere", sq: "Vodka Belvedere", mk: "Vodka Belvedere" },
    price: 350,
    category: "alcoholic",
    image: "https://wowliquordiscounter.ca/wp-content/uploads/2024/08/website-pic-1-2024-10-13T205817.159.png",
    featured: false
},
{
    name: { en: "Vodka Grey Goose", sq: "Vodka Grey Goose", mk: "Vodka Grey Goose" },
    description: { en: "Vodka Grey Goose", sq: "Vodka Grey Goose", mk: "Vodka Grey Goose" },
    price: 300,
    category: "alcoholic",
    image: "https://www.raschvin.com/wp-content/uploads/2023/03/Grey_Goose_Vodka_1_5ltr_The_Project_Garments_B_9c2b2af5-6697-4c5a-87e7-9df222917af7_800x.jpg",
    featured: false
},
{
    name: { en: "Vodka Finlandia", sq: "Vodka Finlandia", mk: "Vodka Finlandia" },
    description: { en: "Vodka Finlandia", sq: "Vodka Finlandia", mk: "Vodka Finlandia" },
    price: 150,
    category: "alcoholic",
    image: "https://www.ocado.com/images-v3/eafa5127-d256-497b-9609-4869092accd6/3359f9c8-dcf9-4e42-a641-2deb95a30b65/500x500.jpg",
    featured: false
},
{
    name: { en: "Smirnoff Ice", sq: "Smirnoff Ice", mk: "Smirnoff Ice" },
    description: { en: "Smirnoff Ice", sq: "Smirnoff Ice", mk: "Smirnoff Ice" },
    price: 200,
    category: "alcoholic",
    image: "https://gemak.mk/wp-content/uploads/2020/03/sliki-za-web-04.png",
    featured: false
},

// Whiskey
{
    name: { en: "Jack Daniel's", sq: "Jack Daniel's", mk: "Jack Daniel's" },
    description: { en: "Jack Daniel's", sq: "Jack Daniel's", mk: "Jack Daniel's" },
    price: 210,
    category: "alcoholic",
    image: "https://www.oaks.delivery/wp-content/uploads/Jack-Daniels-Honey-Whiskey-1-1600x900-1-1200x675-cropped.webp",
    featured: false
},
{
    name: { en: "Jack Daniel's Honey", sq: "Jack Daniel's Honey", mk: "Jack Daniel's Honey" },
    description: { en: "Jack Daniel's Honey", sq: "Jack Daniel's Honey", mk: "Jack Daniel's Honey" },
    price: 200,
    category: "alcoholic",
    image: "https://www.oaks.delivery/wp-content/uploads/jd-honey.jpg",
    featured: false
},
{
    name: { en: "Jack Daniel's Single Barrel", sq: "Jack Daniel's Single Barrel", mk: "Jack Daniel's Single Barrel" },
    description: { en: "Jack Daniel's Single Barrel", sq: "Jack Daniel's Single Barrel", mk: "Jack Daniel's Single Barrel" },
    price: 260,
    category: "alcoholic",
    image: "https://www.whisky.de/shop/out/pictures/generated/product/5/2200_2200_75/image_JACKDSIBA_5.jpg?1764235162",
    featured: false
},
{
    name: { en: "Jameson Irish Whiskey", sq: "Jameson Irish Whiskey", mk: "Jameson Irish Whiskey" },
    description: { en: "Jameson Irish Whiskey", sq: "Jameson Irish Whiskey", mk: "Jameson Irish Whiskey" },
    price: 170,
    category: "alcoholic",
    image: "https://vinomarket.mk/wp-content/uploads/2021/03/PRMiniProduct_Page_2_Image_0015.jpg",
    featured: false
},
{
    name: { en: "Johnnie Walker Red Label", sq: "Johnnie Walker Red Label", mk: "Johnnie Walker Red Label" },
    description: { en: "Johnnie Walker Red Label", sq: "Johnnie Walker Red Label", mk: "Johnnie Walker Red Label" },
    price: 170,
    category: "alcoholic",
    image: "https://gemak.mk/wp-content/uploads/2020/03/jw-red-700ml-300x300.jpg",
    featured: false
},
{
    name: { en: "Johnnie Walker Black Label", sq: "Johnnie Walker Black Label", mk: "Johnnie Walker Black Label" },
    description: { en: "Johnnie Walker Black Label", sq: "Johnnie Walker Black Label", mk: "Johnnie Walker Black Label" },
    price: 210,
    category: "alcoholic",
    image: "https://media.liquormax.com/eq4rxnkvcouvc1anfqqhe/088110011406.jpg",
    featured: false
},
{
    name: { en: "Johnnie Walker Gold Label", sq: "Johnnie Walker Gold Label", mk: "Johnnie Walker Gold Label" },
    description: { en: "Johnnie Walker Gold Label", sq: "Johnnie Walker Gold Label", mk: "Johnnie Walker Gold Label" },
    price: 300,
    category: "alcoholic",
    image: "https://vinomarket.mk/wp-content/uploads/2021/03/10-2.jpg",
    featured: false
},
{
    name: { en: "Chivas Regal", sq: "Chivas Regal", mk: "Chivas Regal" },
    description: { en: "Chivas Regal", sq: "Chivas Regal", mk: "Chivas Regal" },
    price: 300,
    category: "alcoholic",
    image: "https://cdn2.hubspot.net/hubfs/632486/Screenshot%202020-02-25%20at%2011.41.43.png",
    featured: false
},
{
    name: { en: "Cardhu", sq: "Cardhu", mk: "Cardhu" },
    description: { en: "Cardhu", sq: "Cardhu", mk: "Cardhu" },
    price: 300,
    category: "alcoholic",
    image: "https://m.media-amazon.com/images/I/71KC8-kZTPL.jpg",
    featured: false
},
{
    name: { en: "Dimple", sq: "Dimple", mk: "Dimple" },
    description: { en: "Dimple", sq: "Dimple", mk: "Dimple" },
    price: 250,
    category: "alcoholic",
    image: "https://themaltgallery.com/cdn/shop/products/dimple12.jpg?v=1649065581",
    featured: false
},
{
    name: { en: "J&B", sq: "J&B", mk: "J&B" },
    description: { en: "J&B", sq: "J&B", mk: "J&B" },
    price: 170,
    category: "alcoholic",
    image: "https://vinomarket.mk/wp-content/uploads/2021/03/%D0%88B-1L.jpg",
    featured: false
},
{
    name: { en: "Ballantine's", sq: "Ballantine's", mk: "Ballantine's" },
    description: { en: "Ballantine's", sq: "Ballantine's", mk: "Ballantine's" },
    price: 170,
    category: "alcoholic",
    image: "https://www.pernod-ricard.com/sites/default/files/styles/brand_tile_3_in_row_desktop_958x1048_/public/2025-02/ballantines_fy25_b7.jpg.jpg?h=bb2d85cd&itok=ra1ra5XD",
    featured: false
},
{
    name: { en: "Jim Beam", sq: "Jim Beam", mk: "Jim Beam" },
    description: { en: "Jim Beam", sq: "Jim Beam", mk: "Jim Beam" },
    price: 170,
    category: "alcoholic",
    image: "https://etimg.etb2bimg.com/photo/85004055.cms",
    featured: false
},
{
    name: { en: "Bushmills", sq: "Bushmills", mk: "Bushmills" },
    description: { en: "Bushmills", sq: "Bushmills", mk: "Bushmills" },
    price: 140,
    category: "alcoholic",
    image: "https://bushmills.com/cdn/shop/files/bushmills-whiskey-12Y-lifestyle-1.png?v=1740697210&width=1445",
    featured: false
},

// Rum
{
    name: { en: "Bacardi", sq: "Bacardi", mk: "Bacardi" },
    description: { en: "Bacardi", sq: "Bacardi", mk: "Bacardi" },
    price: 140,
    category: "alcoholic",
    image: "https://mycocktailrecipes.com/_next/image?url=%2Fapi%2Fmedia%2Ffile%2Fbacardi-1024x1365.webp&w=2048&q=70",
    featured: false
},
{
    name: { en: "Captain Morgan", sq: "Captain Morgan", mk: "Captain Morgan" },
    description: { en: "Captain Morgan", sq: "Captain Morgan", mk: "Captain Morgan" },
    price: 130,
    category: "alcoholic",
    image: "https://images.ctfassets.net/6zncp07wiqyq/1RKcsV8cGRiP6n6t1feHb7/b05e71b4e5d35e7469331d1acf601c0a/training_online-training-and-e-learning_bar-management_header-34.jpg_.jpg",
    featured: false
},

// Liqueurs & Others
{
    name: { en: "Malibu", sq: "Malibu", mk: "Malibu" },
    description: { en: "Malibu", sq: "Malibu", mk: "Malibu" },
    price: 170,
    category: "alcoholic",
    image: "https://mycocktailrecipes.com/_next/image?url=%2Fapi%2Fmedia%2Ffile%2Fmalibu-rum-1024x1024.webp&w=2048&q=70",
    featured: false
},
{
    name: { en: "Baileys", sq: "Baileys", mk: "Baileys" },
    description: { en: "Baileys", sq: "Baileys", mk: "Baileys" },
    price: 170,
    category: "alcoholic",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Glass_of_Baileys.jpg/250px-Glass_of_Baileys.jpg",
    featured: false
},
{
    name: { en: "Martini Rosso", sq: "Martini Rosso", mk: "Martini Rosso" },
    description: { en: "Martini Rosso", sq: "Martini Rosso", mk: "Martini Rosso" },
    price: 150,
    category: "alcoholic",
    image: "https://zoom.ocado.com/productImages/450/450818011_450818011_3_1727434906000_1280x1280.jpg",
    featured: false
},
{
    name: { en: "Martini Bianco", sq: "Martini Bianco", mk: "Martini Bianco" },
    description: { en: "Martini Bianco", sq: "Martini Bianco", mk: "Martini Bianco" },
    price: 140,
    category: "alcoholic",
    image: "https://digitalcontent.api.tesco.com/v2/media/ghs/d4778263-9c8d-4a8b-9def-763d5254bf0d/007441c9-4ae9-442b-af08-66d17c7ae148_900914217.jpeg?h=960&w=960",
    featured: false
},
{
    name: { en: "Jägermeister", sq: "Jägermeister", mk: "Jägermeister" },
    description: { en: "Jägermeister", sq: "Jägermeister", mk: "Jägermeister" },
    price: 160,
    category: "alcoholic",
    image: "https://secretbottleshop.co.uk/cdn/shop/files/dc194924-3610-4d89-acb8-5c59647f6f43_700x700.jpg?v=1748337973",
    featured: false
},
{
    name: { en: "Ramazzotti", sq: "Ramazzotti", mk: "Ramazzotti" },
    description: { en: "Ramazzotti", sq: "Ramazzotti", mk: "Ramazzotti" },
    price: 120,
    category: "alcoholic",
    image: "https://www.ramazzotti1815.com/wp-content/uploads/2020/07/amaro.jpg", 
    featured: false
},
{
    name: { en: "Campari", sq: "Campari", mk: "Campari" },
    description: { en: "Campari", sq: "Campari", mk: "Campari" },
    price: 120,
    category: "alcoholic",
    image: "https://acdn-us.mitiendanube.com/stores/131/273/products/campari-2-750-cc1-74bf5e3d3378c2b11e15937113766251-640-0.webp", 
    featured: false
},

// Brandy & Cognac
{
    name: { en: "Stock 84", sq: "Stock 84", mk: "Stock 84" },
    description: { en: "Stock 84", sq: "Stock 84", mk: "Stock 84" },
    price: 120,
    category: "alcoholic",
    image: "https://www.stockspirits.com/_next/image?url=https%3A%2F%2Fcms.stockspirits.com%2Fwp-content%2Fuploads%2F2023%2F08%2Fbrand-84.png&w=3840&q=75",
    featured: false
},
{
    name: { en: "Hennessy", sq: "Hennessy", mk: "Hennessy" },
    description: { en: "Hennessy", sq: "Hennessy", mk: "Hennessy" },
    price: 300,
    category: "alcoholic",
    image: "https://minuman.com/cdn/shop/products/HENNESSYLIFESTYLEVSOPFOODPAIRINGOUTSIDEV3a_1000x.jpg?v=1748835014",
    featured: false
},
{
    name: { en: "Remy Martin", sq: "Remy Martin", mk: "Remy Martin" },
    description: { en: "Remy Martin", sq: "Remy Martin", mk: "Remy Martin" },
    price: 250,
    category: "alcoholic",
    image: "https://www.thewhiskyexchange.com/components/feature/remymartin/assets/application/images/bg1m.jpg?v=14092017",
    featured: false
},
{
    name: { en: "Courvoisier", sq: "Courvoisier", mk: "Courvoisier" },
    description: { en: "Courvoisier", sq: "Courvoisier", mk: "Courvoisier" },
    price: 200,
    category: "alcoholic",
    image: "https://zoom.ocado.com/productImages/166/16679011_16679011_4_1707320934000_1280x1280.jpg",
    featured: false
},

// Other
{
    name: { en: "Badel", sq: "Badel", mk: "Badel" },
    description: { en: "Badel", sq: "Badel", mk: "Badel" },
    price: 120,
    category: "alcoholic",
    image: "https://www.badel1862.hr/wp-content/uploads/2023/07/IMG_1901-1.jpg",
    featured: false
},
{
    name: { en: "Badel Pelinkovac", sq: "Badel Pelinkovac", mk: "Badel Pelinkovac" },
    description: { en: "Badel Pelinkovac", sq: "Badel Pelinkovac", mk: "Badel Pelinkovac" },
    price: 120,
    category: "alcoholic",
    image: "https://www.badel1862.hr/wp-content/uploads/2023/06/pelinkovac_gorki_1008x1112.jpg",
    featured: false
},
{
    name: { en: "Sheri Dans", sq: "Sheri Dans", mk: "Sheri Dans" },
    description: { en: "Sheri Dans", sq: "Sheri Dans", mk: "Sheri Dans" },
    price: 150,
    category: "alcoholic",
    image: "https://www.bondston.com/files/Fotky_k_popisom_1400x700/liker/sheridans-mod.png",
    featured: false
},

  // Tequila
{
    name: { en: "Tequila Camino", sq: "Tequila Camino", mk: "Tequila Camino" },
    description: { en: "Tequila Camino", sq: "Tequila Camino", mk: "Tequila Camino" },
    price: 110,
    category: "alcoholic",
    image: "https://cdn.store-assets.com/s/366717/i/74174295.jpeg?width=1024",
    featured: false
},
{
    name: { en: "Tequila Fiesta", sq: "Tequila Fiesta", mk: "Tequila Fiesta" },
    description: { en: "Tequila Fiesta", sq: "Tequila Fiesta", mk: "Tequila Fiesta" },
    price: 110,
    category: "alcoholic",
    image: "https://www.garrafeirasoares.pt/temp/JPG_3297efce05048bc051c7cf731da01a6d.png",
    featured: false
},
{
    name: { en: "Jose Cuervo", sq: "Jose Cuervo", mk: "Jose Cuervo" },
    description: { en: "Jose Cuervo", sq: "Jose Cuervo", mk: "Jose Cuervo" },
    price: 110,
    category: "alcoholic",
    image: "https://walmartgt.vtexassets.com/arquivos/ids/448300/Tequila-Jose-Cuervo-Tradicional-695ml-3-36115.jpg?v=638415239732330000",
    featured: false
},

// Ouzo / Tsipouro
{
    name: { en: "Ouzo Plomari", sq: "Ouzo Plomari", mk: "Ouzo Plomari" },
    description: { en: "Ouzo Plomari", sq: "Ouzo Plomari", mk: "Ouzo Plomari" },
    price: 120,
    category: "alcoholic",
    image: "https://unboxgreece.com/wp-content/uploads/2024/04/Plwmari08-1.jpg",
    featured: false
},
{
    name: { en: "Tsantali", sq: "Tsantali", mk: "Tsantali" },
    description: { en: "Tsantali", sq: "Tsantali", mk: "Tsantali" },
    price: 120,
    category: "alcoholic",
    image: "https://bistravoda.mk/wp-content/uploads/2022/07/large-12617-500x500-1-optimized.jpg",
    featured: false
},

// Gin
{
    name: { en: "Bombay Sapphire Gin", sq: "Bombay Sapphire Gin", mk: "Bombay Sapphire Gin" },
    description: { en: "Bombay Sapphire Gin", sq: "Bombay Sapphire Gin", mk: "Bombay Sapphire Gin" },
    price: 130,
    category: "alcoholic",
    image: "https://www.theliquorshop.com.sg/cdn/shop/files/65e001ff6be81_1709179391_735x700.jpg?v=1709179893",
    featured: false
},
{
    name: { en: "Gordon's Gin", sq: "Gordon's Gin", mk: "Gordon's Gin" },
    description: { en: "Gordon's Gin", sq: "Gordon's Gin", mk: "Gordon's Gin" },
    price: 130,
    category: "alcoholic",
    image: "https://images.ctfassets.net/6zncp07wiqyq/3Fe2uX2357MDdPQtS65B2v/c0de69ac5cee3600343a8c7f628d9b2e/spirits-beer-and-drinks_our-brands_gins_gordons_hero_dba_gin_brand_1440x1120.png_.png",
    featured: false
},
{
    name: { en: "SAX Gin Classic", sq: "SAX Gin Classic", mk: "SAX Gin Classic" },
    description: { en: "SAX Gin Classic", sq: "SAX Gin Classic", mk: "SAX Gin Classic" },
    price: 130,
    category: "alcoholic",
    image: "https://www.badel1862.hr/wp-content/uploads/2023/06/Sax_1008x1112px.jpg",
    featured: false
},
{
    name: { en: "SAX Gin Pink", sq: "SAX Gin Pink", mk: "SAX Gin Pink" },
    description: { en: "SAX Gin Pink", sq: "SAX Gin Pink", mk: "SAX Gin Pink" },
    price: 130,
    category: "alcoholic",
    image: "https://d17zv3ray5yxvp.cloudfront.net/variants/bnjsx7e33rrhxjut9uuceszh9ki5/51b8aa181ad15015651703a4356668224748770ff8b1ba318f5b3051f549af07",
    featured: false
},
{
    name: { en: "SAX Gin Ginger", sq: "SAX Gin Ginger", mk: "SAX Gin Ginger" },
    description: { en: "SAX Gin Ginger", sq: "SAX Gin Ginger", mk: "SAX Gin Ginger" },
    price: 130,
    category: "alcoholic",
    image: "https://shop.stridon.hr/wp-content/uploads/2022/04/Sax-Ginger-gin-07L-Badel-1862.jpg.webp",
    featured: false
},
{
    name: { en: "Hendrick's Gin", sq: "Hendrick's Gin", mk: "Hendrick's Gin" },
    description: { en: "Hendrick's Gin", sq: "Hendrick's Gin", mk: "Hendrick's Gin" },
    price: 300,
    category: "alcoholic",
    image: "https://minuman.com/cdn/shop/products/67526842_2383162885305238_4468850485792604160_n_800x.jpg?v=1748853450",
    featured: false
},
    // Food

    {
        name: { en: "Coming Soon", sq: "Së shpejti", mk: "Доаѓа наскоро" },
        description: { 
            en: "A new food item coming soon", 
            sq: "Produkt ushqimor së shpejti në menu", 
            mk: "Нов прехранбен артикл наскоро" 
        },
        price: null,
        category: "food",
        image: "https://i.imgur.com/sLp8fqp.png",
        featured: false
    },
    {
        name: { en: "Coming Soon", sq: "Së shpejti", mk: "Доаѓа наскоро" },
        description: { 
            en: "A new food item coming soon", 
            sq: "Produkt ushqimor së shpejti në menu", 
            mk: "Нов прехранбен артикл наскоро" 
        },
        price: null,
        category: "food",
        image: "https://i.imgur.com/sLp8fqp.png",
        featured: false
    },
    {
        name: { en: "Coming Soon", sq: "Së shpejti", mk: "Доаѓа наскоро" },
        description: { 
            en: "A new food item coming soon", 
            sq: "Produkt ushqimor së shpejti në menu", 
            mk: "Нов прехранбен артикл наскоро" 
        },
        price: null,
        category: "food",
        image: "https://i.imgur.com/sLp8fqp.png",
        featured: false
    
    },

    // Snacks
     {
        name: { en: "Nachos", sq: "Nachos", mk: "Начос" },
        description: { en: "With cheese and salsa", sq: "Me djathë dhe salsa", mk: "Со сирење и салса" },
        price: 250,
        category: "snacks",
        image: "https://i.imgur.com/8TNuer1.jpeg",
        featured: false
    },
    {
        name: { en: "Fruit Salad", sq: "Sallatë Frutash", mk: "Овошна салата" },
        description: { en: "Mixed fresh fruits", sq: "Përzierje frutash të freskëta", mk: "Мешано свежо овошје" },
        price: 300,
        category: "snacks",
        image: "https://i.imgur.com/PK5aARA.jpeg",
        featured: false
    },
    {
        name: { en: "Mini Pancakes", sq: "Mini Pancakes", mk: "Мини Палачинки" },
        description: { en: "10 Mini Pancakes with Chocolate Topping", sq: "10 Mini Palaçinka me Shtresë Çokollate", mk: "10 Мини Палачинки со Чоколаден Прелив" },
        price: 220,
        category: "snacks",
        image: "https://img.freepik.com/premium-photo/mini-pancakes-png-kids-breakfast-treat-chocolate-spread-strawberry-yogurt_53876-1011843.jpg?semt=ais_hybrid&w=740",
        featured: true
    },
    {
        name: { en: "Fruit Pancakes", sq: "Fruit Pancakes", mk: "Мини Палачинки" },
        description: { en: "10 Mini Pancakes with Fruit and Chocolate", sq: "10 Mini Pancakes me Fruta dhe Çokolladë", mk: "10 Мини Палачинки со Овошје и Чоколадо" },
        price: 290,
        category: "snacks",
        image: "https://images.eatsmarter.de/sites/default/files/styles/1600x1200/public/erdbeer-pancakes-mit-heidelbeeren-und-himbeeren-680885.png",
        featured: false
    
    }
];
