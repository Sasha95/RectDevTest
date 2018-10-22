import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";

class UserName extends Component {
  state = {
    date: new Date()
  };
  componentDidMount() {
    this.props.changeState(true);
  }

  onChange = date => {
    this.setState({ date });

    if (date !== "") {
      this.props.changeState(false);
    } else {
      this.props.changeState(true);
    }
  };

  render() {
    console.log(this.state.date);
    return (
      <div className="container">
        <div className="row justify-content-center title pb-5 mb-3">
          What is your B.D.
        </div>
        <div className="row justify-content-center pb-5  mb-5">
<<<<<<< HEAD
=======
          {/* <input onChange={this.SelectData} type="date" defaultValue="" /> */}
>>>>>>> b564ad591f70ce18ce78eca60923f30f82726e08
          <Calendar onChange={this.onChange} value={this.state.date} />
        </div>

        <div className="row justify-content-center title pt-5">
<<<<<<< HEAD
          <Link to={"/RectDevTest/Workspace/Info"}>
=======
          <Link to={"/Workspace/Info"}>
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
