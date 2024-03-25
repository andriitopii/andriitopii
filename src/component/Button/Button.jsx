import "./Button.scss";
import { Link } from "react-router-dom";
const Button = ({children, direct, type}) => {
    
    
    return ( <Link to={direct}  className={`btn btn--${type}`}>{children}</Link> );
}
 
export default Button;