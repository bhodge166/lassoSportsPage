const router = require("express").Router();
const playerRoutes = require("./playerRoutes");
const userRoutes = require("./userRoutes");
const staffRoutes = require("./staffRoutes");

router.use("/player", playerRoutes);
router.use("/user", userRoutes);
router.use("/staff", staffRoutes);

module.exports = router;
