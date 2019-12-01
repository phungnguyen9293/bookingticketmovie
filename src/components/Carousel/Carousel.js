import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';


export default class Carousels extends Component {
    render() {
        return (
            <Carousel autoplay effect="fade">
                <div className="carousel-item">
                    <img src="./img/hero-1.jpg" className="d-block w-100" alt="..." />
                    <div className="container caption  d-none d-md-block">
                        <span className="span__title">ACTION, ADVENTURE, FANTASY</span>
                        <h1>End of the World: Part II</h1>
                        <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum.</p>
                        <div className="carousel-icon">
                            <span className="limited">PG</span>
                            <button><i className="fa fa-play" aria-hidden="true" />PLAY TRAILER</button>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div>
                        <img src="./img/hero-2.jpg" className="d-block w-100" alt="..." />
                        <div className="container caption d-none d-md-block">
                            <span className="span__title">ACTION, ADVENTURE, FANTASY</span>
                            <h1>End of the World: Part II</h1>
                            <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum.</p>
                            <div className="carousel-icon">
                                <span className="limited">15</span>
                                <button><i className="fa fa-play" aria-hidden="true" />PLAY TRAILER</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div>
                        <img src="./img/hero-3.jpg" className="d-block w-100" alt="..." />
                        <div className="container caption d-none d-md-block">
                            <span className="span__title">ACTION, ADVENTURE, FANTASY</span>
                            <h1>End of the World: Part II</h1>
                            <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum.</p>
                            <div className="carousel-icon">
                                <span className="limited">PG</span>
                                <button><i className="fa fa-play" aria-hidden="true" />PLAY TRAILER</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
        )
    }
}
