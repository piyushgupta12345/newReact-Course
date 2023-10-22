import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Lab from './components/Lab'
import About from './components/About'
import Support from './components/Support'
import MainHeader from './components/MainHeader'
import Home from './components/Home';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink to='/lab'>Lab</NavLink>
          </li>
          <li>
            <NavLink to='/support'>Support</NavLink>
          </li>
        </ul>
      </nav>


      <Routes>
        <Route path='/' element={<MainHeader />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/lab' element={<Lab />} />
          <Route path='/support' element={<Support />} />
          <Route path='*' element={<div>Not Found Page</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
