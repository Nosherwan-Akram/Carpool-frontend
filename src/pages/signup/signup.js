import React, { Component } from "react";
import signupBG from "../../assets/backgrounds/signupBackground.svg";
import styled from "styled-components";
import SignupForm from "./signupForm";
import { signupRequest } from "../../services/open/auth";
import { Redirect } from "react-router-dom";

class Signup extends Component {
  state = {
    signedUp: false,
  };
  registerUser = (formData) => {
    signupRequest(formData).then((res) => {
      if (res.msgtype === "success") {
        console.log(res);
        this.setState({ signedUp: true });
      }
    });
  };
  render() {
    return (
      <SignupContainer className="container-fluid">
        <div className="row align-items-strech">
          <div className="col-lg-6 col-md-8 col-12 bg-white border-right d-flex align-items-center justify-content-center">
            <div className="content">
              <h2 className=" text-success text-center">Signup</h2>
              <SignupForm registerHandler={this.registerUser}></SignupForm>
              {this.state.signedUp && <Redirect to="/login"></Redirect>}
            </div>
          </div>
        </div>
      </SignupContainer>
    );
  }
}

export const SignupContainer = styled.div`
  min-height: 100vh;
  background: url(${signupBG});
  background-repeat: no-repeat;
  background-position: right center;
  background-size: auto 100%;
  .row {
    min-height: 100vh;
  }
  @media (max-width: 786px) {
    padding-top: 60px;
  }
`;

export default Signup;
