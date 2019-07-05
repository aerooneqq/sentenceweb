import React from "react"
import "../styles/HeaderStyles.css"

export default class VerticalSeparator extends React.Component {
    constructor() {
        super()

        this.state = {
            loaded: false
        }
    }

    componentDidMount() {
        let vertSeparator = document.getElementById("headerSeparator")
        vertSeparator.classList.toggle("vertHeaderRotation")
    }

    render() {
        return (
            <div id="headerSeparator" className="headerVertSeparator" />
        )
    }
}
