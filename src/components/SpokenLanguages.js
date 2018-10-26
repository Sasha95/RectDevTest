import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  border-radius: 3px;
  padding: 16px 17px 16px 16px;
  width: 51px;
  height: 51px;
  font-size: 15px;
  border: none;
  padding: 0px;
  margin: 0 14px 0 14px;
  cursor: pointer;
  background-color: rgba(240, 241, 243, 0.58);
  color: rgba(186, 186, 186, 1);
`;

const lans1 = [
  { id: 0, name: "RO" },
  { id: 1, name: "RU" },
  { id: 2, name: "EN" },
  { id: 3, name: "FR" }
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
    this.props.changeLang(this.state.langs.join(", "));
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
      <div className="container p-0 tit">
        <div className="title">HATO</div>
        <div className="formInp">
          <p className="subtext m-0">Spoken languages</p>
          <div
            className="row justify-content-center"
            // style={{ marginBottom: "42px" }}
          >
            {lans1.map((x, index) => (
              <Button
                key={index}
                id={x.id}
                style={{
                  backgroundColor:
                    this.state.selectedBtn.indexOf(String(x.id)) !== -1
                      ? "white"
                      : "",
                  border:
                    this.state.selectedBtn.indexOf(String(x.id)) !== -1
                      ? "solid 1px #0086f8"
                      : "",
                  color:
                    this.state.selectedBtn.indexOf(String(x.id)) !== -1
                      ? "#151517"
                      : ""
                }}
                value={x.name}
                onClick={this.onCheck}
              >
                {x.name}
              </Button>
            ))}
          </div>
          <div className="row justify-content-center">
            <Link to={"/RectDevTest/Email"}>
              <button className="btn" disabled={this.props.ButtonState}>
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
    changeLang: langs => {
      dispatch({ type: "CHECKED_LANGUAGES", payload: langs });
    },
    changeState: enable => {
      dispatch({ type: "STATUS_BUTTON", payload: enable });
    }
  })
)(SpokenLanguages);
