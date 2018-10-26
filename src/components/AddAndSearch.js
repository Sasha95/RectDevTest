import React, { Component } from "react";
import "react-day-picker/lib/style.css";
import moment from "moment";
import { search } from "../service/searchUser";
import { userInfo } from "../service/userInfo";
import { deleteUser } from "../service/deleteUser";
import { sortData } from "../service/sortUser";
import styled from "styled-components";

const Th = styled.th`
  font-size: 16px;
  color: white;
  padding-top: 8px;
  padding-bottom: 7px;
`;

class AddAndSerach extends Component {
  state = {
    date: moment(new Date()).format("DD.MM.YYYY"),
    data: [],
    timeData: [],
    sort: true
  };
  addUser = () => {
    this.props.onAddUser(this.userName.value, this.state.date);
    this.userName.value = "";
    this.userDate.value = "";
  };

  handleDayChange = dayPickerInput => {
    this.setState({
      date: moment(dayPickerInput).format("DD.MM.YYYY")
    });
  };

  componentDidMount() {
    this.getFromLocalStor();
  }

  getFromLocalStor = () => {
    const rez = userInfo();
    this.setState({
      data: rez,
      timeData: rez
    });
  };

  searchUser = () => {
    this.setState({
      timeData: search(this.state.data, this.search.value)
    });
  };

  DeleteUser = e => {
    deleteUser(e.target.id);
    this.getFromLocalStor();
  };

  sort = e => {
    this.setState({
      sort: !this.state.sort
    });

    this.setState({
      timeData: sortData(this.state.timeData, e.target.id, this.state.sort)
    });
  };

  render() {
    return (
      <div
        className="row"
        style={{
          marginLeft: "126px",
          paddingTop: "35px",
          paddingRight: "72px"
        }}
      >
        <div className="card w-100">
          <div className="card-body px-5">
            <div className="search">
              <span className="fa fa-search" />
              <input
                placeholder="Search…"
                onChange={this.searchUser}
                ref={input => {
                  this.search = input;
                }}
              />
            </div>

            <table className="table  table-sm table-striped ">
              <thead style={{ backgroundColor: "#0086F8" }}>
                <tr>
                  <Th className="pl-5" scope="col">
                    ID
                  </Th>
                  <Th
                    className="clicktit"
                    onClick={this.sort}
                    id="name"
                    scope="col"
                  >
                    Name
                  </Th>
                  <Th scope="col">Email</Th>
                  <Th
                    className="clicktit"
                    onClick={this.sort}
                    id="phone"
                    scope="col"
                  >
                    Phone Number
                  </Th>
                  <Th
                    className="clicktit"
                    onClick={this.sort}
                    id="birth"
                    scope="col"
                  >
                    Date of birth
                  </Th>
                  <Th
                    className="clicktit"
                    onClick={this.sort}
                    id="languages"
                    scope="col"
                  >
                    Languages
                  </Th>
                  <th scope="col" />
                </tr>
              </thead>
              <tbody>
                {this.state.timeData.map((x, index) => (
                  <tr key={index}>
                    <td className="pl-5">{x.id}</td>
                    <td onClick={this.sort}>{x.name}</td>
                    <td>{x.email}</td>
                    <td>{x.phone}</td>
                    <td>{x.birth}</td>
                    <td>{x.languages}</td>
                    <td
                      className="pl-5 deleteBtn"
                      id={x.id}
                      onClick={this.DeleteUser}
                    >
                      Delete
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default AddAndSerach;
