import { NavLink, Outlet } from "react-router-dom";
import "./AdminSetting.scss";
const AdminSettings = () => {
    return (  <div className="settings-admin">
    <h1>Налаштування</h1>
    <div className="settings-admin__nav-bar">
      <NavLink to={"."}>Переклад Start Page</NavLink>
    </div>
    <div className="settings-admin__content">
      <Outlet/>
    </div>
  </div> );
}
 
export default AdminSettings;