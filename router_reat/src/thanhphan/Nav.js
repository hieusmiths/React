import React, { Component } from 'react';

import {  NavLink} from "react-router-dom";
class Nav extends Component {
    render() {
        return (
            /* Begin menu */
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <a className="navbar-brand" href="true">Navbar</a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/tin">Tin Mới</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link" href="/chi-tiet">Chi Tiet</a>                       
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link" href="/dang-ky">Đăng Ký</a>
                    </li>
                    <li>
                        <NavLink to="/home" className="nav-link" >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tin" className="nav-link" >Tin Mới</NavLink>
                    </li>
                    <li>
                        <NavLink to="/chi-tiet" className="nav-link" >Chi Tiet</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dang-ky" className="nav-link" >Đăng Ký</NavLink>
                    </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        );
    }
}

export default Nav;