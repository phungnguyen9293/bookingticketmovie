import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import {HomeTemplate} from './templates/HomeTemplate';

function App() {
  return (
    <BrowserRouter>
    {/* <Demo /> */}
    <Switch>
      <HomeTemplate path='/' exact Component={HomePage}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
