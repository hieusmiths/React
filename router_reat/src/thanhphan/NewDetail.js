import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import dt from './data.json';
import NewRelated from './NewRelated.js';
class NewDetail extends Component {
    render() {
        
        var dem = 1;
        return (
            <div>
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-3 text-center">Trang Chi Tiết</h1>
                <hr className="my-2" />
            </div>
        </div>
        <div className="container">
            <div className="row">
                {
                    dt.map((value, key)=>{
                        if(value.id === parseInt(this.props.match.params.idTin, 20))
                        {
                            return(
                                <div className="col-12" key = { key }>
                                    <div className="jumbotron" >
                                        <h1 className="display-3" >{ value.tittle }</h1>
                                        <img className="img-thumbnail" src={ value.img } alt="true"/>
                                        <p>{ value.content }</p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis atque eos eius, ratione repellat
                                            similique alias expedita fugit magnam veniam velit, quam placeat totam, in impedit qui ipsa.
                                            Praesentium, a.</p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis atque eos eius, ratione repellat
                                            similique alias expedita fugit magnam veniam velit, quam placeat totam, in impedit qui ipsa.
                                            Praesentium, a.</p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis atque eos eius, ratione repellat
                                            similique alias expedita fugit magnam veniam velit, quam placeat totam, in impedit qui ipsa.
                                            Praesentium, a.</p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis atque eos eius, ratione repellat
                                            similique alias expedita fugit magnam veniam velit, quam placeat totam, in impedit qui ipsa.
                                            Praesentium, a.</p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis atque eos eius, ratione repellat
                                            similique alias expedita fugit magnam veniam velit, quam placeat totam, in impedit qui ipsa.
                                            Praesentium, a.</p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis atque eos eius, ratione repellat
                                            similique alias expedita fugit magnam veniam velit, quam placeat totam, in impedit qui ipsa.
                                            Praesentium, a.</p>
                                        <p className="lead rounded">
                                            <a className="btn btn-primary btn-lg" href="Jumbo action link" role="button">Jumbo action name</a>
                                        </p>
                                    </div>
                                </div>
                                );
                        }
                            return true;
                    })
                }
                <div className="card-deck">
                {
                    dt.map((value, key)=> {
                        if(value.id !==  parseInt(this.props.match.params.idTin, 20))
                        {
                            if(dem <= 3){
                                dem ++;
                                return(
                                    <NewRelated key={ key }
                                    anh={value["img"]}
                                    Tinid = { value.id }
                                    tieude= { value.tittle }
                                    mota= { value.description }
                                    >
                                    </NewRelated>
                                );
                                }
                        }
                        return true;
                    }
                    )
                }
                </div>
            </div>
        </div>
        </div>
        );
    }
}
export default NewDetail;