import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Title = styled.span`
  font-size: 45px;
  font-weight: bold;
  color: #304459;
  line-height: 60%;
`;

const Headline = styled.p`
  font-size: 14px;
  padding-top: 8px;
  font-weight: bold;
  color: #151517;
`;

const HeadlineText = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #151517;
`;

const Text = styled.div`
  font-size: 14px;
`;

class Languages extends Component {
  mxKeyLocStor = () => {
    let mx = 0;
    for (let i = 0, len = localStorage.length; i < len; ++i) {
      if (localStorage.key(i) > mx) {
        mx = localStorage.key(i);
      }
    }
    return mx;
  };

  componentDidMount() {
    const key = Number(this.mxKeyLocStor()) + 1;

    const data = {
      id: key,
      name: this.props.name,
      email: this.props.email,
      phone: this.props.phone,
      birth: this.props.birth,
      languages: this.props.languages
    };

    if (
      data.name.name !== "" &&
      data.email.email !== "" &&
      data.phone.phone !== "" &&
      data.birth.birth !== "" &&
      data.languages.languages !== []
    ) {
      localStorage.setItem(Number(key), JSON.stringify(data));
    }
  }
  render() {
    return (
      <div className="row" style={{ marginLeft: "126px", paddingTop: "35px" }}>
        <div className="col-4 card-menu">
          <Title>HATO</Title>
          <div id="about pl-0">
            <Headline>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Headline>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </div>
        </div>
        <div className="col-4 card-menu ">
          <div className="card cardinfo scrollbar-dusty-grass thin" id="about">
            <HeadlineText>About HATO</HeadlineText>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </Text>
          </div>
        </div>
        <div className="col-4 card-menu">
          <div className="card cardinfo scrollbar-dusty-grass thin" id="about">
            <HeadlineText>About HATO</HeadlineText>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(state => ({
  ButtonState: state.statusBtn,
  name: state.userName,
  email: state.userMail,
  phone: state.userPhone,
  birth: state.userBirth,
  languages: state.checkLng
}))(Languages);
