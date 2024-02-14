import { useParams } from 'react-router-dom';
import {useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getDriverId} from '../../Redux/actions';

const Detail = () => {
    const {id} = useParams();
    const driver = useSelector(state => state.driverId);
    const dispatch = useDispatch();

    useEffect(()=>{
     dispatch(getDriverId(id));
    }, [id]);

    return (
        <div>
            <h2>ID: {driver?.id}</h2>
            <h2>Nombre: {driver?.nombre}</h2>
            <h2>Apellido: {driver?.apellido}</h2>
            <h2>Nacionalidad: {driver?.nacionalidad}</h2>
            <h2>Descripción: {driver?.descripción}</h2>
            <h2>Fecha de nacimiento: {driver?.fechaDeNacimiento}</h2>
            <img src={driver?.imagen.url} alt={driver?.nombre} />
            <h2>Equipos: {driver?.teams}</h2>
        </div>
    )
};
export default Detail;