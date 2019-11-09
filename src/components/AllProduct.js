import React, {Component} from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import axios from 'axios';
import Footer from '../components/Footer';
import Header from '../components/Header';
class SanPhamHot extends Component {
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
        this.setState({
          products :res.data
        });
      }).catch( err =>{
      });
    }

    onChange = (event) =>{
      var target = event.target;
      var name = target.name;
      var value = target.value;
      this.setState({
        [name] : value
      });
    }

    render() {
    var { products,keyword } = this.state;
    let search = this.state.products.filter(
      (product) =>{
        return product.name.toLowerCase().indexOf(this.state.keyword.toLowerCase()) !== -1;
      }
    );
  	return (
       <React.Fragment>  
         <Header/>      
  		    <div className="text-center row ">
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
          <li data-target="#carouselExampleIndicators" data-slide-to={1} />
          <li data-target="#carouselExampleIndicators" data-slide-to={2} />
        </ol>
        <div className="carousel-inner" style={{margin: '0 0 0 15px' ,width: '1110px'}}>
          <div className="carousel-item active">
            <img className="d-block w-100" src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="First slide"  style={{height: '420px'}}/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Second slide" style={{height: '420px'}} />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://images.pexels.com/photos/2272752/pexels-photo-2272752.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="Third slide" style={{height: '420px'}} />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
       <input className="form-control search mx-auto" name="keyword" value={keyword} onChange ={ this.onChange} type="search" placeholder="Search" aria-label="Search" />
  						{search.map((product,index) => {
                         return < Item key={index} product={product} />
                })}
      	 </div>
         <Footer/>
        </React.Fragment>
   		);
	}
}

class Item extends Component {
    onClickThis(){
        alert('Cảm ơn đã đặt hàng ');
    }
    render() {
      var {product} = this.props;
        return (
          <div className="card ml-5" style={{width: '20rem'}}>
            <div className ="">
              <img src={this.props.product.image} className="image" alt="..." />
            </div>
            <div className="card-body">
            <button type="col-md-6 button" onClick={this.onClickThis} className="btn btn-success">Đặt hàng</button>
            <NavLink type="col-md-6 button" className="btn btn-danger xemchitiet" to={`/products/${this.props.product.id}/productdetail`}>Xem chi tiết</NavLink>
            </div>
            <div className="card-body">
        		<h5 className="card-title">{this.props.product.name}</h5>
        		<span className="col-md-6 price"><p className="card-text text-center text-danger">{this.props.product.promotion} đ</p></span>
             	<span className="col-md-6 sale"><p className="card-text"><strike className="text-secondary">{this.props.product.price} đ</strike></p></span>
      		</div>
          </div> 

        );
    }

}


export default SanPhamHot;