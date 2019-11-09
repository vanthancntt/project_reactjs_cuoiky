import React, {Component} from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
class ProductList extends Component {
	constructor(props){
        super(props)
        this.state = {
           products : [],
           keyword : '',
        }
    }

    componentDidMount(){
      axios({
        method: 'GET',
        url :'http://localhost:3000/products',
        data : null
      }).then(res =>{
        console.log(res);
        this.setState({
          products :res.data
        });
      }).catch( err =>{
        console.log(err);
      });
    }  

    onDelete = (id) =>{
      var {products} = this.state;
       axios({
        method: 'DELETE',
        url :`http://localhost:3000/products/${id}`,
        data : null
      }).then(res =>{
          if (res.status ===  200) {
            var index = this.findIndex(products, id);
            if(index !== -1){
              products.splice(index, 1);
              this.setState({
                products :products
              });
            }
          }
        });
    }
    findIndex =(products, id) =>{
        var {products} = this.state;
        var result = -1;
        products.forEach((product, index) =>{
            if(product.id === id){
                result =index;
            }
        });
        return result;
    }
    onChange = (event) =>{
      var target = event.target;
      var name = target.name;
      var value = target.value;
      this.setState({
        [name] : value
      });
    }
DangXuat= () =>{
  sessionStorage.clear();
}


 render() {
   var { products,keyword } = this.state;
   if(sessionStorage.getItem('account')){
 	let search = this.state.products.filter(
      (product) =>{
        return product.name.toLowerCase().indexOf(this.state.keyword.toLowerCase()) !== -1;
      }
    );
  	return (
  		<React.Fragment>  
        <NavLink onClick={this.DangXuat} className="navbar-brand text-danger" to="/trangchu">Đăng xuất</NavLink>
  			<table className="table table-bordered table-hover mt-5 ml-1">
                  <thead>
                    <tr>
                      <th className="text-center">STT</th>
                      <th className="text-center">Tên Sản Phẩm</th>
                      <th className="text-center">Loại Sản Phẩm</th>
                      <th className="text-center">Hình ảnh</th>
                      <th className="text-center">Xuất xứ</th>
                      <th className="text-center">Tình Trạng</th>
                      <th className="text-center">Hành Động</th>
                    </tr>
                  </thead>
                  <tbody>
                    {search.map((product,index) => {
                                return < Item key={index} index ={index} product={product} onDelete={this.onDelete} />
                       	})}
                  </tbody>
           	</table>
        </React.Fragment>   	
   		);
  }
  else{
    return <h4 className="text-center text-danger">Bạn không thể truy cập vào trang này!</h4>
  }
}
}

class Item extends Component {
	onDelete = (id) =>{
		if (confirm('bạn chắc chắn muốn xóa ?')) { //eslint-disable-line
         this.props.onDelete(id);
      }
	}
    render() {
    	var { product , index} = this.props;
        return (
          		  <tr>
                      <td>{index + 1}</td>
                      <td>{product.name}</td>
                      <td className="text-center">{product.name_category}</td>
                      <td className="text-center"><img alt="anh" src={product.image} height="80" width="80" className="list-img"/></td>
                      <td>{product.origin}</td>
                      <td className="text-center">
                        <span className={ product.tinhtranghang === true ? 'badge badge-success' : 'badge badge-danger'}>
                        	{ product.tinhtranghang === true ? 'Còn hàng' : 'Hết hàng'}
                        </span>
                      </td>
                      <td className="text-center">
        				        <NavLink to="/add"><button type="button" className="btn btn-primary ml-1" >Thêm</button></NavLink>
                        <NavLink to={`/products/${this.props.product.id}/edit`}><button type="button" className="btn btn-primary ml-1">Sửa</button></NavLink>
                        <button type="button" onClick ={ () =>this.onDelete(product.id)} className="btn btn-primary ml-1">
								Xóa
                        </button>
                      </td>
                </tr>

        );
    }
}
export default ProductList;