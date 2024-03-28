import { useForm } from "react-hook-form";
import InstagramSvg from "../Icon/InstagramSvg";
import {
  getFirestore,
  doc,
  addDoc,
  collection,
} from "firebase/firestore";
import { app } from "../../bd/firebase";
import "./Contact.scss";
import { useEffect, useRef, useState } from "react";
const Contact = () => {
  const {
    register,
    getValues,
    reset,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({ mode: "onChange" });
  const db = getFirestore(app)
  const [succForm, setSuccForm] = useState(false)
  const refTitle = useRef(null)
  const sendContactForn = async (data) => {
 
    await addDoc(collection(db, "order"), {
      name: data.name,
      company : data.companyName,
       service: data.service,
      budget: data.budget,
      about: data.about,
      email: data.email,
      status: false,
    }).then(()=>{
      setSuccForm(!succForm)
      
      reset()
    }).catch((e)=>console.log(e));
 
    
  };

  return (
    <section id="contact">
      <div className="container container--col container--background-dark">
        <div className="contact">
          {succForm ? <div className="contact__succsess">
              Ви успішно надіслали відгук
            </div> : <></>

          }
        
          <h1>
          Просто заповніть цю форму, і я зв'яжуся з вами.
          </h1>

          <form onSubmit={handleSubmit(sendContactForn)}>
            
            <p>
              My name is <input type="text" placeholder="Name" {...register("name", {
                  required: true,
                })} /> and I work
              with
              <input
                type="text"
                placeholder="Company name"
                {...register("companyName", {
                  required: true,
                })}
              />
              .<br></br>
              I'am interested in
              <input
                type="radio"
                id="landing-radio"
                value="Landing page"
                {...register("service", {
                  required: true
                })}
              />
              <label htmlFor="landing-radio">Landing page</label>
              <input
                id="portfolio-radio"
                type="radio"
                value="Portfolio site"
                {...register("service", {
                  required: true
                })}
              />
              <label htmlFor="portfolio-radio">Portfolio site</label>
              <input
                id="busines-radio"
                type="radio"
                value="Busines page"
                {...register("service", {
                  required: true
                })}
              />
              <label htmlFor="busines-radio">Busines site</label>
              <br></br>I am hoping to stay within a budget range of{" "}
              <select {...register("budget", {
                  required: true
                })}>
                <option value="500">500</option>
                <option value="1000">1000</option>
                <option value="1500">1500</option>
                <option value="1500+">1500+</option>
              </select>
              reach out to me at <input type="email" placeholder="Email" {...register("email", {
                  required: true
                })} /> to
              discuss the project details.<br></br> Tell me a little about your
              project
              <input
                type="text"
                placeholder="About your project"
                {...register("about", {
                  required: true
                })}
                style={{ flexGrow: 1 }}
              />
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
