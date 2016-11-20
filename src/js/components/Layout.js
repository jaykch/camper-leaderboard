import React from "react"
import styles from "../../css/default.scss"
import {connect} from "react-redux"

import Footer from "./Footer"

import {fetchRecentUsers, fetchAlltimeUsers} from "../actions/action"

@connect((store) => {
    return {
        store: store,
        users: store.users
    }
})

export default class Layout extends React.Component {

    componentWillMount() {
        this.props.dispatch(fetchAlltimeUsers());
    }

    fetchRecentUsers(){
        this.props.dispatch(fetchRecentUsers());
    }

    fetchAlltimeUsers(){
        this.props.dispatch(fetchAlltimeUsers());
    }

    render() {
        const users = this.props.users;
        const mapUsers = users.map(user =>
            <li className="user" key={user.username}>
                <img src={user.img} alt={user.username}/>
                <span className="recent">{user.recent}</span>
                <span className="all-time">{user.alltime}</span>
                <h3>{user.username}</h3>
            </li>
        );

        return (
            <div class="container">
                <h1 class="text-center header">Camper Leaderboard</h1>
                <button onClick={this.fetchRecentUsers.bind(this)} className="btn btn-block btn-primary">Recent</button>
                <button onClick={this.fetchAlltimeUsers.bind(this)} className="btn btn-block btn-primary">Alltime</button>
                <ul className="user-list container">
                    {mapUsers}
                </ul>
                <Footer/>
            </div>
        )
    }
}