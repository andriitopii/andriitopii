import { useContext } from "react";
import { MyContext } from "../../context/LangContextProvider";

const AboutUs = () => {
    const lang = MyContext();
    console.log(lang);
    return ( <section>
        <div className="container container--col">
        <h1 className="title-section title-section--dark">About Us</h1>
        </div>
    </section> );
}
 
export default AboutUs;