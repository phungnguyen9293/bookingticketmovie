import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Tabs, Radio } from 'antd';

const {TabPane} = Tabs;

export default class ShowingFilmCal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'left'
        };
    }
    render() {
        const { mode } = this.state;
        return (
            <div className='container'>
                <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 325 }}>
                    {[...Array(6).keys()].map(i => (
                        <TabPane tab={`Tab-${i}`} key={i}>
                            <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 325 }}>
                    {[...Array(6).keys()].map(i => (
                        <TabPane tab={`Tab-${i}`} key={i}>
                            Content of tab {i}
                        </TabPane>
                    ))}
                </Tabs>
                        </TabPane>
                    ))}
                </Tabs>
            </div>
        )
    }
}
