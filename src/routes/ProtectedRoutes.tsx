import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { RootState } from '../store';

type ProtectRouteProps = {
    exact: boolean;
    path: RouteProps['path'];
    component: React.ElementType;
};

const ProtectedRoute : React.FC<ProtectRouteProps> = ({ component: Component, path, ...rest }) => {
    
    const isAuth = useSelector( (state: RootState) => state.isAuth.data );

    return (
        <Route { ...rest } render = { (props) => (
            Object.keys(isAuth).length > 0 ? <Component {...props}/> : <Redirect to="/auth"/>
        )}/>        
    );
}

export default ProtectedRoute;