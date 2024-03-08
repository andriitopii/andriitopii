import { useEffect, useState } from "react";
import { app } from "../../bd/firebase";
import {
    getFirestore,
    doc,
    arrayUnion,
    collection,
    getDocs,
    deleteDoc
  } from "firebase/firestore";
import "./ReviewsAdmin.scss";
import DeleteSvg from "../Icon/DeleteSvg";


const ReviewsAdmin = () => {
    const bd = getFirestore(app);
    const [allRevData, setAllRevData] = useState([]);
    //Отримання данних з Reviews
    async function getReviews(){
        const querySnapshot = await getDocs(collection(bd, "reviews"));
        const mobArr = []
       querySnapshot.forEach((item)=>{
        let obh = item.data();
        obh.id = item.id;
        mobArr.push(obh)
       })
       setAllRevData(mobArr);
    }
    //Видалення відгуків
    async function deleteReview (id) {
        const refItem = doc(bd, "reviews", id);
        deleteDoc(refItem).then(()=>{
            setAllRevData(allRevData.filter((item)=>item.id != id));
        })
    }

    useEffect(()=>{
        getReviews();
    },[])
    return ( <div className="reviews-admin">
        <h1>Reviews</h1>

        <div className="reviews-admin__nav-bar">

        </div>
        <div className="reviews-admin__content">
        {allRevData.map((item)=><article key={item.id} className="reviews-admin__item">
            
            <h1>{item.name}</h1>
            <a href={`mailto:${item.email}`}>Email: {item.email}</a>
            <p>
                "{item.opinion}"
            </p>
            <div>Відгук було залишено: <span>{item.date}</span></div>
            <button onClick={()=>deleteReview(item.id)}><DeleteSvg width="16px"/></button>
        </article>)}
        </div>
        
    </div> );
}
 
export default ReviewsAdmin;