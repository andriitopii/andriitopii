import React from "react";
import ReactDOM from "react-dom/client";
import "./main.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./component/HomePage/HomePage";
import BlogPage from "./component/BlogPage/BlogPage";
import { ContextGlobal } from "./context/ContextGlobal";
import AdminPage from "./component/AdminPage/AdminPage";
import PageNotFound from "./PageNotFound/PageNotFound";
import DashboardAdmin from "./component/DashboardAdmin/DashboardAdmin";
import App from "./component/App/App";
import BlogAdmin from "./component/BlogAdmin/BlogAdmin";
import ReviewsAdmin from "./component/ReviewsAdmin/ReviewsAdmin";
import OrderAdmin from "./component/OrderAdmin/OrderAdmin";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ContextGlobal>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<HomePage/>}/>
          <Route path="/blog" element={<BlogPage/>}/>
          <Route path="/about-me" />
          <Route path="*" element={<PageNotFound/>}/>
        </Route>
        <Route path="/admin/*" element={<AdminPage/>}>
          <Route path="dashboard" element={<DashboardAdmin/>}/>  
          <Route path="blog" element={<BlogAdmin/>}/>  
          <Route path="reviews" element={<ReviewsAdmin/>}/>  
          <Route path="order" element={<OrderAdmin/>}/>  
          <Route path="*" element={<PageNotFound/>}/>
        </Route>
      </Routes>
    </ContextGlobal>
  </BrowserRouter>
);
