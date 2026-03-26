import { FC, useEffect, useRef } from 'react';
import { IPageProps } from '../types';
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const MobileTakeover: FC<IPageProps> = ({ setPage, currentPage, pageHeader }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const location = useLocation();
  useEffect(() => {
    if (currentPage == '') {
      const params = new URLSearchParams(location.search);

      const pageId = params.get('pageId');
      if (pageId != null) {
        setPage(pageId);
      }
    }

    const iframe = iframeRef.current;
    if (!iframe) return;

    return () => {};
  }, [currentPage, setPage, location.search]);
  return (
    <>
       <Sidebar currentPage={currentPage} setPage={setPage} pageHeader={pageHeader} /> 

      <div className="flex justify-center items-center mt-10">
        {/* Phone body */}
        <div className="relative w-[390px] h-[780px] bg-black rounded-[3rem] p-3 shadow-2xl">
          {/* Side buttons */}
          <div className="absolute left-[-3px] top-32 h-16 w-1 bg-gray-700 rounded"></div>
          <div className="absolute left-[-3px] top-52 h-10 w-1 bg-gray-700 rounded"></div>
          <div className="absolute right-[-3px] top-44 h-20 w-1 bg-gray-700 rounded"></div>

          {/* Screen */}
          <div className="relative h-full w-full bg-white rounded-[2.5rem] overflow-hidden">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
              <div className="h-6 w-40 bg-black rounded-b-2xl flex items-center justify-center">
                <div className="h-1 w-16 bg-gray-700 rounded-full"></div>
              </div>
            </div>

            {/* iframe screen */}
            <iframe
              ref={iframeRef}
              // srcDoc={html}
              src={`testpage?pageId=${currentPage}`}
              sandbox="allow-scripts allow-same-origin"
              className="w-full h-full overflow-hidden"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileTakeover;
