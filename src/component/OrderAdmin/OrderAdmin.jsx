import {
  getFirestore,
  doc,
  arrayUnion,
  collection,
  getDocs,
  deleteDoc,
  updateDoc,
  limit,
} from "firebase/firestore";
import { app } from "../../bd/firebase";
import { useEffect, useState } from "react";
import "./OrderAdmin.scss";
import { useForm } from "react-hook-form";
import DeleteSvg from "../Icon/DeleteSvg";
import BookMarkSvg from "../Icon/BookMarkSvg";
import ReadsCheackSvg from "../Icon/ReadsCheackSvg ";
import NoReadsCheackSvg from "../Icon/NoReadsCheackSvg";
const OrderAdmin = () => {
  const db = getFirestore(app);
  const {
    formState: { errors, isValid },
    register,
    getValues,
    handleSubmit,
  } = useForm({ mode: "onChange" });

  const [allOrder, setAllOrder] = useState([]);
  const [search, setSearch] = useState("");
  const [tabsState, setTabsState] = useState("ALL");
  // Tabs fn

  function changeTabs(data) {
    setTabsState(data);
  }
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
  // Функція позначення вадоивості документу
  async function changesMark (id) {
    const refItem = doc(db, "order", id);
    const mark = allOrder.filter((obj)=> obj.id === id)[0].mark;
    console.log(mark);
    console.log(mark === undefined ? true : mark ? false : true);
    await updateDoc(refItem, {
      mark: !mark
    }).then(()=>{
      let arr = allOrder.map((item)=>{
        if(item.id === id){
          item.mark = !mark;
          return item;
        } else return item
      })
      setAllOrder(arr)
    });
  }
  // Функція зміни статусу
  async function changeStatus(id) {
    const refItem = doc(db, "order", id);
    const arr = allOrder.filter((obj) => obj.id === id);
    console.log();
    updateDoc(refItem, {
      status: !arr[0].status,
    })
      .then(() => {
        let arrt = allOrder.map((item) => {
          if (item.id === id) {
            item.status = !item.status;
            return item;
          } else return item;
        });
        setAllOrder(arrt);
      })
      .catch((er) => alert(er));
  }
  useEffect(() => {
    getOrder();
  }, []);

  // Пошук
  function searchInOrders(data) {
    console.log(data);
    setSearch(data.search.toLowerCase());
  }
  return (
    <div className="order-admin">
      <h1>Замовлення</h1>

      <div className="order-admin__nav-bar">
        <input
          id="TABS-ALL"
          type="radio"
          value="ALL"
          defaultChecked
          name="tabsOrder"
          onClick={(e) => changeTabs(e.target.value)}
        />
        <label htmlFor="TABS-ALL">Всі</label>
        <input
          id="TABS-READ"
          type="radio"
          value="READ"
          name="tabsOrder"
          onClick={(e) => changeTabs(e.target.value)}
        />
        <label htmlFor="TABS-READ">Прочитані</label>
        <input
          id="TABS-MARK"
          type="radio"
          value="MARK"
          name="tabsOrder"
          onClick={(e) => changeTabs(e.target.value)}
        />
        <label htmlFor="TABS-MARK">Важливі</label>

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
            {tabsState === "ALL" &&
              allOrder
                .filter((obj) => {
                  for (const key in obj) {
                    if (typeof obj[key] == "string") {
                      if (obj[key].toLowerCase().includes(search)) {
                        return true;
                      } else if (!obj[key].toLowerCase().includes(search)) {
                        continue;
                      }
                    }
                  }
                })
                .map((item) => (
                  <tr key={item.id} >
                    <td>{item.name}</td>
                    <td>{item.company}</td>
                    <td>
                      <a href={`mailto:${item.mail}`}>{item.email}</a>
                    </td>
                    <td>{item.service}</td>
                    <td>{item.budget}</td>
                    <td>{item.about}</td>
                    <td>{item.status ? "Прочитано" : "Новий"}</td>
                    <td className="td-btn-container">
                    <button onClick={() => deletOrder(item.id)}>
                        <DeleteSvg width="16px" />
                      </button>
                      <button onClick={() => changeStatus(item.id)}>
                        {item.status ? <ReadsCheackSvg width="16px"/> : <NoReadsCheackSvg width="16px"/>}
                      </button>
                      <button onClick={() => changesMark(item.id)}>
                        <BookMarkSvg width="16px"/>
                      </button>
                    </td>
                  </tr>
                ))}

            {tabsState === "READ" && allOrder
                .filter((obj)=>{
                    return obj.status === true
                })
                .filter((obj) => {
                  for (const key in obj) {
                    if (typeof obj[key] == "string") {
                      if (obj[key].toLowerCase().includes(search)) {
                        return true;
                      } else if (!obj[key].toLowerCase().includes(search)) {
                        continue;
                      }
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
                    <td className="td-btn-container">
                      <button onClick={() => deletOrder(item.id)}>
                        <DeleteSvg width="16px" />
                      </button>
                      <button onClick={() => changeStatus(item.id)}>
                        {item.status ? <ReadsCheackSvg width="16px"/> : <NoReadsCheackSvg width="16px"/>}
                      </button>
                      <button onClick={() => changesMark(item.id)}>
                        <BookMarkSvg width="16px"/>
                      </button>
                    </td>
                  </tr>
                ))}
            {tabsState === "MARK" && allOrder
                .filter((obj)=>{
                    return obj.mark === true
                })
                .filter((obj) => {
                  for (const key in obj) {
                    if (typeof obj[key] == "string") {
                      if (obj[key].toLowerCase().includes(search)) {
                        return true;
                      } else if (!obj[key].toLowerCase().includes(search)) {
                        continue;
                      }
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
                    <td className="td-btn-container">
                    <button onClick={() => deletOrder(item.id)}>
                        <DeleteSvg width="16px" />
                      </button>
                      <button onClick={() => changeStatus(item.id)}>
                        {item.status ? <ReadsCheackSvg width="16px"/> : <NoReadsCheackSvg width="16px"/>}
                      </button>
                      <button onClick={() => changesMark(item.id)}>
                        <BookMarkSvg width="16px"/>
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
