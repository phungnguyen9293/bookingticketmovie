import React, { Component } from 'react';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {connect} from 'react-redux';
import {dangNhapNguoiDung} from '../../redux/action/QuanLyUserAction'


const signInUserSchema =yup.object().shape({
    taiKhoan : yup.string().required('* Field is required!'),
    matKhau : yup.string().required('* Field is required!')
})
class SignIn extends Component {    

    _handleSubmit = values => {
        this.props.signIn(values)
    }

    render() {
        return (
            <div className="w-50 mx-auto">
                <h1 className='display-4 text-center'>Sign In</h1>
                <Formik 
                initialValues={{
                    taiKhoan: '',
                    matKhau: ''
                }}
                validationSchema={signInUserSchema}
                onSubmit={this._handleSubmit}
                render={(FormikProps) => (
                    <Form >
                        <div className='form-group'>
                            <label >Tài Khoản: </label>
                            <Field type="text" className='form-control' name='taiKhoan' onChange={FormikProps.handleChange}/>
                            <ErrorMessage name="taiKhoan">{msg => <div className='alert alert-danger'>{msg}</div>}</ErrorMessage>

                        </div>
                        <div className='form-group'>
                            <label >Mật Khẩu: </label>
                            <Field type="text" className='form-control' name='matKhau' onChange={FormikProps.handleChange}/>
                            <ErrorMessage name="matKhau">{msg => <div className='alert alert-danger'>{msg}</div>}</ErrorMessage>

                        </div>
                        <div className='text-center'>
                            <button className='btn btn-success'>Submit</button>
                        </div>
                    </Form>
                )} />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (values) => {
            dispatch(dangNhapNguoiDung(values))
        }
    }
}

export default connect(null,mapDispatchToProps)(SignIn)