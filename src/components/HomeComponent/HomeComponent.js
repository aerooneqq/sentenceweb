import React, {Component, Suspense, lazy} from "react"

//Components
const Header = lazy(() => import("./header/Header"));
const AuthContentBlock = lazy(() => import("./auth/AuthContentBlock/AuthContentBlock"));
const Loader = lazy(() => import("../loader/Loader"));

export default class HomeComponent extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Suspense fallback={<Loader />}>
          <Header />
          <AuthContentBlock signIn = {this.props.signIn}/>
      </Suspense>
    )
  }
}
