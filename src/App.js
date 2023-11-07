import "./App.css";
// import User from "./User";
// import Header from "./Header";
// import Student from "./Student";
import React, { useState } from "react";
import Profile from "./Profile";
import Render from "./Render"
// import Emp from "./Emp";

// function App() {

//   function alertmsg() {
//     alert("function called");
//   }

// class App extends React.Component{
//   constructor(){
//     super();
//     this.state={names: " Rahul"};
//   }

//   render()
//   {
//     return(
//       <div className='App' style={{ backgroundColor: "yellow", margin: 30}}>
//         <Emp names={this.state.names} email={"rk@test.com"}/>
//         <button onClick={()=>this.setState({names: " Seema"})}>DATA</button>
//       </div>
//     )
//   }
// }

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

// lecture 15 start here

// function App() {

//   const [data, setData] = useState(null);
//   const [print, setPrint] = useState(false);
//   function getData(val) {

//     console.warn(val.target.value);
//     setData(val.target.value);
//     setPrint(false);
//   }
//   return (
//     <div className="App">
//       {
//         print?
//         <h1>{data}</h1>
//         : null
//       }
//       <input type="text" onChange={getData} />
//       <button onClick={()=>setPrint(true)}>Print Data</button>
//     </div>
//   );
// }

// lecture 16 start here

// function App() {

//   const [status, setStatus] = React.useState(true);
//   return (
//     <div className="App">
//       {
//         status?
//         <h1>Hello Lecture 16</h1>
//         :null
//       }
//       {/* <User/> */}
//       <button onClick={() => setStatus(false)}>Hide</button>
//       <button onClick={() => setStatus(true)}>Show</button>
//       {/* <button onClick={() => setStatus(!status)}>Toggle</button> */}
//     </div>
//   )
// }


// lecture 17
// function App() {

//   const [name, setName] = useState("");
//   const [tnc, setTnc] = useState("false");
//   const [city, setCity] = useState("");

//   function getFormData(e){
//     console.log(name,tnc,city);
//     e.preventDefault();
//   }
//   return (
//     <div className="App">
//       <h1> This is My Lecture 17</h1>
//       <hr/>

//       <h2>Handle Form in React</h2>

//       <form onSubmit={getFormData}>
//         <input type="text" placeholder="Enter Name " onChange={(e)=>setName(e.target.value)} /><br/><br/>

//         <select onChange={(e)=>setCity(e.target.value)}>
//           <option>select option</option>
//           <option>Lucknow</option>
//           <option>Azangarh</option>
//         </select><br/><br/>

//         <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)} /><span>Accept term and condition</span><br/><br/>

//         <button type="submit">Submit</button>
//         <button>Clear</button>
//       </form>
//     </div>
//   )
// }
// export default App;

// lecture 18 

function App() {
  return (
    <div className="App">
      <Profile/>
      <Render />
    </div>
  )
}

export default App;
