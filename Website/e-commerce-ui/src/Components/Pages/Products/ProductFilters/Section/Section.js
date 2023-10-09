import './Section.css'

const Section = ({title, content, setFilter, selectedTags}) => {
    return (
        <div className={"Section"}>
            <h2>{title}</h2>
            <div className={"TagsWrapper"}>
                {
                    content.map((item) => (
                            <div id={"tag"}>
                                <input type={"checkbox"}
                                       value={item}
                                       name={item}
                                       onChange={() => setFilter(item)}
                                       checked={selectedTags.includes(item)}
                                />
                                <label htmlFor={item} onClick={() => setFilter(item)}>{item}</label>
                            </div>
                        )
                    )
                }

            </div>
            <span></span>
        </div>
    )
}
export default Section