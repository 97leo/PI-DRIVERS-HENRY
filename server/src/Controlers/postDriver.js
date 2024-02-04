const {Driver, Team} = require('../db');

const postDriver = async({nombre, apellido, descripción, nacionalidad, fechaDeNacimiento, teams, imagen}) => {
    if(nombre || apellido || descripción || nacionalidad || fechaDeNacimiento || teams || imagen) {
        const [newDriver, created] = await Driver.findOrCreate({
            where:{nombre, apellido}, defaults:{descripción,nacionalidad,fechaDeNacimiento,imagen}
          });
          if(teams && teams.length > 0) {
           const teamsInstances = await Team.findAll({where:{id:teams}});
            await newDriver.addTeams(teamsInstances);
         }
          return newDriver;
        }
    };
 

module.exports = postDriver;