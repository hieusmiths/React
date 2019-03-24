import React, { Component } from 'react';

class NoiDung extends Component {

    // Mối liên kết giữa props và state . bên state kia đẩy qua nên viết ở đây.
    //state là biến private
    //props là public
    componentWillReceiveProps(nextProps) {
        console.log("Đang Chạy componentWillReceiveProps nd.js  " + nextProps.name);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("Đang Chạy shouldComponentUpdate nd.js");
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log("Đang Chạy componentWillUpdate nd.js");
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log("Đang Chạy componentDidUpdate nd.js");
    }
    

    render() {
        return (
            <div>
                <h1>OK {this.props.name} </h1>
            </div>
        );
    }
}

export default NoiDung;