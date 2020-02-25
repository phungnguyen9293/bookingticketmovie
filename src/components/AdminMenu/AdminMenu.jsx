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
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                            <NavLink to='/'><Icon type="form" />Sign In</NavLink>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="desktop" />
                            <span>Option 2</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
            </Layout>
        )
    }
}
