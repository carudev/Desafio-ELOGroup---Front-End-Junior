import React from 'react';
import {Route, BrowserRouter  } from 'react-router-dom';

import Login from '../pages/login';
import CreateLeads from '../pages/createLeads';
import Leads from '../pages/leads';


const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Login} exact path="/login" />
            <Route component={Leads} exact path="/leads" />
            <Route component={CreateLeads} exact path="/create-leads" />
            {/*<Route component={PageError}/>*/}
        </BrowserRouter>
    );
}
export default Routes;