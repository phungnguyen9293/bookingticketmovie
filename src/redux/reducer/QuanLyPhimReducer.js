import {LAY_DANH_SACH_PHIM} from '../constant/type';

const stateDefault = {
    danhSachPhim : []
}

export const QuanLyPhimReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case LAY_DANH_SACH_PHIM:
            
            state.danhSachPhim = action.danhSachPhim
            return {...state};
    
        default:
            return state;
    }
}