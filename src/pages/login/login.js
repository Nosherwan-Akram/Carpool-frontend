import React, { Component } from "react";
import LoginForm from "./loginForm";
import styled from "styled-components";
import loginBG from "../../assets/backgrounds/loginBackground.svg";
import { Redirect, useLocation } from "react-router-dom";
import { loginRequest } from "../../services/open/auth";
import store from "../../redux/store";
import { login } from "../../redux/slices/user-slice";

class Login extends Component {
  state = {
    loginForm: {
      username: "",
      password: "",
      role: "user",
    },
    loggedIn: false,
  };

  setFormData = (formData) => {
    this.setState({ loginForm: formData });
    loginRequest(this.state.loginForm)
      .then((res) => {
        store.dispatch(login(res.payload));
        localStorage.setItem("token", res.payload.token);
        localStorage.setItem("role", res.payload.role);
        this.setState({ loggedIn: true, role: res.payload.role });
      })
      .catch((err) => alert({ err }));
  };
  render() {
    return (
      <LoginContainer className="conatiner-fluid">
        <div className="row align-items-stretch">
          <div className="col-lg-6 col-md-8 col-12 border-right bg-white d-flex justify-content-center align-items-center">
            <div className="content">
              <h2 className="text-success text-center">Login</h2>
              <LoginForm formSubmission={this.setFormData}></LoginForm>
            </div>
          </div>
        </div>
        {this.state.loggedIn && (
          <LoginRedirect role={this.state.role}></LoginRedirect>
        )}
      </LoginContainer>
    );
  }
}

export const LoginContainer = styled.div`
  min-height: 100vh;
  background: url(${loginBG});
  background-repeat: no-repeat;
  background-position: top-right;
  background-size: 100% auto;
  .row {
    min-height: 100vh;
  }
  @media (max-width: 786px) {
    padding-top: 60px;
  }
`;

export const LoginRedirect = (props) => {
  let location = useLocation();
  let path = props.role === "admin" ? "/admin/dashboard" : "user/searchRide";
  let { from } = location.state || { from: { pathname: path } };
  return <Redirect to={from}></Redirect>;
};

export default Login;
