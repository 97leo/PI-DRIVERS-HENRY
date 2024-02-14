import SearchBar from "../../Components/SearchBar";
import { getDrivers } from "../../Redux/actions";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { NavLink } from 'react-router-dom';

const Home = () => {
  const [drivers, setDrivers] = useState([]);
  const dispatch = useDispatch();
  const driversServer = useSelector(state => state.allDrivers);
  const teamsServer = useSelector(state => state.allTeams);

  useEffect(() => {
   dispatch(getDrivers());
  },[]);

  const onSearch = async (name) => {
     try {
        const {data} = await axios(`http://localhost:3001/drivers?name=${name}`)
     
        if (data && data.length > 0) {
           setDrivers(data);
     } 
     } catch (error) {
        alert('¡No hay drivers con este nombre!');
     }
     };

    

    return (
      <div>
          <SearchBar onSearch={onSearch}/>
          {driversServer?.map(({ id, nombre, imagen, teams }) => (
           <div key={id}>
            <NavLink to={`/detail/${id}`}>
            <h2>{nombre}</h2>
            <img src={imagen} alt={nombre} />
            <h2>{teams}</h2>
            </NavLink>
           </div>
        ))}
      </div>
    )
    };
    export default Home;