import './App.css';
import User from './User';
import Header from './Header';

function App() {

  function alertmsg() {
    alert("function called");
  }

  return (
    <div className='App'>

      <Header />
      <User />

      <button onClick={() => alert("Hello")}>Click Me</button><hr />
      <div>
        <button onClick={alertmsg}>Click Me</button> {/*called alert without arrow function*/}<hr />
        <button onClick={() => alertmsg()}>Click Me</button> {/*called alert with arrow function*/}<hr />
      </div>

     
    </div>
    
  );
}

export default App;
