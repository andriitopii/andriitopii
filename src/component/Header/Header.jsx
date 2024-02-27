import HeaderContent from "../HeaderContent/HeaderContent";
import Nav from "../Nav/Nav";
import "./Header.scss";
import covervideo from "./video/covervideo.mp4";
const Header = () => {
  return (
    <header className="header">
      <div className="container container--col">
        <Nav />
        <HeaderContent />
      </div>
    </header>
  );
};

export default Header;
