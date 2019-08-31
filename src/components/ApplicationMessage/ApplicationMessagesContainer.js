import React, {Component} from "react"; 

import {setAppMesageParams} from "./ApplicationMessageManager";

export default class ApplicationMessagesContainer extends Component { 
    constructor(props) { 
        super(props);

        this.state = { 
            messages: []
        }

        this.alertAppMessages = this.alertAppMessages.bind(this);

        setAppMesageParams(this.alertAppMessages);
    }

    alertAppMessages(messages) { 
        this.setState(() => { 
          return { 
            messages: messages
          }
        });
      }

    render() { 
        return ( 
            <div>
                {this.state.messages}
            </div>
        )
    }
}