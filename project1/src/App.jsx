import { Routes, Route, Link } from 'react-router-dom';
import Welcome from './Welcome';
import Skills from './Skills';
import Home from './Pages/Home';
import About from './Pages/About';
import Service from './Pages/Service';
import State from './hooks/State';
import Form from './hooks/Form';
import Effect from './hooks/Effect';
import './App.css';
import { UserContext } from './hooks/UserContext';
import { useContext } from 'react';
import Navbar from './Navbar';

function App() {
  const name = useContext(UserContext);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/state" element={<State />} />
        <Route path="/form" element={<Form />} />
        <Route path="/effect" element={<Effect />} />
      </Routes>
      {/* Example usage */}
      <Welcome name="User" Country="India" />
      <Skills skill={['React', 'JS', 'CSS']} />
      <div>
        <h1>Hi! {name}</h1>
        <Link to="/state">UseState Example</Link>
        <br />
        <Link to="/form">Controlled Form</Link>
        <br />
        <Link to="/effect">UseEffect example</Link>
      </div>
    </>
  );
}

export default App;