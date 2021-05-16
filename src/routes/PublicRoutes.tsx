import React, { Component } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

type PublicRouteProps = {
    exact: boolean;
    path: RouteProps['path'];
    component: React.ElementType;
};

const PublicRoute: React.FC<PublicRouteProps> = ({ component: Component, path, ...rest }) => {
    
    const Auth = false;

    return (
        <Route { ...rest } render = {( props ) => (
            Auth ? <Redirect to = "/dashboard" /> : <Component {...props}/>
        )}/> 
    );
};

export default PublicRoute;