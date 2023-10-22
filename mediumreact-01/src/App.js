import { useState } from 'react';
import './App.css';


function App() {

  // const[firstName, setFirstName] = useState("")
  // const[lastName, setLastName] = useState("")

  // console.log(firstName)
  // console.log(lastName)

  // function changeFirstNameHandler(e) {
  //   console.log("first name printing")
  //   // console.log(e.target.value)
  //   setFirstName(e.target.value);
  // }

  // function changeLastNameHandler(e) {
  //   console.log("last name printing")
  //   // console.log(e.target.value)
  //   setLastName(e.target.value);
  // }

  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", comments: "", isVisible: true, mode: "", favCar:"" })
  // console.log(formData)

  function changeHandler(e) {
    const { name, value, type, checked } = e.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        // [e.target.name]:e.target.value
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  function sumbitHandler(e){
    e.preventDefault()
    console.log(formData)
  }


  return (
    <div className="App">
      <form onSubmit={sumbitHandler}>

        <input
          type="text"
          placeholder='first name'
          onChange={changeHandler}
          name='firstName'
          value={formData.firstName}
        />

        <br />
        <br />


        <input
          type="text"
          placeholder='last name'
          onChange={changeHandler}
          name='lastName'
          value={formData.lastName}
        />

        <br />
        <br />


        <input
          type="email"
          placeholder='enter your email'
          onChange={changeHandler}
          name='email'
          value={formData.email}
        />

        <br />
        <br />


        <textarea
          placeholder='enter your text'
          onChange={changeHandler}
          name='comments'
          value={formData.comments}
        />

        <br />
        <br />


        <input
          type="checkbox"
          onChange={changeHandler}
          name='isVisible'
          checked={formData.isVisible}
          id='isVisible'
        />
        <label htmlFor="isVisible">Am I visible?</label>

        <br />
        <br />

        <fieldset>
          <legend>Mode</legend>
          <input
            type="radio"
            onChange={changeHandler}
            name='mode'
            value='Online-Mode'
            checked={formData.mode === 'Online-Mode'}
            id='Online-Mode'
          />
          <label htmlFor="Online-Mode">Online Mode</label>

          <input
            type="radio"
            onChange={changeHandler}
            name='mode'
            value='Offline-Mode'
            checked={formData.mode === 'Offline-Mode'}
            id='Offline-Mode'
          />
          <label htmlFor="Offline-Mode">Offline Mode</label>
        </fieldset>

        <label htmlFor="favCar">Select your favCar</label>

        <select 
        onChange={changeHandler}
        name="favCar" 
        id="favCar"
        value={formData.favCar}
        >
          <option value="varna">Varna</option>
          <option value="creata">Creata</option>
          <option value="rangeRover">Range Rover</option>
          <option value="audi">Audi</option>
        </select>

        <br/>
        <button>Sumbit</button>

      </form>
    </div>
  );
}

export default App;

