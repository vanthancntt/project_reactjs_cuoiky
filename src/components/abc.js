<div className="container">
    
         <nav className="navbar navbar-expand-lg navbar-light bg-light">   
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">            
            <NavLink className="navbar-brand" to="/">Trang Chủ</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <br/>
      <button type="button" class="btn btn-success btn-menu" data-toggle="modal" data-target="#myModal">
        Thêm Mới Sản Phẩm
      </button>
       <Switch>  
        {this.showContentMenu(routes)} 
       </Switch>
      </div>
      {/* <!-- The Modal --> */}
    <div class="modal fade" id="myModal">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
      
        {/* <!-- Modal Header --> */}
        <div class="modal-header">
          <h4 class="modal-title">Thêm Mới Sản Phẩm</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        
        {/* <!-- Modal body --> */}
        <div class="modal-body">
        <Add/>
        </div>
        
        {/* <!-- Modal footer --> */}
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
  </div>