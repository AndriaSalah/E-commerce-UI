import './Button.css'
import {Link} from "react-router-dom";
const Button = ({lightMode , children , className}) => {
    return(
        <Link className={"explore " + (lightMode ? "white " : "dark ") + className } to="">{children}</Link>
    )
}
export default Button

