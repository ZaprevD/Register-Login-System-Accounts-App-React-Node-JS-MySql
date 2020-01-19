let express = require("express");
let router = express.Router();
let userRoutes = require("./accounts/routes");

router.use(userRoutes);

module.exports = router;