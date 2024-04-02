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
  const sendContactForn = async (data) => {
    await addDoc(collection(db, "order"), {
      name: data.name,
      company : data.companyName,
      service: data.service,
      budget: data.budget,
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
              Мене звати <input type="text" placeholder="Ваше ім'я" {...register("name", {
                  required: true,
                })} /> я працюю в
              <input
                type="text"
                placeholder="Назва вашої компанії"
                {...register("companyName", {
                  required: true,
                })}
              />
              .<br></br>
              Мене цікавить
              <input
                type="radio"
                id="landing-radio"
                value="Landing page"
                {...register("service", {
                  required: true
                })}
              />
              <label htmlFor="landing-radio">Лендінг сторінка</label>
              <input
                id="portfolio-radio"
                type="radio"
                value="Portfolio site"
                {...register("service", {
                  required: true
                })}
              />
              <label htmlFor="portfolio-radio">Портфоліо сайт</label>
              <input
                id="busines-radio"
                type="radio"
                value="Busines page"
                {...register("service", {
                  required: true
                })}
              />
              <label htmlFor="busines-radio">Бізнес сайт</label>
              <input
                id="eshop-radio"
                type="radio"
                value="E-shop"
                {...register("service", {
                  required: true
                })}
              />
              <label htmlFor="eshop-radio">Інтернет-магазин</label> .
              <br></br>Я сподіваюся залишитися в межах бюджету 
              <select {...register("budget", {
                  required: true
                })}>
                <option value="500">500</option>
                <option value="1000">1000</option>
                <option value="1500">1500</option>
                <option value="1500+">1500+</option>
              </select><br></br>
              Зв'яжіться зі мною за адресою  <input type="email" placeholder="Email" {...register("email", {
                  required: true
                })} />
             щоб обговорити деталі проекту..
            </p>
            <button className="btn btn--green-fill" type="submit">SEND</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
