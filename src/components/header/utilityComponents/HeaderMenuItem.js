import React from "react"
import "../styles/HeaderStyles.css"

export default class HeaderMenuItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hovered: false,
            containerId: "headerMenuOption" + this.props.menuItem.ID,
            textId: "headerMenuOptionText" + this.props.menuItem.ID
        };

        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    componentDidMount() {
        document.getElementById(this.state.containerId).classList.toggle("headerMenuItemFadeIn");
        document.getElementById(this.state.textId).classList.toggle("menuItemTextslideIn");
    }

    render() {
        let menuOptionTextStyle = this.getMenuOptionTextStyle()

        return (
            <div id={this.state.containerId}
                className="headerMenuOption"
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}>
                <div id={this.state.textId}
                    style={menuOptionTextStyle}
                    className="headerMenuOptionText">
                    {this.props.menuItem.Name}
                </div>
            </div>
        );
    }

    handleMouseEnter() {
        this.setState({
            hovered: true
        })
    };

    handleMouseLeave() {
        this.setState({
            hovered: false
        })
    };

    getMenuOptionTextStyle() {
        return {
            fontFamily: "Arial",
            color: this.state.hovered ? "#ffffff" : "#ff4500",
            fontSize: "20px",

            marginRight: "10px",

            cursor: "default",

            //forbid the text selection
            "-ms-user-select": "none",
            "-moz-user-select": "none",
            "-khtml-user-select": "none",
            "-webkit-user-select": "none"
        }
    }
}
