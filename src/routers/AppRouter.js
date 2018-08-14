import React from "react";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import NotFoundPage from "../components/NotFoundPage";
import LoginPage from "../components/LoginPage";
import RegisterPage from "../components/RegisterPage";
import Categories from "../components/Categories";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import HomePage from "../components/HomePage";
import PartialAd from "../components/PartialAd";
import FullAd from "../components/fullAd";
import Filter from "../components/Filter";
import SliderCategory from "../components/SliderCategory";

//Member Area Components
import Dashboard from "../MemberArea/components/Dashboard";
import PostNewAd from "../MemberArea/components/PostNewAd";
import MyAds from "../MemberArea/components/MyAds";
import EditProfile from "../MemberArea/components/EditProfile";
import Watchlist from "../MemberArea/components/Watchlist";
import filter from "../components/Filter";

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
        <PublicRoute path="/filter" component={filter} />
        
        {/* Private Routes Section */}
        <PrivateRoute path="/dashboard" component={Dashboard} sideNavKey='1'/>
        <PrivateRoute path="/postad" component={PostNewAd} sideNavKey='2'/>
        <PrivateRoute path="/myads" component={MyAds} sideNavKey='3'/>
        <PrivateRoute path="/watchlist" component={Watchlist} sideNavKey='4'/>
        <PrivateRoute path="/editprofile" component={EditProfile} sideNavKey='5'/>

        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
