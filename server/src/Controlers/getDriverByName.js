const axios = require('axios');
const URL = 'http://localhost:5000/drivers';
const { Driver, Team } = require('../db');
const { Op } = require('sequelize');

const getDriverByName = async (name) => {
try {
 // if (name) {
    const { data } = await axios(`${URL}?name.forenema`);
  
    let filteredData = data.filter(driver =>
        driver.name.forename.toUpperCase().includes(name.toUpperCase()) //||
        //driver.apellido.toLowerCase().includes(name.toLowerCase())
    );

    const newArrays = filteredData.slice(0,15);
     let driver = null;
    if (newArrays.length <= 15 && newArrays.length > 0) {
      driver = newArrays.map(data => (
        {
          nombre: data.name.forename,
          apellido: data.name.surname,
          descripción: data.description,
          nacionalidad: data.nationality,
          fechaDeNacimiento: data.dob,
          imagen: data.image.url
        }
      ));
        return driver;
    }
  //} else {
    const arrDriversDB = await Driver.findAll( {where: {nombre: name}},{
      include: {
          model: Team,
          attributes: ["nombre"],
          through: {
              attributes: []
          },
      }
  });
  console.log(driver, arrDriversDB, 'Estoy aquí');
  return [driver, arrDriversDB]

    //const dbDrivers = await Driver.findAll({
     // where: {
       // [Op.or]: [
         // {
           // 'nombre': {
            //  [Op.iLike]: `%${name}%`, // iLike para hacer la búsqueda insensible a mayúsculas y minúsculas
           // },
         // },
         // {
           // 'apellido': {
          //    [Op.iLike]: `%${name}%`,
          //  },
         // },
       // ],
    //  },
     // include: Team,
      //limit: 15,
   // });

    //if (dbDrivers.length > 0||dbDrivers.length === 15) return dbDrivers;
  //}

} catch (error) {
  console.error("Error en getDriversByNameControllers:", error);
  throw Error(error);
};
};


module.exports = {getDriverByName};