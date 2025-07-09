import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aboutus from './components/pages/Aboutus.jsx';
import Home from './components/pages/Home.jsx';
import Contactus from './components/pages/Contactus.jsx';
import Workshoplist from './components/pages/Workshoplist.jsx';
import Workshopsingle from './components/pages/Workshopsingle.jsx';
import FacilitatorList from './components/pages/FacilitatorList.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import FacilitatorSingle from './components/pages/FacilitatorSingle.jsx';
import BlogList from './components/pages/BlogList.jsx';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="min-h-screen ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/workshoplist" element={<Workshoplist />} />
          <Route path="/workshopsingle" element={<Workshopsingle />} />
          <Route path="/facilitatorlist" element={<FacilitatorList />} />
          <Route path="/facilitatorsingle" element={<FacilitatorSingle/>} />
          <Route path="/blogs" element={<BlogList/>} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
