import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import LoginContainer from './containers/LoginContainer';
import SignUpContainer from './containers/SignUpContainer';
import DashboardContainer from './containers/DashboardContainer';
import ThankYouMsgContainer from "./containers/ThankYouMsgContainer";

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={LoginContainer} />
      <Route exact path="/signup" component={SignUpContainer} />
      <Route exact path="/dashboard" component={DashboardContainer} />
      <Route exact path="/thankyou" component={ThankYouMsgContainer} />
    </Switch>
  </Router>
);
