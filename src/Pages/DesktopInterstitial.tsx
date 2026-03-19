import { FC, useEffect } from 'react';
import { IPageProps } from '../types';
import Sidebar from '../components/Sidebar';
import { useLocation } from 'react-router-dom';
import interstitialGIF from '../images/interstitial.gif';

const DesktopInterstitial: FC<IPageProps> = ({ setPage, currentPage, pageHeader }) => {
  const location = useLocation();
  useEffect(() => {
    if (currentPage == '') {
      const params = new URLSearchParams(location.search);

      const pageId = params.get('pageId');
      if (pageId != null) {
        setPage(pageId);
      }
    }
  }, [currentPage, setPage, location.search]);
  return (
    <>
      <Sidebar currentPage={currentPage} setPage={setPage} pageHeader={pageHeader} />
      <div className="flex justify-center p-4 mt-50">
      
       <div className="flex flex-col items-center justify-center">
      
      {/* Monitor Frame */}
      <div className="relative bg-black rounded-2xl shadow-2xl p-3 w-[800px] h-[500px]">
        
        {/* Screen */}
        <div className="relative w-full h-full bg-gray-900 rounded-xl overflow-hidden">
          
          {/* Your Interstitial */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={interstitialGIF}
              alt="interstitial"
              className="max-w-full h-auto"
            />
          </div>

        </div>
      </div>

      {/* Monitor Stand */}
      <div className="w-24 h-4 bg-gray-700"></div>
      <div className="w-60 h-2 bg-gray-800 rounded-full "></div>
    </div>
      
  
      </div>
    </>
  );
};

export default DesktopInterstitial;
