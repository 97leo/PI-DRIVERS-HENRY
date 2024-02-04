const { Router } = require("express");
const driverRouter = require ('./driversRoutes');
const teamsRouter = require('./teamsRoutes');
const router = Router();

router.use('/drivers', driverRouter);
router.use('/teams', teamsRouter);

module.exports = router;
