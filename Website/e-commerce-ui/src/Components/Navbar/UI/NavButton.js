const NavButton = (props)=>{

    return(

        <a href={props.src} id={"NavButton"}>{props.children}</a>
    );
}

export default NavButton