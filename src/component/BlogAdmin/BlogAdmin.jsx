import { NavLink, Outlet, useParams } from "react-router-dom";
import "./BlogAdmin.scss";
const BlogAdmin = () => {
  const asActive = ({ isActive }) => (isActive ? "active-tabs-admin" : " ");
  return (
    <div className="blog-admin">
      <h1>Блог</h1>
      <div className="blog-admin__nav-bar">
        <NavLink to={"."} className={asActive} end={true}>
          Всі статті
        </NavLink>
        <NavLink to="add" className={asActive}>
          Додати статтю
        </NavLink>
        <form className="form-only-search">
          <input  type="search" placeholder="Пошук будь-що..." />
        </form>
      </div>
      <div className="blog-admin__content">
        <Outlet />
      </div>
    </div>
  );
};

export default BlogAdmin;
