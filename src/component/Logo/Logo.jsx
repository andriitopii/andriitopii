import "./Logo.scss";
import { Link } from "react-router-dom";
const Logo = ({dark}) => {
    return ( <Link to='/' className={`logo logo${dark}`}>

    </Link> );
}
 
export default Logo;