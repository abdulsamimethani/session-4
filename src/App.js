import React, {useState} from 'react';
import {Message} from './Message.js'
import './App.css';

export default function App() {

let [count, setcount]= useState(7);
let [ismorning, setmorning]= useState(true)

  return (
    <div className={ismorning ? 'box' : ''}>
      <h1>daytime = {ismorning ? 'morning' : 'night'}</h1>
      <Message counter={count}/>
      <br />
      <button onClick={
        ()=> setcount(++count)
        }>
        apply
      </button>
      <button onClick={()=>setmorning(!ismorning)}> Update day</button>
    </div>
  );
}
