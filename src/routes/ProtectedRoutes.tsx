import React, { Component } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

type ProtectRouteProps = {
    exact: boolean;
    path: RouteProps['path'];
    component: React.ElementType;
};

const ProtectedRoute : React.FC<ProtectRouteProps> = ({ component: Component, path, ...rest }) => {
    
    const Auth = false;

    return (
        <Route { ...rest } render = { (props) => (
            Auth ? <Component {...props}/> : <Redirect to="/login"/>
        )}/>        
    );
}

export default ProtectedRoute;