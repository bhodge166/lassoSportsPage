const router = require("express").Router();
const userRoutes = require("./userRoutes");
const staffRoutes = require("./staffRoutes");

router.use("/users", userRoutes);
router.use("/staff", staffRoutes);

module.exports = router;
