import "./Footer.scss";
import Logo from "../Logo/Logo";
import Button from "../Button/Button"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container container--col">
        <div className="footer__footer-contact-form footer-contact-form">
          <h1 className="footer-contact-form__title-h2">
          Do you have any questions?
          </h1>
          <h1 className="footer-contact-form__title-h1">
          Leave your contacts and we will contact you
          </h1>
          <form method="post" className="footer-contact-form__form">
            <input className="input-default" type="text" name="Name" placeholder="Name"/>
            <input className="input-default" type="text" name="Last name" placeholder="Last name"/>
            <input className="input-default" type="email" name="Mail" placeholder="e-Mail"/>
            <input className="input-default" type="textarea" name="Message" placeholder="Messege"/>
            <Button>Send</Button>
          </form>
        </div>
        <div className="footer__footer-menu footer-menu">
          <ul>
            <li>
              <Logo />
            </li>
            <li>
              <ul>
                <li>INst</li>
                <li>INst</li>
                <li>INst</li>
                <li>INst</li>
              </ul>
            </li>
          </ul>
          <ul>
            <li>
              <Logo />
            </li>
            <li>
              <ul>
                <li>INst</li>
                <li>INst</li>
                <li>INst</li>
                <li>INst</li>
              </ul>
            </li>
          </ul>
          <ul>
            <li>
              <Logo />
            </li>
            <li>
              <ul>
                <li>INst</li>
                <li>INst</li>
                <li>INst</li>
                <li>INst</li>
              </ul>
            </li>
          </ul>
          <ul>
            <li>
              <Logo />
            </li>
            <li>
              <ul>
                <li>INst</li>
                <li>INst</li>
                <li>INst</li>
                <li>INst</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
