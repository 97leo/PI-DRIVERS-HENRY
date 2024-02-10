import { useState } from "react";

const SearchBar = (props) => {

    const [name, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value);
     };
     const handleSearch = () => {
        //Llama a la función onSearch con el name y luego limpia el input
       props.onSearch(name);
       setName('');
     }
   

 return (
    <div>
        <input type='search' placeholder='Buscar Drivers' value={name} onChange={handleChange}/>
        <button onClick={handleSearch}>Buscar</button>

    </div>
 )
};


export default SearchBar;