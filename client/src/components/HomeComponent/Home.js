import React, { Component } from 'react';
import axios from 'axios';
import User from "../Users";
class Home extends Component {
    state = {
        users: []
    }
    componentDidMount() {
        let token = localStorage.token
        axios.get("/users/all", {
            'headers': {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(res => {
                this.setState({ users: res.data });
            })
            .catch(error => {
                error.message.includes("403") ? console.log("Forbidden") : console.log("Unauthorized");
            })
    }

    deleteUser = (id) => {
        let token = localStorage.token
        axios.delete(`/users/${id}`, {
            'headers': {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(res => {
                this.componentDidMount();
            })
            .catch(err => {
                console.log(err);
            })
    }
    render() {
        const users = this.state.users.map(element => {
            return <User currentUserInfo={element}
                delete={() => this.deleteUser(element.Id)}
                 key={element.Id} />
        })

        if (users.length > 0) {
            return (
                <div className='user-holder global'>
                    {users}
                </div>)
        } else {
            return (
                <div>
                    <h1>Please Log in</h1>
                </div>
            )
        }

    }
}

export default Home;