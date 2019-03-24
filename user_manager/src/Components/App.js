import React, { Component } from 'react';
import './../App.css';
import Jumbotron from './Header/Jumbotron';
import Search from './Search';
import Table from './Table';
import CardAddUser from './CardAddUser';
import DataUser  from './Data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayForm : false,
      dataUser : DataUser,
      textForSearch : '',
    }
  }
  
  changeStatus = () =>
  {
    this.setState({
      displayForm: !this.state.displayForm,
    })
  }


  conectForSearch = (dl)=>{
    
    this.setState({
      textForSearch : dl,
    })
    console.log(this.state.textForSearch);
  }

  render() {
    var result = [];
    this.state.dataUser.forEach( (item) => {
      if(item.name.indexOf(this.state.textForSearch) !== -1 ){
        result.push(item);
      }
    }
    )
    
    return (
      <div className="container-fluid">
          <Jumbotron />
          <Search search = { (dl) => { this.conectForSearch(dl) }} changeStatus = { () => this.changeStatus() }  displayForm = { this.state.displayForm }  />
          <section>
            <div className="container">
              <div className="row">
                <div className="col">
                  <Table dataProps = 
                  { result }
                  />
                </div>
                
                  <CardAddUser displayForm = { this.state.displayForm }  />
                </div>
              </div>
            
          </section>

      </div>
    );
  }
}

export default App;
