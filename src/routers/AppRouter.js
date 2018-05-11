import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import RegisterPage from '../components/RegisterPage';
import Categories from '../components/Categories';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import HomePage from '../components/HomePage';
import PostNewAd from '../components/PostNewAd';
import MyAds from '../components/MyAds';
import NormalLoginForm from '../components/AntTest';
import DashBoardMemberArea from '../components/DashboardMemberArea';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={HomePage} exact={true} />
        <PublicRoute path="/login" component={LoginPage} /> 
        <PublicRoute path="/register" component={RegisterPage} /> 
        <PublicRoute path="/myads" component={MyAds} /> 
        <PublicRoute path="/postad" component={PostNewAd} /> 
        <PublicRoute path="/memberarea" component={DashBoardMemberArea} />
        <PublicRoute path="/ant" component={NormalLoginForm} /> 
        <PublicRoute path="/categories" component={Categories} /> 
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
