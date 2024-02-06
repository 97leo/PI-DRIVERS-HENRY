const Card = (props) => {

    return (
        <div>
            <Link to={`/detail/${props.id}`}>
                <h2>{props.name.forename}</h2>
            </Link>
                <h2>{props.name.surname}</h2>
                <h2>{props.teams}</h2>
                <h2>{props.image.url}</h2>
        </div>
    );
}
export default Card;