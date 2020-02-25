import { DANG_NHAP_NGUOI_DUNG, SET_USERLOGIN_FROM_STORAGE, DANG_XUAT, LAY_THONG_TIN_USER } from "../constant/type"

const stateDefault = {
    credential: null,
    accInfo: null
}

export const QuanLyUserReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case DANG_NHAP_NGUOI_DUNG:
            state.credential = action.payload;
            return {...state}

        case SET_USERLOGIN_FROM_STORAGE:{
            state.credential = action.userLogin;
            return {...state}
        }

        case DANG_XUAT:
            state.credential = action.payload;
            return {...state}

        case LAY_THONG_TIN_USER:
            state.accInfo = action.payload;
            return {...state}

        default:
            return state;
    }
}