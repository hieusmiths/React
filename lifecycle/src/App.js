import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';


import NoiDung from './NoiDung';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "khoitao",
      statusTwo : "ok",

    }
  }
  componentDidMount() {
    console.log('Kết thúc');
  }
  
  
  componentWillMount() {
    console.log("Đang Chạy");
  }
  //updating tương interaction với state và cả props
  shouldComponentUpdate(nextProps, nextState){ //sẽ chạy khi mà cập nhập state,props 
    //trả về true or false
    //nếu false thì ngưng còn true thì chạy tiếp will và did
    console.log("Đang Chạy shouldComponentUpdate");
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("Đang Chạy componentWillUpdate" );
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Đang Chạy componentDidUpdate");
  }
  capnhapstate = () => {
    this.setState({
      status: "Cap Nhap",
      statusTwo: "Cap Nhap 2"
    });
  }

  render() {
    console.log("Đang Chạy render");
    console.log(this.state.status);
    return (
      <div className="App">
        <button onClick={() => {this.capnhapstate()}} className="btn btn-info"> Update</button>
        <NoiDung name={this.state.statusTwo}/>
      </div>
    );
  }
}
// Khi mình click nó sẽ cập nhập lại state sau khi cập nhập xong nó lấy nội dung ở statte chính nó sẽ cập nhập.
// khi nó nhập được statusTwo hàm componentWillReceiveProps sẽ được mặc định kích hoặc khi và chỉ khi nó nhận được props mới
// 
export default App;
