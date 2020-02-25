import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import {HomeTemplate} from './templates/HomeTemplate';
import PosterMovie from './components/PosterMovie/PosterMovie';
import BookingTicket from './components/BookingTicket/BookingTicket';
import {BookingTemplate} from './templates/BookingTemplate';
import { LoginTemplate } from './templates/LoginTemplate';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import {connect} from 'react-redux';
import {settings} from './config/settings';
import {DANG_NHAP_NGUOI_DUNG} from './redux/constant/type'
import {setUserLoginFromStorageAction} from './redux/action/QuanLyUserAction';
import AccInfo from './components/AccountInfo/AccInfo';
import { AdminTemplate } from './templates/AdminTemplate';
import AdminSignIn from './components/AdminSignIn/AdminSignIn'
class App extends Component{
  render(){
    return (
      <BrowserRouter>
      {/* <Demo /> */}
      <Switch>
        <HomeTemplate path='/' exact Component={HomePage}/>
        <HomeTemplate path='/movie/:movieID' exact Component={PosterMovie}/>
        <HomeTemplate path='/info' exact Component={AccInfo}/>
        <BookingTemplate path='/booking/:showtimeID' exact Component={BookingTicket}/>
        <LoginTemplate path='/signup' exact Component={SignUp}/>
        <LoginTemplate path='/signin' exact Component={SignIn}/>  
        <AdminTemplate path='/admin' exact Component={AdminSignIn}/>      
      </Switch>
      </BrowserRouter>
    );
  }

  componentDidMount(){
    this.props.setUserLoginFromStorage();
    // this._getCredentialFromLocal()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUserLoginFromStorage: () => {
      //Lây user login từ storage
      let userLogin = null;
      if(localStorage.getItem(settings.userLogin)) {
        userLogin = JSON.parse(localStorage.getItem(settings.userLogin));
      }
      dispatch(setUserLoginFromStorageAction(userLogin))
    }
  }
}

export default connect(null,mapDispatchToProps)(App);
