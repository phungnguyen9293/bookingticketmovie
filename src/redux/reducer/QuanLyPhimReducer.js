import { LAY_DANH_SACH_PHIM, LAY_CHI_TIET_PHONG_VE } from '../constant/type';
import { LAY_CHI_TIET_PHIM } from '../constant/type'

const stateDefault = {
    danhSachPhim: [],
    chiTietPhim: null,
    chiTietPhongVe: null
}

export const QuanLyPhimReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case LAY_DANH_SACH_PHIM:

            state.danhSachPhim = action.danhSachPhim
            return { ...state };

        case LAY_CHI_TIET_PHIM:
            state.chiTietPhim = action.payload
            return { ...state };
        
        case LAY_CHI_TIET_PHONG_VE:
            //thêm thuộc tính Đang Đặt vào danhSachGhe
            state.chiTietPhongVe = {...action.payload, danhSachGhe: action.payload.danhSachGhe.map((ghe, index) => {
                return {...ghe, dangDat: false}
            })}
            return {...state};

        case "DAT_GHE" :{
            let danhSachGhe = [...state.chiTietPhongVe.danhSachGhe];
            let index = danhSachGhe.findIndex(gheDangDat => gheDangDat.maGhe === action.ghe.maGhe);
            danhSachGhe[index].dangDat = !danhSachGhe[index].dangDat;
            console.log(danhSachGhe);
            return {...state, chiTietPhongVe: {...state.chiTietPhongVe, danhSachGhe: [...danhSachGhe]}}
        }
        default:
            return state;
    }
}