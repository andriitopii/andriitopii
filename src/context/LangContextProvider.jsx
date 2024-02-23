import { createContext, useContext } from "react";
const LangContext = createContext();
const defaultLang = {
  ua: {},
  eng: {},
};

const LangContextProvider = ({ children }) => {
  return (
    <LangContext.Provider value={defaultLang}>
        {children}
    </LangContext.Provider>);
}

const MyContext = () => {
  const context = useContext(LangContext);
  if(!context){
    throw Error('Не існує контексту');
  }else{
return context
  }}

  export {LangContextProvider, MyContext}
