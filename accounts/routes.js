let express = require("express");
let routes = express.Router();
let action = require("./action");
let { isAdmin } = require("../middlewares/middlewares");

routes.get("/users/all", action.getAllUsers);
routes.get("/users/:userId", action.getSpecificUser);
routes.post("/register", action.createUser);
routes.post("/login", action.loginUser);
routes.patch("/user/:userId/update", isAdmin, action.updateUser)
routes.delete("/users/:userId", isAdmin, action.delteUser);

module.exports = routes;