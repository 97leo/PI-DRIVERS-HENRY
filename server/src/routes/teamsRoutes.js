const { Router } = require("express");
const getTeams = require('../Controlers/getTeams')

const teamsRouter = Router();

teamsRouter.get('/', async(req, res) => {
    try {
        const data = await getTeams();
        if (!data || data.length === 0) {
          throw new Error("Not found");
        }
        return res.status(200).json(data);
      } catch (error) {
        console.error('Error en la solicitud:', error);
        return res.status(500).send(error.message);
      }
    });
    
   


module.exports = teamsRouter;