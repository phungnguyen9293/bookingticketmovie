import React, { Component } from 'react';
import { Table, Tag } from 'antd';
import { connect } from 'react-redux';
import { layThongTinUserAction } from '../../redux/action/QuanLyUserAction';
import { settings } from '../../config/settings';
import * as moment from 'moment';

class AccInfo extends Component {
    componentDidMount() {
        let userInfo = JSON.parse(localStorage.getItem(settings.userLogin));
        this.props.layThongTinUser(userInfo);
    }

    render() {
        const columns = [
            {
                title: 'Tên Phim',
                dataIndex: 'tenPhim',
                key: 'tenPhim',
            },
            {
                title: 'Ngày Giờ Đặt',
                dataIndex: 'ngayGioDat',
                key: 'ngayGioDat',
            },
            {
                title: 'Danh sách ghế',
                dataIndex: 'danhSachGhe',
                key: 'danhSachGhe',
                render: danhSachGhe => (
                    <span>
                        {danhSachGhe.map((ghe, index) => {
                            return (
                                <Tag key={index}> {ghe.tenGhe} </Tag>
                            )
                        })}
                    </span>
                )
            },
            {
                title: 'Hệ thống rạp',
                dataIndex: 'danhSachGhe',
                key: 'heThongRap',
                render: danhSachGhe => {
                    if (danhSachGhe.length > 0) {
                        return (<span>{danhSachGhe[0].tenHeThongRap}</span>
                        )
                       
                    }
                    return ''
                }

            },
            {
                title: 'Tổng Tiền',
                dataIndex: 'tongTien',
                key: 'tongTien'
            }
        ]

        const data = this.props.userInfo.thongTinDatVe.map(({ tenPhim, ngayDat, danhSachGhe, giaVe }, index) => {
            var object = {
                key: index,
                tenPhim: tenPhim,
                ngayGioDat: moment(ngayDat).format('LLL') ,
                danhSachGhe: danhSachGhe,
                tongTien: function()  {
                    return (giaVe * danhSachGhe.length).toLocaleString() + " VNĐ";
                }()
            };
            return object
        });

        return (
            <div className='info '>
                <div className='container-fluid'>
                    <div className='row'>
                        <Table rowKey='uid' dataSource={data} columns={columns} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.QuanLyUserReducer.accInfo)
    return {
        userInfo: state.QuanLyUserReducer.accInfo || {
            thongTinDatVe: [
                {
                    danhSachGhe: [],
                    ngayDat: {},
                    tenPhim: {},
                    giaVe: {}
                }
            ]
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        layThongTinUser: (taiKhoan) => {
            dispatch(layThongTinUserAction(taiKhoan))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccInfo)