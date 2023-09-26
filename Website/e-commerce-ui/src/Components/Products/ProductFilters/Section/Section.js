import './Section.css'
const Section = ({title, content , setFilter , selectedTags}) => {
    return (
        <div>
            <h2>{title}</h2>
            {
                content.map((item) => (
                        <div id={"tag"}>
                            <input type={"checkbox"}
                                   value={item}
                                   name={item}
                                   onClick={() => setFilter(item)}
                                   checked={selectedTags.includes(item)}
                            />
                            <label htmlFor={item}>{item}</label>
                        </div>
                    )
                )
            }
            <span></span>
        </div>
    )
}
export default Section