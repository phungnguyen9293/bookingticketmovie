import React, { Component } from 'react';
import { connect } from 'react-redux';
import {layDanhSachPhim} from '../../redux/action/QuanLyPhimAction';

class HomePage extends Component {

    renderDanhSachPhim = () => {
        return this.props.danhSachPhim.map((phim, index) => {
            return (
                <div className="card col-3" key={index}>
                    <img className="card-img-top" src={phim.hinhAnh} alt={phim.hinhAnh} />
                    <div className="card-body">
                        <h4 className="card-title">{phim.tenPhim}</h4>
                        <p className="card-text">Text</p>
                    </div>
                </div>

            )
        })
    }

    componentDidMount = () => {
        this.props.dispatch(layDanhSachPhim());
    }

    render() {
        return (
            <div className='row container'>
                {this.renderDanhSachPhim()}
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        danhSachPhim: state.QuanLyPhimReducer.danhSachPhim
    }
}

export default connect(mapStatetoProps)(HomePage)