import React, { Component } from 'react';

class item extends Component {
    render() {
        return (
            <div className="col-lg-3 col-md-6">
                <div className="card my-5">
                    <div className="card-body">
                        <img src={this.props.per.anh} width={120} height={120} alt="img-fluid rounded-circle w-50 mb-3" />
                        <h3>{this.props.per.ten}</h3>
                        <h5>{this.props.per.full}</h5>
                        <p>{this.props.per.mota}</p>
                        <div className="d-flex flex-row justify-content-center">
                            <div className="p-4">
                                <a href="#">
                                    <i className="fa fa-facebook" />
                                </a>
                            </div>
                            <div className="p-4">
                                <a href="#">
                                    <i className="fa fa-twitter" />
                                </a>
                            </div>
                            <div className="p-4">
                                <a href="#">
                                    <i className="fa fa-instagram" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default item;