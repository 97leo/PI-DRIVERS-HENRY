const axios = require('axios');
const URL = 'http://localhost:5000/drivers';
const {Team} = require('../db');

const getTeams = async () => {
   const {data} = await axios(URL);
    if(data && data.length > 0 ) {
        const dataTeams = await data.map(driver => (
            driver.teams ? driver.teams.split(',').map(team => team.trim()) : []
          )).flat();
        const dataUnica = [...new Set(dataTeams)];

         const modelTeams = await Team.findAll();

         if(modelTeams.length === 0) {
            for(const team of dataUnica) {
              await Team.findOrCreate({where:{nombre:team}});
            }
            const teamResponse = await Team.findAll();
            return teamResponse;
         } 
         return modelTeams;
    } else {
      const response = await Team.findAll();
      return response;
    }
};

module.exports = getTeams;




