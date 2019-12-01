import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export default class Header extends Component {
    render() {
        window.onscroll = function() {
            scrollFunction()
        };
        return (
                <header>
                    <p className="container text-white text-right mb-0"><i className="fa fa-phone" aria-hidden="true" />
                        <span className="mx-3 pr-2 border-right">0330 123 4567</span> <i className="fa fa-search" aria-hidden="true" /></p>
                    <div className="header__movie-nav " id="header_movie">
                        <nav className="container header__movie navbar navbar-expand-lg navbar-dark pt-0">
                            <a className="navbar-brand" href="#">
                                <img src="./img/logo.svg" alt="logo movie" />
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#movie" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="movie">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">HOME</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">WHAT'S ON</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">SHORTCODES</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">NEWS</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">CONTACT</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#" data-toggle="modal" data-target="#exampleModal">SIGN IN</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </header>
           
        )
    }
}





function scrollFunction() {
    if (document.body.scrollTop > 650 || document.documentElement.scrollTop > 650) {
        document.getElementById("header_movie").style.backgroundColor = "#101010";
        document.getElementById("header_movie").style.top = "0";
        document.getElementById("header_movie").style.display = "block";
    } else {
        document.getElementById("header_movie").style.backgroundColor = "transparent";
        document.getElementById("header_movie").style.top = "15%";
        document.getElementById("header_movie").style.display = "block";
    }
}
