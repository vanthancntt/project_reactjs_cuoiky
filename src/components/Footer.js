import React, { Component } from 'react';
import './style.css';
class Footer extends Component {
    render() {
        return (
            <div>
                {/* Footer */}
      <section id="footer" style={{margin: '24px 0 0 0' ,width: '1110px'}}>
        <div className="container">
          <div className="row text-center text-xs-center text-sm-left text-md-left" style={{margin: ' 0 0 0 124px'}}>
            <div className="col-xs-12 col-sm-4 col-md-4">
              <h5>MY ACCOUNT</h5>
              <ul className="list-unstyled quick-links">
                <li><a href="javascript:void();"><i className="fa fa-angle-double-right" />Home</a></li>
                <li><a href="javascript:void();"><i className="fa fa-angle-double-right" />About</a></li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4">
              <h5>INFORMATION</h5>
              <ul className="list-unstyled quick-links">
                <li><a href="javascript:void();"><i className="fa fa-angle-double-right" />About</a></li>
                <li><a href="javascript:void();"><i className="fa fa-angle-double-right" />Videos</a></li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4">
              <h5>CUSTOMER SERVICE</h5>
              <ul className="list-unstyled quick-links">
                <li><a href="javascript:void();"><i className="fa fa-angle-double-right" />FAQ</a></li>
                <li><a href="javascript:void();"><i className="fa fa-angle-double-right" />Get Started</a></li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
              <ul className="list-unstyled list-inline social text-center">
                <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-facebook" /></a></li>
                <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-twitter" /></a></li>
                <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-instagram" /></a></li>
                <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-google-plus" /></a></li>
                <li className="list-inline-item"><a href="javascript:void();" target="_blank"><i className="fa fa-envelope" /></a></li>
              </ul>
            </div>
          </div>	
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
              <p><u><a href="https://www.nationaltransaction.com/">National Transaction Corporation</a></u> is a Registered MSP/ISO of Elavon, Inc. Georgia [a wholly owned subsidiary of U.S. Bancorp, Minneapolis, MN]</p>
              <p className="h6">Coppy Right@ TeamAEShop<a className="text-green ml-2"  target="_blank"></a></p>
            </div>
          </div>	
        </div>
      </section>
      {/* ./Footer */}
            </div>
        );
    }
}

export default Footer;