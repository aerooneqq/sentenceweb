import React from "react"
import "../styles/HeaderStyles.css"

export default class HeaderTitle extends React.Component {
    constructor() {
        super()

        this.state = {
          titleID: "headerTitleID"
        }
    }

    componentDidMount() {
        var title = document.getElementById(this.state.titleID)
        title.classList.toggle("fadeIn")
    }

    render() {
        return (
            <h2 id={this.state.titleID} className="headerTitle">Sentence</h2>
        )
    }
}
