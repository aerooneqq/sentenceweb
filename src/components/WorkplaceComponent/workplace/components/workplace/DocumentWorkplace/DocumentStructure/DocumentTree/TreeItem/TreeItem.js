import React, {Component} from "react"

import Loader from "../../../../../../../../loader/Loader";

export default class TreeItem extends Component { 
    constructor(props) { 
        super(props);

        this.state = { 
            components: <Loader message = "Loading structure..." />
        };
    }

    componentDidMount() { 

    }

    render() { 
        return ( 
            <div className = "documentTreeItemContainer">

            </div>
        );
    }
}