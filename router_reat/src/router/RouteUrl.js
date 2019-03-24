import React, { Component } from 'react';
// import { BrowserRouter as  Route, } from "react-router-dom"; 
import New from './../thanhphan/New';
import Home from '../thanhphan/Home';
import Contact from '../thanhphan/Contact';
import NewDetail from '../thanhphan/NewDetail';
import { BrowserRouter as Router , Route  } from "react-router-dom";
class RouteUrl extends Component {
    render() {
        return (
            
                <div >
                    
                    <Route exact path="/home" component={ Home }></Route>
                    <Route path="/tin" component = { New }/>
                    <Route path="/dang-ky" component = { Contact }/>
                    <Route path="/chi-tiet/:urlTittle.:idTin.html" component={ NewDetail } />
                </div >
        );
    }
}
export default RouteUrl;

