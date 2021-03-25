import logo from './logo.svg';
import './App.css';
import header from './components/Header.js'
import Header from './components/Header.js';

function App() {
  return (
         
    <div id="root">
      <div className="myReactApp">
        {/* <div>
          <header>
            <h1>Hello, welcome to my first react app</h1>
          </header>
        </div> */}
        <Header title='Hello, welcome to my first react app'/>

      </div>
      
      
    </div>
 

      );
  
}

export default App;
