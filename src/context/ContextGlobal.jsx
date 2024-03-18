import { createContext, useContext, useEffect, useState } from "react";
import { app } from "../bd/firebase";
import { getFirestore, doc, getDoc } from "firebase/firestore";
const ContextApp = createContext({});

const ContextGlobal = ({ children }) => {
  let elHtml = document.querySelector("html").getAttribute("lang");
  const [data, setData] = useState({});

  // Get lang
  async function changeLang(lang) {
    const db = getFirestore(app);
    localStorage.setItem("lang", lang);
    document.querySelector("html").setAttribute("lang", lang);
    elHtml = document.querySelector("html").getAttribute("lang")
    const itemRef = doc(db, "lang", lang);
    const newDataLang = await getDoc(itemRef);
    if (newDataLang.exists()) {
      const objData = newDataLang.data();
      setData({ ...data, lang: objData });
      
    } else {
      console.log("Помилка");
    }
  }
  //Init lang
  function initLang(){
    if(localStorage.getItem("lang"))
    {
     changeLang(localStorage.getItem("lang"))
      
    } else{
     changeLang(elHtml)
    }
  }
  useEffect(()=>{
    initLang()
  },[])
  
  return (
    <ContextApp.Provider value={{ data, changeLang, elHtml}}>
      {children}
    </ContextApp.Provider>
  );
};

const MyUseContext = () => {
  const context = useContext(ContextApp);
  if (!context) {
    throw Error("Немає контексту");
  } else {
    return context;
  }
};
export { ContextGlobal, MyUseContext };
