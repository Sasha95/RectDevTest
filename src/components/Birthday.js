import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import OutsideAlerter from "./OutsideAlerter";
import moment from "moment";

class UserName extends Component {
  state = {
    date: new Date(),
    visibleCalendar: false,
    textChange: false
  };
  componentDidMount() {
    this.props.changeState(true);
  }

  selectDate = () => {
    this.setState({
      visibleCalendar: true
    });
  };

  closeCalendar = () => {
    this.setState({
      visibleCalendar: false
    });
  };

  onChange = date => {
    this.setState(
      {
        date,
        textChange: true
      },
      () => (this.date.value = moment(this.state.date).format("DD.MM.YYYY"))
    );

    if (date !== "") {
      this.props.changeState(false);
    } else {
      this.props.changeState(true);
    }
    this.closeCalendar();
  };

  render() {
    return (
      <div className="container p-0 tit">
        <div className="title">HATO</div>
        <div className="formInp">
          <p className="subtext m-0">What is your date of birth?</p>

          <div className="inputWithIcon row justify-content-center mx-0">
            <input
              className={this.state.textChange ? "change" : ""}
              onChange={this.validation}
              onClick={this.selectDate}
              type="text"
              placeholder="Select a date"
              ref={input => {
                this.date = input;
              }}
            />
            <i className="fa fa-calendar fa-lg fa-fw" aria-hidden="true" />
          </div>
          {this.state.visibleCalendar ? (
            <div
              style={{
                position: "absolute",
                zIndex: 10,
                marginLeft: "50px"
              }}
              className="row justify-content-center pb-5  mb-5"
            >
              <OutsideAlerter>
                <Calendar
                  format="DD.MM.YYYY"
                  onChange={this.onChange}
                  value={this.state.date}
                  closeCalendar={this.closeCalendar}
                />
              </OutsideAlerter>
            </div>
          ) : (
            ""
          )}

          <div
            style={{ position: "relative", zIndex: 9 }}
            className="row justify-content-center"
          >
            <Link to={"/RectDevTest/Workspace/Info"}>
              <button
                onClick={() => {
                  this.props.userBirth(this.date.value);
                }}
                className="btn"
                disabled={this.props.ButtonState}
              >
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    ButtonState: state.statusBtn
  }),
  dispatch => ({
    changeState: enable => {
      dispatch({ type: "STATUS_BUTTON", payload: enable });
    },
    userBirth: birth => {
      dispatch({ type: "USER_BIRTH", payload: birth });
    }
  })
)(UserName);
