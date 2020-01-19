import React, { Component } from 'react';
import "./main.css";
import Navigation from "../NavigationComponent/Navigation"
class HeaderComponent extends Component {
    render() {
        return (
                <header>
                    <h1>Welcome</h1>
                    <Navigation />
                </header>
        )
    }
}

export default HeaderComponent;