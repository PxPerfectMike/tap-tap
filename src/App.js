import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Upgrades from './routes/Upgrades';
import Reset from './routes/Reset';
import { MainButton } from './components/MainButton';
import Home from './routes/Home';

function App() {
  return (
    <Router>
      <MainButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Upgrades" element={<Upgrades />} />
        <Route path="/Reset" element={<Reset />} />
      </Routes>
    </Router>
  );
}

export default App;