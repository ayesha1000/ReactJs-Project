import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Login from './login';
import Items from './Items';

class App extends Component{
  render(){
    return(
<BrowserRouter>
<div className="App">
<header className="App-header">

   
<Switch>
  <Route exact path='/items' component={Items} />
  <Route exact path='/' component={Login} />
</Switch>
</header>
</div>
</BrowserRouter>
    )
  }
}
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
      { /* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello <code>src/App.js</code> and save to reload.
        </p>
     *<a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
       </a>}
        <Login />
       
      </header>
     
    </div>
    
    


  
  );
}*/

export default App;
