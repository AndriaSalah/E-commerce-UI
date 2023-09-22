import './FooterBody.css'
import MailField from "../../Ui/MailField/MailField";
const FooterBody = () =>{
    return(
        <div className={"Body"}>
            <div id={"partition1"}>
                <h4>Women</h4>
                <p>All Women</p>
                <p>Skirts</p>
                <p>T-shirts</p>
                <p>Tops</p>
                <p>Jackets</p>
            </div>
            <div id={"partition2"}>
                <h4>Men</h4>
                <p>All Men</p>
                <p>Skirts</p>
                <p>T-shirts</p>
                <p>Tops</p>
                <p>Jackets</p>
            </div>
            <div id={"partition3"}>
                <h4>Kids</h4>
                <p>All Kids</p>
                <p>Skirts</p>
                <p>T-shirts</p>
                <p>Tops</p>
                <p>Jackets</p>
            </div>
            <div id={"partition4"}>
                <h4>Shopping</h4>
                <p>Your cart</p>
                <p>Your orders</p>
                <p>Compared items</p>
                <p>Wishlist</p>
                <p>Shipping details</p>
            </div>
            <div id={"partition5"}>
                <h4>More Links</h4>
                <p>Blogs</p>
                <p>Gift Center</p>
                <p>Buying Guides</p>
                <p>New Arrivals</p>
                <p>Clearance</p>
            </div>
            <div id={"partition6"}>
                <h4>Stay in touch</h4>
                <p>Stay in touch to get special offers, free giveaways
                    and once in a lifetime deals</p>
                <MailField></MailField>
            </div>
        </div>
    )
}
export default FooterBody