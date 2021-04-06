import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Message from './components/Message1';
import Button from './components/Button';
import Number from './components/NumberArray'

function App() {
  return (
    <div id="root">
      <Header />
      <Button />
      <Message />
      <Number/>


    </div>

  );
}
// class App extends Component {

//   render() {
//   return (
//   <Message />
//   );
//   }
//  }
export default App;