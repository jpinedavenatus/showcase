import { FC, useEffect } from 'react';
import placeholder from '../images/img.jpg';
import { TextFiller } from '../components/DisplayUtils';
import { E_DEVICE_TYPE, IPageProps } from '../types';
import { useLocation } from 'react-router-dom';
import { prvkCreative } from '../lib/prvkCreative';
import Sidebar from '../components/Sidebar';

const DesktopTakeover: FC<IPageProps> = ({ setPage, currentPage, pageHeader }) => {
  const location = useLocation();
  useEffect(() => {
    if (currentPage == '') {
      const params = new URLSearchParams(location.search);

      const pageId = params.get('pageId');
      if (pageId != null) {
        setPage(pageId);
      }
    }

    const creative = new prvkCreative({ creativeName: currentPage, device: E_DEVICE_TYPE.DESKTOP });

    return () => {
      creative.removeScript();
    };
  }, [currentPage, setPage, location.search]);

  return (
    <>
      <Sidebar currentPage={currentPage} setPage={setPage} pageHeader={pageHeader} />

      <div className="z-[99999] fixed md:hidden flex inset-0 bg-white bg-opacity-85 backdrop-blur-sm w-full  center justify-center">
        <span className='flex self-center text-2xl text-gray-800 justify-center text-center'>For the best experience, please open this page on a desktop.</span>
      </div>
      <div id="slot-desktop-takeover" className="hidden w-[970px] justify-center md:flex m-auto mt-5"></div>

      <div
        id="content-container"
        className="hidden m-auto w-full max-w-5xl  sm:w-sm p-5 md:flex justify-center bg-gray-100 mb-10"
      >  

        <div className="flex flex-col md:flex-row  gap-5  ">
          <main
            id="article-body"
            className="w-full md:w-3/4 p-6 space-y-2  bg-gray-100 rounded-sm overflow-hidden  border shadow-lg roundwd-sm"
          >
            <h1 className="font-semibold text-2xl">
              <span className="text-venatusred font-bold uppercase">
                {currentPage && currentPage.replace('-', ' ')}
              </span>{' '}
              TAKEOVER
            </h1>

            <TextFiller />

            <img className="m-auto" alt="placeholder" src={placeholder} />
            <TextFiller />
            <img className="m-auto" alt="placeholder" src={placeholder} />
            <TextFiller lines={5} />
            <TextFiller lines={20} />
          </main>

          <aside className="w-full md:w-1/3 bg-gray-100 text-gray-900 p-4 space-y-10  border shadow-lg roundwd-sm">
            <TextFiller lines={4} />
            <img alt="placeholder" src={placeholder} />

            <TextFiller />
            <img alt="placeholder" src={placeholder} />
            <TextFiller lines={5} />
            <img alt="placeholder" src={placeholder} />
            <TextFiller lines={15} />
          </aside>
        </div>
      </div>
    </>
  );
};

export default DesktopTakeover;
