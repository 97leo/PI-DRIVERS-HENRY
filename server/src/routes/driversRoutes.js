const { Router } = require("express");
const driverRouter = Router();
const getDriverById = require('../Controlers/getDriverById');
const getDrivers = require('../Controlers/getDrivers');
const {getDriverByName} = require('../Controlers/getDriverByName');
const postDriver = require('../Controlers/postDriver');

driverRouter.get('/', async (req, res) => {
    const {name} = req.query;
try {
    if(name) {
        const data = await getDriverByName(name);
        return res.status(200).json(data);
    } 
    const data = await getDrivers();
    if(!data) throw new Error("Not Found");
    return res.status(200).json(data);
} catch (error) {
    return error.message.includes("Not Found")
    ? res.status(404).send(error.message)
    :res.status(500).send(error.message);
}
});

driverRouter.get('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const data = await getDriverById(id);
        if(!data) throw new Error('No hay drivers con este id');
        return res.status(200).json(data);
    } catch (error) {
         return res.status(404).send(error.message);
    }
});

//driverRouter.get('/name', async (req, res) => {
//try {
 //  const {name} = req.query;
  // console.log("este es el nombre que me llega por query:" , name);
  //  const data = await getDriverByName(name);
   // if(!data || data.length === 0) throw new Error('No hay drivers con este name');
   // return res.status(200).json(data);
//} catch (error) {
 //   return res.status(404).json({error:error.message});
//}
//});

driverRouter.post('/', async (req, res) => {
try {
    const {nombre, apellido, descripción, nacionalidad, fechaDeNacimiento, teams, imagen} = req.body;
     const data = await postDriver(req.body);
     if(!data) throw new Error("Faltan Datos");
     return res.status(200).json({driver:"Driver creado en la base de datos", data});
} catch (error) {
    return res.status(404).send(error.message);
}
});

module.exports = driverRouter;