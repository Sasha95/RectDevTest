import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Route, Switch } from "react-router-dom";
import AddAndSearch from "./AddAndSearch";
import Languages from "./Languages";
class Workspace extends Component {
  state = {
    isList: false
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <nav
            style={{ marginTop: "95px" }}
            className="col-1 d-none d-md-block sidebar p-0"
          >
            <div className="sidebar-sticky">
              <ul className="nav flex-column ">
                <Link to={"/RectDevTest"}>
                  <li className="menu h4 nav-item py-4 d-flex justify-content-center">
                    Home
                  </li>
                </Link>
                <Link to={"/RectDevTest/Workspace/Info"}>
                  <li className="menu h4 nav-item py-4  d-flex justify-content-center">
                    Info
                  </li>
                </Link>
                <Link to={"/RectDevTest/Workspace/List"}>
                  <li className="menu h4 nav-item py-4  d-flex justify-content-center">
                    List
                  </li>
                </Link>
              </ul>
            </div>
          </nav>
          <main role="main" className="col col-11 p-0">
            <div className="h1 d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4 mb-3 border-bottom ">
              Hato
            </div>
            <Switch>
              <Route
                exact
                path="/RectDevTest/Workspace/List"
                component={AddAndSearch}
              />
              <Route
                exact
                path="/RectDevTest/Workspace/Info"
                component={Languages}
              />
            </Switch>
          </main>
        </div>
      </div>
    );
  }
}
export default connect(
  state => ({
    ButtonState: state.statusBtn,
    selectedLngs: state.checkLng
  }),
  null
)(Workspace);
