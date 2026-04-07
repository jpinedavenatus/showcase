import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WebFont from 'webfontloader';

import './App.css';
import NavBar from './components/NavBar';
import Home from './Pages/Home';
import Footer from './components/Footer';
import Sandbox from './Pages/Sandbox';
import DesktopTakeover from './Pages/DesktopTakeover';

import ProsperNewSession from './modules/ProsperNewSession';
import DesktopView from './Pages/DesktopView';
import MobileView from './Pages/MobileView';
import CategoryPage from './Pages/CategoryPage';
import PrerollVideo from './Pages/PrerollVideo';
import MobileTakeover from './Pages/MobileTakeover';
import TestPage from './Pages/TestPage';
import RewardVideo from './Pages/RewardVideo';
import DesktopInterstitial from './Pages/DesktopInterstitial';
const App = () => {
  const [currentPage, setPage] = useState('');
  const [category, setCategory] = useState('');
  useEffect(() => {
    if (currentPage == '') {
      const params = new URLSearchParams(location.search);

      const pageId = params.get('pageId');
      if (pageId != null) {
        setPage(pageId);
      }
    }
    WebFont.load({
      google: {
        families: ['Outfit:400,500,600,700,800,900'],
      },
    });
  }, []);

  return (
    <>
      <ProsperNewSession />
      <BrowserRouter>
        {/* Navbar at the top */}
        {location.pathname == '/testpage' ? (
          <div id="header" className="hidden [@media(min-width:351px)_and_(max-width:389px)]:flex">
            <NavBar setPage={setPage} />
          </div>
        ) : (
          <NavBar setPage={setPage} />
        )}

        <div id="wrapper" className="flex-1 mt-[70px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />

            <Route path="/publisher" element={<CategoryPage currentPage={currentPage} setPage={setPage} setCategory={setCategory} category="Publisher" />} />
            <Route path="/advertiser" element={<CategoryPage currentPage={currentPage} setPage={setPage} setCategory={setCategory} category="Advertiser" />} />
            <Route path="/sandbox-demo" element={<Sandbox />} />
            {/* subpages */}
            <Route path="/desktop-takeover" element={<DesktopTakeover currentPage={currentPage} setPage={setPage} category={category} />} />
            <Route path="/mobile-takeover" element={<MobileTakeover currentPage={currentPage} setPage={setPage} category={category} />} />
            <Route path="/desktop-view" element={<DesktopView currentPage={currentPage} setPage={setPage} category={category} />} />
            <Route path="/mobile-view" element={<MobileView currentPage={currentPage} setPage={setPage} category={category} />} />

            <Route path="/preroll-video" element={<PrerollVideo currentPage={currentPage} setPage={setPage} category={category} />} />
            <Route path="/reward-video" element={<RewardVideo currentPage={currentPage} setPage={setPage} category={category} />} />
            <Route path="/desktop-interstitial" element={<DesktopInterstitial currentPage={currentPage} setPage={setPage} category={category} />} />

            <Route path="/testpage" element={<TestPage currentPage={currentPage} setPage={setPage} category={category} />} />
          </Routes>
        </div>
      </BrowserRouter>

      {/* prevent nested footer for mobile takeover */}
      {
        location.pathname == '/mobile-takeover' ? (
          <div id="footer" className="hidden md:flex">
            <Footer />
          </div>
        ) : (
          <Footer />
        ) //
      }
    </>
  );
};

export default App;
