import React, { Component } from "react";
import { connect } from "react-redux";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import moment from "moment";

class AddAndSerach extends Component {
  state = {
    date: moment(new Date()).format("DD.MM.YYYY")
  };
  addUser = () => {
    this.props.onAddUser(this.userName.value, this.state.date);
    this.userName.value = "";
    this.userDate.value = "";
  };

  findUser = () => {
    this.props.onFindUser(this.searchInput.value);
  };

  handleDayChange = dayPickerInput => {
    this.setState({
      date: moment(dayPickerInput).format("DD.MM.YYYY")
    });
  };
  render() {
    return (
      <div className="m-4">
        <div className="h3">Filter:</div>
        <input
          onChange={this.findUser}
          ref={input => {
            this.searchInput = input;
          }}
          placeholder="input name or data"
        />
        <div className="pt-3">
          <div className="h3">Add user:</div>
          <input
            className="mr-2 mb-4"
            ref={input => {
              this.userName = input;
            }}
            placeholder="Name"
          />
          <DayPickerInput
            ref={DayPickerInput => {
              this.userDate = DayPickerInput;
            }}
            className="piker"
            placeholder={this.state.date}
            format="DD.MM.YYYY"
            onDayChange={this.handleDayChange}
          />

          <div>
            <button className="btn btn-secondary" onClick={this.addUser}>
              Add User
            </button>
          </div>
        </div>
        <div className="h3 mt-5">List users:</div>
        {this.props.users.map((x, index) => (
          <ul key={index}>
            <li className="h4">
              Name:&nbsp;
              <b>{x.name}</b> &nbsp;&nbsp; B.D.:&nbsp;
              <b>{x.date}</b>
            </li>
          </ul>
        ))}
      </div>
    );
  }
}

export default connect(
  state => ({
    users: state.users.filter(
      user =>
        user.name.includes(state.filterUser) ||
        user.date.includes(state.filterUser)
    )
  }),
  dispatch => ({
    onAddUser: (name, date) => {
      const payload = {
        name,
        date
      };
      dispatch({ type: "ADD_USER", payload });
    },
    onFindUser: name => {
      dispatch({ type: "FILTER_USER", payload: name });
    }
  })
)(AddAndSerach);
