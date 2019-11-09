import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import './style.css';
import Item from './item';
import Data from './data.json';
import Header from '../components/Header';

class show extends Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
            <div>
            <NavLink className="navbar-brand" to="/gioithieu"></NavLink>
                <section id="team">
                <div className="btn-group button_margin">
            </div>
                    <div className="container my-3 text-center">
                        <div className="row">
                            <div className="col">
                                <h1>Thành viên trong nhóm</h1>
                                <p >Nhóm làm project học phần React JS bao gồm 5 thành viên, chi tiết các thành viên và phân công công việc của các thành viên ghi rõ phía bên dưới.</p>
                            </div>
                        </div>
                        <div className="row">
                            {Data.persons.map((dd,key) => {
                                return <Item key={key} per={dd} />
                            })}
                        </div>
                    </div>
                </section>
            </div>
            </React.Fragment>

        );
    }
}

export default show;