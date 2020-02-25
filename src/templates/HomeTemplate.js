import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';


const HomeLayout = ({...props}) => {
    return (
        <Fragment>
            <Header/>            
            {props.children}        
            <Footer/>
        </Fragment>
    )
}

export const HomeTemplate = ({Component,...props}) => {
    return <Route {...props} render={(propsComponent) => {
        return (
            <HomeLayout>
                <Component {...propsComponent}/>
            </HomeLayout>
        )
    }}
    />
}




