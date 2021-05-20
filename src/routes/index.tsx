import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PublicRoute from './PublicRoutes';
import ProtectedRoute from './ProtectedRoutes';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import DashBoard from '../pages//DashBoard';
import NoMatch from '../pages/NoMatch';


const Routes : React.FC = () => {
    return (
        <div>
           <Router>
               <Switch>
                    <PublicRoute exact path = "/" component = { Home }/>
                    <PublicRoute exact path = "/signin" component = { SignIn } />
                    <ProtectedRoute exact path = "/dashboard" component = { DashBoard }/>
                    <Route path = "*" component = { NoMatch }/>
                </Switch>
            </Router>
        </div>
    );
}

export default Routes;