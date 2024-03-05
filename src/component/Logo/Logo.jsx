import "./Logo.scss";
import { Link } from "react-router-dom";
const Logo = (props) => {
    return ( <Link to='/' className={`logo logo${props.type}`}>

    </Link> );
}
 
export default Logo;