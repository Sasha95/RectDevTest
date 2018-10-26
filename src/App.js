import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import UserName from "./components/UserName";
import SpokenLanguages from "./components/SpokenLanguages";
import Email from "./components/Email";
import Birthday from "./components/Birthday";
import Workspace from "./components/Workspace";
import PhoneNumber from "./components/PhoneNumber";
import { Route } from "react-router-dom";

class App extends PureComponent {
  render() {
    return (
      <>
        <Route exact path="/RectDevTest/" component={UserName} />
        <Route
          exact
          path="/RectDevTest/SpokenLanguages"
          component={SpokenLanguages}
        />
        <Route exact path="/RectDevTest/Email" component={Email} />
        <Route exact path="/RectDevTest/Birthday" component={Birthday} />
        <Route exact path="/RectDevTest/PhoneNumber" component={PhoneNumber} />

        <Route path="/RectDevTest/Workspace" component={Workspace} />
      </>
    );
  }
}

export default withRouter(
  connect(
    state => ({
      ButtonState: state.statusBtn
    }),
    dispatch => ({
      changeState: enable => {
        dispatch({ type: "STATUS_BUTTON", payload: enable });
      }
    })
  )(App)
);
