import Button from "../Button/Button";
import "./HeaderContent.scss";

const HeaderContent = () => {
  return (
    <div className="header__content-header content-header">
      <div className="content-header__title-container">
        <h1 className="content-header__title">
          Your business in the world of innovation
        </h1>
      </div>
      <div className="content-header__info-container">
        <p className="content-header__info-paragraph">
          We know how important it is to stand out from the competition. Our
          landing pages, business card sites, and online stores are designed to
          get you noticed in the digital world. Choose us and we guarantee an
          individual approach, creative design, and high quality work.
        </p>
        <Button>Order now</Button>
      </div>
      <div className="content-header__article-container article-container">
        <a href="#" className="article-container__article-header">
          <h2>GHjhjgjhgkjhg</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam,
            eligendi excepturi. Nulla veniam ipsam molestiae itaque laboriosam
            harum officia, voluptates soluta exercitationem libero, pariatur
            maxime repellat rerum, doloribus praesentium tempora.
          </p>
          <img />
        </a>
        <a href="#" className="article-container__article-header">
          <h2>GHjhjgjhgkjhg</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam,
            eligendi excepturi. Nulla veniam ipsam molestiae itaque laboriosam
            harum officia, voluptates soluta exercitationem libero, pariatur
            maxime repellat rerum, doloribus praesentium tempora.
          </p>
          <img />
        </a>
        <a href="#" className="article-container__article-header">
          <h2>GHjhjgjhgkjhg</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam,
            eligendi excepturi. Nulla veniam ipsam molestiae itaque laboriosam
            harum officia, voluptates soluta exercitationem libero, pariatur
            maxime repellat rerum, doloribus praesentium tempora.
          </p>
          <img />
        </a>
      </div>
    </div>
  );
};

export default HeaderContent;
