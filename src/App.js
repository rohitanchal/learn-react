import './App.css';
import User from './User';
import Header from './Header';
import Student from './Student';

function App() {

  function alertmsg() {
    alert("function called");
  }

  return (
    <div className='App'>

      <Header />
      <User />
      <Student name={" Rohit"} email={"rohit@gmail.com"} other={{address: 'Lucknow', mobile: '00000'}} />
      <Student name={" Anchal"} email={"anchal@gmail.com"} other={{address: 'Lucknow', mobile: '111111'}} />
      <Student name={" Rajan"} email={"rajan@gmail.com"} other={{address: 'Mau', mobile: '222222'}} />
      <Student name={" Utkarsh"} email={"utkarsh@gmail.com"} other={{address: 'Bulandshehar', mobile: '333333'}} />


      <button onClick={() => alert("Hello")}>Click Me</button><hr />
      <div>
        <button onClick={alertmsg}>Click Me</button> {/*called alert without arrow function*/}<hr />
        <button onClick={() => alertmsg()}>Click Me</button> {/*called alert with arrow function*/}<hr />
      </div>


     
    </div>
    
  );
}

export default App;
