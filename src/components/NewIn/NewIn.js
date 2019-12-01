import React, { Component } from 'react'
import Slider from "react-slick";
//slick-carousel css file
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class NewIn extends Component {
    componentDidMount(){
        hideButtonSlider();
    }
    componentDidUpdate(){
        hideButtonSlider();
    }
    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
         
        };
        return (
            <div className="newIn">
                <h2>New in</h2>
                <Slider {...settings} className="container slider">
                    <div className="item">
                        <div className="newin__img">
                            <img src="./img/movie-1.jpg" alt='true' className="img-fluid" />
                            <div className="newin__overlay">
                            </div>
                            <div className="newin__play">
                                <div>
                                    <p><i className="fa fa-play" aria-hidden="true" /></p>
                                    <a href="#">READ MORE</a>
                                    <p>Released: 7 Mar, 2017</p>
                                </div>
                            </div>
                        </div>
                        <div className="newin__detail">
                            <p>The Last Post</p>
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                        </div>
                    </div>

                    <div className="item">
                        <div className="newin__img">
                            <img src="./img/movie-2.jpg" alt='true' className="img-fluid" />
                            <div className="newin__overlay">
                            </div>
                            <div className="newin__play">
                                <div>
                                    <p><i className="fa fa-play" aria-hidden="true" /></p>
                                    <a href="#">READ MORE</a>
                                    <p>Released: 7 Mar, 2017</p>
                                </div>
                            </div>
                        </div>
                        <div className="newin__detail">
                            <p>Dark and lonely</p>
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star blachstar" aria-hidden="true" />
                        </div>
                    </div>

                    <div className="item">
                        <div className="newin__img">
                            <img src="./img/movie-3.jpg" alt='true' className="img-fluid" />
                            <div className="newin__overlay">
                            </div>
                            <div className="newin__play">
                                <div>
                                    <p><i className="fa fa-play" aria-hidden="true" /></p>
                                    <a href="#">READ MORE</a>
                                    <p>Released: 7 Mar, 2017</p>
                                </div>
                            </div>
                        </div>
                        <div className="newin__detail">
                            <p>Venture</p>
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                        </div>
                    </div>

                    <div className="item">
                        <div className="newin__img">
                            <img src="./img/movie-4.jpg" alt='true' className="img-fluid" />
                            <div className="newin__overlay">
                            </div>
                            <div className="newin__play">
                                <div>
                                    <p><i className="fa fa-play" aria-hidden="true" /></p>
                                    <a href="#">READ MORE</a>
                                    <p>Released: 7 Mar, 2017</p>
                                </div>
                            </div>
                        </div>
                        <div className="newin__detail">
                            <p>Hush</p>
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star blachstar" aria-hidden="true" />
                            <i className="fa fa-star blachstar" aria-hidden="true" />
                        </div>
                    </div>

                    <div className="item">
                        <div className="newin__img">
                            <img src="./img/movie-5.jpg" alt='true' className="img-fluid" />
                            <div className="newin__overlay">
                            </div>
                            <div className="newin__play">
                                <div>
                                    <p><i className="fa fa-play" aria-hidden="true" /></p>
                                    <a href="#">READ MORE</a>
                                    <p>Released: 7 Mar, 2017</p>
                                </div>
                            </div>
                        </div>
                        <div className="newin__detail">
                            <p>The Last Post</p>
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                        </div>
                    </div>

                </Slider>
            </div>
        )
    }
}

function hideButtonSlider(){
    document.querySelector('.slick-next').innerHTML = '›';
    document.querySelector('.slick-prev').innerHTML = '‹';

}