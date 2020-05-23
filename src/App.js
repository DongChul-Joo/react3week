import React from 'react';
import logo from './logo.svg';
import './App.css';
// props index.js에서 매개변수로 보낸다면 props로 받아야하지만 아니라면 필요없다.
function App(props) {
    const msg = props.msg;
    const data = msg.split("\n");
    const print = data.map((subject)=>
        <li>{subject}</li>
    )
  return (
    <div>
      {/*<h1>이름:{props.name}</h1>
      <h1>성별:{props.sex}</h1>
      <h1>나이:{props.age}</h1>*/}
      {/*<h1>메세지:{msg}</h1>*/}
      <ul>{print}</ul>
    </div>
  );
}

export default App;
