import React from "react";
import { Link } from 'react-router-dom'
const User = (props) => {
    return (
        <div className="user-main-holder">
            <article>
                <div className="user-holder">
                    <div className="name-holder">
                        <h3>Username</h3>
                        <h3>{props.currentUserInfo.Username}</h3>
                    </div>
                    <div className="name-holder">
                        <h3>Email</h3>
                        <h3>{props.currentUserInfo.Email}</h3>
                    </div>
                    <div className="name-holder text-center">
                        <h3>Age</h3>
                        <h3>{props.currentUserInfo.Age}</h3>
                    </div>
                    <div className="action-btns">
                        <Link  to={"/edit/" + props.currentUserInfo.Id} className="edit-btn">Edit</Link>
                        <button onClick={props.delete} className="delete-btn">Delete</button>
                    </div>
                </div>

            </article>
        </div>
    )
}

export default User;