import React, { Component } from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {settings} from '../../config/settings';
import {dangKyNguoiDung} from '../../redux/action/QuanLyUserAction';
import {connect} from 'react-redux'
import * as yup from 'yup';

const signupUserSchema = yup.object().shape({
    taiKhoan: yup.string().required('* Field is required!'),
    matKhau: yup.string().required('* Field is required!'),
    hoTen: yup.string().required('* Field is required!'),
    email: yup.string().required('* Field is required!').email('* Email is valid!'),
    soDT: yup.string().required('* Field is required!').matches(/^[0-9]+$/)
})

class Signup extends Component {
    
    _handleSubmit = values => {
        this.props.signUp(values)
    }
    render() {
        return (
            <div className='w-50 mx-auto'>
                <h1 className='display-4 text-center'>Sign Up</h1>
                <Formik 
                initialValues={{
                    taiKhoan: '',
                    matKhau: '',
                    hoTen: '',
                    email: '',
                    soDT: '',
                    maNhom: settings.groupId,
                    maLoaiNguoiDung: 'KhachHang'
                }}
                validationSchema={signupUserSchema}
                onSubmit={this._handleSubmit}
                render={(formikProps) => (
                    <Form>
                    <div className='form-group'>
                        <label >Tài Khoản: </label>
                        <Field type="text" className='form-control' name='taiKhoan' onChange={formikProps.handleChange}/>
                        <ErrorMessage name="taiKhoan">{msg => <div className='alert alert-danger'>{msg}</div>}</ErrorMessage>
                    </div>
                    <div className='form-group'>
                        <label >Mật Khẩu: </label>
                        <Field type="password" className='form-control' name='matKhau' onChange={formikProps.handleChange}/>
                        <ErrorMessage name="matKhau">{msg => <div className='alert alert-danger'>{msg}</div>}</ErrorMessage>


                    </div>
                    <div className='form-group'>
                        <label >Họ Tên: </label>
                        <Field type="text" className='form-control' name='hoTen' onChange={formikProps.handleChange}/>
                        <ErrorMessage name="hoTen">{msg => <div className='alert alert-danger'>{msg}</div>}</ErrorMessage>


                    </div>
                    <div className='form-group'>
                        <label >Email: </label>
                        <Field type="email" className='form-control' name='email' onChange={formikProps.handleChange}/>
                        <ErrorMessage name="email">{msg => <div className='alert alert-danger'>{msg}</div>}</ErrorMessage>


                    </div>
                    <div className='form-group'>
                        <label >Số Điện Thoại: </label>
                        <Field type="text" className='form-control' name='soDT' onChange={formikProps.handleChange}/>
                        <ErrorMessage name="soDT">{msg => <div className='alert alert-danger'>{msg}</div>}</ErrorMessage>


                    </div>
                    <div className='text-center'>
                        <button className='btn btn-success'>Đăng ký</button>
                    </div>
                </Form>
           
                )}/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signUp: (values) => {
            dispatch(dangKyNguoiDung(values));
        }
    }
}


export default connect(null, mapDispatchToProps)(Signup)