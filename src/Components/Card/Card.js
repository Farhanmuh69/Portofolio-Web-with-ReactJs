import './CardStyles.css'

function Card(props) {
    return (
        <div className="p-card">
            <div className="p-image">
                <img src={props.img} alt="img" />
            </div>
            <h4> {props.heading} </h4>
            <p> {props.text} </p>
        </div>
    )
}

export default Card;