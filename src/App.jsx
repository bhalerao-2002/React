import React from 'react';
import { useState } from 'react';
function App() {
  // We will use useState to get constat change in the input field.
  const [val, setVal] = useState({name: '', email: ''});
  const handleSubmit = (event)=>{
    event.preventDefault();
    console.log(val);
  } 
  return (
    // ...val, name: event.target.value is use to change the state by getting prev state by ...val and adding rest to it.
    <form action="" onClick={handleSubmit} >
      <input onChange={(event) => setVal({...val, name: event.target.value})} type="text" placeholder='Name' />
      <input onChange={(event) => setVal({...val, email: event.target.value})} type="email" placeholder='Email' />
      <input type="submit" />
    </form>
  )
}
export default App;