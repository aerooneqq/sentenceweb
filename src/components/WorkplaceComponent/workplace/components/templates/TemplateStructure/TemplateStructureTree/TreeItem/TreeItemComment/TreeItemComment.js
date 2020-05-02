import React, {Component} from "react";

import "./TreeItemComment.css";
import commentIcon from "./img/comment_icon.svg";
import ContentEditableSpan from "../../../../../../../../ContentEditable/ContentEditableSpan";

export default class TreeItemComment extends Component { 
    constructor(props) { 
        super(props);
    }

    render() {
        return (
            <div className = "template-structure-tree-item-comment-container">
                <img className = "template-structure-tree-item-comment-photo" src = {commentIcon} />
                <ContentEditableSpan text = {this.props.comment}
                                     marginLeft = {10}
                                     marginRight = {10}
                                     onChange = {this.props.handleCommentChange} />
            </div>
        )
    }
}