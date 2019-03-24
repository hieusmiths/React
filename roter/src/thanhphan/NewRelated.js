import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NewRelated extends Component {
    render() {
        return (
        
                <div className="card">
                    <img className="card-img-top img-thumbnail" src={ this.props.anh }alt="true" />
                    <div className="card-body">
                        <h4 className="card-title"> { this.props.tieude }</h4>
                        <Link to={ "/chitiet/" + this.props.tieude + "/" + this.props.Tinid + ".html"  }>More</Link>
                        <p className="card-text"> { this.props.mota } </p>
                    </div>
                </div>
        );
    }
}

export default NewRelated;