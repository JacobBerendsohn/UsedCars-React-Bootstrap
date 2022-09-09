import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Directions from './Pages/Directions/Directions';
import OpenHours from './Pages/OpenHours/OpenHours';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/directions" element={ <Directions /> } />
          <Route path="/open-hours" element={ <OpenHours /> } />
          <Route path="/contact-us" element={ <Contact /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
