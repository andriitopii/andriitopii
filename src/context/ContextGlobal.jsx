import { createContext, useContext, useEffect, useState } from "react";
import { app } from "../bd/firebase";
import { getFirestore, doc, getDoc } from "firebase/firestore";
const ContextApp = createContext({});

const ContextGlobal = ({ children }) => {
  const [data, setData] = useState({});

  // Get lang
  
  
  return (
    <ContextApp.Provider value={{data}}>
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
