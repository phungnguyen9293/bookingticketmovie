import React, { Component } from 'react'

export default class ComingSoon extends Component {
    
    render() {
        return (
            <div className="comingsoon__content container">
                <h2>COMING SOON</h2>
                <div className="row ">
                    <div className="col-6 comingsoon__details">
                        <p>HORROR, THRILLER</p>
                        <h3>Deepwater Horizon</h3>
                        <p><i className="fa fa-star" /> <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-calendar" />06 December, 2019
                        </p>
                        <p className="comingsoon-text">Philip, a solitary proof reader, is trapped in his apartment, too afraid to leave and tortured by an unknown evil force that has kept him prisoner for the last two years.</p>
                        <a href="#">MORE INFO<i className="fa fa-angle-right" /></a>
                    </div>
                    <div className="col-6 comingsoon__video">
                        <div className="video__img">
                            <img src="./img/bay-quy.jpg" alt=''/>
                        </div>
                        
                        <a className="venobox vbox-item" data-vbtype='video' href="https://youtu.be/9-7EpUapYX0">Demo</a>
                    </div>
                </div>
            </div>

        )
    }
}

