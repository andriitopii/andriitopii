import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import { ContextGlobal } from "../../context/ContextGlobal";


const App = () => {
  return (
  
      <ContextGlobal>

      
      <Nav/>
    
        
      <Outlet/>

      <Footer />
      </ContextGlobal>
 
  );
};

export default App;
