import logo from './logo.svg';
import './App.css';
import { form } from "./form"
import { useState } from "react";

function App() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  
  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setPhone(event.target.value)
  }

  const onSubmit = () => {
    let ob = {
      "name": name,
      "phone": phone
    }

    console.log("hello")
  fetch("http://localhost:5000/api/data", {
    method: "POST",  
    headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(ob)
    })

  }


  return (
    <div className="App">
      <label>name </label>   
        <input type="text"
        id="name"
        name="name"
        onChange={handleNameChange}
        value={name}></input> 
        <label>Phone</label> 
        <input type="text"
        id="phone"
        name="phone"
        onChange={handlePhoneChange}
        value={phone}></input> 
        <button style={{color:"red", padding: "5px"}} type="submit" value="Submit" onClick={()=>{onSubmit()}}>Submit</button>
    </div>
  );
}

export default App;
