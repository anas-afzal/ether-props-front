import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PublicRoute from './PublicRoutes';
import ProtectedRoute from './ProtectedRoutes';
import HomePage from '../pages/HomePage';
import LogIn from '../pages/LogIn';
import DashBoard from '../pages//DashBoard';
import NoMatch from '../pages/NoMatch';


const Routes : React.FC = () => {
    return (
        <div>
           <Router>
               <Switch>
                    <PublicRoute exact path = "/" component = { HomePage }/>
                    <PublicRoute exact path = "/login" component = { LogIn } />
                    <ProtectedRoute exact path = "/dashboard" component = { DashBoard }/>
                    <Route path = "*" component = { NoMatch }/>
                </Switch>
            </Router>
        </div>
    );
}

export default Routes;