import React from "react"

export default class Footer extends React.Component {

    render() {
        return (
            <div>
                <h1 class="text-center credits">Built By
                    <a href="http://www.jaykch.com/" target="_blank">Jay Kumar</a>
                </h1>
                <div className="row text-center"><a href="#" target="_blank">GitHub Link</a></div>
            </div>
        )
    }
}