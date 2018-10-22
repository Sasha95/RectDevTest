import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  border-radius: 20px !important;
  padding: 10px 25px !important;
  font-size: 30px !important;
  border: solid 1px black;
  width: 90px;
  margin: 20px;
  cursor: pointer;
`;

const lans1 = [
  { id: 0, name: "Eng" },
  { id: 1, name: "Fr" },
  { id: 2, name: "Du" }
];
const lans2 = [
  { id: 3, name: "Sp" },
  { id: 4, name: "Ro" },
  { id: 5, name: "Ru" }
];

class SpokenLanguages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      langs: [],
      selectedBtn: []
    };
  }

  setStatus = () => {
    this.props.changeLang(this.state.langs);
    if (this.state.langs.length > 0) {
      this.props.changeState(false);
    } else {
      this.props.changeState(true);
    }
  };

  onCheck = event => {
    const array = [...this.state.langs];
    const index = array.indexOf(event.target.value);
    if (index === -1) {
      this.setState(
        {
          langs: this.state.langs.concat(event.target.value)
        },
        () => {
          this.setStatus();
        }
      );
    } else {
      array.splice(index, 1);
      this.setState({ langs: array }, () => {
        this.setStatus();
      });
    }

    const selectedBtns = [...this.state.selectedBtn];
    const indexBtn = selectedBtns.indexOf(event.target.id);
    if (indexBtn === -1) {
      this.setState({
        selectedBtn: this.state.selectedBtn.concat(event.target.id)
      });
    } else {
      selectedBtns.splice(indexBtn, 1);
      this.setState({ selectedBtn: selectedBtns });
    }
  };

  componentDidMount() {
    this.props.changeState(true);
  }
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center title pb-5">
          Spoken languages
        </div>
        <div className="row justify-content-center title">
          {lans1.map((x, index) => (
            <Button
              key={index}
              id={x.id}
              style={{
                backgroundColor:
                  this.state.selectedBtn.indexOf(String(x.id)) !== -1
                    ? "gray"
                    : ""
              }}
              value={x.name}
              onClick={this.onCheck}
            >
              {x.name}
            </Button>
          ))}
        </div>
        <div className="row justify-content-center title">
          {lans2.map((x, index) => (
            <Button
              key={index}
              id={x.id}
              style={{
                backgroundColor:
                  this.state.selectedBtn.indexOf(String(x.id)) !== -1
                    ? "gray"
                    : ""
              }}
              value={x.name}
              onClick={this.onCheck}
            >
              {x.name}
            </Button>
          ))}
        </div>
        <div className="row justify-content-center title pt-5 mt-5">
          <Link to={"/RectDevTest/Email"}>
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
    changeLang: langs => {
      dispatch({ type: "CHECKED_LANGUAGES", payload: langs });
    },
    changeState: enable => {
      dispatch({ type: "STATUS_BUTTON", payload: enable });
    }
  })
)(SpokenLanguages);
