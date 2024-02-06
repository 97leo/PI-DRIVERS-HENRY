import Card from "../Card/Card";
const Cards = (props) => {
    return (
        <div>
            {
                props.drivers.map(driver => (
                    <Card
                        key={driver.id}
                        id={driver.id}
                        name={driver.name}
                        description={driver.description}
                        image={driver.image}
                        nationality={driver.nationality}
                        teams={driver.teams}
                        dob={driver.dob}
                    />
                ))
            }
        </div>
    );
}
export default Cards;