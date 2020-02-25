import React, { Component } from 'react'

export default class ComingSoon extends Component {

    render() {
        return (
            <div className="comingsoon " id="comingsoon">
            <div className="comingsoon__content container">
                <h2>COMING SOON</h2>
                <div className="row ">
                    <div className="col-6 comingsoon__details">
                        <p className='comingsoon__title'>DRAMA, THRILLER</p>
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
                            <img src="./img/slide-1-video.png" alt='' />
                        </div>

                        <a className="venobox" data-type="vimeo" href="https://vimeo.com/81143195">
                        <i className="fa fa-play"></i>
                        </a>
                        
                      

                    </div>
                </div>
            </div>
            </div>
        )
    }
}

