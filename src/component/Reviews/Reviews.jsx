import { useForm } from "react-hook-form";
import "./Reviews.scss";
import { useEffect, useState } from "react";
import { app } from "../../bd/firebase";
import {
  getFirestore,
  doc,
  setDoc,
  arrayUnion,
  addDoc,
  collection,
  getDocs,
} from "firebase/firestore";
const Reviews = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    getValues,
  } = useForm({ mode: "onChange" });

  const [allOpinion, setAllOpinion] = useState([]);
  const db = getFirestore(app);

  //ДАТА ФУНКЦІЯ
  function getDate (){
    const date = new Date();
    const day = date.getDate();
    const year = date.getFullYear();
    const mounth = date.getMonth()
    switch(mounth){
      case 0:{
        return (day + " " + "JAN" + " " + year)
      }
      break;
      case 1:{
        return (day + " " + "FEB" + " " + year)
      }
      break;
      case 2:{
        return (day + " " + "MAR" + " " + year)
      }
      break;
      case 3:{
        return (day + " " + "APR" + " " + year)
      }
      break;
      case 4:{
        return (day + " " + "MAY" + " " + year)
      }
      break;
      case 5:{
        return (day + " " + "JUN" + " " + year)
      }
      break;
      case 6:{
        return (day + " " + "JUL" + " " + year)
      }
      break;
      case 7:{
        return (day + " " + "AUG" + " " + year)
      }
      break;
      case 8:{
        return (day + " " + "SEP" + " " + year)
      }
      break;
      case 9:{
        return (day + " " + "OCT" + " " + year)
      }
      break;
      case 10:{
        return (day + " " + "NOV" + " " + year)
      }
      break;
      case 11:{
        return (day + " " + "DEC" + " " + year)
      }
      break;
    }
  }
  

// ВІДПРАВКА ФОРМИ
  const sendForm = async (data) => {
    const username = getValues("username");
    const useremail = getValues("useremail");
    const useropinion = getValues("useropinion");
    const docRef = await addDoc(collection(db, "reviews"), {
      name: username,
      email: useremail,
      opinion: useropinion,
      date: getDate(),
    });
    if(allOpinion.length === 6){
      allOpinion.pop();
    }
    setAllOpinion([{ name: username, opinion: useropinion, date: getDate() }, ...allOpinion]);
    reset();
  };

  useEffect(() => {
    async function getReviews() {
      const querySnapshot = await getDocs(collection(db, "reviews"));
      const arrData = [];

      querySnapshot.forEach((doc) => {
        if(arrData.length <= 5){
        arrData.push(doc.data());
        } 
        setAllOpinion(arrData);
      });
      
      console.log(allOpinion);
    }
    getReviews();
  }, []);

  return (
    <section id="reviews">
      <div className="container container--col container--background-dark">
        <h1 className="title-section title-section--light">Reviews</h1>
        <div className="reviews">
          <div className="reviews__form">
            <form onSubmit={handleSubmit(sendForm)}>
              <input
                type="text"
                placeholder="Name"
                {...register("username", {
                  required: "Поле обовязкове для заповнення",
                  minLength: { value: 1, message: "Мінімум 1 символів" },
                  pattern: {
                    value: /^[^\d\W]*$/,
                    message: "Не припустимі символи",
                  },
                })}
              />
              <div className="input__error">
                {errors?.username && (
                  <p>{errors?.username?.message || "Error"}</p>
                )}
              </div>
              <input
                type="email"
                placeholder="Email"
                {...register("useremail", {
                  required: "Поле обовязкове для заповнення",
                  minLength: { value: 5, message: "Мінімум  символів" },
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Не коректний Email",
                  },
                })}
              />
              <div className="input__error">
                {errors?.useremail && (
                  <p>{errors?.useremail?.message || "Error"}</p>
                )}
              </div>
              <textarea
                placeholder="Your opinion"
                cols="30"
                rows="5"
                {...register("useropinion", {
                  required: "Поле обовязкове для заповнення",
                  minLength: { value: 5, message: "Мінімум 5 символів" },
                  maxLength: { value: 100, message: "Максимум 100 символів" },
                })}
              ></textarea>
              <div className="input__error">
                {errors?.useropinion && (
                  <p>{errors?.useropinion?.message || "Error"}</p>
                )}
              </div>
              <button className="btn-form" type="submit" disabled={!isValid}>
                Submit
              </button>
            </form>
          </div>
          <div className="reviews__content">
            {allOpinion.map((item, index) => (
              <article
                className="reviews__article"
                key={index + "article-reviews"}
              >
                <h1>{item.name}</h1>
                <p>{item.opinion}</p>
                <span>{item.date}</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
