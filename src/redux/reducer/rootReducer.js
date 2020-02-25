import {combineReducers} from 'redux';
import {QuanLyPhimReducer} from './QuanLyPhimReducer';
import {QuanLyUserReducer} from './QuanLyUserReducer';

export const rootReducer = combineReducers({
    QuanLyPhimReducer : QuanLyPhimReducer,
    QuanLyUserReducer : QuanLyUserReducer
})

