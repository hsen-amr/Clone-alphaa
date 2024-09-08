import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import FirstHomeBuyer from './pages/ServicesPages/FirstHomeBuyer';
import HomeLoans from './pages/ServicesPages/HomeLoan';
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

{/*<Route path="/services/refinancing" component={RefinancingPage} />
<Route path="/services/commercial-loan" component={CommercialLoanPage} />
<Route path="/services/asset-finance" component={AssetFinancePage} />
<Route path="/services/personal-loan" component={PersonalLoanPage} />
<Route path="/services/smsf-lending" component={SMSFLendingPage} />*/}

        </Routes>
      </div>
    </Router>
  );
}

export default App;
