import './ExploreButton.css'
const ExploreButton = (props) => {
    return(
        <a className={"explore " + props.className} href="../../Pages/Men.js">Explore</a>
    )
}
export default ExploreButton