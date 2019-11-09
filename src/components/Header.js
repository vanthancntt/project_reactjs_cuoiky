import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-danger ">
        <NavLink className="navbar-brand text-light" to="/trangchu">Trang Chủ</NavLink>
        <NavLink className="navbar-brand text-light" to="/gioithieu"> Giới Thiệu Thành viên </NavLink>
        <NavLink className="navbar-brand text-light" to="/giaynam">Giày Nam</NavLink>
        <NavLink className="navbar-brand text-light" to="/giaynu">Giày Nữ</NavLink>
        <NavLink className="navbar-brand text-light" to="/sanphammoi">Sản Phẩm Mới</NavLink>
        <NavLink className="navbar-brand text-light" to="/sanphamhot">Sản Phẩm Hot</NavLink>
        <NavLink className="navbar-brand text-light" to="/sanphamkhuyenmai">Sản Phẩm Khuyến Mãi</NavLink>
        
        {/* <NavLink className="navbar-brand text-light" to="/add">Add Products</NavLink> */}
        {/* <NavLink className="navbar-brand text-light" to="/dssp">Danh Sách Sản Phẩm</NavLink> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        </div>
      </nav>
            </div>
        );
    }
}

export default Header;