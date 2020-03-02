import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import {NavLink} from 'react-router-dom';

const { Sider } = Layout;

export default class AdminMenu extends Component {
    state = {
        collapsed: false
    };

    onCollapse = collapsed => {
        this.setState({ collapsed })
    };

    render() {
        return (
            <iframe width="560" height="315" src="https://www.youtube.com/embed/N8oKDQIgSnk" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" sandbox="allow-popups allow-scripts" ></iframe>
        )
    }
}

