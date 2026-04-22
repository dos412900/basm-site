export type Product = {
  slug: string;
  title: {
    ru: string;
    kz?: string;
    en?: string;
  };
  category: string;
  short: {
    ru: string;
    kz?: string;
    en?: string;
  };
  image?: string;
};

export type Category = {
  slug: string;
  title: { ru: string; kz?: string; en?: string };
  desc?: { ru: string; kz?: string; en?: string };
  children?: Category[];
};

export const categories: Category[] = [
  {
    slug: "furniture",
    title: { ru: "Медицинская мебель" },
    desc: { ru: "Оснащение клиник и больниц" },
  },
  {
    slug: "functional-diagnostics",
    title: { ru: "Функциональная диагностика" },
    desc: { ru: "Оборудование для диагностики" },
  },
  {
    slug: "zozh-alcohol",
    title: { ru: "Школа ЗОЖ — Алкоголь" },
    desc: { ru: "Демонстрационные модели по теме алкоголизма" },
  },
  {
    slug: "zozh-tobacco",
    title: { ru: "Школа ЗОЖ — Табакокурение" },
    desc: { ru: "Демонстрационные модели по теме табакокурения" },
  },
  {
    slug: "zozh-diabetes",
    title: { ru: "Школа ЗОЖ — Диабет" },
    desc: { ru: "Демонстрационные модели по теме диабета" },
  },
];

export const products: Product[] = [
  // Медицинская мебель
  {
    slug: "ok-gamma-03-full",
    category: "furniture",
    title: { ru: "Стол общехирургический ОК-ГАММА 03 (полный комплект)" },
    short: {
      ru: "Стол общехирургический ОК-ГАММА 03 в комплекте со съемным приспособлением для операций с подъемом и удержанием поясничной, тазовой или грудной области тела",
    },
    image: "/ok-gamma-03-full.jpg",
  },
  {
    slug: "ok-gamma-03",
    category: "furniture",
    title: { ru: "Стол общехирургический ОК-ГАММА 03" },
    short: { ru: "Стол общехирургический ОК-ГАММА 03" },
    image: "/ok-gamma-03.jpg",
  },
  {
    slug: "ok-teta-full",
    category: "furniture",
    title: { ru: "Стол общехирургический урологический ОК-ТЕТА (полный комплект)" },
    short: {
      ru: "Стол общехирургический, урологический ОК-ТЕТА в комплекте со съемным приспособлением для операций с подъемом и удержанием поясничной, тазовой или грудной области тела",
    },
    image: "/ok-teta-full.jpg",
  },
  {
    slug: "ok-teta",
    category: "furniture",
    title: { ru: "Стол общехирургический урологический ОК-ТЕТА" },
    short: { ru: "Стол общехирургический, урологический ОК-ТЕТА" },
    image: "/ok-teta.jpg",
  },
  {
    slug: "kpp-33",
    category: "furniture",
    title: { ru: "КПП-33 Комплект хирургических держателей ног" },
    short: { ru: "Комплект хирургических держателей ног КПП-33" },
    image: "/kpp-33.jpg",
  },

  // Функциональная диагностика
  {
    slug: "entsefalan-mini",
    category: "functional-diagnostics",
    title: { ru: "Энцефалан-ЭЭГР-19/26 «Мини» (АТ-Мини)" },
    short: {
      ru: "Электроэнцефалограф-регистратор компьютеризированный портативный носимый суточной регистрации ЭЭГ в телеметрическом и автономном режиме",
    },
    image: "/entsefalan-mini.jpg",
  },
  {
    slug: "mas2-s",
    category: "functional-diagnostics",
    title: { ru: "Спирометр автономный запоминающий «МАС2-С»" },
    short: {
      ru: "Автономный запоминающий спирометр для функциональной диагностики дыхания",
    },
    image: "/mas2-s.jpg",
  },

  // Демонстрационные модели ЗОЖ
  {
    slug: "model-alcohol-abuse",
    category: "healthy-lifestyle-models",
    title: { ru: "Последствия злоупотребления алкоголем" },
    short: { ru: "Демонстрационная модель последствий злоупотребления алкоголем" },
    image: "/model-alcohol-abuse.jpg",
  },
  {
    slug: "model-liver-death",
    category: "healthy-lifestyle-models",
    title: { ru: "Смерть печени (мольберт)" },
    short: { ru: "Демонстрационная модель «Смерть печени» на мольберте" },
    image: "/model-liver-death.jpg",
  },
  {
    slug: "model-pickled-liver",
    category: "healthy-lifestyle-models",
    title: { ru: "Маринованная печень" },
    short: { ru: "Демонстрационная модель «Маринованная печень»" },
    image: "/model-pickled-liver.jpg",
  },
  {
    slug: "model-drunk-dangerous-interactive",
    category: "healthy-lifestyle-models",
    title: { ru: "Интерактивная игра «Пьяный и опасный» с интерактивными очками" },
    short: { ru: "Демонстрационная модель с интерактивными очками для наглядного показа эффектов алкоголя" },
    image: "/model-drunk-dangerous-interactive.jpg",
  },
  {
    slug: "model-drunk-dangerous-glasses",
    category: "healthy-lifestyle-models",
    title: { ru: "Интерактивная игра «Пьяный и опасный» с очками" },
    short: { ru: "Демонстрационная модель с очками для наглядного показа эффектов алкоголя" },
    image: "/model-drunk-dangerous-glasses.jpg",
  },
  {
    slug: "model-drunk-package-interactive",
    category: "healthy-lifestyle-models",
    title: { ru: "«Пьяный и опасный — пакет» с интерактивными очками" },
    short: { ru: "Демонстрационный пакет с интерактивными очками" },
    image: "/model-drunk-package-interactive.jpg",
  },
  {
    slug: "model-drunk-dangerous-cups",
    category: "healthy-lifestyle-models",
    title: { ru: "«Пьяный и Опасный» с бокалами" },
    short: { ru: "Демонстрационная модель с бокалами" },
    image: "/model-drunk-dangerous-cups.jpg",
  },
  {
    slug: "model-drunk-unclear-thinking",
    category: "healthy-lifestyle-models",
    title: { ru: "Интерактивные очки «Пьяный и неспособный мыслить ясно» с кейсом" },
    short: { ru: "Демонстрационная модель с интерактивными очками в кейсе" },
    image: "/model-drunk-unclear-thinking.jpg",
  },
  {
    slug: "model-drunk-glasses-case",
    category: "healthy-lifestyle-models",
    title: { ru: "Очки «Пьяные и опасные» в футляре" },
    short: { ru: "Демонстрационные очки в футляре для показа эффектов алкоголя" },
    image: "/model-drunk-glasses-case.jpg",
  },
  {
    slug: "model-what-mama-does",
    category: "healthy-lifestyle-models",
    title: { ru: "«Что делает мама, делает и ребенок» Дисплей" },
    short: { ru: "Демонстрационная модель о влиянии алкоголя матери на ребёнка" },
    image: "/model-what-mama-does.jpg",
  },
  {
    slug: "model-body-alcohol-stand",
    category: "healthy-lifestyle-models",
    title: { ru: "Стенд «Моё тело и опасности употребления алкоголя»" },
    short: { ru: "Демонстрационный стенд о воздействии алкоголя на организм человека" },
    image: "/model-body-alcohol-stand.jpg",
  },
  // Школа ЗОЖ — Алкоголь (перенос старых)
  {
    slug: "model-alcohol-abuse",
    category: "zozh-alcohol",
    title: { ru: "Последствия злоупотребления алкоголем" },
    short: { ru: "Демонстрационная модель последствий злоупотребления алкоголем" },
    image: "/model-alcohol-abuse.jpg",
  },
  {
    slug: "model-liver-death",
    category: "zozh-alcohol",
    title: { ru: "Смерть печени (мольберт)" },
    short: { ru: "Демонстрационная модель «Смерть печени» на мольберте" },
    image: "/model-liver-death.jpg",
  },
  {
    slug: "model-pickled-liver",
    category: "zozh-alcohol",
    title: { ru: "Маринованная печень" },
    short: { ru: "Демонстрационная модель «Маринованная печень»" },
    image: "/model-pickled-liver.jpg",
  },
  {
    slug: "model-drunk-dangerous-interactive",
    category: "zozh-alcohol",
    title: { ru: "Интерактивная игра «Пьяный и опасный» с интерактивными очками" },
    short: { ru: "Демонстрационная модель с интерактивными очками для наглядного показа эффектов алкоголя" },
    image: "/model-drunk-dangerous-interactive.jpg",
  },
  {
    slug: "model-drunk-dangerous-glasses",
    category: "zozh-alcohol",
    title: { ru: "Интерактивная игра «Пьяный и опасный» с очками" },
    short: { ru: "Демонстрационная модель с очками для наглядного показа эффектов алкоголя" },
    image: "/model-drunk-dangerous-glasses.jpg",
  },
  {
    slug: "model-drunk-package-interactive",
    category: "zozh-alcohol",
    title: { ru: "«Пьяный и опасный — пакет» с интерактивными очками" },
    short: { ru: "Демонстрационный пакет с интерактивными очками" },
    image: "/model-drunk-package-interactive.jpg",
  },
  {
    slug: "model-drunk-dangerous-cups",
    category: "zozh-alcohol",
    title: { ru: "«Пьяный и Опасный» с бокалами" },
    short: { ru: "Демонстрационная модель с бокалами" },
    image: "/model-drunk-dangerous-cups.jpg",
  },
  {
    slug: "model-drunk-unclear-thinking",
    category: "zozh-alcohol",
    title: { ru: "Интерактивные очки «Пьяный и неспособный мыслить ясно» с кейсом" },
    short: { ru: "Демонстрационная модель с интерактивными очками в кейсе" },
    image: "/model-drunk-unclear-thinking.jpg",
  },
  {
    slug: "model-drunk-glasses-case",
    category: "zozh-alcohol",
    title: { ru: "Очки «Пьяные и опасные» в футляре" },
    short: { ru: "Демонстрационные очки в футляре для показа эффектов алкоголя" },
    image: "/model-drunk-glasses-case.jpg",
  },
  {
    slug: "model-what-mama-does",
    category: "zozh-alcohol",
    title: { ru: "«Что делает мама, делает и ребенок» Дисплей" },
    short: { ru: "Демонстрационная модель о влиянии алкоголя матери на ребёнка" },
    image: "/model-what-mama-does.jpg",
  },
  {
    slug: "model-body-alcohol-stand",
    category: "zozh-alcohol",
    title: { ru: "Стенд «Моё тело и опасности употребления алкоголя»" },
    short: { ru: "Демонстрационный стенд о воздействии алкоголя на организм человека" },
    image: "/model-body-alcohol-stand.jpg",
  },

  // Школа ЗОЖ — Табакокурение
  {
    slug: "tobacco-giant-cigarette",
    category: "zozh-tobacco",
    title: { ru: "Гигантская сигарета" },
    short: { ru: "Интерактивная модель, показывающая преимущества отказа от курения. Пользователь вращает рукав, чтобы увидеть изменения от нескольких минут до многих лет без курения." },
    image: "/tobacco-giant-cigarette.jpg",
  },
  {
    slug: "tobacco-ingredients-display",
    category: "zozh-tobacco",
    title: { ru: "Дисплей табачных ингредиентов" },
    short: { ru: "Дисплей в форме сигареты с моделями вредных веществ: мышьяк, кадмий, аммиак и другие химикаты табачного дыма." },
    image: "/tobacco-ingredients-display.jpg",
  },
  {
    slug: "tobacco-smoker-model",
    category: "zozh-tobacco",
    title: { ru: "Модель Курильщика" },
    short: { ru: "Демонстратор вторичного дыма. Сильфонный насос посылает поток моделируемого дыма через фильтр, наглядно показывая влияние пассивного курения." },
    image: "/tobacco-smoker-model.jpg",
  },
  {
    slug: "tobacco-lungs-comparison",
    category: "zozh-tobacco",
    title: { ru: "Сравнительная модель лёгких курильщика" },
    short: { ru: "Модель иллюстрирует разницу между здоровым и больным лёгким. При накачивании больное лёгкое с трудом выталкивает воздух." },
    image: "/tobacco-lungs-comparison.jpg",
  },
  {
    slug: "tobacco-consequences-display",
    category: "zozh-tobacco",
    title: { ru: "Последствия курения — 3D Display" },
    short: { ru: "Дисплей 71×68,6 см с 8 трёхмерными моделями: бронхит, рак лёгких, инфаркт, инсульт, эмфизема и другие последствия курения." },
    image: "/tobacco-consequences-display.jpg",
  },
  {
    slug: "tobacco-nonsmoker-benefits",
    category: "zozh-tobacco",
    title: { ru: "Преимущества быть некурящим — дисплей" },
    short: { ru: "Интерактивный дисплей с поворотными панелями: здоровый орган vs повреждённый курением. Можно использовать как настольный или настенный." },
    image: "/tobacco-nonsmoker-benefits.jpg",
  },
  {
    slug: "tobacco-lung-death",
    category: "zozh-tobacco",
    title: { ru: "Смерть лёгкого (мольберт)" },
    short: { ru: "Настольный дисплей с моделями здоровой, эмфизематозной и поражённой раком лёгочной ткани. Поставляется с защитным флисовым покрытием." },
    image: "/tobacco-lung-death.jpg",
  },
  {
    slug: "tobacco-smoking-for-two",
    category: "zozh-tobacco",
    title: { ru: "Кукла «Курит за двоих»" },
    short: { ru: "Кукла Смоки Сью демонстрирует влияние сигаретного дыма на 7-месячный плод. Смола собирается вокруг реалистичной модели ребёнка в утробе." },
    image: "/tobacco-smoking-for-two.jpg",
  },
  {
    slug: "tobacco-smoking-doll",
    category: "zozh-tobacco",
    title: { ru: "Курящая кукла" },
    short: { ru: "При накачивании смола собирается в трубке — «лёгких» куклы. Трубку можно извлечь для наглядного урока о повреждении лёгких смолой." },
    image: "/tobacco-smoking-doll.jpg",
  },
  {
    slug: "tobacco-mechanical-smoker",
    category: "zozh-tobacco",
    title: { ru: "Механический курильщик" },
    short: { ru: "Ручная модель, которая курит настоящую сигарету и собирает смолу на рентгеновский снимок лёгкого с раком. Поставляется со 100 листами Mini-Lung." },
    image: "/tobacco-mechanical-smoker.jpg",
  },
  {
    slug: "tobacco-dirty-mouth",
    category: "zozh-tobacco",
    title: { ru: "Грязный рот курящего" },
    short: { ru: "Интерактивная модель последствий курения для полости рта: заболевание дёсен, кариес, лейкоплакия и рак. Включает два сменных языка." },
    image: "/tobacco-dirty-mouth.jpg",
  },
  {
    slug: "tobacco-mr-gross-mouth",
    category: "zozh-tobacco",
    title: { ru: "Мистер Гросс Рот" },
    short: { ru: "Реплика зубов и дёсен в натуральную величину с реалистичными повреждениями от бездымного табака. Шарнирная модель на деревянной подставке." },
    image: "/tobacco-mr-gross-mouth.jpg",
  },
  {
    slug: "tobacco-mr-dip-lip",
    category: "zozh-tobacco",
    title: { ru: "Мистер Дип Лип" },
    short: { ru: "Интерактивная модель из материала BIOLIKE 2™. Губы отодвигаются, показывая повреждения от табака: гингивит, кариес, рак." },
    image: "/tobacco-mr-dip-lip.jpg",
  },
  {
    slug: "tobacco-life-or-death-lungs",
    category: "zozh-tobacco",
    title: { ru: "Жизнь или смерть лёгкого — набор" },
    short: { ru: "Набор из двух мягких реалистичных моделей лёгких BIOLIKE 2™: здоровое и лёгкое курильщика с опухолями, эмфиземой и раком." },
    image: "/tobacco-life-or-death-lungs.jpg",
  },
  {
    slug: "tobacco-tarred-lung",
    category: "zozh-tobacco",
    title: { ru: "Засмолённая модель лёгкого" },
    short: { ru: "Модель поперечного сечения лёгкого с эмфиземой — сильно увеличенная альвеола, пронизанная смолой, препятствующей дыханию." },
    image: "/tobacco-tarred-lung.jpg",
  },
  {
    slug: "tobacco-smoker-mucus",
    category: "zozh-tobacco",
    title: { ru: "Мокрота курильщика в банке" },
    short: { ru: "Запечатанная банка с симуляцией двухнедельной мокроты курильщика при ХОБЛ — наглядная демонстрация последствий курения." },
    image: "/tobacco-smoker-mucus.jpg",
  },
  {
    slug: "tobacco-annual-tar",
    category: "zozh-tobacco",
    title: { ru: "Табачная смола — годовой запас" },
    short: { ru: "Количество смолы, проходящей через лёгкие курильщика по полпачки в день за год. Запечатана в небьющийся контейнер." },
    image: "/tobacco-annual-tar.jpg",
  },
  {
    slug: "tobacco-passive-death",
    category: "zozh-tobacco",
    title: { ru: "Причина смерти — пассивное курение" },
    short: { ru: "Модель демонстрирует опасность пассивного курения и его последствия для здоровья окружающих." },
    image: "/tobacco-passive-death.jpg",
  },
  {
    slug: "tobacco-drowned-lung",
    category: "zozh-tobacco",
    title: { ru: "Утонувшее лёгкое — интерактивная модель" },
    short: { ru: "Реалистичная модель лёгкого с ХОБЛ плавает в симулированной мокроте. При взятии в руки запускается звук удушливого кашля." },
    image: "/tobacco-drowned-lung.jpg",
  },
  {
    slug: "tobacco-teeth-in-juice",
    category: "zozh-tobacco",
    title: { ru: "Зубы в табачном соке" },
    short: { ru: "Дисплей последствий бездымного табака для зубов: рак полости рта, поражённые дёсны, сгнившие и выпавшие зубы." },
    image: "/tobacco-teeth-in-juice.jpg",
  },
  {
    slug: "tobacco-smoker-vision-glasses",
    category: "zozh-tobacco",
    title: { ru: "Зрение курильщика — интерактивные очки (набор)" },
    short: { ru: "Набор с очками, показывающими влияние курения на зрение. Включает руководство с играми, стресс-шарики и игровые материалы." },
    image: "/tobacco-smoker-vision-glasses.jpg",
  },
  // Школа ЗОЖ — Диабет
  {
    slug: "diabetes-foot-set",
    category: "zozh-diabetes",
    title: { ru: "Набор диабетической ноги" },
    short: { ru: "Два реалистичных макета стопы из BIOLIKE 2™: с язвами на разных стадиях и тяжёлая модель с ампутацией, гангреной и деформацией Шарко." },
    image: "/diabetes-foot-set.jpg",
  },
  {
    slug: "diabetes-consequences-display",
    category: "zozh-diabetes",
    title: { ru: "Последствия проявления диабета — дисплей" },
    short: { ru: "Дисплей со скульптурными репликами сердца, почек, мозга, глаз, зубов, стопы, артерии и нервов с описанием повреждений от диабета." },
    image: "/diabetes-consequences-display.jpg",
  },
  {
    slug: "diabetes-3d-display",
    category: "zozh-diabetes",
    title: { ru: "Последствия диабета — 3D дисплей" },
    short: { ru: "3D дисплей с моделями органов: повреждение артерии, болезнь сердца, инсульт, повреждение нерва, осложнения ног, глазная болезнь, болезнь почек." },
    image: "/diabetes-3d-display.jpg",
  },
  {
    slug: "diabetes-sugar-display",
    category: "zozh-diabetes",
    title: { ru: "Засахаренный: взгляд на сахар" },
    short: { ru: "10 моделей продуктов с пробирками сахара — наглядно показывает скрытое содержание сахара в повседневной еде." },
    image: "/diabetes-sugar-display.jpg",
  },
  {
    slug: "diabetes-nutrition-exchange",
    category: "zozh-diabetes",
    title: { ru: "Пакет обмена диабетического питания" },
    short: { ru: "39 моделей продуктов питания для людей с диабетом: крахмалы, фрукты, овощи, молочные, мясо, жиры, сладости с карточками питания." },
    image: "/diabetes-nutrition-exchange.jpg",
  },
  {
    slug: "diabetes-a1c-display",
    category: "zozh-diabetes",
    title: { ru: "Уровень гликированного гемоглобина А1С" },
    short: { ru: "Двусторонняя модель: здоровый уровень глюкозы vs высокий А1С с частицами глюкозы на эритроцитах в смоделированной плазме." },
    image: "/diabetes-a1c-display.jpg",
  },
  {
    slug: "diabetes-mini-a1c-set",
    category: "zozh-diabetes",
    title: { ru: "Набор для обучения диабету Мини А1С" },
    short: { ru: "Карманный набор из двух пробирок: здоровый А1С и высокий А1С. Поставляется с инструкцией и сумкой для переноски." },
    image: "/diabetes-mini-a1c-set.jpg",
  },
  {
    slug: "diabetes-food-pyramid",
    category: "zozh-diabetes",
    title: { ru: "Четырёхсторонняя пирамида питания" },
    short: { ru: "Дисплей 40×40×43 см с полками для 41 модели продуктов из пяти групп: овощи, фрукты, зерно, белки, молочные. Включает карточки питания." },
    image: "/diabetes-food-pyramid.jpg",
  },
  {
    slug: "diabetes-rational-nutrition",
    category: "zozh-diabetes",
    title: { ru: "Рациональное питание" },
    short: { ru: "Дисплей для определения размеров порций через повседневные предметы: CD = 1 унция зерна, колода карт = 3 унции мяса и другие." },
    image: "/diabetes-rational-nutrition.jpg",
  },
  {
    slug: "diabetes-injection-set",
    category: "zozh-diabetes",
    title: { ru: "Набор обучения навыкам инъекции при диабете" },
    short: { ru: "Реалистичные многоразовые модели из BIOLIKE 2™: накладка кожи для имитации инъекции и модель пальца для ланцетной практики." },
    image: "/diabetes-injection-set.jpg",
  },
  {
    slug: "diabetes-injection-model",
    category: "zozh-diabetes",
    title: { ru: "Диабетическая модель для инъекций" },
    short: { ru: "Учебное пособие для отработки диабетических инъекций с заменяемой кожей модели." },
    image: "/diabetes-injection-model.jpg",
  },
  {
    slug: "diabetes-obesity-3d-display",
    category: "zozh-diabetes",
    title: { ru: "Последствия ожирения — 3D дисплей" },
    short: { ru: "8 трёхмерных моделей органов: диабет 2 типа, апноэ сна, инфаркт, суставные проблемы, желчный пузырь, рак, инсульт." },
    image: "/diabetes-obesity-3d-display.jpg",
  },
  {
    slug: "diabetes-inactive-lifestyle-display",
    category: "zozh-diabetes",
    title: { ru: "Последствия неактивного образа жизни — 3D дисплей" },
    short: { ru: "3D дисплей о вреде малоподвижности: рак, инсульт, высокое давление, остеопороз, диабет 2 типа, болезни сердца, ожирение." },
    image: "/diabetes-inactive-lifestyle-display.jpg",
  },
];

function flattenCats(list: Category[]): Category[] {
  const out: Category[] = [];
  for (const c of list) {
    out.push(c);
    if (c.children?.length) out.push(...flattenCats(c.children));
  }
  return out;
}

export const flatCategories = flattenCats(categories);

export function getCategory(slug: string) {
  return flatCategories.find((c) => c.slug === slug);
}

export function getProductsByCategory(slug: string) {
  return products.filter((p) => p.category === slug);
}

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}