import React from "react"

//Styles
import "./HeaderMenuItemStyles.css"

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
    
    handleMouseEnter() {
        this.setState({
            hovered: true
        });
    };

    handleMouseLeave() {
        this.setState({
            hovered: false
        });
    };

    render() {
        return (
            <div id={this.state.containerId}
                 className="headerMenuOption"
                 onMouseEnter={this.handleMouseEnter}
                 onMouseLeave={this.handleMouseLeave}>
                <div id={this.state.textId}
                     className="headerMenuOptionText">
                        {this.props.menuItem.Name}
                </div>
            </div>
        );
    }
}
