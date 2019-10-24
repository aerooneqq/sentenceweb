import React, {Component} from "react";

//Styles
import "./InspiringWordsStyles.css";

export default class InspiringWords extends Component { 
     
    render() { 
        return ( 
            <div id="entrySentenceContainer">
                <div className="inspiringWord">Think.</div>
                <div className="inspiringWord">Create.</div>
                <div className="inspiringWord">Render.</div>
            </div>
        );
    }
}