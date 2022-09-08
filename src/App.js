import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import About from './Pages/About/About.jsx';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import logo from './Assets/images/logo-with-silver-effect.png'

function App() {
  return (
    <div>
      {/** <img src={logo} alt="" /> */}
      <Navbar />
      <Header />
      <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
