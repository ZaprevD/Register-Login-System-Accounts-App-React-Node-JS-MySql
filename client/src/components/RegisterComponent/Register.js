import React, { Component } from 'react';
import { register } from "../UserFunctions";
import "./main.css";

class Register extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            email: "",
            age: "",
            errors: {}
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault();
        const newUser = {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            age: this.state.age
        }
        register(newUser).then(res => {
                this.props.history.push("/login");
        })
    }

    render() {
        return (
                <div className="login-flex">
                    <div className="login-window">
                        <form  onSubmit={this.onSubmit}>
                            <h3>Register</h3>
                            <input type="text" name='username' placeholder="Username"
                                onChange={this.onChange} value={this.state.username} />

                            <input type="password" name='password' placeholder="Password"
                                onChange={this.onChange} value={this.state.password} />

                            <input type="email" name='email' placeholder="Email"
                                onChange={this.onChange} value={this.state.email} />

                            <input type="text" name='age' placeholder="Age"
                                onChange={this.onChange} value={this.state.age} />

                            <button type='submit'>
                                Register
                            </button>
                        </form>
                    </div>
                </div>
            
        )
    }

}

export default Register;