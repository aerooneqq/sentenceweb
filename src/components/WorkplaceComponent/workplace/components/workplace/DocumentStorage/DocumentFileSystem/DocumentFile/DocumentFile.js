import React, {Component} from "react";

export default class DocumentFile extends Component { 

    constructor(props) { 
        super(props);
    }

    render() { 
        return ( 
            <div className = "documentFileContainer">
                <div className = "documentFileIcon">
                    <object type = "image/svg+xml"
                            data = {null}>
                        Document file        
                    </object>
                </div>
                <div className = "documentFileText">

                </div>
            </div>
        )
    }

}