import { getAuth, signOut } from "firebase/auth";
import { NavLink, Navigate, Outlet } from "react-router-dom";
import "./AdminPanel.scss";
import Logo from "../Logo/Logo";
const AdminPanel = ({ children }) => {
  const auth = getAuth();
  const logOut = () => {
    signOut(auth)
      .then(() => {
        <Navigate to="/admin" />;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const asActive = ({ isActive }) => (isActive ? "active-nav-main-link" : " ");
  return (
    <>
      <div className="admin-panel">
        <div className="admin-panel__menu">
          <Logo type="--light" />
          <nav>
            <NavLink className={asActive} to="/admin" end={true}>
              Головна
            </NavLink>
            <NavLink className={asActive} to="/admin/reviews">
              Відгуки
            </NavLink>
            <NavLink className={asActive} to="/admin/blog">
              Блог
            </NavLink>
            <NavLink className={asActive} to="/admin/portfolio">
              Портфоліо
            </NavLink>
          </nav>
          <button onClick={logOut}>Вийти</button>
        </div>
        <div className="admin-panel__content">{children}</div>
      </div>
    </>
  );
};

export default AdminPanel;
