const router = require("express").Router();
const rosterRoutes = require("./rosterRoutes");
// const updateRoutes = require("./updateRoutes");

router.use("/roster", rosterRoutes);
// router.use("/update", updateRoutes);
module.exports = router;
