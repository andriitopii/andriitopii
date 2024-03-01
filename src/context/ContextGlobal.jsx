import { createContext, useContext } from "react";

const ContextApp = createContext({});



const mainData = {
  socialLink: { instagram: "", facebook: "", twitter: "https://twitter.com/andriitopii" },
};




const ContextGlobal = ({ children }) => {
  return <ContextApp.Provider value={mainData}>{children}</ContextApp.Provider>;
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
