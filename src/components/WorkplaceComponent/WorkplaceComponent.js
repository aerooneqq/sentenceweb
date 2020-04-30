import React, {Component, lazy} from "react"

//Styles
import "./WorkplaceComponentStyles.css"
import TemplateComponent from "./workplace/components/templates/TemplateComponent";
import ProjectsComponent from "./workplace/components/projects/ProjectsComponent";

//Components
const Header = lazy(()=> import("./workplace/components/header/Header"))
const Profile = lazy(()=> import("./workplace/components/profile/Profile"))
const DocumentDesk = lazy(() => import("./workplace/components/workplace/DocumentDesk"));

/**
 * PROPS LIST: 
 * 1) signOut - the method to signout from the system
 */
export default class WorkplaceComponent extends Component{
  constructor(props) { 
    super(props);

    this.components = [
      <Profile signOut = {this.props.signOut}/>,
      <DocumentDesk />,
      <ProjectsComponent />,
      <TemplateComponent />,
    ]
    this.state = { 
      component: this.components[1],
    };

    this._changeWorkplaceComponent = this._changeWorkplaceComponent.bind(this);
  }

  /**
   * Changes the current component of the workplace.
   * @param {componentNumber} - the number of the component:
   * 0 - Profile
   * 1 - Workplace
   * 2 - Projects
   * 3 - Templates
   */
  _changeWorkplaceComponent(componentNumber){ 
    this.setState({
      component: this.components[componentNumber],
    })
  }

  render(){
    return (
        <div id = "workplaceContainer">
          <Header changeWorkplaceComponent = {this._changeWorkplaceComponent}/>
          <div id="contentContainer">
            {this.state.component}
          </div>
        </div>
    )
  }
}
