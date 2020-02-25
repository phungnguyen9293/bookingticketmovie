import React, { Component } from 'react';
import { connect } from 'react-redux';
import { layDanhSachPhim } from '../../redux/action/QuanLyPhimAction';
import Slider from "react-slick";
//slick-carousel css file
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from '../../components/Carousel/Carousel';
import ShowingFilmCal from '../../components/ShowingFilmCal/ShowingFilmCal';
import ComingSoon from '../../components/ComingSoon/ComingSoon';
import Promotion from '../../components/Promotion/Promotion';
import * as moment from 'moment';
import {Link} from 'react-router-dom';



class HomePage extends Component {
    componentDidMount(){
        hideButtonSlider();
    }
    componentDidUpdate(){
        hideButtonSlider();
    }


    renderDanhSachPhim = () => {
        return this.props.danhSachPhim.map((phim, index) => {
            return (
                <div className="item" key={index}>
                    <div className="newin__img">
                        <img src={phim.hinhAnh} alt={phim.hinhAnh}/>
                        <div className="newin__overlay">
                        </div>
                        <div className="newin__play">
                            <div>
                                <a href={phim.trailer}><i className="fa fa-play" aria-hidden="true" /></a>
                                <a href={phim.trailer}>READ MORE</a>
                                <p>Released: {moment(phim.ngayKhoiChieu).format('DD-MM-YYYY')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="newin__detail">
                        <p>{phim.tenPhim}</p>
                        <Link to={`/movie/${phim.maPhim}`}>ĐẶT VÉ</Link>
                    </div>
                </div>
            )
        })
    }

    componentDidMount = () => {
        this.props.dispatch(layDanhSachPhim());
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
            <div>
            <Carousel/>
            <div className='row container'>
                <div className="newIn">
                    <h2>New in</h2>
                    <Slider {...settings} className="container slider">
                        {this.renderDanhSachPhim()}

                    </Slider>
                </div>
            </div>
            <ComingSoon/>
            <Promotion/>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        danhSachPhim: state.QuanLyPhimReducer.danhSachPhim
    }
}
function hideButtonSlider(){
    document.querySelector('.slick-next').innerHTML = '›';
    document.querySelector('.slick-prev').innerHTML = '‹';

}

export default connect(mapStatetoProps)(HomePage)

