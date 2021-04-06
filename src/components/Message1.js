import React, { Component } from 'react';
class Message extends Component {
 render() {
    const name ="monica"
 return (
 <div>
  
   <h1 style={bodyStyle}>Hello to React World</h1>

    <h2 style={bodyStyle}>Making my first {name}</h2>
   <button>Add Task </button>
 </div>
 );
 }
}
// Css in the js
 const bodyStyle={
   color:'yelllow',
   backgroundColor:'blue',
 }

export default Message; 