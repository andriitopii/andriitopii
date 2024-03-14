import "./Logo.scss";
import { Link } from "react-router-dom";
const Logo = (props) => {
    return ( <Link to={props.direct} className={`logo logo${props.type}`}>

    </Link> );
}
 
export default Logo;