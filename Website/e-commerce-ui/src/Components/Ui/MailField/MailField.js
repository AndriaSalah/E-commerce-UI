import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import './MailField.css'
import {CiMail} from "react-icons/ci";
const MailField = ()=> {
    return(
        <div className={"MailField"}>
           <CiMail id={"icon"}/>
            <input id={"InputField"} type={"text"} placeholder={"Enter Your email"}/>
        </div>
    )
}
export default MailField