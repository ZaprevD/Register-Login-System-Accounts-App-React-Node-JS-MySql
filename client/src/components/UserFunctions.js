import axios from 'axios';


export const register = (newUser) => {
    return axios.post("/register", {
        username: newUser.username,
        password: newUser.password,
        email: newUser.email,
        age: newUser.age
    })
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err.message)
        });
}

export const login = (user) => {
    return axios.post("/login", {
        username: user.username,
        password: user.password
    })
        .then(res => {
            localStorage.setItem('token', res.headers.authtoken);
        })
        .catch(err => {
            console.log(err)
        })
}

export const update = (info, id) => {
    return axios.patch(`/user/${id}/update`, info, {
        'headers': {
            'Authorization': 'Bearer ' + localStorage.token
        }
    })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err.message)
        })
}


