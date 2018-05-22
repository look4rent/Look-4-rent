import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Header from "../components/Header";
import DashboardMemberArea from "../MemberArea/components/DashboardMemberArea";

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  sideNavKey,
  ...rest
}) => (
  <Route
    {...rest}
    component={props =>
      isAuthenticated ? (
        <div>
          <DashboardMemberArea sideNavKey={sideNavKey}>
            <Component />
          </DashboardMemberArea>
        </div>
      ) : (
        <Redirect to="/" />
      )
    }
  />
);
const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);
