import NavButton from "../UI/NavButton";


const MidSection = () =>{

    return(
        <div className={"NavButtons"}>
            <NavButton src="./Components/Men">Men</NavButton>
            <NavButton>Women</NavButton>
            <NavButton>Kids</NavButton>
            <NavButton>Shop</NavButton>
            <NavButton>Contact us</NavButton>
        </div>
    )
}
export default MidSection