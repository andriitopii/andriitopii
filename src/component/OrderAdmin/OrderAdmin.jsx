import {
  getFirestore,
  doc,
  arrayUnion,
  collection,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import { app } from "../../bd/firebase";
import { useEffect, useState } from "react";
import "./OrderAdmin.scss";
const OrderAdmin = () => {
  const db = getFirestore(app);
  const [allOrder, setAllOrder] = useState([]);
  // Отримання всіх замовлень;
  async function getOrder() {
    const dataOrder = await getDocs(collection(db, "order"));
    const mobArr = [];
    dataOrder.forEach((item) => {
      const obj = item.data();
      obj.id = item.id;
      mobArr.push(obj);
    });
    setAllOrder(mobArr);
  }

  // Функція видалення замовлення
  async function deletOrder(id) {
    const refItem = doc(db, "order", id);
    const popUp = confirm("Ви дійсно хочете видалити це замовлення?");
    if (popUp) {
      deleteDoc(refItem).then(()=>{
         setAllOrder(allOrder.filter((item)=>item.id != id));
      })
    }
  }

  useEffect(() => {
    getOrder();
  });
  return (
    <div className="order-admin">
      <h1>Замовлення</h1>

      <div className="order-admin__nav-bar"></div>
      <div className="order-admin__content">
        {allOrder.map((item) => (
          <article key={item.id} className="order-admin__item">
            <h1>{item.name}</h1>
            <a href={`mailto:${item.mail}`}>{item.email}</a>
            <span>{item.service}</span>
            <h3>{item.company}</h3>
            <p>{item.about}</p>
            <span>{item.budget}</span>
            <button onClick={() => deletOrder(item.id)}>Видалити</button>
          </article>
        ))}
      </div>
    </div>
  );
};

export default OrderAdmin;
