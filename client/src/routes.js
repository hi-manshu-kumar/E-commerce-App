import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Layout from './hoc/layout';
import Home from './component/Home';
import RegisterLogin from './component/Register_login'

const Routes = () => {
    return(
        <Layout>
            <Switch>
                <Route path="/register_login" exact component={RegisterLogin}/>
                <Route path="/" exact component={Home}/>
            </Switch>
        </Layout>    
    )
}

export default Routes;