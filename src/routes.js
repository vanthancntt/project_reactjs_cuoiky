import React from 'react';
import SanPhamHot from './components/SanPhamHot.js';
import SanPhamKhuyenMai from './components/SanPhamKhuyenMai.js';
import SanPhamMoi from './components/SanPhamMoi.js';
import AllProduct from './components/AllProduct.js';
import ProductDetail from './components/ProductDetail.js';
import NotFound from './components/NotFound.js';
import GiayNam from './components/GiayNam.js';
import GiayNu from './components/GiayNu.js';
import Show from './components/show.js';
// import Loginuse from './components/Login.js';
import Login from './components/Login.js';
import Add from './components/Add.js';
import DanhSachSP from './components/DanhSachSP.js';

const routes = [
	{
		path : '/themsanpham',
		exact : true,
		main : ({history})=> <Add history={history} />
	},
	{
		path : '/trangchu',
		exact : true,
		main : ()=> <AllProduct />
	},
	{
		path : '/giaynam',
		exact : true,
		main : ()=> <GiayNam />
	},
	{
		path : '/giaynu',
		exact : true,
		main : ()=> <GiayNu />
	},
	{
		path : '/gioithieu',
		exact : true,
		main : ()=> <Show />
	},
	{
		path : '/login',
		exact : true,
		main : ({history})=> <Login history={history} />
	},
	// {
	// 	path : '/loginuse',
	// 	exact : true,
	// 	main : ({history})=> <Loginuse history={history} />
	// },
	{
		path : '/dssp',
		exact : true,
		main : ()=> <DanhSachSP />
	},
	{
		path : '/products/:id/productdetail',
		main : ({match})=> <ProductDetail  match ={match}/>
	},
	{
		path : '/sanphamhot',
		main : ({match})=> <SanPhamHot match ={match}/>
	},
	{
		path : '/sanphamkhuyenmai',
		main : ({match})=> <SanPhamKhuyenMai match ={match}/>
	},
	{
		path : '/sanphammoi',
		main : ({match})=> <SanPhamMoi match ={match}/>
	},
	{
		path : '/add',
		main : ({history, match})=> <Add history={history} match = {match} />
	},
	{
		path : '/products/:id/edit',
		exact : true,
		main : ({match , history})=> <Add  match ={match} history={history}/>
	},
	{
		path : '',
		main : ()=> <NotFound />
	},
];

export default routes;