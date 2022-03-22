const router = require("express").Router();
const rosterRoutes = require("./rosterRoutes");
const updateRoutes = require("./updateRoutes");
const updateScores = require("./updateScores");

router.use("/roster", rosterRoutes);
router.use("/update", updateRoutes);
router.use("/scores".updateScores);
module.exports = router;
