import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';
import { connect } from "react-redux";
import { Menu, Dropdown, Icon } from 'antd';
import { dangXuatAction } from '../../redux/action/QuanLyUserAction';



class Header extends Component {
    scrollFunction() {
        if (document.body.scrollTop > 650 || document.documentElement.scrollTop > 650) {
            document.getElementById("header_movie").style.backgroundColor = "#101010";
            document.getElementById("header_movie").style.top = "0";
            document.getElementById("header_movie").style.display = "block";
        } else {
            if (document.getElementById("header_movie")) {
                document.getElementById("header_movie").style.backgroundColor = "transparent";
                document.getElementById("header_movie").style.top = "15%";
                document.getElementById("header_movie").style.display = "block";
            }
        }
    }
    render() {
        window.onscroll = () => {
            this.scrollFunction()
        };

        const menu = (
            <Menu>
                <Menu.Item>
                    <NavLink to="/info" >
                        Booking History
              </NavLink>
                </Menu.Item>
                <Menu.Item>
                    <a onClick={() => this.props.dangXuat()}>
                        Sign Out
              </a>
                </Menu.Item>
            </Menu>
        );
        return (
            <header>
                <div className="header__movie-nav " id="header_movie">


                    <nav className="container header__movie navbar navbar-expand-lg navbar-dark pt-0">
                        <a className="navbar-brand" href="#">
                            <img src={logo} alt="logo movie" />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#movie" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="movie">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <NavLink className="nav-link" to="/" href="#carousel" exact>HOME</NavLink>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#newIn">Movie</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">SHORTCODES</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#comingsoon">NEWS</a>
                                </li>
                                {this.props.credential ? <Dropdown overlay={menu}>
                                    <a className="ant-dropdown-link nav-item" href="#">
                                        Hi, {this.props.credential.hoTen.toUpperCase()} <Icon type="down" />
                                    </a>
                                </Dropdown> : <p className="container text-white text-right mb-0">
                                        <li className="nav-item ">
                                            <NavLink className="nav-link" to="/signup">SIGN UP</NavLink>
                                        </li>
                                        <li className="nav-item ">
                                            <NavLink className="nav-link" to="/signin" >SIGN IN</NavLink>
                                        </li>
                                    </p>}
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>

        )
    }
}

const mapStateToProps = state => {
    return {
        credential: state.QuanLyUserReducer.credential
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dangXuat: () => {
            let signOut = null;
            dispatch(dangXuatAction(signOut))
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Header);



