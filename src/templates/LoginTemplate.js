import React, { Component, Fragment } from 'react';
import {Route} from 'react-router-dom';



const LoginLayout = ({...props}) => {
    return (
        <Fragment>
            {props.children}

        </Fragment>
    )
}



export const LoginTemplate = ({Component,...props}) => {
    return <Route {...props} render ={(propsComponent) => {
        return (
            <LoginLayout>
                <Component {...propsComponent}/>
            </LoginLayout>
        )
    }}
    />      
        }
