import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import About from './Pages/About/About.jsx';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
      </Routes>
    </div>
  );
}

export default App;
