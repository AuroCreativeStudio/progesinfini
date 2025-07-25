import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
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
import BlogSingle from './components/pages/BlogSingle.jsx';
import BecomePartner from './components/pages/BecomePartner.jsx';
import Retreat from './components/pages/Retreat.jsx';
import PrivacyPolicy from './components/pages/PrivacyPolicy.jsx';
import ComingSoon from './components/pages/CommingSoon.jsx';
import ScrollToTop from './components/pages/ScrollToTop.jsx';

function App() {
  const location = useLocation();
  const path = location.pathname;

  // Hide header on both '/' (ComingSoon) and '/home'
  const hideHeader = path === '/' || path === '/home';

  return (
    <>
      {!hideHeader && <Header />}
      <ScrollToTop/>

      <div className={`${path === '/' ? 'overflow-hidden h-screen' : 'min-h-screen'}`}>
        <Routes>
          <Route path="/" element={<ComingSoon />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/workshoplist" element={<Workshoplist />} />
          <Route path="/workshopsingle" element={<Workshopsingle />} />
          <Route path="/facilitatorlist" element={<FacilitatorList />} />
          <Route path="/facilitatorsingle" element={<FacilitatorSingle />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blogs/:slug" element={<BlogSingle />} />
          <Route path="/become-a-partner" element={<BecomePartner />} />
          <Route path="/retreat" element={<Retreat />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>

      {/* Footer is shown for all pages except ComingSoon */}
      {path !== '/' && <Footer />}
    </>
  );
}

export default App;
