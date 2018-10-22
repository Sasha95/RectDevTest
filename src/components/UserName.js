import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class UserName extends Component {
  validation = event => {
    let name = event.target.value;
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
      <div className="container">
        <div className="row justify-content-center title">HATO</div>
        <br />
        <div className="row justify-content-center">
          <h3>Whats is your name?</h3>
        </div>
        <br />
        <div className="row justify-content-center pb-5">
          <input onChange={this.validation} placeholder="your name" />
        </div>
        <br />
        <div className="row justify-content-center">
<<<<<<< HEAD
          <Link to={"/RectDevTest/SpokenLanguages"}>
=======
          <Link to={"/SpokenLanguages"}>
>>>>>>> b564ad591f70ce18ce78eca60923f30f82726e08
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
<<<<<<< HEAD
=======

>>>>>>> b564ad591f70ce18ce78eca60923f30f82726e08
