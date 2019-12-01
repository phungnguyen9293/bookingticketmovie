import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Carousel from '../components/Carousel/Carousel';
import NewIn from '../components/NewIn/NewIn';
import ShowingFilmCal from '../components/ShowingFilmCal/ShowingFilmCal';
import ComingSoon from '../components/ComingSoon/ComingSoon';

const HomeLayout = ({...props}) => {
    return (
        <Fragment>
            <Header/>
            <Carousel/>
            <NewIn/>
            <ShowingFilmCal/>
            <ComingSoon/>
            {/* {props.children} */}
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