let conn = require("../database");

getAllUsersQuery = () => {
    let query = "SELECT Username, Email, Id, Age FROM user";
    return new Promise((resolve, reject) => {
        conn.query(query, (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            };
        });
    });
};

getSpecificUserQuery = (Id) => {
    let query = "SELECT Username, Email, Age, Id FROM user WHERE Id = ?";
    return new Promise((resolve, reject) => {
        conn.query(query, [Id], (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        })
    })
}

userLoginQuery = (username) => {
    let query = "SELECT Username, Password, Email, Age, Is_Admin FROM user WHERE Username = ?"
    return new Promise((resolve, reject) => {
        conn.query(query, [username], (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            };
        });
    });
};

createUserQuery = (body, password) => {
    let query = "INSERT INTO user (Username, Password, Email, Age) VALUES (?, ?, ?, ?)";
    let newUser = [body.username, password, body.email, body.age];
    return new Promise((resolve, reject) => {
        conn.query(query, newUser, (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve();
            };
        });
    });
};

deleteUserQuery = (userId) => {
    let query = "DELETE FROM user WHERE Id = ?";
    return new Promise((resolve, reject) => {
        conn.query(query, [userId], (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve();
            };
        });
    })
};

updateUserQuery = (body, id) => {
    let query = "UPDATE user SET Email = ? , Age = ? WHERE Id= ?"
    return new Promise((resolve, reject) => {
        conn.query(query, [body.email, body.age, id], (error, results, fields) => {
                if(error){
                    reject(error);
                }else{
                    resolve();
                }
        })
    })
}

module.exports = {
    getAllUsersQuery, userLoginQuery,
    createUserQuery, deleteUserQuery,
    getSpecificUserQuery, updateUserQuery
}