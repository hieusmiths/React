import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css'; 
//Edit 
import TopMenu from './Component/TopMenu/TopMenu.js'; //  ./ ở đây có nghĩa là thư mục hiện tại cùng cấp vs Component.
import Banner from './Component/Header/Banner.js'
import Section from './Component/Content/Section.js'
import Footer from './Component/Footer/Footer.js';

class App extends Component {
  
  render() {
    return (
      <div className="my-app">

      <TopMenu/>
      <Banner/>
      <Section order="order-lg-2" tittle="Đây là tiêu đề 1" haha="ok" description="trích dẫn mô tả 1" img='img\01.jpg'/>
      <Section tittle="Đây là tiêu đề 2" description="trích dẫn mô tả 2"  img='img\02.jpg'/>
      <Section order="order-lg-2" tittle="Đây là tiêu đề 3" description="trích dẫn mô tả 3"  img='img\03.jpg'/>
      <Footer/>
      </div>
    );
  }
}

export default App;
