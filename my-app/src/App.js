import React from 'react';
import logo from './logo.svg';
import Menu from './components/MenuComponent';
import {DISHES }from './shared/dishes';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      dishes: DISHES
    };
  }

  render(){
  return (
      <div className="App">
      <Menu dishes={this.state.dishes}/>
      </div>
  );
  }
}

export default App;
