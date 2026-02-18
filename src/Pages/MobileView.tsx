import { FC, useEffect } from 'react';
import placeholder from '../images/img.jpg';
import { TextFiller } from '../components/utils';
import Ad from '../modules/Ad';
import { IPageProps } from '../types';
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const MobileView: FC<IPageProps> = ({ setPage, currentPage }) => {
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
     <Sidebar currentPage={currentPage} setPage={setPage} />
     <div id='wrapper' className='mb-5'>
      <div className='flex justify-center items-center '>
        {/* <!-- Phone body --> */}
        <div className='relative w-[390px] h-[780px] bg-black rounded-[3rem] p-3 shadow-2xl'>
          {/* <!-- Side buttons --> */}
          <div className='absolute left-[-3px] top-32 h-16 w-1 bg-gray-700 rounded'></div>
          <div className='absolute left-[-3px] top-52 h-10 w-1 bg-gray-700 rounded'></div>
          <div className='absolute right-[-3px] top-44 h-20 w-1 bg-gray-700 rounded'></div>
          {/* <!-- Screen --> */}
          <div className='relative h-full w-full bg-white rounded-[2.5rem] overflow-hidden'>
            {/* <!-- Notch --> */}
            <div className='absolute top-0 left-1/2 -translate-x-1/2 z-10'>
              <div className='h-6 w-40 bg-black rounded-b-2xl flex items-center justify-center'>
                <div className='h-1 w-16 bg-gray-700 rounded-full'></div>
              </div>
            </div>
            {/* <!-- Scrollable content --> */}
            <div className='h-full overflow-y-auto pt-10 px-4 space-y-4  bg-gray-100 rounded-lg'>
              <div id='content-container' className='flex justify-center '>
                <div className='w-full'>
                  <div className='flex flex-col gap-5'>
                    <main
                      id='article-body'
                      className='w-full  p-6 space-y-2  rounded-sm overflow-hidden  border shadow-lg roundwd-sm '
                    >
                      <h1 className='font-semibold text-2xl'>Mobile Display</h1>

                      <TextFiller />
                      <img className='m-auto' alt='placeholder' src={placeholder} />
                      <div className='flex justify-center mb-5'>
                        <Ad placementName='leaderboard' />
                      </div>
                      <TextFiller />
                      <img className='m-auto' alt='placeholder' src={placeholder} />
                      <TextFiller lines={5} />
                      <TextFiller lines={20} />
                    </main>
                    <aside className='w-full  text-gray-900 p-4 space-y-10  border shadow-lg roundwd-sm'>
                      <TextFiller lines={4} />
                      <img alt='placeholder' src={placeholder} />
                      <TextFiller />

                    </aside>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
   
  
  );
};
export default MobileView;
