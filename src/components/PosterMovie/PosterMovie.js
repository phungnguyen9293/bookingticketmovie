import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { layChiTietPhim } from '../../redux/action/QuanLyPhimAction';
import * as moment from 'moment';
import {Link} from 'react-router-dom';

class PosterMovie extends Component {
    componentDidMount() {
        let {movieID} = this.props.match.params;
        this.props.dispatch(layChiTietPhim(movieID));

    }

    renderChiTietPhim = () => {
        return (
            <div className='poster__top'>
                <img className='bg-poster' src={this.props.chiTietPhim.hinhAnh} alt="" />
                <div className='bg-gradient'></div>
                <div className='container'>
                    <div className='poster_detail row '>
                        <div className='col-3'>
                            <img src={this.props.chiTietPhim.hinhAnh} alt="" />
                            <div className='trailer_button'>
                                <a href={this.props.chiTietPhim.trailer}>
                                    <i className="fa fa-play"></i>
                                </a>
                            </div>
                        </div>
                        <div className='col-6'>
                            <p>{moment(this.props.chiTietPhim.ngayKhoiChieu).format('DD-MM-YYYY')}</p>
                            <span className='age-limited'>C13</span>
                            <span className='movie-name'>{this.props.chiTietPhim.tenPhim}</span>
                            <p className='movie-duration'>123 phút - 0 IMDb - 2D/Digital</p>
                            <a href="#posterInfo" >Buy Ticket</a>
                        </div>
                        <div className='col-3 preview'>
                            <span>{this.props.chiTietPhim.danhGia}</span>
                            <div className='bar'></div>
                            <div className='fill'></div>
                            <div className='star'>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    renderLeftSideBar = () => {
        let { heThongRapChieu } = this.props.chiTietPhim;
        return heThongRapChieu.map((rapChieu, index) => {
            let active = index === 0 ? "active" : "";

            return (
                <a key={index} className={`nav-link ${active}`} id="v-pills-bhd-tab" data-toggle="pill" href={`${rapChieu.maHeThongRap}`} role="tab" aria-controls="v-pills-bhd" aria-selected="true">
                    <div className='tabcinema'>
                        <img src={rapChieu.logo} alt="" />
                        <div className='cinema-name'>
                            {rapChieu.tenHeThongRap}
                        </div>
                    </div>
                </a>
            )
        })
    }

    renderShowingTime = () => {
        let { heThongRapChieu } = this.props.chiTietPhim;
        return heThongRapChieu.map(({ cumRapChieu, maHeThongRap, tenHeThongRap, logo }, index) => {
            let active = index === 0 ? "active" : "";
            return <div key={index} className={`tab-pane fade show ${active}`} id={`${maHeThongRap}`} role="tabpanel" aria-labelledby="v-pills-bhd-tab">
                {cumRapChieu.map(({ lichChieuPhim, maCumRap, tenCumRap }, i) => {
                    return (
                        <Fragment key={i}>
                            <h4 className='text-success'>{tenCumRap}</h4>
                            <div className='row'>
                                {lichChieuPhim.map((lichChieu, iLichChieu) => {
                                    return (
                                    iLichChieu < 15 ? <Link to={`/booking/${lichChieu.maLichChieu}`} className='col-4 lichChieuPhim' key={iLichChieu} >{moment(lichChieu.ngayChieuGioChieu).format('DD-MM')}</Link> : ''
                                    )
                                })}
                            </div>
                        </Fragment>
                    )
                })}

            </div>
        })
    }


    render() {
        return (
            <div className='poster'>
                {this.renderChiTietPhim()}
                <div className='container' id='posterInfo'>
                    <div className='poster-information'>
                        <nav>
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Lịch Chiếu</a>                         
                            </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                <div>
                                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    {this.renderLeftSideBar()}
                                    </div>
                                    <div className="tab-content" id="v-pills-tabContent">
                                        {this.renderShowingTime()}
                                    </div>
                                </div>
                            </div>                           
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state);

    return {
        chiTietPhim: state.QuanLyPhimReducer.chiTietPhim || {
            heThongRapChieu: [{ cumRapChieu: [], maHeThongRap: '', tenHeThongRap: '', logo: '' }],
            maPhim: '',
            tenPhim: '',
            trailer: '',
            hinhAnh: '',
            moTa: '',
            ngayKhoiChieu: '',
            danhGia: ''
        }
    }
}

export default connect(mapStateToProps)(PosterMovie)

