import { createContext, useContext, useEffect, useState } from "react";
import { app } from "../bd/firebase";
import { getFirestore, doc, getDoc } from "firebase/firestore";
const ContextApp = createContext({});

const ContextGlobal = ({ children }) => {
  const db = getFirestore(app);
 
  const elHtmlLang = document.querySelector("html").getAttribute("lang");
  const elHtml= document.querySelector("html")
  const [data, setData] = useState({config: {}, lang: {}});
  
  useEffect(()=>{
    async function initLang(){
      const localLang = localStorage.getItem("lang");
      if(localLang){
        changeLang(localLang)
      } else{
        changeLang("en")
      }
    }
    initLang();
  },[])
  async function changeLang(typelang){
    elHtml.setAttribute("lang", typelang);
    localStorage.setItem("lang", typelang)
    switch(typelang){
      case "uk":{
        const refItem = doc(db, "lang", typelang);
        await getDoc(refItem).then((item)=>{
          setData({...data, lang: item.data()})
        })
      }
        break;
        case "en":{
          const refItem = doc(db, "lang", typelang);
          await getDoc(refItem).then((item)=>{
            setData({...data, lang: item.data()})
          })
        }
          break;
          case "pl":{
            const refItem = doc(db, "lang", typelang);
            await getDoc(refItem).then((item)=>{
              setData({...data, lang: item.data()})
            })
          }
            break;
    }
  }
  
  return (
    <ContextApp.Provider value={{data, changeLang, elHtmlLang}}>
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
