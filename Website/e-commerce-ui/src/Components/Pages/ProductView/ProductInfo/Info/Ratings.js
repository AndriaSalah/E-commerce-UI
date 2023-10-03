import './info.css'
const Ratings = ({className,Activate})=>{
    return(
        <div onClick={()=>Activate("Ratings")} className={"Ratings " + className} >hello world ratings</div>
    )
}
export default Ratings