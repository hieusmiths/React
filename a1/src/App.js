import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//You can declare at this
const numbers = [1, 2, 3, 4, 5];

//Khai báo kiểu Arrow Funcion
// const numbersMap = numbers.map( (x) => x * 2 );
const numbersMap = numbers.map(
  function(x)
  {
    return x * 2 + " - ";
  }
);


class MyApp extends Component{
  render(){
    return(
      <div>
        { numbersMap }
      </div>
    );
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <MyApp/>
        </header>
      </div>
    );
  }
}

export default App;
