import Searchbar from "../../Ui/SearchBar/Searchbar";
import AccountSection from "./AccountSection/AccountSection";
import './EndSection.css'
const EndSection = ({Theme,SwitchColor})=> {
    return(
    <div className={"EndSection"}>
        <Searchbar></Searchbar>
        <AccountSection Theme={Theme} SwitchColor={SwitchColor} ></AccountSection>
    </div>
    )
}
export default EndSection