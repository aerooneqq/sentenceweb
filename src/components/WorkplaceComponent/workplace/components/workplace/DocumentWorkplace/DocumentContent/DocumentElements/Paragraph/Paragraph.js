import React, {Component} from "react";

//Srtyles
import "./ParagraphStyles.css";
import "../DocumentElementsStyles.css";

//Components
import DocumentElementHeader from "../CommonComponents/DocumentElementHeader/DocumentElementHeader";
import PargraphText from "./ParagraphText/ParagraphText";
import VersionControll from "../CommonComponents/VersionControll/VersionControll";

export default class Paragraph extends Component { 
    constructor(props) { 
        super(props);

        this.state = { 
            versionsControllVisible: false,
            isUserWorkingWithVersionControll: false
        }

        this.onPargraphMouseEnter = this.onPargraphMouseEnter.bind(this);
        this.onPargraphMouseLeave = this.onPargraphMouseLeave.bind(this);
        this.setFocus = this.setFocus.bind(this);
    }

    onPargraphMouseEnter() { 
        this.setState({ 
            versionsControllVisible: true
        });
    }

    onPargraphMouseLeave() { 
        this.setState({ 
            versionsControllVisible: false
        });
    }

    setFocus() { 
        this.setFocus();
    }

    render() { 
        return (
            <div className = "documentElementOutterCont" onMouseEnter = {this.onPargraphMouseEnter} 
                 onMouseLeave = {this.onPargraphMouseLeave}>
                <DocumentElementHeader headerText = {this.props.paragraph.name}
                                       setFocus = {this.setFocus} />
                <PargraphText text = {this.props.paragraph.text} />
                <VersionControll visible = {this.state.versionsControllVisible}  />
            </div>
        )
    }
}