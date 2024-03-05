import InstagramSvg from "../Icon/InstagramSvg";
import "./Contact.scss";
const Contact = () => {
  return (
    <section id="contact">
      <div className="container container--col container--background-dark">
        <h1 className="title-section title-section--light">Contact</h1>
        <div className="contact">
          <div className="contact__form">
            <form>
              <input type="text" placeholder="Name" required />
              <input type="text" placeholder="Last name" required />
              <input type="email" placeholder="Email" required />
              <textarea rows="12" required></textarea>
              <button type="submit">SEND</button>
            </form>
          </div>
          <div className="contact__info">
            <ul>
              <li>
                <h1>Write me:</h1>
              </li>
              <li>
                <a href="mailto:andriitopii@icloud.com">
                  andriitopii@icloud.com
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <h1>Subscribe me:</h1>
              </li>
              <ul>
                <li>
                  <a href="#">
                    <InstagramSvg width="48px" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <InstagramSvg width="48px" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <InstagramSvg width="48px" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <InstagramSvg width="48px" />
                  </a>
                </li>
              </ul>
            </ul>
            <ul>
              <li>
                <h1>Call me:</h1>
              </li>
              <li>
                <h2>+48-724-065-791</h2>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
