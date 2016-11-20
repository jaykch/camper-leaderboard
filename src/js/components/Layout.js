import React from "react"
import styles from "../../css/default.scss"

export default class Layout extends React.Component{

    render(){
        return(
            <div class="container">
                <h1 class="text-center header">Camper Leaderboard</h1>
                <h1 class="text-center credits">Built By <a href="http://www.jaykch.com/" target="_blank">Jay Kumar</a></h1>
                <div className="row text-center"><a href="#" target="_blank">GitHub Link</a></div>
            </div>
        )
    }
}