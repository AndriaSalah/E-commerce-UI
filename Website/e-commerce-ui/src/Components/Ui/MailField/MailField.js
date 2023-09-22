import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import './MailField.css'
const MailField = ()=> {
    return(
        <div className={"MailField"}>
            <FontAwesomeIcon id={"icon"} icon={faEnvelope} />
            <input id={"InputField"} type={"text"} placeholder={"Enter Your email"}/>
        </div>
    )
}
export default MailField