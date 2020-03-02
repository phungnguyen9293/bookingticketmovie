import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { layThongTinPhongVe } from '../../redux/action/QuanLyPhimAction';
import screen from '../../assets/img/screen.png';
import warning from '../../assets/img/exclamation.png';
import { settings } from '../../config/settings';
import { datVeXemPhimAction } from '../../redux/action/QuanLyUserAction';
import Swal from 'sweetalert2';

class BookingTicket extends Component {

    componentDidMount() {
        let {showtimeID} = this.props.match.params;
        this.props.layChiTietPhongVe(showtimeID);
    }

    renderCineTitle = () => {
        let { thongTinPhim } = this.props.chiTietPhongVe;
        return (
            <div className='cineName'>
                <p>{thongTinPhim.tenCumRap}</p>
                <p>{thongTinPhim.diaChi}</p>
                <p>{thongTinPhim.tenRap}</p>
            </div>
        )
    }

    renderSeat = () => {
        let { danhSachGhe } = this.props.chiTietPhongVe;
        return danhSachGhe.map((seat, index) => {
            return (
                <Fragment key={index}>
                    {this.renderButton(seat)}
                    {(index + 1) % 16 === 0 ? <br></br> : ''}
                </Fragment>
            )
        })
    }

    renderButton = (ghe) => {
        let gheVIP = ghe.loaiGhe === "Vip" ? "gheVip" : "";
        if (ghe.daDat) {
            return <button className={`ghe gheDaDat ${gheVIP}`} disabled>X</button>
        }
        else {
            if (ghe.dangDat) {
                return <button onClick={() => this.props.datGhe(ghe)} className={`ghe gheDangDat ${gheVIP}`}>{ghe.stt}</button>
            } else {
                return <button onClick={() => this.props.datGhe(ghe)} className={`ghe ${gheVIP}`}>{ghe.stt}</button>
            }
        }
    }

    renderRightBar = () => {
        let { thongTinPhim, danhSachGhe } = this.props.chiTietPhongVe;
        let tongTien = danhSachGhe.reduce((sum, ghe, index) => {
            if (ghe.dangDat) {
                return sum += Number(ghe.giaVe)
            } else {
                return sum;
            }
        }, 0)
        return (
            <Fragment>
                <div className='total'>
                    <p>{tongTien.toLocaleString()}</p>
                </div>
                <div className='movieDetail'>
                    <span className='rate'>C16</span>
                    <span className='mvName'>{thongTinPhim.tenPhim}</span>
                    <p>{thongTinPhim.tenCumRap} </p>
                    <p>{thongTinPhim.tenRap}</p>
                    <p>{thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu}</p>
                </div>
                <div className='seatInfo'>
                    <span>Ghế:</span>
                    {danhSachGhe.map((ghe, index) => {
                        if (ghe.dangDat) {
                            return (
                                <div key={index}>
                                    <span className='seat-number'>{ghe.stt}</span>
                                    <span className='price'>{ghe.giaVe.toLocaleString()}</span>
                                </div>
                            )
                        } else {
                            return ""
                        }
                    })}
                </div>
                <div className='warning'>
                    <img src={warning} alt="" />
                    <span>Vé đã mua không thể đổi hoặc hoàn tiền</span>
                </div>
                <button onClick={() => this.datVeXemPhim()} className='btn btn-success bookingTicket'>Đặt Vé</button>
            </Fragment>
        )
    }
    datVeXemPhim = () => {
        //Lay tai khoan dang nhap tu localstorage
        let sUserLogin = localStorage.getItem(settings.userLogin);
        let userLogin = JSON.parse(sUserLogin);
        
        if(userLogin === null){
            Swal.fire({
                icon : 'error',
                title: 'Vui lòng đăng nhập!'
            }).then(res => {
                window.location.href = '/signin'
            })
        }else{
            let objectDatVe = {
                "maLichChieu": this.props.match.params.showtimeID,
                "danhSachVe": this.props.chiTietPhongVe.danhSachGhe.filter(gheDangDat => gheDangDat.dangDat === true),
                "taiKhoanNguoiDung": userLogin.taiKhoan
            }
            this.props.datVe(objectDatVe);

        }
        
    }
    render() {
        return (
            <div>
                <div className='row '>
                    <div className='col-8 seat'>
                        {this.renderCineTitle()}
                        <div className='row'>
                            <div className='col-12 screen'>
                                <img src={screen} alt="" />
                            </div>
                            <div className='cineSeat mt-5' style={{ justifyContent: 'center' }}>
                                {this.renderSeat()}
                            </div>
                        </div>
                    </div>
                    <div className='col-4 payTicket'>
                        {this.renderRightBar()}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        chiTietPhongVe: state.QuanLyPhimReducer.chiTietPhongVe || {
            thongTinPhim: {},
            danhSachGhe: []
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    //tương dương this.props.dispatch (action())
    return {
        layChiTietPhongVe: (maLichChieu) => {
            dispatch(layThongTinPhongVe(maLichChieu));
        },
        datGhe: (ghe) => {
            dispatch({
                type: 'DAT_GHE',
                ghe: ghe
            })
        },
        datVe: (thongTinDatVe) => {
            dispatch(datVeXemPhimAction(thongTinDatVe))
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(BookingTicket)