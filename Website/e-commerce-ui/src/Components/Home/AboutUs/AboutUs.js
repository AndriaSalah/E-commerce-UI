import aboutUs from '../../../Assets/aboutus.png'
import './AboutUs.css'
import Button from "../../Ui/Button/Button";
const AboutUs = () => {
    return (
        <div className={"AboutUs"}>
            <h2 id={"title"}>About Us</h2>
            <div className={"content"}>
                <div id={"data"}>
                    <h2>Business Name</h2>
                    <p id={"text"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Dui vel morbi cursus sed sodales molestie proin dictum gravida.
                        Porttitor maecenas tincidunt ipsum semper malesuada.
                        In sapien feugiat laoreet convallis eu sed.
                        Sapien et montes, duis tempor euismod augue cras eu eget.
                        Risus suspendisse mauris ullamcorper felis a, quam.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Dui vel morbi cursus sed sodales molestie proin dictum gravida.
                        Porttitor maecenas tincidunt ipsum semper malesuada.
                        In sapien feugiat laoreet convallis eu sed. Sapien et montes, duis tempor euismod augue cras eu eget.
                        Risus suspendisse mauris ullamcorper felis a, quam.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Dui vel morbi cursus sed sodales molestie proin dictum gravida.
                        Porttitor maecenas
                    </p>
                    <h4>Contact Information</h4>
                    <p id={"contactNumber"}>+91 1256378409</p>
                    <p id={"contactInfo mail"}>Someting@random.com</p>
                    <Button lightMode={true}>Directions</Button>
                </div>
                <img src={aboutUs} alt={"about us"} loading={"lazy"}/>
            </div>
        </div>
    )
}

export default AboutUs