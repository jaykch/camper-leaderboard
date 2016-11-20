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
        this.props.dispatch(fetchRecentUsers());
    }

    fetchRecentUsers() {
        this.props.dispatch(fetchRecentUsers());
    }

    fetchAlltimeUsers() {
        this.props.dispatch(fetchAlltimeUsers());
    }

    render() {
        const users = this.props.users;
        const mapUsers = users.map(user =>
            <tr key={user.username} className="user">
                <td>
                    <img src={user.img} alt={user.username}/>
                    <span>{user.username}</span>
                </td>
                <td className="text-center">{user.recent}</td>
                <td className="text-center">{user.alltime}</td>
            </tr>
        );

        return (
            <div class="container">
                <h1 class="text-center header">Camper Leaderboard</h1>
                <button onClick={this.fetchRecentUsers.bind(this)} className="btn btn-block btn-default">Recent</button>
                <button onClick={this.fetchAlltimeUsers.bind(this)} className="btn btn-block btn-info">
                    All time
                </button>
                <table className="user-table container">
                    <thead>
                    <tr>
                        <th className="text-center">Name</th>
                        <th className="text-center">Recent Points</th>
                        <th className="text-center">All Time Points</th>
                    </tr>
                    </thead>
                    <tbody>
                    {mapUsers}
                    </tbody>
                </table>
                <Footer/>
            </div>
        )
    }
}