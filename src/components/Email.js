import React, { Component } from "react";
import { connect } from "react-redux";
import {
  FormWithConstraints,
  FieldFeedbacks,
  FieldFeedback
} from "react-form-with-constraints";
import { Link } from "react-router-dom";

class UserName extends Component {
  handleChange = e => {
    this.form.validateFields(e.target);
  };
  contactSubmit = e => {
    e.preventDefault();

    this.form.validateFields();

    if (!this.form.isValid()) {
      this.props.changeState(true);
    } else {
      this.props.changeState(false);
    }
  };

  componentDidMount() {
    this.props.changeState(true);
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center title pb-5">Email?</div>
        <FormWithConstraints
          ref={form => (this.form = form)}
          onChange={this.contactSubmit}
          noValidate
        >
          <div className="row justify-content-center">
            <FieldFeedbacks onChange={this.val} for="email">
              <FieldFeedback
                style={{ color: "red", position: "absolute" }}
                when="*"
              >
                This is not an email
              </FieldFeedback>
            </FieldFeedbacks>
          </div>
          <br />
          <div className="row justify-content-center pb-5">
            <input
              type="email"
              name="email"
              placeholder="email"
              required
              onChange={this.handleChange}
            />
          </div>
        </FormWithConstraints>
        <div className=" row justify-content-center title pt-5 mt-5">
          <Link to={"/RectDevTest/Birthday"}>
            <button className="btn" disabled={this.props.ButtonState}>
              >
            </button>
          </Link>
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
    }
  })
)(UserName);
