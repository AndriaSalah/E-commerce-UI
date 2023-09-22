import benefit1 from '../../Assets/Icons/Benefits/bi_flag.png'
import benefit2 from '../../Assets/Icons/Benefits/carbon_delivery.png'
import benefit3 from '../../Assets/Icons/Benefits/akar-icons_shipping-box-01.png'
import benefit4 from '../../Assets/Icons/Benefits/customerSup.png'
import benefit5 from '../../Assets/Icons/Benefits/Vector.png'
import './Benefits.css'
const Benefits =()=>{

    return(
        <div className="Benefits">
            <div className="Benefit1 benefitBody">
                <img src={benefit1} alt={"benefit 1"}/>
                <h2>Locally Owned</h2>
                <h4>We have local business and sell best quality clothes</h4>
            </div>
            <div className="Benefit2 benefitBody">
                <img src={benefit2} alt={"benefit 1"}/>
                <h2>Fast Delivery</h2>
                <h4>We provide fast delivery to our customers</h4>
            </div>
            <div className="Benefit3 benefitBody">
                <img src={benefit3} alt={"benefit 1"}/>
                <h2>Easy Returns</h2>
                <h4>We provide easy return policy. </h4>
            </div>
            <div className="Benefit4 benefitBody">
                <img src={benefit4} alt={"benefit 1"}/>
                <h2>Online Support</h2>
                <h4>We give 24/7 online support</h4>
            </div>
            <div className="Benefit5 benefitBody">
                <img src={benefit5} alt={"benefit 1"}/>
                <h2>Best Offers</h2>
                <h4>We give best offers to our customers</h4>
            </div>
        </div>

    )
}
export default Benefits