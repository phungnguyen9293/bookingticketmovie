import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';


const BookingLayout = ({ ...props }) => {
    return (
    <Fragment>
        {props.children}
    </Fragment>
    )
}

export const BookingTemplate = ({ Component, ...props }) => {
    return <Route {...props} render={(propsComponent) => {
        return (
            <BookingLayout>
                <Component {...propsComponent} />
            </BookingLayout>
        )
    }}
    />
}
