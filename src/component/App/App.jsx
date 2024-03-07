import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";


const App = () => {
  return (
    <>
      <Nav/>
    
        
      <Outlet/>

      <Footer />
    </>
  );
};

export default App;
