import { getAuth, signOut } from "firebase/auth";
import { NavLink, useNavigate, Outlet } from "react-router-dom";
import "./AdminPanel.scss";
import Logo from "../Logo/Logo";
import LogOutSvg from "../Icon/LogOutSvg";
import HomeSvg from "../Icon/HomeSvg";
import ReviewsSvg from "../Icon/ReviewsSvg";
import OrdersSvg from "../Icon/OrdersSvg";
import BlogSvg from "../Icon/BlogSvg";
import PortfolioSvg from "../Icon/PortfolioSvg";
import SettingsSvg from "../Icon/SettingsSvg";
const AdminPanel = ({ children }) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const logOut = () => {
    signOut(auth)
      .then(() => {
        // <Navigate to="/admin" />;
        navigate("/admin", { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const asActive = ({ isActive }) => (isActive ? "active-nav-link-admin" : " ");
  return (
    <>
      <div className="admin-panel">
        <div className="admin-panel__menu">
          <Logo direct="dashboard" type="--light" />
          <nav>
            <NavLink className={asActive} to="dashboard" end={true}>
              <HomeSvg width="28px" height="28px" />
              <span>Домашня</span>
            </NavLink>
            <NavLink className={asActive} to="reviews">
              <ReviewsSvg width="28px" height="28px" />
              <span>Відгуки</span>
            </NavLink>
            <NavLink className={asActive} to="order">
              <OrdersSvg width="28px" height="28px" />
              <span>Замовлення</span>
            </NavLink>
            <NavLink className={asActive} to="blog">
              <BlogSvg width="28px" height="28px" />
              <span>Блог</span>
            </NavLink>
            <NavLink className={asActive} to="portfolio">
              <PortfolioSvg width="28px" height="28px" />
              <span>Портфоліо</span>
            </NavLink>
            <NavLink className={asActive} to="settings">
              <SettingsSvg width="28px" height="28px"/>
              <span>Налаштування</span>
            </NavLink>
          </nav>
          <button onClick={logOut}>
            <LogOutSvg width="18px" /> Вийти
          </button>
        </div>
        <div className="admin-panel__content">{children}</div>
      </div>
    </>
  );
};

export default AdminPanel;
