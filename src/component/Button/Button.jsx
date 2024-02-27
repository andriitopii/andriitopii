import "./Button.scss";
import { Link } from "react-router-dom";
const Button = ({children, typeBtn, direct}) => {
    
    
    return ( <Link to={direct} className={`btn btn${typeBtn}`}>{children}</Link> );
}
 
export default Button;