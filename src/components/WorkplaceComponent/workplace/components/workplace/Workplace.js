import React, {Component, lazy} from "react"

//Styles
import "./WorkplaceStyles.css"

//Components
const Loader = lazy(() => import("../../../../loader/Loader"))
const DocumentsHeader = lazy(() => import("./DocumentsHeader/DocumentsHeader"));

export default class Workplace extends Component{ 
    constructor(props){ 
        super(props);

        this.state = { 
            component: <Loader message = "Loading workplace" />
        };
    }

    componentDidMount(){ 
        this.setState({ 
            component: (
                <DocumentsHeader />
            )
        });
    }

    render() { 
        return ( 
            <div id = "workplaceContainer">
                {this.state.component}
            </div>
        )
    }

}