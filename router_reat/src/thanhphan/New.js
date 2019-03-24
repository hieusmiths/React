import React, { Component } from 'react';
import Newitem from './Newitem';
import dt from './data.json';

class News extends Component {
    render() {
        return (
            <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                <h1 className="display-3 text-center">Trang Tin Tức</h1>
                <hr className="my-2" />
                </div>
            </div>
            {/* end banner */}
            {/* begin list news */}
            <div className="container">
                <div className="row">
                {
                    dt.map(
                        (value, key) => {
                            
                                return(
                                    <Newitem anh={value["img"]}  key={ key }
                                    Tinid = { value.id }
                                    tieude= { value.tittle }
                                    mota= { value.description }
                                    />
                                );
                        }
                    )
                }
                </div>
            </div>
            </div>

        );
    }
}

export default News;