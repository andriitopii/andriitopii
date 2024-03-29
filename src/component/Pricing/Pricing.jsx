import ArrowBackSvg from "../Icon/ArrowBackSvg";
import ArrowForwardSvg from "../Icon/ArrowForwardSvg";
import PricingArticle from "../PricingArticle/PricingArticle";
import TitleSection from "../TitleSection/TitleSection";
import "./Pricing.scss";
const Pricing = () => {
  const dataPrice = [
    {
      title: "ЛЕНДІНГ СТОРІНКА",
      price: 1000,
      desc: "Вражаюча лендінг-сторінка, яка захоплює увагу ваших клієнтів з першого погляду.",
      futured: [
        "Професійний дизайн сторінки",
        "Оптимізація для мобільних пристроїв",
        "Форми зворотного зв'язку для збору лідів;",
        "Інтеграція з соціальними мережами",
      ],
    },
    {
      title: "БІЗНЕС СТОРІНКА",
      price: 1200,
      desc: "Професійний та функціональний веб-сайт для вашого бізнесу. Cайт, який відображає ваш бренд, надає важливу інформацію та забезпечує велику зручність для користувачів",
      futured: [
        "Персоналізований дизайн відповідно до вашого бренду",
        "Створення сторінок з інформацією про ваш бізнес",
        "Форми зворотного зв'язку та контактні дані",
        "Оптимізація для пошукових систем",
      ],
    },
    {
      title: "ПОРТФОЛІО САЙТ",
      price: 2500,
      desc: "Потужний і креативний сайт портфоліо, який допоможе вам продемонструвати ваші роботи та досягнення в найкращому світлі.",
      futured: [
        "Створення розділів з вашими роботами",
        "Функція фільтрації та сортування робіт",
        "Галереї зображень та відео",
        " Опція зворотного зв'язку для замовлення послуг",
      ],
    },
    {
      title: "ІНТЕРНЕТ МАГАЗИН",
      price: 2500,
      desc: "Потужний та легкий у використанні інтернет-магазин, що допоможе вам розширити свій бізнес в онлайні.",
      futured: [
        "Створення каталогу товарів з описами та зображеннями",
        "Функціонал корзини покупок та оформлення замовлення",
        "Інтеграція з платіжними системами для прийому оплати",
        "Панель адміністратора для управління товарами, замовленнями та клієнтами",
      ],
    },
  ];
  return (
    <section id="pricing">
      <div className="container container--background-light container--col">
        <div className="pricing">
          <button>
            <ArrowBackSvg width="24px" />
          </button>
          <div className="pricing__container">
            {dataPrice.map((item) => (
              <PricingArticle
                key={item.title}
                title={item.title}
                price={item.price}
                desc={item.desc}
                futured={item.futured}
              ></PricingArticle>
            ))}
          </div>

          <button>
            <ArrowForwardSvg width="24px" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
