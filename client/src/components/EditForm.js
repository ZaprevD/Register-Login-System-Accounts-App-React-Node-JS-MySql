import React from "react";
import { update } from "./UserFunctions"
class EditForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Username: "",
            Email: "",
            Age: ""
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        this.setState(this.props.user);
    }

    onChange(e) {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();
        const updatedInfo = {
            email: this.state.Email,
            age: this.state.Age
        }
        update(updatedInfo, this.props.user.Id).then(res => {
           window.location.href="/accounts"
        })
    }

    render() {
        return (
            <div className="container" >
                <form className="edit-info" noValidate onSubmit={this.onSubmit}>
                    <input onChange={(e) => this.onChange(e)}
                        type="text" name="Username" placeholder="Username"
                        value={this.state.Username} readOnly />

                    <input onChange={(e) => this.onChange(e)}
                        type="text" name="Email" placeholder="Email"
                        value={this.state.Email} />

                    <input onChange={(e) => this.onChange(e)}
                        type="text" name="Age" placeholder="Age"
                        value={this.state.Age} />
                    <button type="submit">Edit</button>
                </form>
            </div>
        )
    }
}

export default EditForm