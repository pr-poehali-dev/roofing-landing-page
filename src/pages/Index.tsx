import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const PHONE = "+79100821217";
const PHONE_HREF = "tel:+79100821217";
const EMAIL = "info@stroy-brigada.ru";
const HERO_IMG = "https://cdn.poehali.dev/projects/a04ac7a3-1ae6-430f-ae81-a481b6930e5a/files/a37be59d-cb5f-44d5-8d36-96ea54a88f87.jpg";

const PORTFOLIO_ITEMS = [
  { title: "Монтаж металлочерепицы", desc: "Частный дом, 180 м²", img: "https://cdn.poehali.dev/projects/a04ac7a3-1ae6-430f-ae81-a481b6930e5a/bucket/e6e6ebe2-c784-4121-a841-df037522bb50.jpg" },
  { title: "Фасадные работы", desc: "Утепление и штукатурка", img: "https://cdn.poehali.dev/projects/a04ac7a3-1ae6-430f-ae81-a481b6930e5a/bucket/b5f422b0-98b0-4d2a-b2e9-9d44340dd756.jpg" },
  { title: "Реставрация старого дома", desc: "Коттедж 1960-х годов", img: "https://cdn.poehali.dev/projects/a04ac7a3-1ae6-430f-ae81-a481b6930e5a/bucket/6f50f967-30b2-4b88-ab11-3842483b4964.jpg" },
  { title: "Внутренняя отделка", desc: "Жилой дом, 3 комнаты", img: "https://cdn.poehali.dev/projects/a04ac7a3-1ae6-430f-ae81-a481b6930e5a/bucket/51163e08-e029-4229-8f1c-8d982b03b488.jpg" },
  { title: "Бетонные работы", desc: "Фундамент и конструкции", img: "https://cdn.poehali.dev/projects/a04ac7a3-1ae6-430f-ae81-a481b6930e5a/bucket/ce07ee96-0034-46e7-ad27-64bbf2887f0a.jpg" },
  { title: "Ремонт кровли под ключ", desc: "До и после — полная реконструкция", img: "https://cdn.poehali.dev/projects/a04ac7a3-1ae6-430f-ae81-a481b6930e5a/bucket/e6e6ebe2-c784-4121-a841-df037522bb50.jpg" },
];

const SERVICES = [
  { icon: "Home", title: "Кровельные работы", desc: "Монтаж, ремонт, замена кровли любой сложности", img: "https://cdn.poehali.dev/projects/a04ac7a3-1ae6-430f-ae81-a481b6930e5a/bucket/e6e6ebe2-c784-4121-a841-df037522bb50.jpg" },
  { icon: "Building2", title: "Фасадные работы", desc: "Отделка фасадов, утепление, декоративная отделка", img: "https://cdn.poehali.dev/projects/a04ac7a3-1ae6-430f-ae81-a481b6930e5a/bucket/b5f422b0-98b0-4d2a-b2e9-9d44340dd756.jpg" },
  { icon: "Layers", title: "Бетонные работы", desc: "Заливка фундаментных и бетонных конструкций", img: "https://cdn.poehali.dev/projects/a04ac7a3-1ae6-430f-ae81-a481b6930e5a/bucket/ce07ee96-0034-46e7-ad27-64bbf2887f0a.jpg" },
  { icon: "Hammer", title: "Реставрация домов", desc: "Восстановление и укрепление старых конструкций", img: "https://cdn.poehali.dev/projects/a04ac7a3-1ae6-430f-ae81-a481b6930e5a/bucket/6f50f967-30b2-4b88-ab11-3842483b4964.jpg" },
  { icon: "PaintBucket", title: "Внутренняя отделка", desc: "Ремонт помещений, покраска, плитка", img: "https://cdn.poehali.dev/projects/a04ac7a3-1ae6-430f-ae81-a481b6930e5a/bucket/51163e08-e029-4229-8f1c-8d982b03b488.jpg" },
  { icon: "Car", title: "Площадки и заезды", desc: "Строительство бетонных и асфальтированных площадок", img: "https://cdn.poehali.dev/projects/a04ac7a3-1ae6-430f-ae81-a481b6930e5a/bucket/ce07ee96-0034-46e7-ad27-64bbf2887f0a.jpg" },
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

function Hero({ onCallClick }: { onCallClick: () => void }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);

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
            <button onClick={onCallClick} className="orange-btn pulse-ring px-8 py-4 text-lg">
              Получить расчёт стоимости
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 lg:p-8">
            <h3 className="font-montserrat font-bold text-white text-xl mb-2">Получите расчёт стоимости</h3>
            <p className="text-white/60 text-sm mb-6">Ответим в течение 15 минут</p>
            {sent ? (
              <div className="text-center py-8">
                <Icon name="CheckCircle2" size={48} className="text-orange mx-auto mb-3" />
                <p className="text-white font-montserrat font-semibold text-lg">Заявка отправлена!</p>
                <p className="text-white/60 text-sm mt-2">Свяжемся с вами в ближайшее время</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="flex flex-col gap-3">
                <input type="text" placeholder="Ваше имя" value={name} onChange={(e) => setName(e.target.value)}
                  className="bg-white/10 border border-white/30 text-white placeholder-white/40 rounded-lg px-4 py-3 outline-none focus:border-orange transition-colors" required />
                <input type="tel" placeholder="Номер телефона" value={phone} onChange={(e) => setPhone(e.target.value)}
                  className="bg-white/10 border border-white/30 text-white placeholder-white/40 rounded-lg px-4 py-3 outline-none focus:border-orange transition-colors" required />
                <button type="submit" className="orange-btn py-3 text-base mt-1">Получить расчёт стоимости</button>
                <p className="text-white/35 text-xs text-center">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
              </form>
            )}
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
                  <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="flex flex-col gap-4">
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
              <h3 className="font-montserrat font-extrabold text-dark text-2xl mb-3">Заявка принята!</h3>
              <p className="text-gray-mid mb-6">Наш специалист свяжется с вами в течение 15 минут и рассчитает стоимость работ</p>
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

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" className="py-20 bg-white section-reveal">
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

function CTA({ onCallClick }: { onCallClick: () => void }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);
  return (
    <section className="py-20 bg-dark section-reveal">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <span className="text-orange font-montserrat font-semibold text-sm uppercase tracking-wider">Оставьте заявку</span>
        <h2 className="font-montserrat font-extrabold text-white text-3xl md:text-4xl mt-3 mb-3">Нужна помощь специалистов?</h2>
        <p className="text-white/60 mb-8">Оставьте заявку, и наш специалист свяжется с вами через 1 минуту</p>
        {sent ? (
          <div className="bg-dark-secondary rounded-2xl p-10 text-center">
            <Icon name="CheckCircle2" size={48} className="text-orange mx-auto mb-3" />
            <p className="text-white font-montserrat font-bold text-xl">Заявка принята!</p>
            <p className="text-white/50 mt-2">Перезвоним в течение 1 минуты</p>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="bg-dark-secondary rounded-2xl p-6 md:p-8 flex flex-col gap-4">
            <input type="text" placeholder="Ваше имя" value={name} onChange={(e) => setName(e.target.value)}
              className="bg-white/8 border border-white/20 text-white placeholder-white/35 rounded-xl px-5 py-3 outline-none focus:border-orange transition-colors" required />
            <input type="tel" placeholder="Номер телефона" value={phone} onChange={(e) => setPhone(e.target.value)}
              className="bg-white/8 border border-white/20 text-white placeholder-white/35 rounded-xl px-5 py-3 outline-none focus:border-orange transition-colors" required />
            <button type="submit" className="orange-btn py-4 text-base">Получить консультацию</button>
            <p className="text-white/25 text-xs">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
          </form>
        )}
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
            <span className="text-white/40 text-xs">{EMAIL}</span>
          </div>
        </div>
        <div className="border-t border-white/8 mt-6 pt-6 text-center text-white/30 text-xs">
          © 2024 Стройбригада. Все права защищены.
        </div>
      </div>
    </footer>
  );
}

function CallModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);
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
            <p className="font-montserrat font-bold text-dark text-lg">Заявка принята!</p>
            <p className="text-gray-mid text-sm mt-1">Скоро перезвоним</p>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="flex flex-col gap-3">
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
  const [modalOpen, setModalOpen] = useState(false);
  useScrollReveal();

  return (
    <div className="min-h-screen">
      <Header onCallClick={() => setModalOpen(true)} />
      <Hero onCallClick={() => setModalOpen(true)} />
      <Quiz />
      <Portfolio />
      <Services />
      <About />
      <Advantages />
      <Steps />
      <FAQ />
      <CTA onCallClick={() => setModalOpen(true)} />
      <Contacts />
      <Footer />
      <CallModal open={modalOpen} onClose={() => setModalOpen(false)} />

      <a href={PHONE_HREF}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-orange rounded-full flex items-center justify-center shadow-2xl hover:bg-orange-dark transition-colors pulse-ring"
        title="Позвонить">
        <Icon name="Phone" size={24} className="text-white" />
      </a>
    </div>
  );
};

export default Index;