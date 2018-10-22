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
<<<<<<< HEAD
                <Link to={"/RectDevTest"}>
=======
                <Link to={"/"}>
>>>>>>> b564ad591f70ce18ce78eca60923f30f82726e08
                  <li className="menu h4 nav-item py-4 d-flex justify-content-center">
                    Home
                  </li>
                </Link>
<<<<<<< HEAD
                <Link to={"/RectDevTest/Workspace/Info"}>
=======
                <Link to={"/Workspace/Info"}>
>>>>>>> b564ad591f70ce18ce78eca60923f30f82726e08
                  <li className="menu h4 nav-item py-4  d-flex justify-content-center">
                    Info
                  </li>
                </Link>
<<<<<<< HEAD
                <Link to={"/RectDevTest/Workspace/List"}>
=======
                <Link to={"/Workspace/List"}>
>>>>>>> b564ad591f70ce18ce78eca60923f30f82726e08
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
<<<<<<< HEAD
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
=======
              <Route exact path="/Workspace/List" component={AddAndSearch} />
              <Route exact path="/Workspace/Info" component={Languages} />
>>>>>>> b564ad591f70ce18ce78eca60923f30f82726e08
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
