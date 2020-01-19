let express = require("express");
require("dotenv").config();
let bodyParser = require("body-parser");
let middlewares= require("./middlewares/middlewares");
let allRoutes= require("./router");
let cors = require('cors')
let jwt = require("express-jwt");
let app = express();

let publicRoutes = ["/login" , "/register"];
app.use(cors());
app.use(jwt({ secret: process.env.SECRET }).unless({ path: publicRoutes }));
app.use(middlewares.logger);
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(allRoutes);
app.use(middlewares.wrongRoute);
app.use(middlewares.errorHandler);



let port = process.env.PORT || 6000


app.listen(port , () => {
    console.log(`Server is listening to port : ${port}`);
})






