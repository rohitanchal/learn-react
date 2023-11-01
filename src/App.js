import './App.css';
import React, { Component } from "react";
import User from './User';
function App() {
  function Header() //header Component function based 
  {
    return (
      <div>
        <h1>Hello This is My New and First Component in React.Js</h1>
      </div>
    )
  }
  class User extends Component { //User Component class based 
    render() {
      return (
        <div>
          <h1>This is the User Class based Component</h1>
        </div>
      )
    }
  }
  return (
    <div>
      <Header />
      <User />
    </div>
  );
}

export default App;
