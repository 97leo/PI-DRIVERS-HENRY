
const Detail = () => {
return (
    <div>
             
            <h2>Nombre: {driver?.name?.forename}</h2>
            <h2>Apellido: {driver?.name?.surname}</h2>
            <h2>Descripción: {driver.description}</h2>
            <h2>Imagen: {driver?.image?.url}</h2>
            <h2>Nacionalidad: {driver.nationality}</h2>
            <h2>Fecha de nacimiento: {driver.dob}</h2>
            <h2>Teams: {driver.teams}</h2>
    </div>
)
}
export default Detail;