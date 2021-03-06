import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class UserName extends Component {
  state = {
    textChange: false
  };

  validation = event => {
    let name = event.target.value;
    if (name.length > 0) {
      this.setState({
        textChange: true
      });
    } else {
      this.setState({
        textChange: false
      });
    }
    if (name.length > 2) {
      this.props.changeState(false);
    } else {
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
          <p className="subtext m-0">What is your name?</p>

          <div className="inputWithIcon row justify-content-center mx-0">
            <input
              className={this.state.textChange ? "change" : ""}
              onChange={this.validation}
              type="text"
              placeholder="Name"
              ref={input => {
                this.userName = input;
              }}
            />
            <i className="fa fa-user fa-lg fa-fw" aria-hidden="true" />
          </div>

          <div className="row justify-content-center">
            <Link to={"/RectDevTest/SpokenLanguages"}>
              <button
                onClick={() => {
                  this.props.NameOfUser(this.userName.value);
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
    NameOfUser: name => {
      dispatch({ type: "USER_NAME", payload: name });
    }
  })
)(UserName);
