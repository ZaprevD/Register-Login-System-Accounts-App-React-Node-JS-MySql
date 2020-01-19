import React, { Component } from 'react';
import jwt_decode from 'jwt-decode'
import "./main.css";

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            email: "",
            age: ""
        }
    }

    componentDidMount() {
        const token = localStorage.token;
        let decoded = jwt_decode(token);
        this.setState({
            username: decoded.dbUser.Username,
            email: decoded.dbUser.Email,
            age: decoded.dbUser.Age
        })
    }

    render() {
        return (
            <div className="container profile">
                <div className='info-holder'>
                    <h2>Username: {this.state.username}</h2>
                    <h2>Email: {this.state.email}</h2>
                    <h2>Age: {this.state.age}</h2>
                </div>
            </div>
        )
    }
}

export default  Profile;