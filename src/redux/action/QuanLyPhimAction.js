import axios from 'axios';
import {settings} from '../../config/settings';
import {LAY_DANH_SACH_PHIM} from '../constant/type';



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

