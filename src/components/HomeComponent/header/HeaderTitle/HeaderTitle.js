import React from "react"

//Styles
import "./HeaderTitleStyles.css"

export default class HeaderTitle extends React.Component {
    render() {
        return (
            <h2 id = "headerTitle">
                <div id = "headerTitleText">
                    Sentence
                </div>
            </h2>
        )
    }
}
