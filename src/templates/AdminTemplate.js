import React, { Fragment } from 'react';
import {Route} from 'react-router-dom';
import AdminMenu from '../components/AdminMenu/AdminMenu';

const AdminLayout = ({...props}) => {
    return (
        <Fragment>
            <AdminMenu/>
            {props.children}
        </Fragment>
    )
};

export const AdminTemplate = ({Component, ...props}) =>  {
    return <Route {...props} render = {(propsComponent) => {
        return (
        <AdminLayout>
            <Component {...propsComponent}/>
        </AdminLayout>
        )
    }}/>

}
