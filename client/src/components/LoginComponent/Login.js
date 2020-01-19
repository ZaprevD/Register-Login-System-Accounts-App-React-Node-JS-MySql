import React, { Component } from 'react';
import { login } from "../UserFunctions";
import "./main.css";

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            errors: {}
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()
        const user = {
            username: this.state.username,
            password: this.state.password
        };
        login(user).then(res => {
                localStorage.token? this.props.history.push("/profile") : console.log("not found");
        });
    };

    render() {
        return (
            <div className="container">
                <div className="login-flex">
                        <form noValidate onSubmit={this.onSubmit}>
                    <div className="login-window">
                            <h3>Login</h3>
                            <input type="text" name='username' placeholder="Username"
                                onChange={this.onChange} value={this.state.username} />

                            <input type="password" name='password' placeholder="Password"
                                onChange={this.onChange} value={this.state.password} />

                            <button type='submit'>
                                Sign In
                        </button>
                    </div>
                        </form>
                </div>
            </div>
        )
    }
}

export default Login;