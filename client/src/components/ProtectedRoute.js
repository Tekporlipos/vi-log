import React, { Component } from "react";
import {Route, Redirect} from 'react-router-dom'

const ProtectedRoute = ({ auth, component: Component, ...rest}) => {
    return (
        <Route {...rest} 
        render={(props) => {
            if(auth) return <Component {...props} />
            if(!auth) 
                return <Redirect to={{path: '/adminlogin', state: {from: props.location}}} />
        }}/>
    )
}

export default ProtectedRoute