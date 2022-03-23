const router = require("express").Router();
const rosterRoutes = require("./rosterRoutes");
const userRoutes = require("./userRoutes");
const staffRoutes = require("./staffRoutes");

router.use("/roster", rosterRoutes);
router.use("/user", userRoutes);
router.use("/staff", staffRoutes);

module.exports = router;
