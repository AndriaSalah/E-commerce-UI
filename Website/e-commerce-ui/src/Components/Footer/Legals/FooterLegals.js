import './FooterLegals.css'
import icon1 from '../../../Assets/Icons/ScoialMedia/facebook.png'
import icon2 from '../../../Assets/Icons/ScoialMedia/instagram.png'
import icon3 from '../../../Assets/Icons/ScoialMedia/whatsapp.png'
import icon4 from '../../../Assets/Icons/ScoialMedia/twitter.png'
const FooterLegals = () =>{
    return (
        <div className={"legals"}>
            <div className={"legalsWrapper"}>
                <p>Terms & conditions</p>
                <p>Privacy Policy</p>
            </div>
            <div id={"icons"}>
                <img src={icon1} alt="facebook"/>
                <img src={icon2} alt="instagram"/>
                <img src={icon3} alt="whatsapp"/>
                <img src={icon4} alt="twitter"/>
            </div>
        </div>
    )
}

export default FooterLegals