const driversRoutes = require('./driversRoutes');
const teamsRoutes = require('./teamsRoutes');
const { Router } = require("express");

const router = Router();
router.use("/drivers", driversRoutes);
router.use("/teams", teamsRoutes);

module.exports = router;
