import "./Button.scss";

const Button = ({children}) => {
    return ( <button type="button" className="btn btn__primary">{children}</button> );
}
 
export default Button;