import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const PHONE = "+79100821217";
const PHONE_HREF = "tel:+79100821217";
const EMAIL = "info@stroy-brigada.ru";
const HERO_IMG = "https://cdn.poehali.dev/projects/a04ac7a3-1ae6-430f-ae81-a481b6930e5a/files/a37be59d-cb5f-44d5-8d36-96ea54a88f87.jpg";

const SEND_LEAD_URL = "https://functions.poehali.dev/074cd766-a9fe-4fa1-b0c0-081138b917c4";

const SERVICE_OPTIONS = [
  "Кровельные работы",
  "Фасадные работы",
  "Бетонные работы",
  "Реставрация домов",
  "Внутренняя отделка",
  "Площадки и заезды",
  "Другое",
];

async function sendLead(data: Record<string, string>) {
  await fetch(SEND_LEAD_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

const PORTFOLIO_ITEMS = [
  { title: "Монтаж фасадных панелей", desc: "Утепление и облицовка", img: "https://cdn.poehali.dev/projects/a04ac7a3-1ae6-430f-ae81-a481b6930e5a/bucket/a42da067-0499-47e0-8257-6f5d9ebee35c.jpg" },
  { title: "Реставрация старого дома", desc: "До и после — полная реконструкция", img: "https://cdn.poehali.dev/projects/a04ac7a3-1ae6-430f-ae81-a481b6930e5a/bucket/3c405835-5de1-472e-aa9e-ec6c07aab3b6.jpg" },
  { title: "Внутренняя отделка", desc: "Ванная комната под ключ", img: "https://cdn.poehali.dev/projects/a04ac7a3-1ae6-430f-ae81-a481b6930e5a/bucket/0cb29598-28a5-4265-a8bf-0751a5fdbf0c.jpg" },
  { title: "Строительство гаража", desc: "Гараж с заездной площадкой", img: "https://cdn.poehali.dev/projects/a04ac7a3-1ae6-430f-ae81-a481b6930e5a/bucket/71ce6131-abdd-420e-b905-8fd1952a5a64.jpg" },
  { title: "Деревянный дом под ключ", desc: "Двухэтажный дом с верандой", img: "https://cdn.poehali.dev/projects/a04ac7a3-1ae6-430f-ae81-a481b6930e5a/bucket/4ab52269-5ae1-4d13-addc-7b91393b7d68.jpg" },
  { title: "Монтаж металлочерепицы", desc: "Частный дом, 180 м²", img: "https://cdn.poehali.dev/projects/a04ac7a3-1ae6-430f-ae81-a481b6930e5a/bucket/e6e6ebe2-c784-4121-a841-df037522bb50.jpg" },
];

const SERVICES = [
  { icon: "Home", title: "Кровельные работы", desc: "Монтаж, ремонт, замена кровли любой сложности", img: "https://cdn.poehali.dev/projects/a04ac7a3-1ae6-430f-ae81-a481b6930e5a/bucket/e6e6ebe2-c784-4121-a841-df037522bb50.jpg" },
  { icon: "Building2", title: "Фасадные работы", desc: "Отделка фасадов, утепление, декоративная отделка", img: "https://cdn.poehali.dev/projects/a04ac7a3-1ae6-430f-ae81-a481b6930e5a/bucket/b5f422b0-98b0-4d2a-b2e9-9d44340dd756.jpg" },
  { icon: "Layers", title: "Бетонные работы", desc: "Заливка фундаментных и бетонных конструкций", img: "https://cdn.poehali.dev/projects/a04ac7a3-1ae6-430f-ae81-a481b6930e5a/bucket/ce07ee96-0034-46e7-ad27-64bbf2887f0a.jpg" },
  { icon: "Hammer", title: "Реставрация домов", desc: "Восстановление и укрепление старых конструкций", img: "https://cdn.poehali.dev/projects/a04ac7a3-1ae6-430f-ae81-a481b6930e5a/bucket/6f50f967-30b2-4b88-ab11-3842483b4964.jpg" },
  { icon: "PaintBucket", title: "Внутренняя отделка", desc: "Ремонт помещений, покраска, плитка", img: "https://cdn.poehali.dev/projects/a04ac7a3-1ae6-430f-ae81-a481b6930e5a/bucket/51163e08-e029-4229-8f1c-8d982b03b488.jpg" },
  { icon: "Car", title: "Площадки и заезды", desc: "Строительство бетонных и асфальтированных площадок", img: "https://cdn.poehali.dev/projects/a04ac7a3-1ae6-430f-ae81-a481b6930e5a/bucket/cf13e430-c173-40a5-9fcf-bcc9e1cb3377.jpg" },
];

const ADVANTAGES = [
  { icon: "CreditCard", title: "Удобная оплата", desc: "Наличные или перевод на карту" },
  { icon: "Sparkles", title: "Чистая работа", desc: "Уборка мусора после завершения" },
  { icon: "ShieldCheck", title: "Гарантия до 5 лет", desc: "Официальная гарантия на все работы" },
  { icon: "Users", title: "Опытная бригада", desc: "Более 10 лет в строительстве" },
];

const STEPS = [
  { num: "01", icon: "Phone", title: "Заявка", desc: "Оставляете заявку на сайте или звоните нам" },
  { num: "02", icon: "Calculator", title: "Расчёт стоимости", desc: "Составляем смету и согласовываем с вами" },
  { num: "03", icon: "Wrench", title: "Выполнение работ", desc: "Монтаж, отделка, реставрация в срок" },
  { num: "04", icon: "CheckCircle2", title: "Сдача объекта", desc: "Проверяем качество и принимаем оплату" },
];

const FAQ_ITEMS = [
  { q: "Нужна ли предоплата?", a: "Для небольших заказов — нет. Для крупных объектов предоплата составляет до 50% от стоимости работ. Всё фиксируется в договоре." },
  { q: "Нужно ли предоставлять жильё рабочим?", a: "Нет, не нужно. Наша бригада приезжает утром и уезжает вечером. Мы работаем в пределах региона без потребности в проживании." },
  { q: "Какая гарантия на работы?", a: "Мы предоставляем гарантию сроком до 5 лет на все виды выполненных работ. Гарантийные обязательства закрепляются в договоре." },
  { q: "Как быстро вы приедете на объект?", a: "Выезд для осмотра объекта и замеров осуществляется в течение 1–2 рабочих дней после звонка или заявки." },
  { q: "Работаете ли вы по договору?", a: "Да, мы работаем исключительно по официальному договору. Вы защищены юридически на каждом этапе сотрудничества." },
];

const QUIZ_STEPS = [
  { title: "Какие работы необходимы?", options: ["Сделать крышу под ключ", "Заменить кровлю", "Ремонт кровли", "Реконструкция крыши", "Монтаж элементов кровли", "Консультация"] },
  { title: "Тип кровли", options: ["Металлочерепица", "Профнастил", "Мягкая черепица", "Ондулин", "Шифер", "Не знаю"] },
  { title: "Площадь крыши", options: ["до 50 м²", "50–100 м²", "100–200 м²", "более 200 м²"] },
  { title: "Когда начать работу?", options: ["Срочно", "В ближайший месяц", "Позже"] },
];

const REVIEWS = [
  { name: "Алексей Воронов", city: "Москва", service: "Кровельные работы", rating: 5, text: "Заказывал замену кровли на даче. Бригада приехала точно в срок, работали аккуратно, ни один куст в саду не пострадал. Результат превзошёл ожидания — крыша как новая, даже в сильный дождь ни капли. Рекомендую без оговорок." },
  { name: "Марина Соколова", city: "Балашиха", service: "Фасадные работы", rating: 5, text: "Делали утепление и отделку фасада. Мастера профессиональные, всё объяснили, показали материалы, предложили несколько вариантов цвета. Работа выполнена чисто, строительный мусор убрали полностью. Дом теперь выглядит совсем по-другому." },
  { name: "Дмитрий Козлов", city: "Подольск", service: "Внутренняя отделка", rating: 5, text: "Делали ремонт в ванной и туалете. Плитку положили идеально — ни единого перекоса, швы ровные. Сроки соблюли, хотя работа была непростая из-за нестандартной планировки. Очень доволен, буду заказывать ещё." },
  { name: "Светлана Новикова", city: "Одинцово", service: "Реставрация домов", rating: 5, text: "Старый дом 70-х годов постройки буквально преобразился. Ребята укрепили фундамент, заменили гнилые балки перекрытия, обновили фасад. Работали ответственно, не торопились, сделали всё как для себя. Очень благодарна команде." },
  { name: "Игорь Петров", city: "Красногорск", service: "Бетонные работы", rating: 5, text: "Заливали фундамент под пристройку к дому. Приехали, замерили, составили смету — всё чётко и прозрачно. Бетон залили быстро, качество хорошее, ни трещин, ни перепадов. Через неделю уже начали возведение стен." },
  { name: "Ольга Фёдорова", city: "Щёлково", service: "Кровельные работы", rating: 5, text: "Ремонтировали протекающую крышу гаража. Нашли проблему быстро, материалы привезли сами. Работу сделали за один день. После этого прошло три сильных ливня — всё сухо. Цена оказалась ниже, чем у других, кто приезжал смотреть." },
  { name: "Сергей Тихонов", city: "Люберцы", service: "Площадки и заезды", rating: 5, text: "Делали заезд в гараж и площадку перед домом. Очень аккуратная работа: разметка точная, бетон уложен ровно, дренаж продуман. Машина заезжает без проблем, лужи не стоят. Работали три дня, не мусорили, всё убрали." },
  { name: "Татьяна Захарова", city: "Домодедово", service: "Фасадные работы", rating: 5, text: "Заказывала декоративную штукатурку на фасад. Мастер посоветовал хорошую фактуру под камень — вышло очень красиво. Работали аккуратно, защитили окна и цоколь. После окончания убрали всё за собой. Соседи уже спрашивают контакты." },
  { name: "Николай Громов", city: "Серпухов", service: "Реставрация домов", rating: 5, text: "Покупали старый дом и сразу обратились за реставрацией. Команда оценила объём работ, предложила разумный план. Заменили оконные блоки, утеплили стены, перекрыли крышу. Работа долгая, но результат — дом как новый, живём с удовольствием." },
  { name: "Екатерина Власова", city: "Ногинск", service: "Внутренняя отделка", rating: 5, text: "Делали чистовую отделку в новостройке: стены, потолки, полы. Ребята работали слаженно, без простоев. Шпаклёвка идеальная под покраску, ламинат уложен без зазоров. Закончили на два дня раньше срока. Рекомендую всем, кто хочет качество." },
  { name: "Роман Орлов", city: "Электросталь", service: "Кровельные работы", rating: 5, text: "Монтировали мягкую черепицу на загородном доме. Работу выполнили профессионально: обрешётка, гидроизоляция, конёк — всё по технологии. После монтажа провели осмотр вместе с мастером. Очень понравился подход — всё объясняют и показывают." },
  { name: "Анна Морозова", city: "Жуковский", service: "Бетонные работы", rating: 5, text: "Заливали отмостку вокруг дома. Быстро, ровно, качественно. Мастер посоветовал сделать компенсационные швы — об этом я даже не знала. Зимой посмотрим, но пока всё отлично, вода уходит правильно." },
  { name: "Владимир Кузнецов", city: "Раменское", service: "Площадки и заезды", rating: 5, text: "Строили бетонную площадку под навес для машины. Мастера приехали в срок, работали без перерывов, материалы были все свои. Площадка получилась ровная, без вздутий. Уже год пользуемся — полёт нормальный." },
  { name: "Юлия Белова", city: "Коломна", service: "Фасадные работы", rating: 5, text: "Утепляли дом снаружи минватой с последующей штукатуркой. После работы разница в тепле заметна невооружённым глазом — прошлой зимой топили намного меньше. Качество работы высокое, всё аккуратно." },
  { name: "Андрей Лебедев", city: "Москва", service: "Реставрация домов", rating: 5, text: "Реставрировали деревянный дом 1960-х годов. Заменили венцы, подняли дом домкратом, залили новый фундамент. Работа сложная, но ребята справились отлично. Дом теперь стоит как вкопанный, не скрипит и не продувается." },
  { name: "Наталья Степанова", city: "Химки", service: "Внутренняя отделка", rating: 5, text: "Заказывала отделку кухни и коридора. Плитку выбирала сама, мастер помог рассчитать количество. Укладка отличная — рисунок совпадает, швы идеальные. Уложились за 5 дней, как и обещали. Осталась очень довольна." },
  { name: "Константин Ершов", city: "Клин", service: "Кровельные работы", rating: 5, text: "Перекрывали двускатную крышу дома 120 кв.м металлочерепицей. Работа сложная из-за крутого уклона, но бригада справилась уверенно. Конёк и ендовы сделаны аккуратно. Остатки материала забрали с собой, участок убрали — молодцы." },
  { name: "Виктория Кириллова", city: "Пушкино", service: "Бетонные работы", rating: 5, text: "Делали ленточный фундамент под баню. Разметку выполнили точно, армирование хорошее, бетон залили без перебоев. Через положенное время проверили — всё ровно. Баню уже поставили, фундамент держит отлично." },
  { name: "Михаил Крылов", city: "Мытищи", service: "Фасадные работы", rating: 5, text: "Делали вентилируемый фасад с виниловым сайдингом. Подрядчик сделал грамотный монтаж обрешётки, учёл все вентзазоры. Сайдинг лежит ровно, углы аккуратные. Дом стал теплее и выглядит гораздо современнее." },
  { name: "Елена Рябова", city: "Чехов", service: "Реставрация домов", rating: 5, text: "Обращались по рекомендации соседей. Нужно было восстановить старый кирпичный дом: заменить кровлю, утеплить, сделать отделку. Работали несколько недель, всегда были на связи, вопросы решали оперативно. Результат — отличный дом для жизни." },
  { name: "Павел Мельников", city: "Зеленоград", service: "Площадки и заезды", rating: 5, text: "Делали тротуарную плитку на дорожках и площадке. Рисунок сложный, но мастер справился без проблем. Плитка лежит ровно, бордюры аккуратные. Уже пережили одну зиму — ни одна плитка не вспучилась." },
  { name: "Ирина Гусева", city: "Воскресенск", service: "Внутренняя отделка", rating: 5, text: "Заказывала ремонт двух комнат под ключ. Мастера сами посоветовали, как лучше разложить ламинат, чтобы комната казалась больше. Всё сделали аккуратно и чисто. Очень понравилось, что не пришлось ни за кем убирать." },
  { name: "Борис Комаров", city: "Орехово-Зуево", service: "Кровельные работы", rating: 4, text: "В целом работой доволен — кровля сделана добротно, протечек нет. Единственное замечание: сдвинули сроки на два дня из-за загруженности. Но предупредили заранее, не бросили. Качество работы хорошее, цена разумная." },
  { name: "Людмила Васильева", city: "Истра", service: "Бетонные работы", rating: 4, text: "Заливали ступени и крыльцо. Работа в целом сделана хорошо, форма ровная, поверхность гладкая. Немного не устроило, что пришлось напоминать про уборку после работы. Но сам результат качественный, претензий по исполнению нет." },
  { name: "Геннадий Соловьёв", city: "Дмитров", service: "Фасадные работы", rating: 4, text: "Штукатурили фасад дома. Работа выполнена профессионально, поверхность ровная. Хотелось бы чуть больше коммуникации в процессе — иногда приходилось самому уточнять детали. Но итоговый результат хороший, дом выглядит достойно." },
];

function Stars({ count, total = 5 }: { count: number; total?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: total }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill={i < count ? "#F97316" : "#e5e7eb"}>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }); },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".section-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function Header({ onCallClick }: { onCallClick: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const nav = [
    { label: "Услуги", href: "#services" },
    { label: "Работы", href: "#portfolio" },
    { label: "Отзывы", href: "#reviews" },
    { label: "О нас", href: "#about" },
    { label: "FAQ", href: "#faq" },
    { label: "Контакты", href: "#contacts" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-dark shadow-2xl py-2" : "bg-dark/95 py-3"}`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-orange rounded-lg flex items-center justify-center group-hover:bg-orange-dark transition-colors">
            <Icon name="Home" size={22} className="text-white" />
          </div>
          <div className="hidden sm:block">
            <div className="font-montserrat font-bold text-white text-sm leading-tight">СТРОЙБРИГАДА</div>
            <div className="text-orange text-xs font-montserrat">Профессионалы</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-6">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-white/80 hover:text-orange transition-colors font-montserrat text-sm font-medium">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:block text-right">
            <a href={PHONE_HREF} className="block text-white font-montserrat font-bold text-base hover:text-orange transition-colors">{PHONE}</a>
            <span className="text-white/50 text-xs">Круглосуточно</span>
          </div>
          <button onClick={onCallClick} className="orange-btn px-4 py-2 text-sm hidden sm:block">Заказать звонок</button>
          <button className="lg:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-dark-secondary border-t border-white/10 px-4 py-4">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="block py-2 text-white/80 hover:text-orange transition-colors font-montserrat text-sm" onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href={PHONE_HREF} className="block mt-3 text-orange font-montserrat font-bold">{PHONE}</a>
          <button onClick={onCallClick} className="orange-btn w-full mt-3 py-2 text-sm">Заказать звонок</button>
        </div>
      )}
    </header>
  );
}

function Hero({ onOrderClick }: { onOrderClick: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center pt-16" style={{ backgroundImage: `url(${HERO_IMG})`, backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="absolute inset-0 hero-bg" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div style={{ animation: "fade-in-up 0.7s ease forwards" }}>
            <div className="inline-flex items-center gap-2 bg-orange/20 border border-orange/40 rounded-full px-4 py-1.5 mb-6">
              <div className="w-2 h-2 bg-orange rounded-full animate-pulse" />
              <span className="text-orange text-sm font-montserrat font-semibold">Бесплатный выезд и замер</span>
            </div>
            <h1 className="font-montserrat font-black text-white text-4xl md:text-5xl xl:text-6xl leading-tight mb-6">
              Монтаж, ремонт и замена кровли <span className="text-orange">под ключ</span>
            </h1>
            <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-lg">
              Выполняем кровельные работы любой сложности. Работаем быстро, качественно и с гарантией до 5 лет
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              {["Гарантия 5 лет", "Опыт 10+ лет", "Бесплатный расчёт"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-white/80 text-sm">
                  <Icon name="CheckCircle2" size={16} className="text-orange" />
                  {t}
                </div>
              ))}
            </div>
            <button onClick={onOrderClick} className="orange-btn pulse-ring px-8 py-4 text-lg">
              Получить расчёт стоимости
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 lg:p-8 flex flex-col gap-4">
            <h3 className="font-montserrat font-bold text-white text-xl">Почему нас выбирают</h3>
            {["Более 500 выполненных объектов", "Работаем по официальному договору", "Гарантия до 5 лет на все работы", "Бесплатный выезд и замер", "Уборка строительного мусора включена"].map((item) => (
              <div key={item} className="flex items-center gap-3 text-white/85 text-sm">
                <Icon name="CheckCircle2" size={18} className="text-orange flex-shrink-0" />
                {item}
              </div>
            ))}
            <button onClick={onOrderClick} className="orange-btn py-3 text-base mt-2">Получить расчёт стоимости</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Quiz() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [done, setDone] = useState(false);
  const total = QUIZ_STEPS.length + 1;

  return (
    <section id="quiz" className="py-20 bg-gray-50 section-reveal">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-orange font-montserrat font-semibold text-sm uppercase tracking-wider">Быстрый расчёт</span>
          <h2 className="font-montserrat font-extrabold text-dark text-3xl md:text-4xl mt-2 mb-3">Рассчитайте стоимость работ</h2>
          <p className="text-gray-mid text-base">Ответьте на несколько вопросов и получите примерную стоимость работ за 15 минут</p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
          {!done ? (
            <>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-mid text-sm">Шаг {step + 1} из {total}</span>
                <span className="text-orange font-montserrat font-bold text-sm">{Math.round((step / total) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2 mb-8">
                <div className="bg-orange h-2 rounded-full transition-all duration-500" style={{ width: `${(step / total) * 100}%` }} />
              </div>

              {step < QUIZ_STEPS.length ? (
                <>
                  <h3 className="font-montserrat font-bold text-dark text-xl md:text-2xl mb-6">{QUIZ_STEPS[step].title}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {QUIZ_STEPS[step].options.map((opt) => (
                      <button key={opt} onClick={() => setSelected(opt)}
                        className={`text-left px-5 py-4 rounded-xl border-2 transition-all font-montserrat text-sm font-medium ${selected === opt ? "border-orange bg-orange/5 text-dark" : "border-gray-200 hover:border-orange/50 text-dark"}`}>
                        <span className={`inline-block w-4 h-4 rounded-full border-2 mr-2 align-middle transition-colors ${selected === opt ? "border-orange bg-orange" : "border-gray-300"}`} />
                        {opt}
                      </button>
                    ))}
                  </div>
                  <button onClick={() => { if (selected) { setStep((s) => s + 1); setSelected(null); } }}
                    disabled={!selected}
                    className={`orange-btn w-full py-3 text-base ${!selected ? "opacity-40 cursor-not-allowed" : ""}`}>
                    Далее →
                  </button>
                </>
              ) : (
                <>
                  <h3 className="font-montserrat font-bold text-dark text-xl md:text-2xl mb-2">Контактные данные</h3>
                  <p className="text-gray-mid text-sm mb-6">Укажите данные для получения расчёта</p>
                  <form onSubmit={async (e) => { e.preventDefault(); await sendLead({ name, phone }); setDone(true); }} className="flex flex-col gap-4">
                    <input type="text" placeholder="Ваше имя" value={name} onChange={(e) => setName(e.target.value)}
                      className="border-2 border-gray-200 focus:border-orange rounded-xl px-5 py-3 outline-none text-dark transition-colors" required />
                    <input type="tel" placeholder="Номер телефона" value={phone} onChange={(e) => setPhone(e.target.value)}
                      className="border-2 border-gray-200 focus:border-orange rounded-xl px-5 py-3 outline-none text-dark transition-colors" required />
                    <button type="submit" className="orange-btn py-3 text-base">Получить расчёт стоимости</button>
                    <p className="text-gray-mid text-xs text-center">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
                  </form>
                </>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <Icon name="CheckCircle2" size={40} className="text-orange" />
              </div>
              <h3 className="font-montserrat font-extrabold text-dark text-2xl mb-3">Спасибо! Заявка принята.</h3>
              <p className="text-gray-mid mb-6">Мы свяжемся с вами в ближайшее время</p>
              <a href={PHONE_HREF} className="orange-btn inline-block px-8 py-3">Позвонить сейчас</a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-white section-reveal">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-orange font-montserrat font-semibold text-sm uppercase tracking-wider">Портфолио</span>
          <h2 className="font-montserrat font-extrabold text-dark text-3xl md:text-4xl mt-2">Наши выполненные проекты</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_ITEMS.map((item, i) => (
            <div key={i} className="portfolio-img rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-shadow">
              <div className="h-64 flex items-end p-5 relative" style={{ backgroundImage: `url(${item.img})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent group-hover:from-black/85 transition-all" />
                <div className="relative z-10">
                  <h3 className="font-montserrat font-bold text-white text-base">{item.title}</h3>
                  <p className="text-white/70 text-sm">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-20 bg-dark section-reveal">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-orange font-montserrat font-semibold text-sm uppercase tracking-wider">Что мы делаем</span>
          <h2 className="font-montserrat font-extrabold text-white text-3xl md:text-4xl mt-2">Наши услуги</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <div key={i} className="card-hover bg-dark-secondary border border-white/8 rounded-2xl overflow-hidden">
              <div className="h-44 relative" style={{ backgroundImage: `url(${s.img})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-secondary/90 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-10 h-10 bg-orange rounded-xl flex items-center justify-center">
                    <Icon name={s.icon as string} size={20} className="text-white" fallback="Home" />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-montserrat font-bold text-white text-lg mb-2">{s.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const perks = [
    { icon: "Award", label: "Опыт более 10 лет" },
    { icon: "ShieldCheck", label: "Гарантия на работы" },
    { icon: "Calculator", label: "Бесплатный расчёт" },
    { icon: "FileText", label: "Работа по договору" },
  ];
  return (
    <section id="about" className="py-20 bg-white section-reveal">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-orange font-montserrat font-semibold text-sm uppercase tracking-wider">О нас</span>
            <h2 className="font-montserrat font-extrabold text-dark text-3xl md:text-4xl mt-2 mb-5">Бригада профессионалов</h2>
            <p className="text-gray-mid text-base leading-relaxed mb-8">
              Мы выполняем работы любой сложности: кровля, фасады, бетонные конструкции, реставрация старых домов, внутренняя отделка. Обслуживаем частные дома, дачи и коттеджи.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {perks.map((p, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 bg-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={p.icon as string} size={20} className="text-orange" fallback="Check" />
                  </div>
                  <span className="font-montserrat font-semibold text-dark text-sm">{p.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[{ val: "10+", label: "лет опыта" }, { val: "500+", label: "объектов сдано" }, { val: "5 лет", label: "гарантия" }, { val: "24/7", label: "на связи" }].map((s, i) => (
              <div key={i} className="bg-dark rounded-2xl p-6 text-center">
                <div className="font-montserrat font-black text-orange text-3xl md:text-4xl mb-1">{s.val}</div>
                <div className="text-white/60 text-sm font-montserrat">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Advantages() {
  return (
    <section className="py-20 bg-orange section-reveal">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-extrabold text-white text-3xl md:text-4xl">Почему выбирают нас</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ADVANTAGES.map((a, i) => (
            <div key={i} className="text-center p-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name={a.icon as string} size={30} className="text-white" fallback="Star" />
              </div>
              <h3 className="font-montserrat font-bold text-white text-lg mb-2">{a.title}</h3>
              <p className="text-white/80 text-sm">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Steps() {
  return (
    <section className="py-20 bg-gray-50 section-reveal">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-orange font-montserrat font-semibold text-sm uppercase tracking-wider">Процесс</span>
          <h2 className="font-montserrat font-extrabold text-dark text-3xl md:text-4xl mt-2">Как мы работаем</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((s, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 card-hover">
              <div className="w-14 h-14 bg-orange rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name={s.icon as string} size={26} className="text-white" fallback="Circle" />
              </div>
              <div className="font-montserrat font-black text-orange/30 text-3xl mb-1">{s.num}</div>
              <h3 className="font-montserrat font-bold text-dark text-base mb-2">{s.title}</h3>
              <p className="text-gray-mid text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const [page, setPage] = useState(0);
  const perPage = 6;
  const totalPages = Math.ceil(REVIEWS.length / perPage);
  const visible = REVIEWS.slice(page * perPage, page * perPage + perPage);
  const avgRating = (REVIEWS.reduce((s, r) => s + r.rating, 0) / REVIEWS.length).toFixed(1);

  return (
    <section id="reviews" className="py-20 bg-white section-reveal">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-orange font-montserrat font-semibold text-sm uppercase tracking-wider">Отзывы</span>
          <h2 className="font-montserrat font-extrabold text-dark text-3xl md:text-4xl mt-2 mb-4">Что говорят наши клиенты</h2>
          <div className="inline-flex items-center gap-3 bg-gray-50 rounded-2xl px-6 py-3">
            <Stars count={5} />
            <span className="font-montserrat font-black text-dark text-2xl">{avgRating}</span>
            <span className="text-gray-mid text-sm">из 5 · {REVIEWS.length} отзывов</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {visible.map((r, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl p-6 flex flex-col gap-3 border border-gray-100 hover:border-orange/30 transition-colors">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="font-montserrat font-bold text-dark text-base">{r.name}</div>
                  <div className="text-gray-mid text-xs mt-0.5">{r.city} · {r.service}</div>
                </div>
                <Stars count={r.rating} />
              </div>
              <p className="text-gray-mid text-sm leading-relaxed flex-1">"{r.text}"</p>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2">
            <button onClick={() => setPage((p) => Math.max(0, p - 1))} disabled={page === 0}
              className={`w-10 h-10 rounded-xl border-2 flex items-center justify-center transition-colors ${page === 0 ? "border-gray-200 text-gray-300 cursor-not-allowed" : "border-gray-200 hover:border-orange text-dark hover:text-orange"}`}>
              <Icon name="ChevronLeft" size={18} />
            </button>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button key={i} onClick={() => setPage(i)}
                className={`w-10 h-10 rounded-xl border-2 font-montserrat font-semibold text-sm transition-colors ${i === page ? "border-orange bg-orange text-white" : "border-gray-200 hover:border-orange text-dark hover:text-orange"}`}>
                {i + 1}
              </button>
            ))}
            <button onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))} disabled={page === totalPages - 1}
              className={`w-10 h-10 rounded-xl border-2 flex items-center justify-center transition-colors ${page === totalPages - 1 ? "border-gray-200 text-gray-300 cursor-not-allowed" : "border-gray-200 hover:border-orange text-dark hover:text-orange"}`}>
              <Icon name="ChevronRight" size={18} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" className="py-20 bg-gray-50 section-reveal">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-orange font-montserrat font-semibold text-sm uppercase tracking-wider">Вопросы</span>
          <h2 className="font-montserrat font-extrabold text-dark text-3xl md:text-4xl mt-2">Часто задаваемые вопросы</h2>
        </div>
        <div className="flex flex-col gap-3">
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
              <button className="w-full flex items-center justify-between px-6 py-4 text-left" onClick={() => setOpen(open === i ? null : i)}>
                <span className="font-montserrat font-semibold text-dark text-base pr-4">{item.q}</span>
                <Icon name={open === i ? "ChevronUp" : "ChevronDown"} size={20} className="text-orange flex-shrink-0" />
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-gray-mid text-sm leading-relaxed border-t border-gray-100 pt-4">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA({ onOrderClick }: { onOrderClick: () => void }) {
  return (
    <section className="py-20 bg-dark section-reveal">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <span className="text-orange font-montserrat font-semibold text-sm uppercase tracking-wider">Оставьте заявку</span>
        <h2 className="font-montserrat font-extrabold text-white text-3xl md:text-4xl mt-3 mb-3">Нужна помощь специалистов?</h2>
        <p className="text-white/60 mb-8">Оставьте заявку, и наш специалист свяжется с вами через 1 минуту</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={onOrderClick} className="orange-btn px-10 py-4 text-base">Получить расчёт стоимости</button>
          <button onClick={onOrderClick} className="border-2 border-white/30 text-white hover:border-orange hover:text-orange transition-colors rounded-xl px-10 py-4 text-base font-montserrat font-semibold">Получить консультацию</button>
        </div>
      </div>
    </section>
  );
}

function Contacts() {
  return (
    <section id="contacts" className="py-20 bg-gray-50 section-reveal">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-orange font-montserrat font-semibold text-sm uppercase tracking-wider">Контакты</span>
          <h2 className="font-montserrat font-extrabold text-dark text-3xl md:text-4xl mt-2">Свяжитесь с нами</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="flex flex-col gap-5">
            <a href={PHONE_HREF} className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:border-orange/30 transition-colors group">
              <div className="w-12 h-12 bg-orange rounded-xl flex items-center justify-center">
                <Icon name="Phone" size={22} className="text-white" />
              </div>
              <div>
                <div className="text-gray-mid text-xs mb-1">Телефон</div>
                <div className="font-montserrat font-bold text-dark text-xl group-hover:text-orange transition-colors">{PHONE}</div>
              </div>
            </a>
            <div className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-orange/10 rounded-xl flex items-center justify-center">
                <Icon name="Clock" size={22} className="text-orange" />
              </div>
              <div>
                <div className="text-gray-mid text-xs mb-1">График работы</div>
                <div className="font-montserrat font-bold text-dark">Пн–Вс: круглосуточно</div>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-orange/10 rounded-xl flex items-center justify-center">
                <Icon name="Mail" size={22} className="text-orange" />
              </div>
              <div>
                <div className="text-gray-mid text-xs mb-1">Email</div>
                <div className="font-montserrat font-bold text-dark">{EMAIL}</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 min-h-64">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=37.617600%2C55.755800&z=12&mode=search"
              width="100%" height="100%"
              style={{ minHeight: 280, border: 0, display: "block" }}
              allowFullScreen loading="lazy" title="Карта"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-dark border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-orange rounded-lg flex items-center justify-center">
              <Icon name="Home" size={18} className="text-white" />
            </div>
            <div>
              <div className="font-montserrat font-bold text-white text-sm">СТРОЙБРИГАДА</div>
              <div className="text-white/40 text-xs">Профессиональные строительные работы</div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-white/45 text-xs">
            <a href="#" className="hover:text-orange transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-orange transition-colors">Согласие на обработку данных</a>
            <a href="#" className="hover:text-orange transition-colors">Cookie Policy</a>
          </div>
          <div className="text-right">
            <a href={PHONE_HREF} className="block text-white font-montserrat font-bold hover:text-orange transition-colors">{PHONE}</a>
            <span className="text-white/40 text-xs">Круглосуточно</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function OrderModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [area, setArea] = useState("");
  const [comment, setComment] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setSent(false);
      setName(""); setPhone(""); setService(""); setArea(""); setComment("");
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await sendLead({ name, phone, service, area, comment });
    setLoading(false);
    setSent(true);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div ref={overlayRef} className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 bg-white rounded-2xl w-full max-w-lg shadow-2xl max-h-[90vh] overflow-y-auto" style={{ animation: "fade-in-up 0.3s ease forwards" }}>
        <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between rounded-t-2xl z-10">
          <div>
            <h3 className="font-montserrat font-extrabold text-dark text-xl">Оставить заявку</h3>
            <p className="text-gray-mid text-sm">Ответим в течение 15 минут</p>
          </div>
          <button onClick={onClose} className="w-9 h-9 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors text-gray-mid hover:text-dark">
            <Icon name="X" size={18} />
          </button>
        </div>

        <div className="p-6">
          {sent ? (
            <div className="text-center py-10">
              <div className="w-20 h-20 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <Icon name="CheckCircle2" size={40} className="text-orange" />
              </div>
              <h4 className="font-montserrat font-extrabold text-dark text-2xl mb-2">Спасибо!</h4>
              <p className="text-gray-mid">Мы скоро с вами свяжемся</p>
              <button onClick={onClose} className="orange-btn mt-6 px-8 py-3">Закрыть</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-dark font-montserrat font-semibold text-sm mb-1.5">Имя <span className="text-orange">*</span></label>
                <input type="text" placeholder="Как вас зовут?" value={name} onChange={(e) => setName(e.target.value)}
                  className="w-full border-2 border-gray-200 focus:border-orange rounded-xl px-4 py-3 outline-none text-dark transition-colors text-sm" required />
              </div>

              <div>
                <label className="block text-dark font-montserrat font-semibold text-sm mb-1.5">Телефон <span className="text-orange">*</span></label>
                <input type="tel" placeholder="+7 (___) ___-__-__" value={phone} onChange={(e) => setPhone(e.target.value)}
                  className="w-full border-2 border-gray-200 focus:border-orange rounded-xl px-4 py-3 outline-none text-dark transition-colors text-sm" required />
              </div>

              <div>
                <label className="block text-dark font-montserrat font-semibold text-sm mb-1.5">Услуга</label>
                <select value={service} onChange={(e) => setService(e.target.value)}
                  className="w-full border-2 border-gray-200 focus:border-orange rounded-xl px-4 py-3 outline-none text-dark transition-colors text-sm bg-white appearance-none">
                  <option value="">Выберите услугу</option>
                  {SERVICE_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-dark font-montserrat font-semibold text-sm mb-1.5">Площадь (м²)</label>
                <input type="number" placeholder="Например: 120" value={area} onChange={(e) => setArea(e.target.value)} min="1"
                  className="w-full border-2 border-gray-200 focus:border-orange rounded-xl px-4 py-3 outline-none text-dark transition-colors text-sm" />
              </div>

              <div>
                <label className="block text-dark font-montserrat font-semibold text-sm mb-1.5">Комментарий</label>
                <textarea placeholder="Опишите, что нужно сделать..." value={comment} onChange={(e) => setComment(e.target.value)} rows={3}
                  className="w-full border-2 border-gray-200 focus:border-orange rounded-xl px-4 py-3 outline-none text-dark transition-colors text-sm resize-none" />
              </div>

              <button type="submit" disabled={loading}
                className={`orange-btn py-4 text-base mt-1 ${loading ? "opacity-60 cursor-not-allowed" : ""}`}>
                {loading ? "Отправляем..." : "Отправить заявку"}
              </button>
              <p className="text-gray-mid text-xs text-center">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

function CallModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!open) { setSent(false); setName(""); setPhone(""); }
  }, [open]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 bg-white rounded-2xl p-6 md:p-8 w-full max-w-md shadow-2xl" style={{ animation: "fade-in-up 0.3s ease forwards" }}>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-mid hover:text-dark">
          <Icon name="X" size={22} />
        </button>
        <div className="w-12 h-12 bg-orange/10 rounded-xl flex items-center justify-center mb-4">
          <Icon name="Phone" size={24} className="text-orange" />
        </div>
        <h3 className="font-montserrat font-extrabold text-dark text-xl mb-1">Заказать звонок</h3>
        <p className="text-gray-mid text-sm mb-6">Перезвоним в течение 1 минуты</p>
        {sent ? (
          <div className="text-center py-6">
            <Icon name="CheckCircle2" size={44} className="text-orange mx-auto mb-3" />
            <p className="font-montserrat font-bold text-dark text-lg">Спасибо! Заявка принята.</p>
            <p className="text-gray-mid text-sm mt-1">Мы свяжемся с вами в ближайшее время</p>
          </div>
        ) : (
          <form onSubmit={async (e) => { e.preventDefault(); await sendLead({ name, phone }); setSent(true); }} className="flex flex-col gap-3">
            <input type="text" placeholder="Ваше имя" value={name} onChange={(e) => setName(e.target.value)}
              className="border-2 border-gray-200 focus:border-orange rounded-xl px-4 py-3 outline-none text-dark transition-colors" required />
            <input type="tel" placeholder="Номер телефона" value={phone} onChange={(e) => setPhone(e.target.value)}
              className="border-2 border-gray-200 focus:border-orange rounded-xl px-4 py-3 outline-none text-dark transition-colors" required />
            <button type="submit" className="orange-btn py-3 text-base">Заказать звонок</button>
            <p className="text-gray-mid text-xs text-center">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
          </form>
        )}
      </div>
    </div>
  );
}

const Index = () => {
  const [callModalOpen, setCallModalOpen] = useState(false);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  useScrollReveal();

  return (
    <div className="min-h-screen">
      <Header onCallClick={() => setCallModalOpen(true)} />
      <Hero onOrderClick={() => setOrderModalOpen(true)} />
      <Quiz />
      <Portfolio />
      <Services />
      <About />
      <Advantages />
      <Steps />
      <Reviews />
      <FAQ />
      <CTA onOrderClick={() => setOrderModalOpen(true)} />
      <Contacts />
      <Footer />
      <CallModal open={callModalOpen} onClose={() => setCallModalOpen(false)} />
      <OrderModal open={orderModalOpen} onClose={() => setOrderModalOpen(false)} />

      <a href={PHONE_HREF}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-orange rounded-full flex items-center justify-center shadow-2xl hover:bg-orange-dark transition-colors pulse-ring"
        title="Позвонить">
        <Icon name="Phone" size={24} className="text-white" />
      </a>
    </div>
  );
};

export default Index;