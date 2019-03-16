import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './HOC/layout';
import Auth from './HOC/auth';

import Home from './components/Home/index';
import RegisterLogin from './components/Register_login/index';
import Register from './components/Register_login/register';
import Shop from './components/Shop';

import UserDashboard from './components/User';

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/user/dashboard" exact component={Auth(UserDashboard, true)}/>

        <Route path="/register" exact component={Auth(Register, false)}/>
        <Route path="/register_login" exact component={Auth(RegisterLogin, false)}/>
        <Route path="/shop" exact component={Auth(Shop, null)}/>
        <Route path="/" exact component={Auth(Home, null)}/>
      </Switch>
    </Layout>
  )
}

export default Routes;
