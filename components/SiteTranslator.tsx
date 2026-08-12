"use client";

import { useEffect } from "react";
import { type Language, useLanguage } from "./LanguageContext";

type Translation = { ru: string; uz: string; en: string };

const rows: Translation[] = [
  // Shared measurements and labels
  { ru: "Основные показатели", uz: "Asosiy ko‘rsatkichlar", en: "Key figures" },
  { ru: "Основные характеристики", uz: "Asosiy xususiyatlar", en: "Key specifications" },
  { ru: "Ключевые характеристики", uz: "Asosiy xususiyatlar", en: "Key specifications" },
  { ru: "толщина плиты", uz: "plita qalinligi", en: "slab thickness" },
  { ru: "заявленный срок службы", uz: "e’lon qilingan xizmat muddati", en: "declared service life" },
  { ru: "диапазон плотности, кг/м³", uz: "zichlik oralig‘i, kg/m³", en: "density range, kg/m³" },
  { ru: "материала в одной пачке", uz: "bir qadoqdagi material", en: "material per pack" },
  { ru: "формат плиты, мм", uz: "plita formati, mm", en: "slab format, mm" },
  { ru: "приоритетный регион поставок", uz: "ustuvor yetkazib berish hududi", en: "priority delivery region" },
  { ru: "Технология", uz: "Texnologiya", en: "Technology" },
  { ru: "О компании", uz: "Kompaniya haqida", en: "About company" },
  { ru: "Узбекистан", uz: "O‘zbekiston", en: "Uzbekistan" },
  { ru: "кг/м³", uz: "kg/m³", en: "kg/m³" },
  { ru: "срок службы", uz: "xizmat muddati", en: "service life" },
  { ru: "Толщина", uz: "Qalinlik", en: "Thickness" },
  { ru: "Срок службы", uz: "Xizmat muddati", en: "Service life" },
  { ru: "Плотность", uz: "Zichlik", en: "Density" },
  { ru: "Формат", uz: "Format", en: "Format" },
  { ru: "лет", uz: "yil", en: "years" },
  { ru: "пачка", uz: "qadoq", en: "pack" },

  // Home page
  { ru: "Один продукт · разные задачи", uz: "Bitta mahsulot · turli vazifalar", en: "One product · multiple applications" },
  { ru: "Точность", uz: "Aniqlik", en: "Precision" },
  { ru: "в каждой грани.", uz: "har bir qirrasida.", en: "in every detail." },
  { ru: "Упаковка защищает минеральные плиты при хранении и перевозке. Все рабочие параметры — без лишнего шума, на одном продукте.", uz: "Qadoq mineral plitalarni saqlash va tashish vaqtida himoya qiladi. Barcha ishchi parametrlar bitta mahsulotda aniq ko‘rsatilgan.", en: "The packaging protects the mineral slabs during storage and transport. Every working parameter is presented clearly on one product." },
  { ru: "MIRKO IZOBASALT со всех сторон: спереди, сзади, сверху, снизу, слева и справа", uz: "MIRKO IZOBASALT barcha tomondan: old, orqa, yuqori, past, chap va o‘ng", en: "MIRKO IZOBASALT from every side: front, back, top, bottom, left and right" },
  { ru: "01 / Плотность", uz: "01 / Zichlik", en: "01 / Density" },
  { ru: "02 / Формат", uz: "02 / Format", en: "02 / Format" },
  { ru: "03 / Толщина", uz: "03 / Qalinlik", en: "03 / Thickness" },
  { ru: "04 / Срок службы", uz: "04 / Xizmat muddati", en: "04 / Service life" },
  { ru: "05 / В пачке", uz: "05 / Qadoqda", en: "05 / Per pack" },
  { ru: "Подробные характеристики, области применения и рекомендации по подбору.", uz: "Batafsil xususiyatlar, qo‘llash sohalari va tanlash bo‘yicha tavsiyalar.", en: "Detailed specifications, applications and selection guidance." },
  { ru: "Открыть продукт", uz: "Mahsulotni ko‘rish", en: "View product" },
  { ru: "Области применения", uz: "Qo‘llash sohalari", en: "Applications" },
  { ru: "Один материал.", uz: "Bitta material.", en: "One material." },
  { ru: "Весь контур здания.", uz: "Binoning butun konturi.", en: "The complete building envelope." },
  { ru: "Подбираем плотность и объём под задачу проекта. Окончательное применение подтверждается специалистом.", uz: "Zichlik va hajm loyiha vazifasiga qarab tanlanadi. Yakuniy qo‘llash sohasi mutaxassis tomonidan tasdiqlanadi.", en: "Density and volume are selected for the project. Final application is confirmed by a specialist." },
  { ru: "Фасады", uz: "Fasadlar", en: "Façades" },
  { ru: "Кровли", uz: "Tomlar", en: "Roofs" },
  { ru: "Стены", uz: "Devorlar", en: "Walls" },
  { ru: "Перекрытия", uz: "Qavatlararo yopmalar", en: "Floors" },
  { ru: "Тепловой контур для наружных стен и фасадных систем.", uz: "Tashqi devorlar va fasad tizimlari uchun issiqlik konturi.", en: "Thermal envelope for external walls and façade systems." },
  { ru: "Решения для утепления скатных и плоских кровель.", uz: "Nishabli va tekis tomlarni izolyatsiyalash yechimlari.", en: "Insulation solutions for pitched and flat roofs." },
  { ru: "Комфорт внутри частных, коммерческих и общественных зданий.", uz: "Xususiy, tijorat va jamoat binolarida qulaylik.", en: "Comfort inside residential, commercial and public buildings." },
  { ru: "Тепло- и звукоизоляционный слой между помещениями.", uz: "Xonalar orasida issiqlik va tovush izolyatsiyasi qatlami.", en: "A thermal and acoustic layer between spaces." },
  { ru: "Тепло — только", uz: "Issiqlik — faqat", en: "Thermal performance is" },
  { ru: "начало истории.", uz: "boshlanishi.", en: "only the beginning." },
  { ru: "Волокнистая минеральная структура помогает одновременно работать с теплом, акустикой и пожарной безопасностью здания.", uz: "Tolali mineral tuzilma bir vaqtning o‘zida issiqlik, akustika va binoning yong‘in xavfsizligi bilan ishlashga yordam beradi.", en: "The fibrous mineral structure supports thermal, acoustic and fire-safety performance at the same time." },
  { ru: "Как это работает", uz: "Qanday ishlaydi", en: "How it works" },
  { ru: "Калькулятор материала", uz: "Material kalkulyatori", en: "Material calculator" },
  { ru: "Сколько нужно", uz: "Qancha kerak", en: "How much do you need" },
  { ru: "для вашего объекта?", uz: "obyektingiz uchun?", en: "for your project?" },
  { ru: "Укажите площадь и плотность. Мы рассчитаем ориентировочное количество пачек с технологическим запасом.", uz: "Maydon va zichlikni kiriting. Texnologik zaxirani hisobga olgan holda taxminiy qadoqlar sonini hisoblaymiz.", en: "Enter the area and density. We will estimate the number of packs including an installation reserve." },
  { ru: "Практика", uz: "Amaliyot", en: "In practice" },
  { ru: "Материал для", uz: "Material", en: "Material for" },
  { ru: "реальных объектов.", uz: "haqiqiy obyektlar uchun.", en: "real projects." },
  { ru: "Формируем библиотеку объектов с фотографиями, задачами, плотностью материала и фактическим объёмом поставки.", uz: "Fotosuratlar, vazifalar, material zichligi va haqiqiy yetkazib berish hajmi bilan obyektlar kutubxonasini yaratmoqdamiz.", en: "We are building a project library with photography, scope, selected density and actual delivery volume." },
  { ru: "Открыть проекты", uz: "Loyihalarni ko‘rish", en: "View projects" },
  { ru: "Локальная команда.", uz: "Mahalliy jamoa.", en: "A local team." },
  { ru: "Большая задача.", uz: "Katta maqsad.", en: "A significant mission." },
  { ru: "Мы развиваем доступность современной минеральной теплоизоляции в Узбекистане, уделяя особое внимание Ферганской области.", uz: "O‘zbekistonda zamonaviy mineral issiqlik izolyatsiyasini yanada qulay qilamiz, ayniqsa Farg‘ona viloyatiga e’tibor qaratamiz.", en: "We are making modern mineral insulation more accessible across Uzbekistan, with particular focus on the Fergana region." },
  { ru: "сотрудников", uz: "xodim", en: "employees" },
  { ru: "география поставок", uz: "yetkazib berish hududi", en: "delivery coverage" },
  { ru: "Отзывы", uz: "Fikrlar", en: "Reviews" },
  { ru: "Опыт строителей", uz: "Quruvchilar tajribasi", en: "Experience from builders" },
  { ru: "и владельцев.", uz: "va mulk egalari.", en: "and owners." },
  { ru: "Первые подтверждённые отзывы появятся здесь после модерации. Уже работали с MIRKO IZOBASALT? Поделитесь опытом.", uz: "Birinchi tasdiqlangan fikrlar tekshiruvdan so‘ng shu yerda chiqadi. MIRKO IZOBASALT bilan ishlaganmisiz? Tajribangizni ulashing.", en: "The first verified reviews will appear here after moderation. Have you worked with MIRKO IZOBASALT? Share your experience." },
  { ru: "Здесь будет ваш", uz: "Bu yerda sizning", en: "Your verified" },
  { ru: "подтверждённый отзыв.", uz: "tasdiqlangan fikringiz bo‘ladi.", en: "review could appear here." },
  { ru: "Мы публикуем только реальные истории с понятным типом объекта.", uz: "Biz faqat obyekt turi aniq bo‘lgan haqiqiy tajribalarni e’lon qilamiz.", en: "We publish only genuine accounts tied to a clear project type." },
  { ru: "Начнём с расчёта", uz: "Hisob-kitobdan boshlaymiz", en: "Start with an estimate" },
  { ru: "Ваш объект.", uz: "Sizning obyektingiz.", en: "Your project." },
  { ru: "Наше тепло.", uz: "Bizning issiqligimiz.", en: "Our insulation." },
  { ru: "Расскажите о проекте — поможем определить объём материала и подготовим предложение.", uz: "Loyihangiz haqida ayting — material hajmini aniqlash va taklif tayyorlashga yordam beramiz.", en: "Tell us about your project—we will help determine the material volume and prepare a proposal." },
  { ru: "Обсудить проект", uz: "Loyihani muhokama qilish", en: "Discuss your project" },

  // Product page
  { ru: "01 / ПРОДУКТ", uz: "01 / MAHSULOT", en: "01 / PRODUCT" },
  { ru: "Минеральная теплоизоляция", uz: "Mineral issiqlik izolyatsiyasi", en: "Mineral thermal insulation" },
  { ru: "Плита,", uz: "Plita,", en: "The slab" },
  { ru: "которая держит", uz: "konturini", en: "that completes" },
  { ru: "контур.", uz: "saqlaydi.", en: "the envelope." },
  { ru: "Один продукт в трёх вариантах плотности — для подбора под конкретную задачу здания.", uz: "Bitta mahsulot uch xil zichlikda — binoning aniq vazifasiga mos tanlash uchun.", en: "One product in three densities, selected for the specific role within the building." },
  { ru: "Рассчитать количество", uz: "Miqdorni hisoblash", en: "Calculate quantity" },
  { ru: "Упаковка MIRKO IZOBASALT со всех сторон", uz: "MIRKO IZOBASALT qadoqi barcha tomondan", en: "MIRKO IZOBASALT packaging from every side" },
  { ru: "м² / пачка", uz: "m² / qadoq", en: "m² / pack" },
  { ru: "Спецификация", uz: "Texnik xususiyatlar", en: "Specifications" },
  { ru: "Главное —", uz: "Asosiy ma’lumotlar", en: "The essentials," },
  { ru: "в цифрах.", uz: "raqamlarda.", en: "in numbers." },
  { ru: "Собрали основные параметры в одном месте. Точная цена и рекомендации по применению подтверждаются специалистом под конкретный объект.", uz: "Asosiy parametrlarni bir joyga jamladik. Aniq narx va qo‘llash bo‘yicha tavsiyalar mutaxassis tomonidan obyektga qarab tasdiqlanadi.", en: "All key parameters are collected in one place. Final pricing and application guidance are confirmed by a specialist for each project." },
  { ru: "Плотность", uz: "Zichlik", en: "Density" },
  { ru: "Формат плиты", uz: "Plita formati", en: "Slab format" },
  { ru: "Площадь пачки", uz: "Qadoq maydoni", en: "Coverage per pack" },
  { ru: "Толщина плиты", uz: "Plita qalinligi", en: "Slab thickness" },
  { ru: "Температурная стойкость", uz: "Haroratga chidamlilik", en: "Temperature resistance" },
  { ru: "Цена", uz: "Narx", en: "Price" },
  { ru: "По запросу", uz: "So‘rov bo‘yicha", en: "On request" },
  { ru: "*Температурная стойкость зависит от типа изделия. Финальное значение проверяется по сертификату и паспорту конкретной партии.", uz: "*Haroratga chidamlilik mahsulot turiga bog‘liq. Yakuniy qiymat muayyan partiyaning sertifikati va pasporti bo‘yicha tekshiriladi.", en: "*Temperature resistance depends on product type. The final value must be checked against the certificate and technical passport for the specific batch." },
  { ru: "Структура", uz: "Tuzilma", en: "Structure" },
  { ru: "Миллионы волокон.", uz: "Millionlab tolalar.", en: "Millions of fibres." },
  { ru: "Одна цель.", uz: "Bitta maqsad.", en: "One purpose." },
  { ru: "Минеральная волокнистая структура удерживает воздух внутри материала и помогает замедлять передачу тепла.", uz: "Mineral tolali tuzilma material ichida havoni ushlab, issiqlik uzatilishini sekinlashtirishga yordam beradi.", en: "The mineral fibre structure traps air within the material and helps slow heat transfer." },
  { ru: "Применение", uz: "Qo‘llash", en: "Applications" },
  { ru: "Для основных частей здания.", uz: "Binoning asosiy qismlari uchun.", en: "For the main parts of a building." },
  { ru: "Наружные стены и фасады", uz: "Tashqi devorlar va fasadlar", en: "External walls and façades" },
  { ru: "Формирование непрерывного теплоизоляционного слоя.", uz: "Uzluksiz issiqlik izolyatsiyasi qatlamini shakllantirish.", en: "Creates a continuous thermal insulation layer." },
  { ru: "Кровля и чердачные зоны", uz: "Tom va chordoq zonalari", en: "Roofs and attic zones" },
  { ru: "Снижение теплопотерь через верхний контур здания.", uz: "Binoning yuqori konturi orqali issiqlik yo‘qotilishini kamaytirish.", en: "Reduces heat loss through the upper building envelope." },
  { ru: "Перегородки и перекрытия", uz: "To‘siqlar va qavatlararo yopmalar", en: "Partitions and floors" },
  { ru: "Дополнительная работа с теплом и акустическим комфортом.", uz: "Issiqlik va akustik qulaylikni qo‘shimcha yaxshilash.", en: "Adds thermal and acoustic comfort." },
  { ru: "Технические решения", uz: "Texnik yechimlar", en: "Technical solutions" },
  { ru: "Применение подтверждается проектировщиком под условия объекта.", uz: "Qo‘llash sohasi loyiha sharoitiga qarab loyihachi tomonidan tasdiqlanadi.", en: "Application is confirmed by the designer for the project conditions." },
  { ru: "Расчёт", uz: "Hisob-kitob", en: "Estimate" },
  { ru: "От площади", uz: "Maydondan", en: "From area" },
  { ru: "к количеству.", uz: "miqdorgacha.", en: "to quantity." },
  { ru: "Расчёт включает 8% запаса и помогает подготовить первичную заявку.", uz: "Hisob 8% zaxirani o‘z ichiga oladi va dastlabki arizani tayyorlashga yordam beradi.", en: "The estimate includes an 8% reserve and helps prepare an initial request." },

  // Technology page
  { ru: "02 / ТЕХНОЛОГИЯ", uz: "02 / TEXNOLOGIYA", en: "02 / TECHNOLOGY" },
  { ru: "Инженерия минеральных волокон", uz: "Mineral tolalar muhandisligi", en: "Mineral fibre engineering" },
  { ru: "Тепло", uz: "Issiqlik", en: "Thermal" },
  { ru: "под", uz: "nazorat", en: "performance" },
  { ru: "контролем.", uz: "ostida.", en: "under control." },
  { ru: "Не магия и не абстракция: волокнистая структура удерживает воздух, снижает передачу тепла и помогает конструкции работать с шумом.", uz: "Bu sehr emas: tolali tuzilma havoni ushlab, issiqlik uzatilishini kamaytiradi va konstruksiyaning shovqin bilan ishlashiga yordam beradi.", en: "No magic and no abstraction: the fibrous structure traps air, reduces heat transfer and supports acoustic performance." },
  { ru: "Заявленная температурная стойкость", uz: "E’lon qilingan haroratga chidamlilik", en: "Declared temperature resistance" },
  { ru: "уточняется по паспорту изделия", uz: "mahsulot pasporti bo‘yicha aniqlanadi", en: "must be verified in the product passport" },
  { ru: "Как работает плита", uz: "Plita qanday ishlaydi", en: "How the slab works" },
  { ru: "Три слоя", uz: "Uch qatlam", en: "Three stages" },
  { ru: "одного процесса.", uz: "bitta jarayonda.", en: "in one process." },
  { ru: "Изоляция не создаёт тепло. Она замедляет его передачу между улицей и помещением, помогая зданию дольше сохранять рассчитанный микроклимат.", uz: "Izolyatsiya issiqlik yaratmaydi. U tashqi muhit va xona orasidagi issiqlik uzatilishini sekinlashtirib, binoga hisoblangan mikroiqlimni uzoqroq saqlashga yordam beradi.", en: "Insulation does not create heat. It slows transfer between outdoors and indoors, helping the building maintain its designed indoor climate for longer." },
  { ru: "01 / СНАРУЖИ", uz: "01 / TASHQARIDA", en: "01 / OUTSIDE" },
  { ru: "Жара", uz: "Issiq", en: "Heat" },
  { ru: "или холод", uz: "yoki sovuq", en: "or cold" },
  { ru: "Температурная нагрузка действует на внешний контур здания.", uz: "Harorat yuklamasi binoning tashqi konturiga ta’sir qiladi.", en: "Temperature load acts on the external building envelope." },
  { ru: "02 / ВНУТРИ ПЛИТЫ", uz: "02 / PLITA ICHIDA", en: "02 / INSIDE THE SLAB" },
  { ru: "Волокна +", uz: "Tolalar +", en: "Fibres +" },
  { ru: "неподвижный воздух", uz: "harakatsiz havo", en: "still air" },
  { ru: "Сложная структура формирует множество малых воздушных пространств и замедляет перенос тепла.", uz: "Murakkab tuzilma ko‘plab kichik havo bo‘shliqlarini hosil qilib, issiqlik uzatilishini sekinlashtiradi.", en: "The complex structure forms many small air pockets and slows heat transfer." },
  { ru: "03 / ВНУТРИ", uz: "03 / ICHKARIDA", en: "03 / INSIDE" },
  { ru: "Стабильнее", uz: "Barqarorroq", en: "More stable" },
  { ru: "и тише", uz: "va sokinroq", en: "and quieter" },
  { ru: "Помещение медленнее теряет тепло зимой и нагревается летом.", uz: "Xona qishda issiqlikni sekinroq yo‘qotadi va yozda sekinroq qiziydi.", en: "The interior loses heat more slowly in winter and warms more slowly in summer." },
  { ru: "Схема объясняет принцип работы материала и не заменяет теплотехнический расчёт конструкции.", uz: "Sxema material ishlash tamoyilini tushuntiradi va konstruksiyaning issiqlik-texnik hisobini almashtirmaydi.", en: "The diagram explains the material principle and does not replace a thermal calculation for the assembly." },
  { ru: "Что получает проект", uz: "Loyiha nima oladi", en: "What the project gains" },
  { ru: "Понятные свойства.", uz: "Tushunarli xususiyatlar.", en: "Clear properties." },
  { ru: "Понятная роль.", uz: "Tushunarli vazifa.", en: "A clear role." },
  { ru: "Тепловой контур", uz: "Issiqlik konturi", en: "Thermal envelope" },
  { ru: "Меньше теплопотерь", uz: "Kamroq issiqlik yo‘qotilishi", en: "Lower heat loss" },
  { ru: "Воздух между минеральными волокнами замедляет теплообмен через стены, кровлю и перекрытия.", uz: "Mineral tolalar orasidagi havo devor, tom va yopmalar orqali issiqlik almashinuvini sekinlashtiradi.", en: "Air between the mineral fibres slows heat transfer through walls, roofs and floors." },
  { ru: "Акустика", uz: "Akustika", en: "Acoustics" },
  { ru: "Тише внутри", uz: "Ichkarida sokinroq", en: "Quieter indoors" },
  { ru: "Разнонаправленная структура волокон рассеивает часть звуковой энергии внутри материала и дополняет конструкцию перегородки.", uz: "Turli yo‘nalishdagi tolalar tovush energiyasining bir qismini material ichida tarqatib, to‘siq konstruksiyasini to‘ldiradi.", en: "The multidirectional fibre structure disperses part of the sound energy within the material and complements the partition assembly." },
  { ru: "варианта плотности", uz: "zichlik varianti", en: "density options" },
  { ru: "Температура", uz: "Harorat", en: "Temperature" },
  { ru: "Минеральная основа", uz: "Mineral asos", en: "Mineral core" },
  { ru: "Материал рассчитан на работу при повышенной температуре. Допустимый режим всегда сверяется с паспортом конкретной партии.", uz: "Material yuqori haroratda ishlash uchun mo‘ljallangan. Ruxsat etilgan rejim muayyan partiya pasporti bilan tekshiriladi.", en: "The material is designed for elevated temperatures. The permitted range must always be checked against the batch passport." },
  { ru: "заявленный диапазон", uz: "e’lon qilingan diapazon", en: "declared range" },
  { ru: "Ресурс", uz: "Resurs", en: "Durability" },
  { ru: "Расчёт на годы", uz: "Uzoq yillarga hisoblangan", en: "Designed for the long term" },
  { ru: "При корректном проектировании, монтаже и защите конструкции заявленный срок службы материала составляет 50 лет.", uz: "To‘g‘ri loyihalash, montaj va konstruksiyani himoyalash sharoitida materialning e’lon qilingan xizmat muddati 50 yil.", en: "With correct design, installation and protection, the declared service life of the material is 50 years." },
  { ru: "Проектная точность", uz: "Loyiha aniqligi", en: "Project accuracy" },
  { ru: "Подбираем", uz: "Tanlov", en: "Selected" },
  { ru: "не на глаз.", uz: "taxminan emas.", en: "by calculation." },
  { ru: "Плотность и область применения определяются конструкцией объекта. Для финального решения запросите паспорт партии, сертификаты и консультацию специалиста.", uz: "Zichlik va qo‘llash sohasi obyekt konstruksiyasiga qarab belgilanadi. Yakuniy yechim uchun partiya pasporti, sertifikatlar va mutaxassis maslahatini so‘rang.", en: "Density and application are determined by the building assembly. Request the batch passport, certificates and specialist guidance before final selection." },
  { ru: "Запросить консультацию", uz: "Maslahat so‘rash", en: "Request consultation" },

  // Projects page
  { ru: "03 / ПРОЕКТЫ", uz: "03 / LOYIHALAR", en: "03 / PROJECTS" },
  { ru: "Опыт на объектах", uz: "Obyektlardagi tajriba", en: "Experience on site" },
  { ru: "Результат", uz: "Natija", en: "Results" },
  { ru: "виден в", uz: "ko‘rinadi", en: "shown in" },
  { ru: "деталях.", uz: "tafsilotlarda.", en: "the details." },
  { ru: "Здесь появятся реальные кейсы с фотографиями, задачами, выбранной плотностью и объёмом материала.", uz: "Bu yerda fotosuratlar, vazifalar, tanlangan zichlik va material hajmi bilan haqiqiy loyihalar joylashtiriladi.", en: "Real case studies will appear here with photography, project scope, selected density and material volume." },
  { ru: "Библиотека кейсов", uz: "Loyihalar kutubxonasi", en: "Case study library" },
  { ru: "Первые проекты", uz: "Birinchi loyihalar", en: "The first projects" },
  { ru: "готовятся к публикации.", uz: "e’longa tayyorlanmoqda.", en: "are being prepared." },
  { ru: "Мы не используем вымышленные объекты. Раздел будет наполнен после получения фотографий и подтверждённых данных.", uz: "Biz uydirma obyektlardan foydalanmaymiz. Bo‘lim fotosuratlar va tasdiqlangan ma’lumotlar olingach to‘ldiriladi.", en: "We do not use fictional projects. This section will be populated once photography and verified data are available." },
  { ru: "Фото проекта", uz: "Loyiha fotosurati", en: "Project photo" },
  { ru: "Объект будет добавлен", uz: "Obyekt qo‘shiladi", en: "Project to be added" },
  { ru: "Кейс в подготовке", uz: "Loyiha tayyorlanmoqda", en: "Case study in preparation" },
  { ru: "Регион · тип конструкции · объём", uz: "Hudud · konstruksiya turi · hajm", en: "Region · assembly type · volume" },
  { ru: "Уже использовали IZOBASALT?", uz: "IZOBASALT ishlatganmisiz?", en: "Already used IZOBASALT?" },
  { ru: "Покажите свой объект.", uz: "Obyektingizni ko‘rsating.", en: "Show us your project." },
  { ru: "Отправьте фотографии и краткое описание. После проверки мы оформим проект как полноценный кейс.", uz: "Fotosuratlar va qisqa tavsif yuboring. Tekshiruvdan so‘ng loyihani to‘liq loyiha sifatida tayyorlaymiz.", en: "Send photographs and a short description. After verification, we will present it as a complete case study." },
  { ru: "Отправить материалы", uz: "Materiallarni yuborish", en: "Send materials" },

  // Company page
  { ru: "04 / О КОМПАНИИ", uz: "04 / KOMPANIYA", en: "04 / COMPANY" },
  { ru: "Производим", uz: "Issiqlikni", en: "Producing" },
  { ru: "тепло", uz: "shu yerda", en: "warmth" },
  { ru: "здесь.", uz: "yaratamiz.", en: "here." },
  { ru: "Молодая команда с практичной целью: сделать современную минеральную теплоизоляцию доступнее для проектов в Узбекистане.", uz: "Amaliy maqsadga ega yosh jamoa: O‘zbekistondagi loyihalar uchun zamonaviy mineral issiqlik izolyatsiyasini yanada qulay qilish.", en: "A young team with a practical goal: make modern mineral insulation more accessible for projects across Uzbekistan." },
  { ru: "Новый фирменный знак MIRKO IZOBASALT", uz: "MIRKO IZOBASALT yangi brend belgisi", en: "New MIRKO IZOBASALT brand mark" },
  { ru: "год основания", uz: "tashkil topgan yil", en: "year founded" },
  { ru: "страна поставок", uz: "yetkazib berish mamlakati", en: "delivery country" },
  { ru: "Зачем мы здесь", uz: "Nega biz shu yerdamiz", en: "Why we are here" },
  { ru: "Фергане нужен", uz: "Farg‘onaga", en: "Fergana needs" },
  { ru: "свой сильный материал.", uz: "kuchli mahalliy material kerak.", en: "a strong local material." },
  { ru: "Строительный рынок региона растёт, а качественный тепловой контур становится базовой необходимостью — летом и зимой.", uz: "Hudud qurilish bozori o‘smoqda, sifatli issiqlik konturi esa yozda ham, qishda ham asosiy ehtiyojga aylanmoqda.", en: "The region’s construction market is growing, while a high-quality thermal envelope is becoming essential in both summer and winter." },
  { ru: "MIRKO IZOBASALT сосредоточен на понятном продукте, стабильной поставке и прямом общении с теми, кто проектирует и строит.", uz: "MIRKO IZOBASALT tushunarli mahsulot, barqaror yetkazib berish va loyihalovchi hamda quruvchilar bilan bevosita muloqotga e’tibor qaratadi.", en: "MIRKO IZOBASALT focuses on a clear product, dependable supply and direct communication with designers and builders." },
  { ru: "Подход к качеству", uz: "Sifatga yondashuv", en: "Approach to quality" },
  { ru: "От партии", uz: "Partiyadan", en: "From batch" },
  { ru: "до объекта.", uz: "obyektgacha.", en: "to project." },
  { ru: "Параметры", uz: "Parametrlar", en: "Parameters" },
  { ru: "Плотность, формат и комплектация фиксируются для заказа.", uz: "Zichlik, format va komplektatsiya buyurtma uchun qayd etiladi.", en: "Density, format and pack configuration are recorded for the order." },
  { ru: "Упаковка", uz: "Qadoqlash", en: "Packaging" },
  { ru: "Материал защищён для хранения и перевозки.", uz: "Material saqlash va tashish uchun himoyalangan.", en: "The material is protected for storage and transport." },
  { ru: "Количество подбирается под площадь и запас проекта.", uz: "Miqdor loyiha maydoni va zaxirasiga qarab tanlanadi.", en: "Quantity is calculated from project area and reserve." },
  { ru: "Связь", uz: "Aloqa", en: "Support" },
  { ru: "Команда остаётся доступной на этапе поставки.", uz: "Jamoa yetkazib berish bosqichida aloqada qoladi.", en: "The team remains available throughout delivery." },
  { ru: "Данные дополняются", uz: "Ma’lumotlar to‘ldirilmoqda", en: "Information being completed" },
  { ru: "Покажем производство", uz: "Ishlab chiqarishni", en: "We will show production" },
  { ru: "без лишних слов.", uz: "ortiqcha so‘zsiz ko‘rsatamiz.", en: "without empty claims." },
  { ru: "Точный адрес, фотографии площадки, информация о производственной линии и документация будут добавлены после подтверждения компанией.", uz: "Aniq manzil, maydon fotosuratlari, ishlab chiqarish liniyasi va hujjatlar kompaniya tasdiqlagach qo‘shiladi.", en: "The exact address, facility photography, production-line information and documentation will be added after company confirmation." },
  { ru: "Связаться с командой", uz: "Jamoa bilan bog‘lanish", en: "Contact the team" },

  // Contact page
  { ru: "05 / КОНТАКТЫ", uz: "05 / ALOQA", en: "05 / CONTACT" },
  { ru: "На связи", uz: "Aloqadamiz", en: "Get in touch" },
  { ru: "Расскажите", uz: "Bizga", en: "Tell us" },
  { ru: "о вашем", uz: "obyektingiz", en: "about your" },
  { ru: "объекте.", uz: "haqida ayting.", en: "project." },
  { ru: "Ответим на вопросы, рассчитаем количество и подготовим предложение.", uz: "Savollarga javob beramiz, miqdorni hisoblaymiz va taklif tayyorlaymiz.", en: "We will answer questions, calculate quantity and prepare a proposal." },
  { ru: "Прямые контакты", uz: "To‘g‘ridan-to‘g‘ri aloqa", en: "Direct contacts" },
  { ru: "Телефон", uz: "Telefon", en: "Phone" },
  { ru: "Написать в WhatsApp", uz: "WhatsApp orqali yozish", en: "Message on WhatsApp" },
  { ru: "Электронная почта", uz: "Elektron pochta", en: "Email" },
  { ru: "Зона поставок", uz: "Yetkazib berish hududi", en: "Delivery area" },
  { ru: "Приоритетное направление — Ферганская область. Точный адрес компании будет добавлен после подтверждения.", uz: "Ustuvor yo‘nalish — Farg‘ona viloyati. Kompaniyaning aniq manzili tasdiqlangach qo‘shiladi.", en: "Priority delivery area: Fergana region. The exact company address will be added once confirmed." },
  { ru: "Заявка на расчёт", uz: "Hisob-kitob uchun ariza", en: "Estimate request" },
  { ru: "Начнём", uz: "Bir nechta", en: "Let’s begin" },
  { ru: "с нескольких деталей.", uz: "tafsilotdan boshlaymiz.", en: "with a few details." },
  { ru: "Форма загружается…", uz: "Forma yuklanmoqda…", en: "Loading form…" },

  // Privacy page
  { ru: "Политика конфиденциальности", uz: "Maxfiylik siyosati", en: "Privacy policy" },
  { ru: "Прозрачность данных", uz: "Ma’lumotlar shaffofligi", en: "Data transparency" },
  { ru: "Коротко.", uz: "Qisqa.", en: "Brief." },
  { ru: "Понятно.", uz: "Tushunarli.", en: "Clear." },
  { ru: "Без скрытого.", uz: "Yashirin shartlarsiz.", en: "Nothing hidden." },
  { ru: "Мы собираем только ту информацию, которую вы сами передаёте для расчёта или ответа на вопрос.", uz: "Biz faqat hisob-kitob yoki savolga javob olish uchun o‘zingiz yuborgan ma’lumotlarni yig‘amiz.", en: "We collect only the information you choose to provide for an estimate or an answer." },
  { ru: "ТЕКУЩАЯ РЕДАКЦИЯ", uz: "AMALDAGI TAHRIR", en: "CURRENT VERSION" },
  { ru: "Документ действует для контактных форм и отзывов на сайте MIRKO IZOBASALT.", uz: "Hujjat MIRKO IZOBASALT saytidagi aloqa shakllari va fikrlar uchun amal qiladi.", en: "This document applies to contact forms and reviews on the MIRKO IZOBASALT website." },
  { ru: "Без регистрации", uz: "Ro‘yxatdan o‘tishsiz", en: "No registration" },
  { ru: "Без рекламной рассылки", uz: "Reklama xatlarisiz", en: "No marketing email" },
  { ru: "Без базы заявок на сайте", uz: "Saytda arizalar bazasisiz", en: "No on-site lead database" },
  { ru: "Краткое описание политики", uz: "Siyosatning qisqa mazmuni", en: "Policy overview" },
  { ru: "Что получаем", uz: "Nima olamiz", en: "What we receive" },
  { ru: "Только данные из вашего обращения.", uz: "Faqat murojaatingizdagi ma’lumotlar.", en: "Only the data in your message." },
  { ru: "Зачем", uz: "Maqsad", en: "Why" },
  { ru: "Чтобы ответить и подготовить расчёт.", uz: "Javob berish va hisob-kitob tayyorlash uchun.", en: "To respond and prepare an estimate." },
  { ru: "Где хранится", uz: "Qayerda saqlanadi", en: "Where it is stored" },
  { ru: "Письмо остаётся в почтовой переписке.", uz: "Xat elektron pochta yozishmasida qoladi.", en: "The message remains in email correspondence." },
  { ru: "Как связаться", uz: "Qanday bog‘lanish", en: "How to contact us" },
  { ru: "Напишите нам по указанной почте.", uz: "Ko‘rsatilgan elektron pochtaga yozing.", en: "Write to the email address shown." },
  { ru: "Содержание", uz: "Mundarija", en: "Contents" },
  { ru: "Разделы политики", uz: "Siyosat bo‘limlari", en: "Policy sections" },
  { ru: "Вопрос о данных", uz: "Ma’lumotlar bo‘yicha savol", en: "Data question" },
  { ru: "Общие положения", uz: "Umumiy qoidalar", en: "General provisions" },
  { ru: "Политика объясняет, какие сведения посетитель добровольно передаёт через сайт MIRKO IZOBASALT и как они используются при обработке обращения.", uz: "Siyosat tashrif buyuruvchi MIRKO IZOBASALT sayti orqali ixtiyoriy ravishda qaysi ma’lumotlarni yuborishi va ular murojaatni qayta ishlashda qanday ishlatilishini tushuntiradi.", en: "This policy explains what information visitors voluntarily provide through the MIRKO IZOBASALT website and how it is used to handle an enquiry." },
  { ru: "Какие данные используются", uz: "Qanday ma’lumotlar ishlatiladi", en: "Data we use" },
  { ru: "Имя, телефон, регион, параметры объекта, текст сообщения и адрес электронной почты — только если пользователь указал их самостоятельно.", uz: "Ism, telefon, hudud, obyekt parametrlari, xabar matni va elektron pochta manzili — faqat foydalanuvchi ularni o‘zi ko‘rsatgan bo‘lsa.", en: "Name, phone number, region, project parameters, message text and email address—only when the user provides them voluntarily." },
  { ru: "Цель обработки", uz: "Qayta ishlash maqsadi", en: "Purpose of processing" },
  { ru: "Подготовка ответа, предварительного расчёта, уточнение заказа и обратная связь по инициативе пользователя. Данные не используются для автоматического профилирования.", uz: "Javob va dastlabki hisob-kitob tayyorlash, buyurtmani aniqlashtirish va foydalanuvchi tashabbusi bilan bog‘lanish. Ma’lumotlar avtomatik profillash uchun ishlatilmaydi.", en: "To prepare a response or preliminary estimate, clarify an order and follow up at the user’s request. Data is not used for automated profiling." },
  { ru: "Как отправляется обращение", uz: "Murojaat qanday yuboriladi", en: "How an enquiry is sent" },
  { ru: "Текущая версия формы подготавливает письмо в почтовой программе пользователя. Сайт не сохраняет содержимое формы в собственной базе данных.", uz: "Formaning joriy versiyasi foydalanuvchining pochta dasturida xat tayyorlaydi. Sayt forma mazmunini o‘z ma’lumotlar bazasida saqlamaydi.", en: "The current form prepares an email in the user’s mail application. The website does not store form content in its own database." },
  { ru: "Отзывы и публикация", uz: "Fikrlar va nashr", en: "Reviews and publication" },
  { ru: "Отзыв публикуется только после проверки. Компания может связаться с автором, чтобы подтвердить опыт использования продукта и согласовать публичное имя.", uz: "Fikr faqat tekshiruvdan keyin e’lon qilinadi. Kompaniya mahsulotdan foydalanish tajribasini tasdiqlash va ochiq ismni kelishish uchun muallif bilan bog‘lanishi mumkin.", en: "Reviews are published only after verification. The company may contact the author to confirm product experience and agree on a public name." },
  { ru: "Ваш выбор", uz: "Sizning tanlovingiz", en: "Your choice" },
  { ru: "Вы можете не отправлять форму и связаться с компанией напрямую по телефону, WhatsApp, Telegram или электронной почте. Также можно запросить уточнение или удаление ранее переданной информации.", uz: "Formani yubormasdan kompaniya bilan telefon, WhatsApp, Telegram yoki elektron pochta orqali bevosita bog‘lanishingiz mumkin. Avval yuborilgan ma’lumotlarni aniqlashtirish yoki o‘chirishni ham so‘rashingiz mumkin.", en: "You may choose not to submit a form and contact the company directly by phone, WhatsApp, Telegram or email. You may also request clarification or deletion of previously supplied information." },
  { ru: "Контакт по вопросам данных", uz: "Ma’lumotlar bo‘yicha aloqa", en: "Data enquiries" },
  { ru: "По вопросам обработки обращений напишите на mircoizobazalt@gmail.com или позвоните по номеру +998 90 531 55 53.", uz: "Murojaatlarni qayta ishlash bo‘yicha mircoizobazalt@gmail.com manziliga yozing yoki +998 90 531 55 53 raqamiga qo‘ng‘iroq qiling.", en: "For questions about enquiry processing, email mircoizobazalt@gmail.com or call +998 90 531 55 53." },
  { ru: "Важно", uz: "Muhim", en: "Important" },
  { ru: "Юридическое наименование и точный адрес будут добавлены после подтверждения регистрационных данных компании. До обновления документа все обращения обрабатываются через указанные прямые контакты.", uz: "Yuridik nom va aniq manzil kompaniyaning ro‘yxatga olish ma’lumotlari tasdiqlangach qo‘shiladi. Hujjat yangilangunga qadar barcha murojaatlar ko‘rsatilgan bevosita aloqalar orqali qayta ishlanadi.", en: "The legal entity name and exact address will be added after the company registration details are confirmed. Until then, all enquiries are handled through the direct contacts shown." },
];

const escapePattern = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const variants = new Map<string, Translation>();
for (const row of rows) for (const value of [row.ru, row.uz, row.en]) variants.set(value, row);
const pattern = new RegExp([...variants.keys()].sort((a, b) => b.length - a.length).map(escapePattern).join("|"), "g");

function localize(value: string, language: Language) {
  return value.replace(pattern, (match) => variants.get(match)?.[language] ?? match);
}

function translateDocument(language: Language) {
  const main = document.querySelector("main");
  if (!main) return;

  const walker = document.createTreeWalker(main, NodeFilter.SHOW_TEXT);
  let node = walker.nextNode();
  while (node) {
    const parent = node.parentElement;
    if (parent && !["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName) && node.nodeValue) {
      const next = localize(node.nodeValue, language);
      if (next !== node.nodeValue) node.nodeValue = next;
    }
    node = walker.nextNode();
  }

  for (const element of main.querySelectorAll<HTMLElement>("[alt], [aria-label], [title], [placeholder]")) {
    for (const attribute of ["alt", "aria-label", "title", "placeholder"] as const) {
      const value = element.getAttribute(attribute);
      if (!value) continue;
      const next = localize(value, language);
      if (next !== value) element.setAttribute(attribute, next);
    }
  }

  document.title = localize(document.title, language);
}

export function SiteTranslator() {
  const { language } = useLanguage();

  useEffect(() => {
    let frame = 0;
    const run = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => translateDocument(language));
    };
    run();
    const observer = new MutationObserver(run);
    observer.observe(document.documentElement, { childList: true, subtree: true, characterData: true });
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [language]);

  return null;
}
