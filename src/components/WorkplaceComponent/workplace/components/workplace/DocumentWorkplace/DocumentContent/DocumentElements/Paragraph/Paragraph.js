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
            isUserWorkingWithElement: false,
            isInFocus: false
        }

        this.onPargraphMouseEnter = this.onPargraphMouseEnter.bind(this);
        this.onPargraphMouseLeave = this.onPargraphMouseLeave.bind(this);
        this.setUserWorkingStatus = this.setUserWorkingStatus.bind(this);
        this.handleBlur = this.handleBlur.bind(this); 
        this.handleFocus = this.handleFocus.bind(this);
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

    setUserWorkingStatus(newStatus) { 
        this.setState({ 
            isUserWorkingWithElement: newStatus
        });
    }

    /**
     * The delay is necessary because when we switch the sub-components in in this
     * component, it loses focus for a while, and then gets focus back, so in order
     * not to hide and show the version controll component we do the 50ms delay.
     */
    handleBlur() { 
        setTimeout(() => { 
            if (this.state.isInFocus === true) { 
                this.setState({ 
                    isUserWorkingWithElement: false,
                    isInFocus: false
                });
            }
        }, 100);
    }

    handleFocus() {
        this.setState({ 
            isInFocus: true
        });
    }

    render() { 
        return (
            <div className = "documentElementOutterCont" onBlur = {this.handleBlur} 
                 onFocus = {this.handleFocus}>
                <DocumentElementHeader headerText = {this.props.paragraph.name}
                                       setFocus = {this.setFocus}
                                       setUserWorkingStatus = {this.setUserWorkingStatus} />
                <PargraphText text = {this.props.paragraph.text}
                              setUserWorkingStatus = {this.setUserWorkingStatus}   />
                <VersionControll visible = {this.state.isUserWorkingWithElement} 
                                 setUserWorkingStatus = {this.setUserWorkingStatus}
                                 isUserWorkingWithElement = {this.state.isUserWorkingWithElement} />
            </div>
        )
    }
}