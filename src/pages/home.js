import React, { Component } from "react";
import styled from "styled-components";
import homeBG from "../assets/backgrounds/homeBGSecond.svg";
import logo from "../assets/icons/carPoolLogo.svg";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {};
  render() {
    return (
      <HomeContainer className="px-2 d-flex align-items-center">
        <div className="content">
          <LogoHome>
            <img src={logo} className="h-100" alt=""></img>
          </LogoHome>
          <Link className="btn btn-success py-3 px-5 rounded-pill" to="/signup">
            Register
          </Link>
        </div>
      </HomeContainer>
    );
  }
}

export const HomeContainer = styled.div`
  min-height: 100vh;
  background: url(${homeBG});
  background-position: top right;
  background-size: auto 100%;
  background-repeat: no-repeat;
  @media (max-width: 992px) {
    background: none;
  }
`;

export const LogoHome = styled.div`
  height: 120px;
`;

export default Home;
