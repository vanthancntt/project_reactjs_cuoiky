import React, { Component } from 'react';
class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
          username: "",
          password: ""
        }
    }
    onChange = (event) =>{
        var target =event.target;
        var name =target.name;
        var type =target.type;
        var value =target.value; 
        this.setState({
          [name] : value,
        });
      }
    onClear = () =>{
      this.setState({
        username: "",
        password: ""
      });
    }
    onDangNhap = (e) => {
        if (this.state.username==='user1' && this.state.password==='12345') {  
            return this.props.history.push("/trangchu");            
        } else {
            e.preventDefault();
            return alert("Thông tin đăng nhập không hợp lệ!");
        }        
    }
    render() {
        return (
            <div className="col-md-4 mx-auto">
                <form className="form-signin" onSubmit = {this.onDangNhap} >
                <h2 className="form-signin-heading"> Vui lòng đăng nhập </h2>
                <label className="sr-only"> Username</label>
                <input name="username" type="text" value ={this.state.username} onChange ={this.onChange} className="form-control" placeholder="Email address" required />
                <label className="sr-only"> Password</label>
                <input name="password" type="password" id="inputPassword" value ={this.state.password} onChange ={this.onChange} className="form-control" placeholder="Password" required /><br></br>
                <button className="btn btn-lg btn-primary btn-block" type="submit"> Đăng nhập
                </button>
            </form>
                
            </div>
        );
    }
}

export default Login;