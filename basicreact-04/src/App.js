import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const[text, setText] = useState('');
  // const[name, setName] = useState('Rahul')

  // variation 1 -> Every Render
  useEffect(()=>{
    console.log("UR Rendering Done")
  })

  // variation 2 -> Every Render
  // useEffect(()=>{
  //   console.log("UR Rendering Done")
  // },[])

  // variation 3 -> First Render + whatever dependency changes
  // useEffect(()=>{
  //   console.log("Changed")
  // },[name])

  // variation 4 -> to handle unmounting of a component
  // useEffect(()=>{
  //   // add event listener
  //   console.log("lister added")

  //   return() =>{
  //     console.log("Listener removed")
  //   }

  // },[text])

  function changehandle(event) {
    console.log(text)
    setText(event.target.value)
  }
  return (
    <div className='App'>
      <input type="text" onChange={changehandle}/>
    </div>
  );
}

export default App;
