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


      <button onClick={() => alert("Hello")}>Click Me</button>
      <div>
        <button onClick={alertmsg}>Click Me</button>
      </div>
    </div>
  );
}

export default App;
