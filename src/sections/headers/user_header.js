import styled from "styled-components";
import React from "react";
import BrandIcon from "../../widgets/brand_icon";
import carPoolLogo from "../../assets/icons/carPoolLogo.svg";
import { NavLink, useHistory } from "react-router-dom";
// import AccountBadge from "../../../widgets/account-badge/account-badge";
const UserHeader = (props) => {
  let history = useHistory();
  let signOut = () => {
    localStorage.removeItem("token");
    history.push("/");
  };
  return (
    <UserHeaderContainer className="fixed-top d-flex align-items-center justify-content-between px-2">
      <BrandIcon image={carPoolLogo} to="user/searchRide" />
      <div className="links">
        {links.map((route, i) => (
          <NavLink
            key={i}
            to={route.route}
            activeClassName="btn-dark"
            className="btn btn-success rounded-pill mx-1"
          >
            {route.linkName}
          </NavLink>
        ))}
        <NavLink
          to="/login"
          className="btn btn-danger rounded-pill mx-1"
          onClick={() => signOut()}
        >
          Sign Out
        </NavLink>
      </div>
      {/* <AccountBadge links={true}/> */}
    </UserHeaderContainer>
  );
};

export const UserHeaderContainer = styled.div`
  height: 60px;
  background-color: #dddddd;
  z-index: 99;
`;

export const links = [
  {
    linkName: "Book a Ride",
    route: "/user/searchRide",
  },
  {
    linkName: "Do a Drive",
    route: "/user/makeRide",
  },
  {
    linkName: "Booked Rides",
    route: "/user/bookedRides",
  },
  {
    linkName: "Offered Rides",
    route: "/user/offeredRides",
  },
];

export default UserHeader;
