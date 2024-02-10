import SearchBar from "../../Components/SearchBar";
import { getDrivers } from "../../Redux/actions";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

const Home = () => {
  const [drivers, setDrivers] = useState([]);
  const dispatch = useDispatch();
  const driversServer = useSelector(state => state.allDrivers);

  useEffect(() => {
   dispatch(getDrivers);
  }, []);

  const onSearch = async (name) => {
     try {
        const {data} = await axios(`http://localhost:3001/drivers?name=${name}`)
     
        if (data.length > 0) {
           setCharacters(data);
     } 
     } catch (error) {
        alert('¡No hay drivers con este nombre!');
     }
     };
    return (
        <div>
          <SearchBar onSearch={onSearch}/>
          {
            driversServer?.map(({nombre, imagen, teams}) => ({
             nombre,
             imagen,
             teams
            }));
          }
        </div>
    )
    }
    export default Home;