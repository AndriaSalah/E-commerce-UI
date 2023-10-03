import './info.css'
const Specification = ({className,Activate})=>{
    return(
        <div onClick={()=>Activate("Specification")} className={"Specification " + className} >hello world spec</div>
    )
}
export default Specification