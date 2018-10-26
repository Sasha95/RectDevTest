import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class PhoneNumber extends Component {
  state = {
    textChange: false
  };

  validation = event => {
    let name = event.target.value;
    if (name.length > 0) {
      this.setState({
        textChange: true
      });
      this.props.changeState(false);
    } else {
      this.setState({
        textChange: false
      });
      this.props.changeState(true);
    }
  };

  componentDidMount() {
    this.props.changeState(true);
  }

  render() {
    return (
      <div className="container p-0 tit">
        <div className="title">HATO</div>
        <div className="formInp">
          <p className="subtext m-0">What is your phone number?</p>

          <div className="inputWithIcon row justify-content-center mx-0">
            <form>
              <input
                className={this.state.textChange ? "change" : ""}
                onChange={this.validation}
                placeholder="Phone Number"
                type="number"
                ref={input => {
                  this.userPhone = input;
                }}
              />
              <i className="fa fa-phone fa-lg fa-fw" aria-hidden="true" />
            </form>
          </div>

          <div className="row justify-content-center">
            <Link to={"/RectDevTest/Birthday"}>
              <button
                onClick={() => {
                  this.props.userPhone(this.userPhone.value);
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
    userPhone: phone => {
      dispatch({ type: "USER_PHONE", payload: phone });
    }
  })
)(PhoneNumber);
