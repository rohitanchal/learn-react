import React, { Component } from "react";

// class User extends Component { //User Component class based
//     constructor(){
//         super(); //without super function you can not access the variable
//         this.state = {data: 0}; //data is like variable
//     } 
//     userfun(){  // this the function we can use without declering functipon keyword
//         // alert("userfun is called"); // after clicking the button alert message will apear
//         // this.setState({data: "Anchal"});    //it will update the data to already shown
//         this.setState({data:this.state.data + 1});  //it will continuously update the data
//     }
//     render() {
//         return (
//             <div>
            
//                 <h1>This is the User Class based Component</h1>    <hr/>
//                 <h1>{this.state.data}</h1>
//                 <button onClick={()=>this.userfun()}>update data</button>    <hr/>
                
//             </div>
//         )
//     }
// }
// export default User;


// class Toggle extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {isToggleOn: true};
  
//       // This binding is necessary to make `this` work in the callback
//       this.handleClick = this.handleClick.bind(this);
//     }
  
//     handleClick() {
//       this.setState(prevState => ({
//         isToggleOn: !prevState.isToggleOn
//       }));
//     }
  
//     render() {
//       return (
//         <button onClick={this.handleClick}>
//           {this.state.isToggleOn ? 'ON' : 'OFF'}<br/>
//         </button>
//       );
//     }
//   }
//   export default Toggle;