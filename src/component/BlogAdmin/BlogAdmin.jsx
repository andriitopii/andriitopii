import { NavLink, Outlet, useParams } from "react-router-dom";

const BlogAdmin = () => {
    
    return ( <div className="blog-admin">
    <h1>Dashboard</h1>

    <div className="dashboard-admin_nav-bar">
        <NavLink to="">Дфів</NavLink>
        <NavLink to="add">Додати статтю</NavLink>
        <NavLink to="edit/1234">Редагувати</NavLink>
    </div>
    <div className="dashboard-admin__content">
      <Outlet/>
    </div>
  </div> );
}
 
export default BlogAdmin;