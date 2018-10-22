import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import UserName from "./components/UserName";
import SpokenLanguages from "./components/SpokenLanguages";
import Email from "./components/Email";
import Birthday from "./components/Birthday";
import Workspace from "./components/Workspace";
import { Route } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

class App extends PureComponent {
  render() {
    return (
      <div>
        <Route exact path="/RectDevTest/" component={UserName} />
<<<<<<< HEAD
        <Route
          exact
          path="/RectDevTest/SpokenLanguages"
          component={SpokenLanguages}
        />
        <Route exact path="/RectDevTest/Email" component={Email} />
        <Route exact path="/RectDevTest/Birthday" component={Birthday} />

=======
        <Route exact path="/RectDevTest/SpokenLanguages" component={SpokenLanguages} />
        <Route exact path="/RectDevTest/Email" component={Email} />
        <Route exact path="/RectDevTest/Birthday" component={Birthday} />
>>>>>>> b564ad591f70ce18ce78eca60923f30f82726e08
        <I18nextProvider i18n={i18n}>
          <Route path="/RectDevTest/Workspace" component={Workspace} />
        </I18nextProvider>
      </div>
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
