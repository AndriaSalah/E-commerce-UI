import './info.css'
const Details = ({className,Activate})=>{
    return(
        <div onClick={()=>Activate("Details")} className={"Details " + className}>hello world details</div>
    )
}
export default Details