import React, { Component } from "react";
import { connect } from "react-redux";
import {
  FormWithConstraints,
  FieldFeedbacks,
  FieldFeedback
} from "react-form-with-constraints";
import { Link } from "react-router-dom";

class Email extends Component {
  state = {
    ValidT: false,
    ValidB: false
  };
  handleChange = e => {
    this.form.validateFields(e.target);
  };
  contactSubmit = e => {
    e.preventDefault();
    this.form.validateFields();
    if (e.target.value.length > 0) {
      this.setState({
        ValidT: true
      });
    } else {
      this.setState({
        ValidT: false
      });
    }
    if (!this.form.isValid()) {
      this.setState({
        ValidB: true
      });
      this.props.changeState(true);
    } else {
      this.setState({
        ValidB: false
      });
      this.props.changeState(false);
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
          <p className="subtext m-0">What is your email?</p>
          <FormWithConstraints
            ref={form => (this.form = form)}
            onChange={this.contactSubmit}
            noValidate
          >
            <div className="inputWithIcon row justify-content-center mx-0">
              <input
                className={this.state.ValidT ? "change" : ""}
                style={{ border: this.state.ValidB ? "solid 1px #D96A17" : "" }}
                type="email"
                name="email"
                placeholder="Email"
                required
                ref={input => {
                  this.userEmail = input;
                }}
                onChange={this.handleChange}
              />
              <i className="fa fa-envelope fa-lg fa-fw" aria-hidden="true" />
            </div>
            <div className="row mx-0" style={{ paddingLeft: "75px" }}>
              <FieldFeedbacks onChange={this.val} for="email">
                <FieldFeedback
                  style={{ color: "#D96A17", position: "absolute" }}
                  when="*"
                >
                  This is not an email
                </FieldFeedback>
              </FieldFeedbacks>
            </div>
          </FormWithConstraints>
          <div className="row justify-content-center mx-0">
            <Link to={"/RectDevTest/PhoneNumber"}>
              <button
                onClick={() => {
                  this.props.userMail(this.userEmail.value);
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
    userMail: email => {
      dispatch({ type: "USER_EMAIL", payload: email });
    }
  })
)(Email);
