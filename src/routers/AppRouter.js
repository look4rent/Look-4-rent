import React from "react";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import Dashboard from "../components/Dashboard";
import NotFoundPage from "../components/NotFoundPage";
import LoginPage from "../components/LoginPage";
import RegisterPage from "../components/RegisterPage";
import Categories from "../components/Categories";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import HomePage from "../components/HomePage";
import PostNewAd from "../components/PostNewAd";
import MyAds from "../components/MyAds";
import PartialAd from "../components/PartialAd";
import FullAd from "../components/fullAd";
import SliderCategory from "../components/SliderCategory";
import EditProfile from "../components/EditProfile";
import Watchlist from "../components/Watchlist";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        {/* Public Routes Section */}
        <PublicRoute path="/" component={HomePage} exact={true} />
        <PublicRoute path="/login" component={LoginPage} />
        <PublicRoute path="/register" component={RegisterPage} />
        <PublicRoute path="/categories" component={Categories} />
        <PublicRoute path="/partialAd" component={PartialAd} />
        <PublicRoute path="/fullAd" component={FullAd} />
        <PublicRoute path="/SliderCategory" component={SliderCategory} />
        
        {/* Private Routes Section */}
        <PrivateRoute path="/dashboard" component={Dashboard} sideNavKey="1" />
        <PrivateRoute path="/postad" component={PostNewAd} sideNavKey="2" />
        <PrivateRoute path="/myads" component={MyAds} sideNavKey="3" />
        <PrivateRoute path="/watchlist" component={Watchlist} sideNavKey="4" />
        <PrivateRoute path="/editprofile" component={EditProfile} sideNavKey="5"/>

        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
