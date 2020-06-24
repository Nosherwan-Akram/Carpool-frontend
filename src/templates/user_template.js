import React from "react";
import { Switch, useRouteMatch, Redirect } from "react-router-dom";
import UserHeader from "../sections/headers/user_header";
import { UserRoute } from "../services/authentication";
import styled from "styled-components";
import SearchRide from "../pages/user/search_ride";
import OfferedRides from "../pages/user/offered_ride";
import MakeRide from "../pages/user/make-ride/make_ride";
import BookedRides from "../pages/user/booked_rides";
export const UserTemplate = (props) => {
  const match = useRouteMatch();
  return (
    <UserWrapper>
      <UserHeader />
      <Switch>
        <UserRoute path={`${match.url}/offeredRides`}>
          <OfferedRides />
        </UserRoute>
        <UserRoute path={`${match.url}/bookedRides`}>
          <BookedRides />
        </UserRoute>
        <UserRoute path={`${match.url}/searchRide`}>
          <SearchRide />
        </UserRoute>
        <UserRoute path={`${match.url}/makeRide`}>
          <MakeRide />
        </UserRoute>
        <Redirect to="/user/searchRide" />
      </Switch>
    </UserWrapper>
  );
};
export const UserWrapper = styled.div`
  padding-top: 90px;
`;
