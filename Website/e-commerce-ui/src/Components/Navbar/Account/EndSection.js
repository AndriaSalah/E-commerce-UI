import Searchbar from "../../Ui/SearchBar/Searchbar";
import AccountSection from "./AccountSection/AccountSection";
import './EndSection.css'
const EndSection = ()=> {
    return(
    <div className={"EndSection"}>
        <Searchbar></Searchbar>
        <AccountSection></AccountSection>
    </div>
    )
}
export default EndSection