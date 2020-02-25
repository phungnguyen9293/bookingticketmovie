import axios from 'axios';
import { settings } from '../../config/settings';
import { LAY_DANH_SACH_PHIM, LAY_CHI_TIET_PHONG_VE } from '../constant/type';
import { LAY_CHI_TIET_PHIM } from '../constant/type'



//Action lấy danh sách phim => đưa danh sách phim về reducer
export const layDanhSachPhim = () => {
    return dispatch => {
        axios({
            url: settings.domain + '/api/quanlyphim/laydanhsachphim?manhom=' + settings.groupId,
            method: "GET"
        }).then(res => {
            dispatch({
                type: LAY_DANH_SACH_PHIM,
                danhSachPhim: res.data
            })
        })
    }
}

//Action lấy chi tiết phim => đưa chi tiết phim về reducer
export const layChiTietPhim = (movieId) => {
    return dispatch => {
        axios({
            url: `${settings.domain}/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`,
            method: "GET"
        }).then(res => {
            dispatch({
                type: LAY_CHI_TIET_PHIM,
                payload: res.data
            })
        }).catch(err => {
            console.log(err);
        })
    }
}

//Action lấy chi tiết phòng vé => đưa chi tiết phòng vé về reducer
export const layThongTinPhongVe = (maLichChieu) => {
    return dispatch => {
        axios({
            url: settings.domain + '/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=' + maLichChieu,
            method: "GET",
          
        }).then(res => {
            dispatch({
                type: LAY_CHI_TIET_PHONG_VE,
                payload:res.data
            })
        }).catch(err => {
            console.log(err)
        })
    }
}



