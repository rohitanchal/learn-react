import './App.css';
import User from './User';
import Header from './Header';
import Student from './Student';
import React from 'react';
import Emp from './Emp';

// function App() {

//   function alertmsg() {
//     alert("function called");
//   }

  class App extends React.Component{
    constructor(){
      super();
      this.state={names: " Rahul"};
    }

    render()
    {
      return(
        <div className='App' style={{ backgroundColor: "yellow", margin: 30}}>
          <Emp names={this.state.names} email={"rk@test.com"}/>
          <button onClick={()=>this.setState({names: " Seema"})}>DATA</button>
        </div>
      )
    }
  }

//   return (
//     <div className='App'>

//       <Header />
//       <User />
//       <Student name={" Rohit"} email={"rohit@gmail.com"} other={{address: 'Lucknow', mobile: '00000'}} />
//       <Student name={" Anchal"} email={"anchal@gmail.com"} other={{address: 'Lucknow', mobile: '111111'}} />
//       <Student name={" Rajan"} email={"rajan@gmail.com"} other={{address: 'Mau', mobile: '222222'}} />
//       <Student name={" Utkarsh"} email={"utkarsh@gmail.com"} other={{address: 'Bulandshehar', mobile: '333333'}} />

//       <Emp />


//       <button onClick={() => alert("Hello")}>Click Me</button><hr />
//       <div>
//         <button onClick={alertmsg}>Click Me</button> {/*called alert without arrow function*/}<hr />
//         <button onClick={() => alertmsg()}>Click Me</button> {/*called alert with arrow function*/}<hr />
//       </div>
     
//     </div>
    
//   );
// }

export default App;
