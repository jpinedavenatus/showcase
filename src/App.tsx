import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WebFont from 'webfontloader';

import './App.css';
import NavBar from './components/NavBar';
import Article from './Pages/Article';
import Home from './Pages/Home';
import Footer from './components/Footer';
import Sandbox from './Pages/Sandbox';
import DesktopTakeover from './Pages/DesktopTakeover';
import MobileTakeover from './Pages/MobileView';
import MobileAds from './Pages/MobileView';

import ProsperNewSession from "./modules/ProsperNewSession";
import DesktopView from './Pages/DesktopView';
import Advertiser from './Pages/Advertiser';
import Publisher from './Pages/Publisher';
import MobileView from './Pages/MobileView';
const App = () => {
  const [currentPage, setPage] = useState('');
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Outfit:400,500,600,700,800,900'],
      },
    });
  }, []);

  return (
    <main className='relative z-[2] h-full w-full min-h-screen bg-gradient-to-tl from-white to-gray-200'>
      <ProsperNewSession />
      <BrowserRouter>
        {/* Navbar at the top */}
        <NavBar setPage={setPage} />

        {/* Main content area with sidebar */}
        {/* <div className="flex flex-1"> */}
        {/* Sidebar */}


        {/* Page Content */}
        {/* <div className="flex-1 p-4"> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/articles' element={<Article />} />
          <Route path='/publisher' element={<Publisher currentPage={currentPage} setPage={setPage} />} />
          <Route path='/advertiser' element={<Advertiser />} />
          <Route path='/sandbox-demo' element={<Sandbox />} />
          {/* subpages */}
          <Route path='/desktop-takeover' element={<DesktopTakeover currentPage={currentPage} setPage={setPage} />} />
          <Route path='/mobile-takeover' element={<MobileView currentPage={currentPage} setPage={setPage} />} />

          <Route path='/desktop-view' element={<DesktopView currentPage={currentPage} setPage={setPage} />} />
          <Route path='/mobile-view' element={<MobileView currentPage={currentPage} setPage={setPage} />} />
        </Routes>
        {/* </div> */}
        {/* </div> */}

        {/* Footer at the bottom */}
        <Footer />
      </BrowserRouter>
    </main>
  );
};

export default App;
