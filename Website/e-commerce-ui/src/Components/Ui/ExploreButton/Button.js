import './Button.css'
const Button = ({lightMode , children , className}) => {
    return(
        <a className={"explore " + (lightMode ? "white " : "dark ") + className } href="../../Pages/Products/Products.js">{children}</a>
    )
}
export default Button

