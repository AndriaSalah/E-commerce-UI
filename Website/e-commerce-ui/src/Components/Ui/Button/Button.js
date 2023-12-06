import './Button.css'
import {Link} from "react-router-dom";
const Button = ({lightMode , children , className , category =""}) => {
    return(
        <Link className={"explore " + (lightMode ? "white " : "dark ") + className } to="/Shop" state={{category : category}}>{children}</Link>
    )
}
export default Button

