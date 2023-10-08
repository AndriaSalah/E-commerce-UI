import Button from "../../Ui/Button/Button";
import './IntersectionAd.css'
const IntersectionAd = ()=>{

    return(
        <div className={"IntersectionAd"}>
            <div className={"Dim__adData"}>
                <h2>Forever 21</h2>
                <h4>Big Fashion Festival<br/>70% - 80% off</h4>
                <Button lightMode={true}>Explore</Button>
            </div>
        </div>
    )
}
export default IntersectionAd