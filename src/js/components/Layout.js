import React from "react"
import styles from "../../css/default.scss"
import {connect} from "react-redux"

import Footer from "./Footer"

import {fetchUsers} from "../actions/action"

@connect((store) => {
    return {
        store: store,
        users: store.users
    }
})

export default class Layout extends React.Component {

    fetchUsers() {
        this.props.dispatch(fetchUsers());
    }

    render() {
        console.log(this.props.users);

        if (this.props.users.length == 0) {
            return <button className="btn btn-primary" onClick={this.fetchUsers.bind(this)}>Load Users</button>
        }

        const mapUsers = this.props.users.map(user =>
         <li>
         <h3>{user.username}</h3>
         </li>
         );

        return (
            <div class="container">
                <h1 class="text-center header">Camper Leaderboard</h1>
                <ul className="user-list">
                    {mapUsers}
                </ul>

                <Footer/>
            </div>
        )
    }
}