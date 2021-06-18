import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Characters from './components/Characters';
function App() {
  const [records, setRecord] = useState([]);
  const getItem=async()=>{
    const result=await axios(`https://thronesapi.com/api/v2/Characters`);
    console.log(result.data);
    const actualData = result.data;
    setRecord(actualData);
  }
  useEffect(()=>{
    getItem();
  },[]);
  return (
    <div>
      <img className="center" src="/images/game_of_thrones.png" alt="Logo" style={{padding: "10px"}}/>
      <Characters records={records} />
    </div>
  );
}

export default App;
