import { createContext, useContext } from "react";

const ContextApp = createContext({});

const mainData = {
  socialLink: {
    instagram: "https://www.instagram.com/andriitopii/",
    facebook: "https://www.facebook.com/andriitopii",
    linkedin: "https://www.linkedin.com/in/andriitopii/",
    twitter: "https://twitter.com/andriitopii",
    github:"https://github.com/andriitopii",
    behance:"https://www.behance.net/andriitopii",
    tiktok: "https://www.tiktok.com/@andriitopii"
  },
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
