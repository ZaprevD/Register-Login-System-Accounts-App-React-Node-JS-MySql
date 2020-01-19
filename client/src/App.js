import React from 'react';
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/LoginComponent/Login";
import Register from "./components/RegisterComponent/Register";
import Profile from "./components/ProfileComponent/Profile";
import Home from "./components/HomeComponent/Home";
import Edit from "./components/HomeComponent/EditAccountComponent/Edit"
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <HeaderComponent />
        <div className="container">
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path="/accounts" component={Home} />
          <Route exact path="/edit/:id" component={Edit} />
        </div>
      </div>
    </Router>
  );
}

export default App;
