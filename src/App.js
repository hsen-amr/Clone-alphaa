import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import FirstHomeBuyer from './pages/ServicesPages/FirstHomeBuyer';
import Refinancing from './pages/ServicesPages/Refinancing';
import HomeLoans from './pages/ServicesPages/HomeLoan';
import CommercialLoan from './pages/ServicesPages/CommercialLoan';
import AssetFinance from './pages/ServicesPages/AssetFinance';
import PersonalLoan from './pages/ServicesPages/PersonalLoan';
import Selfmanaged from './pages/ServicesPages/Self-ManagedSuperFund';
import Navbar from './components/Navbar';
import GlobalStyle from './components/GlobalStyle';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services/>}/>
          <Route path="services/home-loan" element={<HomeLoans/>} />
          <Route path="/services/first-home-buyer" element={<FirstHomeBuyer/>} />
          <Route path="/services/refinancing" element={<Refinancing/>} />
          <Route path="/services/commercial-loan" element={<CommercialLoan/>} />  
          <Route path="/services/asset-finance" element={<AssetFinance/>} />
          <Route path="/services/personal-loan" element={<PersonalLoan/>} />
          <Route path="/services/smsf-lending" element={<Selfmanaged/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
