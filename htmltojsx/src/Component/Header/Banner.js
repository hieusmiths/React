import React, { Component } from 'react';

class Banner extends Component {
    // constructor(props) {
    //     super(props);
    //     // Hàm khởi tạo ra props.
    // }
    
    render() {
        return (
            <header className="masthead text-center text-white">
            <div className="masthead-content">
            <div className="container">
                <h1 className="masthead-heading mb-0">One Page Wonder</h1>
                <h2 className="masthead-subheading mb-0">Will Rock Your Socks Off</h2>
                <a href="#s" className="btn btn-primary btn-xl rounded-pill mt-5">Learn More</a>
            </div>
            </div>
            <div className="bg-circle-1 bg-circle" />
            <div className="bg-circle-2 bg-circle" />
            <div className="bg-circle-3 bg-circle" />
            <div className="bg-circle-4 bg-circle" />
        </header>

        );
    }
}

export default Banner;