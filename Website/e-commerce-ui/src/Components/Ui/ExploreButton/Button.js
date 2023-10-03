import './Button.css'
const Button = (props) => {
    return(
        <a className={"explore " + (props.lightMode ? "white " : "dark ") + props.className } href="../../Pages/Products/Products.js">{props.children}</a>
    )
}
export default Button