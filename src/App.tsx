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

import ProsperNewSession from "./modules/ProsperNewSession";
import DesktopView from './Pages/DesktopView';
import MobileView from './Pages/MobileView';
import CategoryPage from './Pages/CategoryPage';
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
          <Route path='/publisher' element={<CategoryPage currentPage={currentPage} setPage={setPage} setPageHeader={setPageHeader} pageHeader='Publisher' />} />
          <Route path='/advertiser' element={<CategoryPage currentPage={currentPage} setPage={setPage} setPageHeader={setPageHeader} pageHeader='Advertiser' />} />
          <Route path='/sandbox-demo' element={<Sandbox />} />
          {/* subpages */}
          <Route path='/desktop-takeover' element={<DesktopTakeover currentPage={currentPage} setPage={setPage} />} />
          <Route path='/mobile-takeover' element={<MobileView currentPage={currentPage} setPage={setPage} />} />

          <Route path='/desktop-view' element={<DesktopView currentPage={currentPage} setPage={setPage} pageHeader={pageHeader} />} />
          <Route path='/mobile-view' element={<MobileView currentPage={currentPage} setPage={setPage} pageHeader={pageHeader} />} />
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
