import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Lab from './components/Lab'
import About from './components/About'
import Support from './components/Support'
import Home from './components/Home'

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/lab'>Lab</NavLink>
          <NavLink to='/support'>Support</NavLink>
          </li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </nav>


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/lab' element={<Lab />} />
        <Route path='/support' element={<Support />} />
        <Route path='*' element={<div>Not Found Page</div>} />
      </Routes>
    </>
  );
}

export default App;
