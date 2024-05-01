
# Handling forms: 
Actually when ever we submit the form, then the page get rerendered but React don't want to do things like that so there is some techniques to handel the form 

1. refUse
2. controlled components 
3. react hook forms 

## 1. refUse
```import React from 'react';
import { useRef } from 'react';

function App() {
  // value of useref is always null at start.
  const name = useRef(null);
  //details hold all the details provided by user in form input field.
  const handelSubmit = (details) => {
    //below line will prevent refreashing the form when submit is clicked.
    details.preventDefault();
    //it will log the name of current user using value.
    console.log(name.current.value);
  }

  return (
    <form action="" onSubmit={handelSubmit}>
        <input ref={name} placeholder='Name' type="text" />
        <input type="submit" />
      </form>
  )
}
export default App;
```
 

## 2. Controlled Components

```import React from 'react';
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
```


## 3. react hook forms

### Installation

```bash
npm install react-hook-form
```

![image](https://github.com/bhalerao-2002/React/assets/96150629/7c92690d-54ec-4612-b47d-016d9edcddcf)


```import React from "react";
import { useForm } from "react-hook-form";

function App() {
//This are pre-defined functions of react hook form
  const {register, handleSubmit} = useForm();
//...register(feild) spread the 3 things of the register function 1. onChange 2. onBlur 3. name

  return (
    <form action="" onSubmit={handleSubmit(data => connsole.log(data))}>
      <input {...register('name')} type="text" placeholder="Name" />
      <input {...register('email')} type="email" placeholder="Email" />
      <input type="submit"/>
    </form>
  )
}

export default App;
```
