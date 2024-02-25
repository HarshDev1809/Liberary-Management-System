import "./SectionHeading.css"

function SectionHeading(props){
    return <div className="section-heading">
        <h2>{props.heading}</h2>
    </div>
}

export default SectionHeading;