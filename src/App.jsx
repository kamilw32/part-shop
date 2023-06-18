import './App.css';
import Header from './components/Header/Header.js';
import ContactUs from './components/ContactUs/ContactUs.js';
import AboutUs from './components/AboutUs/AboutUs.js';
import Footer from './components/Footer/Footer.js';
import { Route, Routes } from 'react-router-dom';
import Products from './components/Products/Products';
import Home from './components/Home/Home';
import PricingTable from './components/PricingTable/PricingTable.js';

const App = () => (
  <div className="App">
    <Header />
    <div className="content">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/kontakt" element={<ContactUs />} />
      <Route path="/o-nas" element={<AboutUs />} />
      <Route path="/nasza-oferta" element={<Products />} />
      <Route path="/cennik" element={<PricingTable/>}/>
      <Route path="/products" element={<Products/>}/>
    </Routes>
    </div>
    <Footer/>
  </div>
  
);

export default App;
