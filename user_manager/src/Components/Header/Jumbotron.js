import React, { Component } from 'react';

class Jumbotron extends Component {
    render() {
        return (
            <section>
              <div className="jumbotron text-center p-2">
                  <h1 className="display-5">Quản Lý Nhân Sự</h1>
                  <hr className="my-1" />
                  <p className="lead">Dữ Liệu Json</p>
              </div>
          </section>
        );
    }
}

export default Jumbotron;