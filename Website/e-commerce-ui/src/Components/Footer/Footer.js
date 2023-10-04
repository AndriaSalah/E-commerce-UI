import './Footer.css'

import FooterBody from "./FooterBody/FooterBody";
import FooterHeader from "./FooterHeader/FooterHeader";
import FooterLegals from "./Legals/FooterLegals";

const Footer = () => {
    return (<footer className={"Footer"}>
            <FooterHeader></FooterHeader>
            <FooterBody></FooterBody>
            <span className={"BreakingLine"}></span>
            <FooterLegals></FooterLegals>
        </footer>
    )
}
export default Footer