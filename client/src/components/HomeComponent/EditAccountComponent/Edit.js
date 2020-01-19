import React, { Component } from "react";
import "./main.css";
import axios from "axios"
import EditForm from "../../EditForm";
class Edit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: [
                {
                    Username: "",
                    Email: "",
                    Age: ""
                }
            ]
        }
    }
    componentDidMount() {
        let token = localStorage.token
        axios.get(`/users/${this.props.match.params.id}`, {
            'headers': {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(res => {
                this.setState({
                    user:
                        [ res.data[0] ]
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const user = this.state.user.map(el => {
            return <EditForm key={el.Id || 0} user={el} />
        })
       
        if (user.length !== 0) {
            return (
                <div>
                    {user}
                </div>
            )
        } else {
            return (
                <div >
                    <h1>NOT USER FOUND</h1>
                </div>
            )
        }
    }
}

export default Edit;