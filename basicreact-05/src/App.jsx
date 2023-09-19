import "./App.css";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { filterData, apiUrl } from './data';
import { useEffect, useState } from "react";
import {toast} from "react-toastify";


function App() {

  const[courses, setCourses] = useState(null)

  useEffect(()=>{
    const fetchData = async() =>{
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();
        // save data into a variable
        console.log(output)
        setCourses(output.data)
      } 
      catch (error) {
        toast.error("Something went wrong")
      }
    }
    fetchData();
  },[])
  return (
    <div>
      <Navbar />

      <Filter 
        filterData={filterData}
      />

      <Cards courses={courses}/>
    </div>
  );
}

export default App;
