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
  const [pageHeader, setPageHeader] = useState('');
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Outfit:400,500,600,700,800,900'],
      },
    });
  }, []);

  return (
    <>
      {/* <main className='relative z-[2] h-full w-full min-h-screen '> */}
      <ProsperNewSession />
      <BrowserRouter>
        {/* Navbar at the top */}
        <NavBar setPage={setPage} />
        <div id="wrapper" className="flex-1 mt-[70px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />

            <Route
              path="/publisher"
              element={
                <CategoryPage
                  currentPage={currentPage}
                  setPage={setPage}
                  setPageHeader={setPageHeader}
                  pageHeader="Publisher"
                />
              }
            />
            <Route
              path="/advertiser"
              element={
                <CategoryPage
                  currentPage={currentPage}
                  setPage={setPage}
                  setPageHeader={setPageHeader}
                  pageHeader="Advertiser"
                />
              }
            />
            <Route path="/sandbox-demo" element={<Sandbox />} />
            {/* subpages */}
            <Route
              path="/desktop-takeover"
              element={<DesktopTakeover currentPage={currentPage} setPage={setPage} pageHeader={pageHeader} />}
            />
            <Route
              path="/mobile-takeover"
              element={<MobileTakeover currentPage={currentPage} setPage={setPage} pageHeader={pageHeader} />}
            />
            <Route
              path="/desktop-view"
              element={<DesktopView currentPage={currentPage} setPage={setPage} pageHeader={pageHeader} />}
            />
            <Route
              path="/mobile-view"
              element={<MobileView currentPage={currentPage} setPage={setPage} pageHeader={pageHeader} />}
            />

            <Route path="/preroll-video" element={<PrerollVideo />} />
            <Route path="/reward-video" element={<RewardVideo />} />
            <Route path="/desktop-interstitial" element={<DesktopInterstitial currentPage={currentPage} setPage={setPage} pageHeader={pageHeader} />} />

            <Route
              path="/testpage"
              element={<TestPage currentPage={currentPage} setPage={setPage} pageHeader={pageHeader} />}
            />
          </Routes>
        </div>

        {/* </div> */}
        {/* </div> */}

        {/* Footer at the bottom */}
      </BrowserRouter>

      {/* </main> */}
      <Footer />
    </>
  );
};

export default App;
