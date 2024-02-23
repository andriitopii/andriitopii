import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import "./Nav.scss";
const Nav = () => {
    return ( 
    <nav className="header__nav-main nav-main">
        <Logo/>
        <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Testimonials</a></li>
        </ul>
        <ul>
            <li><Button>Portfolio</Button></li>
            <li><Button>Order now</Button></li>
        </ul>
    </nav> );
}
 
export default Nav;