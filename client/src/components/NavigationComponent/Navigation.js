import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import "./main.css";

class Navigation extends Component {
    logOut(e) {
        e.preventDefault();
        localStorage.removeItem("token");
        this.props.history.push("/login");
    }
    render() {
        const loginRegisterLink = (
            <ul className="main-nav">
                <li>
                    <Link to="/login" className="btn">
                        Login
                    </Link>
                </li>
                <li>
                    <Link to="/register" className="btn">
                        Register
                    </Link>
                </li>
            </ul>
        )

        const userLink = (
            <ul className="main-nav">
                <li>
                    <Link to="/profile" className="btn">
                        User
                    </Link>
                </li>
                <li>
                    <a href="/logout" onClick={this.logOut.bind(this)} className="btn">
                        Logout
                    </a>
                </li>

            </ul>
        )

        return (
            <div className="flex-box">
                <ul className="home-nav">
                    <li>
                        <Link to="/accounts" className="btn">
                            Accouns
                     </Link>
                    </li>
                </ul>
                {localStorage.token ? userLink : loginRegisterLink}
            </div>
        )
    }
}

export default withRouter(Navigation);