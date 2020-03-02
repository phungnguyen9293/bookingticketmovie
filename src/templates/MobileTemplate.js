import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';



const MobileLayout = ({ ...props }) => {
    return (
        <Fragment>
            {props.children}

        </Fragment>
    )
}

export const MobileTemplate = ({ Component, ...props }) => {
    return <Route {...props} render={(propsComponent) => {
        return (
            <MobileLayout>
                <Component {...propsComponent} />
            </MobileLayout>
        )
    }}
    />
}
