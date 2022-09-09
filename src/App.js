import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Directions from './Pages/Directions/Directions';
import OpenHours from './Pages/OpenHours/OpenHours';
import Contact from './Pages/Contact/Contact';
import Unique from './Pages/Unique/Unique';
import PurchaseLeaseOptions from './Pages/PurchaseLeaseOptions/PurchaseLeaseOptions';
import RentalLease from './Pages/RentalLease/RentalLease';
import Inventory from './Pages/Inventory/Inventory';
import Preapproval from './Pages/Preapproval/Preapproval';

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
          <Route path="/what-makes-us-unique" element={ <Unique /> } />
          <Route path="/purchase-lease-options" element={ <PurchaseLeaseOptions /> } />
          <Route path="/lt-rentals-st-leases" element={ <RentalLease /> } />
          <Route path="/inventory" element={ <Inventory /> } />
          <Route path="/pre-approval" element={ <Preapproval /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
