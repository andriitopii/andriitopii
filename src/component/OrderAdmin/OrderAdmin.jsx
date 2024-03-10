import {
  getFirestore,
  doc,
  arrayUnion,
  collection,
  getDocs,
  deleteDoc,
  limit,
} from "firebase/firestore";
import { app } from "../../bd/firebase";
import { useEffect, useState } from "react";
import "./OrderAdmin.scss";
import { useForm } from "react-hook-form";
const OrderAdmin = () => {
  const db = getFirestore(app);
  const {formState:{errors, isValid}, register, getValues, handleSubmit} = useForm({ mode: "onChange" });

  const [allOrder, setAllOrder] = useState([]);
  const [search, setSearch] = useState('')
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
      deleteDoc(refItem).then(() => {
        setAllOrder(allOrder.filter((item) => item.id != id));
      });
    }
  }

  useEffect(() => {
    getOrder();

  }, []);

  // Пошук
  function searchInOrders(data) {

    setSearch(data.search);
    console.log(allOrder);
  }
  return (
    <div className="order-admin">
      <h1>Замовлення</h1>

      <div className="order-admin__nav-bar">
        <form onChange={handleSubmit(searchInOrders)}>
          <input {...register("search")} type="search" placeholder="Пошук" />
        </form>
      </div>
      <div className="order-admin__content">
        <table>
          <thead>
            <tr>
              <th>Ім'я</th>
              <th>Компанія</th>
              <th>Email</th>
              <th>Послуга</th>
              <th>Бюджет</th>
              <th>Про проект</th>
              <th>Статус</th>
              <th>Дія</th>
            </tr>
          </thead>
          <tbody>
            {allOrder
              .filter((obj) => {
                for (const key in obj) {
                  if (obj[key].toString().toLowerCase().includes(search)) {
                    return true;
                  } else {
                    return false;
                  }
                }
              })
              .map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.company}</td>
                  <td>
                    <a href={`mailto:${item.mail}`}>{item.email}</a>
                  </td>
                  <td>{item.service}</td>
                  <td>{item.budget}</td>
                  <td>{item.about}</td>
                  <td>{item.status ? "Прочитано" : "Новий"}</td>
                  <td>
                    <button onClick={() => deletOrder(item.id)}>
                      Видалити
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderAdmin;
