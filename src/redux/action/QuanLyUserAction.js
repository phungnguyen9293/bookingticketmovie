import axios from 'axios';
import {settings} from '../../config/settings'
import {DANG_NHAP_NGUOI_DUNG,SET_USERLOGIN_FROM_STORAGE, DANG_XUAT, LAY_THONG_TIN_USER} from '../constant/type';
import Swal from 'sweetalert2';

//Action đăng ký người dùng
export const dangKyNguoiDung = (values) => {
    return dispatch => {
        axios({
            url: settings.domain + '/api/QuanLyNguoiDung/DangKy',
            method: "POST",
            data: values
        }).then(res => {
            Swal.fire({
                icon: 'success',
                title:'Đăng ký thành công'
            }).then(result => {
                window.location.href = '/signin';

            });
        }).catch(err => {
            console.log(err)
        })
    }
}

export const dangNhapNguoiDung = (values) => {
    return dispatch => {
        axios({
            url: settings.domain + '/api/QuanLyNguoiDung/DangNhap',
            method: "POST",
            data: values
        }).then(res => {
            //Lưu thông tin người dùng vào localstore và token
            localStorage.setItem(settings.userLogin,JSON.stringify(res.data));
            localStorage.setItem(settings.accessToken,res.data.accessToken);
            dispatch({
                type: DANG_NHAP_NGUOI_DUNG,
                payload: res.data
            });
            Swal.fire({
                icon: 'success',
                title: 'Đăng nhập thành công'
            }).then(result => {
                window.location.href = '/';
            })
        }).catch(err => {
            console.log(err)
            Swal.fire({
                icon : 'error',
                title: 'Tài khoản hoặc mật khẩu không chính xác!'
            })
        })
    }
}


export const datVeXemPhimAction = (thongTinDatVe) => {
    // {
    //     "maLichChieu": 0,
    //     "danhSachVe": [
    //       {
    //         "maGhe": 0,
    //         "giaVe": 0
    //       }
    //     ],
    //     "taiKhoanNguoiDung": "string"
    //   }
    console.log(thongTinDatVe)
    console.log( 'Bearer ' + localStorage.getItem(settings.accessToken))
    return dispatch => {
        axios({
            url:settings.domain + '/api/QuanLyDatVe/DatVe',
            method:'post',
            data: thongTinDatVe,
            headers: {'Authorization': 'Bearer ' + localStorage.getItem(settings.accessToken)}
        }).then(res => {
            Swal.fire({
                icon: 'success',
                title: 'Đặt vé thành công'
            }).then(result => {
                window.location.href = '/';
            })

        }).catch(error => {
            console.log(error)
            // console.log(error.response.data);
        })
    }
}

export const setUserLoginFromStorageAction = (userLogin) =>{
    return {
        type:SET_USERLOGIN_FROM_STORAGE,
        userLogin
    }
}

export const dangXuatAction = (signOut) => {
    return dispatch => {
       localStorage.setItem(settings.userLogin, signOut);
       localStorage.setItem(settings.accessToken, signOut);
       dispatch({
           type: DANG_XUAT,
           payload: signOut
       });     
       window.location.href= '/';   
    }
}

export const layThongTinUserAction = (taiKhoan) => {
    return dispatch => {
        axios({
            url: settings.domain + "/api/QuanLyNguoiDung/ThongTinTaiKhoan",
            method: "POST",
            data: taiKhoan,
            headers: {'Authorization' : 'Bearer' + localStorage.getItem(settings.accessToken)}
        }).then(res => {
            console.log(res)
            dispatch({
                type: LAY_THONG_TIN_USER,
                payload: res.data
            })
        }).catch(err => {
            console.log(err)
        })
    }
}