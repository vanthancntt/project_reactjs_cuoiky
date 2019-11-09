import React, {Component} from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import axios from 'axios';
class ProductDetail extends Component {
	constructor(props){
        super(props)
        this.state = {
           products : []
        }
    }    
    componentDidMount(){
      var {match} = this.props;
      if (match) {
      	var id = match.params.id;
      	axios({
        method: 'GET',
        url :`http://localhost:3000/products/${id}`,
        data : null
     	 }).then(res =>{
     	 	var data =res.data;
        	this.setState({
         	 products :res.data
        	});
      		}).catch( err =>{
        	console.log(err);
      		});
    	}
      }
     onClickThis(){
        alert('Cảm ơn đã đặt hàng ');
    }
 render() {

 	var {products} = this.state;
  	return (

  		<div className="card mb-3" style={{maxWidth: 'auto'}}>
    	<div className="row">
      	<div className="col-md-4">
         <img src={this.state.products.image} className="card-img" />
      	</div>
      	<div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{this.state.products.name}</h5>
          <div className="col-md-12" >
            <div className="row">
              <p className="col-md-6 loaimay" style={{float:'left'}}>Loại sản phẩm : {this.state.products.name_category}</p>
              <p className="col-md-6" style={{float:'right'}}>Tình trạng: {this.state.products.tinhtranghang === true ? 'Còn hàng' : 'Hết hàng'}</p>
            </div>
          </div>
          <p className="card-text price">Giá : {this.state.products.promotion}</p>
          <ul className="ul">
            <li>Loại Giày: {this.state.products.type}</li>
            <li>Mã  giảm giá : {this.state.products.magiamgia}</li>
            <li> Sản Xuất: {this.state.products.sanxuat} </li>
            <li>Color: {this.state.products.color} </li>
          </ul>
          <button type="col-md-6 button" onClick={this.onClickThis} className="btn btn-success " >Đặt hàng</button>
          
          <NavLink className="navbar-brand ml-2" to="/trangchu"><button type="button" className="btn btn-outline-danger">Tiếp tục mua </button></NavLink>
            
        </div>
      	</div>
   		 </div>
  		</div>
   		);
	}
}

export default ProductDetail;