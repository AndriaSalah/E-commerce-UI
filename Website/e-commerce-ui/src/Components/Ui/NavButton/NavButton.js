import './NavButton.css'
const NavButton = (props)=>{

    return(

        <a className={"NavButton"} href={props.src} id={"NavButton"}>{props.children}</a>
    );
}

export default NavButton