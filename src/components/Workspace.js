import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Route, Switch } from "react-router-dom";
import AddAndSearch from "./AddAndSearch";
import Languages from "./Languages";
import styled from "styled-components";
import ReactSVG from "react-svg";

import house from "../Rourse/house-black-silhouette-without-door.svg";
import list from "../Rourse/list.svg";
import house1 from "../Rourse/house-black-silhouette-without-door1.svg";
import list1 from "../Rourse/list1.svg";
import addUser from "../Rourse/plus-button.svg";
import addUser1 from "../Rourse/plus-buttonB.svg";

const Span = styled.span`
  font-size: 48px;
  font-weight: bold;
  color: #304459;
  cursor: default;
`;

class Workspace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isList: false,

      changeColor: false
    };
  }

  onMouseEnterHandler = () => {
    this.setState({
      changeColor: true
    });
  };
  onMouseLeaveHandler = () => {
    this.setState({
      changeColor: false
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <div
          className="row"
          style={{ backgroundColor: "white", height: "70px" }}
        >
          <nav className="d-md-block sidebar p-0">
            <div className="sidebar-sticky">
              <ul
                className="nav flex-column "
                style={{
                  backgroundColor: "white",
                  height: "100vh",
                  width: "83px"
                }}
              >
                <li className="h5 nav-item d-flex justify-content-center">
                  <Span>H</Span>
                </li>
                <Link to={"/RectDevTest/Workspace/Info"}>
                  <li
                    className={`nav-item d-flex justify-content-center ${
                      this.props.location.pathname.indexOf("List") === -1
                        ? "menu"
                        : ""
                    }`}
                    style={{
                      padding: "20px 26px 20px 26px",
                      marginTop: "5px"
                    }}
                  >
                    <ReactSVG
                      src={
                        this.props.location.pathname.indexOf("List") !== -1
                          ? house
                          : house1
                      }
                      evalScripts="always"
                      renumerateIRIElements={false}
                      svgClassName="svg-class-name"
                      svgStyle={{
                        width:
                          this.props.location.pathname.indexOf("List") !== -1
                            ? 22
                            : 30,
                        height:
                          this.props.location.pathname.indexOf("List") !== -1
                            ? 22
                            : 30
                      }}
                      className="wrapper-class-name"
                    />
                  </li>
                </Link>
                <Link to={"/RectDevTest/Workspace/List"}>
                  <li
                    className={`nav-item d-flex justify-content-center ${
                      this.props.location.pathname.indexOf("Info") === -1
                        ? "menu"
                        : ""
                    }`}
                    style={{ padding: "20px 26px 20px 26px" }}
                  >
                    <ReactSVG
                      src={
                        this.props.location.pathname.indexOf("Info") !== -1
                          ? list
                          : list1
                      }
                      evalScripts="always"
                      renumerateIRIElements={false}
                      svgClassName="svg-class-name"
                      svgStyle={{
                        width:
                          this.props.location.pathname.indexOf("Info") !== -1
                            ? 22
                            : 30,
                        height:
                          this.props.location.pathname.indexOf("Info") !== -1
                            ? 22
                            : 30
                      }}
                      className="wrapper-class-name"
                    />
                  </li>
                </Link>
              </ul>
            </div>
          </nav>
          {this.props.location.pathname.indexOf("List") !== -1 ? (
            <Link
              className="ml-auto row m-0 pr-5 pt-4 adduser"
              to={"/RectDevTest"}
              onMouseEnter={this.onMouseEnterHandler}
              onMouseLeave={this.onMouseLeaveHandler}
            >
              <ReactSVG
                src={!this.state.changeColor ? addUser : addUser1}
                evalScripts="always"
                renumerateIRIElements={false}
                svgClassName="svg-class-name"
                svgStyle={{
                  width: 25,
                  height: 25
                }}
                className="wrapper-class-name pl-0"
              />
              <span className="col pr-0">Add user</span>
            </Link>
          ) : (
            ""
          )}
        </div>
        <main role="main">
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
