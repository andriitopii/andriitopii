import React from "react";
import ReactDOM from "react-dom/client";
import "./main.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./component/HomePage/HomePage";
import Footer from "./component/Footer/Footer";
import BlogPage from "./component/BlogPage/BlogPage";
import Nav from "./component/Nav/Nav";
import { ContextGlobal } from "./context/ContextGlobal";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ContextGlobal>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
      <Footer />
    </ContextGlobal>
  </BrowserRouter>
);
