import React, {Component, lazy, Suspense} from "react"

//Styles
import "./WorkplaceComponentStyles.css"

//Components
const Header = lazy(()=> import("./workplace/components/header/Header"))
const Profile = lazy(()=> import("./workplace/components/profile/Profile"))
const DocumentDesk = lazy(() => import("./workplace/components/workplace/DocumentDesk"));

export default class WorkplaceComponent extends Component{
  constructor(props){ 
    super(props);

    this.state = { 
      component: <Profile />
    };

    this.changeWorkplaceComponent = this.changeWorkplaceComponent.bind(this);
  }

  /**
   * Changes the current component of the workplace.
   * @param {*} componentNumber - the number of the component:
   * 0 - Profile
   * 1 - Workplace
   * 2 - Projects
   * 3 - Templates
   */
  changeWorkplaceComponent(componentNumber){ 
    switch (componentNumber){ 
      case 0:
        this.setState({ component: <Profile />});
        break;
      
      case 1:
        this.setState({ component: <DocumentDesk />});
        break;
    }
  }

  render(){
    return (
        <div id = "workplaceContainer">
          <Header changeWorkplaceComponent = {this.changeWorkplaceComponent}/>
          <div id="contentContainer">
            {this.state.component}
          </div>
        </div>
    )
  }
}
