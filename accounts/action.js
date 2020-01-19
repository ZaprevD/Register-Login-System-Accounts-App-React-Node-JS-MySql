const _ = require("lodash");
const query = require("./query");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require("dotenv").config()
getAllUsers = async (req, res) => {
    try {
        let data = await query.getAllUsersQuery();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error.message);
    };
};



loginUser = async (req, res) => {
    try {
        let data = await query.userLoginQuery(req.body.username);
        let dbUser = data[0];
        if (dbUser !== undefined) {
            let match = bcrypt.compareSync(req.body.password, dbUser.Password);
            if (match) {
                let token = jwt.sign({ dbUser }, process.env.SECRET, { expiresIn: "2h" });
                res.header("authtoken", token).send(_.pick(dbUser, ["Username", "Email", "Age"]))
            } else {
                res.status(402).send("Wrong Password");
            }
        } else {
            res.status(404).send("User Not Found");
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

createUser = async (req, res) => {
    try {
        let data = await query.getAllUsersQuery();
        let found = data.some(user => {
            user.Username === req.body.username;
        });
        if (!found) {
            let hash = bcrypt.hashSync(req.body.password, 10);
            await query.createUserQuery(req.body, hash);
            res.status(200).send("Registered!");
        } else {
            res.status(400).send("Username alredy taken")
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

getSpecificUser = async (req, res) => {
    try {
        let user = await query.getSpecificUserQuery(req.params.userId);
        if (user !== undefined) {
            res.status(200).send(user);
        } else {
            res.status(404).send("User Not found");
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

delteUser = async (req, res) => {
    try {
        let data = await query.getAllUsersQuery();
        let found = data.some(user => user.username === req.body.username);
        if (found) {
            await query.deleteUserQuery(req.params.userId);
            res.status(200).send("User deleted");
        } else {
            res.status(400).send("User does not exists");
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}


updateUser = async(req, res) => {
    try {
        let body = req.body;
        let id = req.params.userId
        await query.updateUserQuery(body, id)
        res.status(200).send("Info Updated");        
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = { getAllUsers, loginUser, createUser, delteUser, getSpecificUser, updateUser }