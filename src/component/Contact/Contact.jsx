import InstagramSvg from "../Icon/InstagramSvg";
import "./Contact.scss";
const Contact = () => {
  return (
    <section id="contact">
      <div className="container container--col container--background-dark">
        <h1 className="title-section title-section--light">Contact</h1>
        <div className="contact">
          <h1>
            Just fill out this <span>form</span> and I'll <span>get back</span>{" "}
            to you.
          </h1>
          
          <form>
            <p>
              My name is <input type="text" placeholder="Name" required /> and I
              work with
              <input type="text" placeholder="Company name" required />.
              <br></br>
              I'am interested in
              <input
                type="radio"
                id="landing-radio"
                name="service"
                value="Landing page"
              />
              <label htmlFor="landing-radio">Landing page</label>
              <input
                id="portfolio-radio"
                type="radio"
                name="service"
                value="Portfolio site"
              />
              <label htmlFor="portfolio-radio">Portfolio site</label>
              <input  id="busines-radio" type="radio" name="service" value="Landing page" />
              <label htmlFor="busines-radio">Busines site</label>
              <br></br>I am hoping to stay within a budget range of{" "}
              <select>
                <option value="500">500</option>
                <option value="1000">1000</option>
                <option value="1500">1500</option>
                <option value="MAX">MAX</option>
              </select>
              reach out to me at{" "}
              <input type="email" placeholder="Email" required /> to discuss the
              project details.<br></br> Tell me a little about your project 
              <input type="text" placeholder="About your project" style={{flexGrow:1}}/>
            </p>
            <button type="submit">SEND</button>
          </form>

          <div className="contact__data">
            <a href="tel:+48-724-065-791">+48-724-065-791</a>
            <a href="mailto:andriitopii@icloud.com">andriitopii@icloud.com</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
