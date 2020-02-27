import React, {Component} from "react";

//Styles
import "./CreateNewElement.css";

export default class CreateNewElement extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <div className = "create-new-element-outer-cont">
                <div className = "create-new-element-icon">File</div>
                <div className = "create-new-element-icon">Image</div>
                <div className = "create-new-element-icon">List</div>
                <div className = "create-new-element-icon">Table</div>
            </div>
        )
    }
}