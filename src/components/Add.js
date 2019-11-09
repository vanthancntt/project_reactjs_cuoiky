import React, {Component} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class Add extends Component {
	constructor(props){
    super(props);
    this.state = {
     
      id: '',
      name : '',
      price : '',
      promotion : '',
      image : '',
      name_category : '',
      type : '',
      magiamgia : '',
      color : '',
      sanxuat : '',
      tinhtranghang : true,  
      trangthai: '',
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
          id: data.id,
          name : data.name,
          price : data.price,
          promotion : data.promotion,
          image : data.image,
          name_category : data.name_category,
          type : data.type,
          magiamgia : data.magiamgia,
          color :data.color,
          sanxuat : data.sanxuat,
          tinhtranghang : data.tinhtranghang,
          trangthai : data.trangthai,
        });
      }).catch( err =>{
      });
    }
  } 
  onChange = (event) =>{
    var target =event.target;
    var name =target.name;
    var type =target.type;
    var value =target.value;
    if (name === 'tinhtranghang') {
      value =target.value === 'true' ? true :false;
    }
    if (type === 'file') {
      value = this.image.value.replace( /C:\\fakepath\\/i, "/images/" );
    }

    this.setState({
      [name] : value,
    });
  }

  onSave =(e) =>{
   e.preventDefault();
   var { id ,name, price, promotion, image , name_category, type, magiamgia
    , color, sanxuat, tinhtranghang, trangthai} = this.state;
    var {history} = this.props;
    if (id) {
      axios({
        method: 'PUT',
        url :`http://localhost:3000/products/${id}`,
        data : {
          name : name,
          price : price,
          promotion : promotion,
          image : image,
          name_category : name_category,
          type : type,
          magiamgia : magiamgia,
          color : color,
          sanxuat : sanxuat,
          tinhtranghang : tinhtranghang,
          trangthai : trangthai,
        }
      }).then(res =>{
        history.push("/dssp");
      });
    }else{
      axios({
        method: 'POST',
        url :'http://localhost:3000/products',
        data : {
          name : name,
          price : price,
          promotion : promotion,
          image : image,
          name_category : name_category,
          type : type,
          magiamgia : magiamgia,
          color : color,
          sanxuat : sanxuat,
          tinhtranghang : tinhtranghang,
          trangthai : trangthai,
        }
      }).then(res =>{
        history.push("/dssp");
      });
    }
  } 
  render() {
   var { name, price, promotion, image , name_category, type, magiamgia
    , color, sanxuat, tinhtranghang, trangthai} = this.state;
    return (
      <div className="panel panel-warning col-md-8 mx-auto border border-danger mt-3 py-4">
      <div className="panel-heading">
      <h3 className="panel-title mt-3 text-center">Nhập Thông Tin Products
      </h3>
      </div>

      <div className="panel-body">
      <form onSubmit = {this.onSave}>
      <div className="form-group">
      <label>Tên Sản phẩm :</label>
      <input type="text" name="name" value ={this.state.name} onChange ={this.onChange} className="form-control" />
      </div>
      <div className="form-group">
      <label>Giá Sản phẩm :</label>
      <input type="number" name="price" value ={this.state.price} onChange ={this.onChange} className="form-control" />
      </div>
      <div className="form-group">
      <label>Giá Khuyến Mãi :</label>
      <input type="number" name="promotion" value ={this.state.promotion} onChange ={this.onChange} className="form-control" />
      </div>
      <div className="form-group">
      <label>Chọn Ảnh :</label>
      <input type="file" name="image" ref ={ (input) => { this.image = input} } onChange ={this.onChange} className="form-control" />
      </div>
      <div className="form-group">
      <label>Tên loại sản phẩm ( sản phẩm mới/hot/khuyến mãi )</label>
      <input type="text" name="name_category" value ={this.state.name_category} onChange ={this.onChange} className="form-control" />
      </div>
      <div className="form-group">
      <label>Loại Giày :</label>
      <input type="text" name="type" value ={this.state.type} onChange ={this.onChange} className="form-control" />
      </div>
      <div className="form-group">
      <label>Mã giảm giá :</label>
      <input type="text" name="magiamgia" value ={this.state.magiamgia} onChange ={this.onChange} className="form-control" />
      </div>
      <div className="form-group">
      <label>Màu :</label>
      <input type="text" name="color" value ={this.state.color} onChange ={this.onChange} className="form-control" />
      </div>
      <div className="form-group">
      <label>Sản Xuất :</label>
      <input type="text" name="sanxuat" value ={this.state.sanxuat} onChange ={this.onChange} className="form-control" />
      </div>
      <label>Tình trạng hàng :</label>
      <select className="form-control" name ="tinhtranghang" value ={this.state.tinhtranghang} onChange ={this.onChange} required="required">
      <option value={true}>Còn hàng</option>
      <option value={false}>Hết hàng</option>
      </select>
      <br/>
      <div className="form-group">
      <label>Trạng thái:</label>
      <input type="text" name="trangthai" value ={this.state.trangthai} onChange ={this.onChange} className="form-control" />
      </div>
      <br />
      <div className="text-center">
      <button type="submit"  className="btn btn-success">Save</button>&nbsp;
      <Link to="/dssp" className="btn btn-danger ml-1">Close</Link>
      </div>
      </form>
      </div>
      </div>
      );
  }
}

export default Add;