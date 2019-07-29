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
        document.getElementById(this.state.titleID).classList.toggle("fadeIn")
    }

    render() {
        return (
            <h2 id={this.state.titleID} className="headerTitle"><div>Sentence</div></h2>
        )
    }
}
