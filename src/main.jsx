import React from "react";
import ReactDOM from "react-dom/client";
import "./main.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import { LangContextProvider } from "./context/LangContextProvider";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <LangContextProvider>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer />
    </LangContextProvider>
  </BrowserRouter>
);
