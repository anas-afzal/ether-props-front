import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { RootState } from '../store'

type PublicRouteProps = {
    exact: boolean;
    path: RouteProps['path'];
    component: React.ElementType;
};

const PublicRoute: React.FC<PublicRouteProps> = ({ component: Component, path, ...rest }) => {
    
    const isAuth = useSelector( (state: RootState) => state.isAuth.status );

    return (
        <Route { ...rest } render = {( props ) => (
            isAuth ? <Redirect to = "/dashboard" /> : <Component {...props}/>
        )}/> 
    );
};

export default PublicRoute;