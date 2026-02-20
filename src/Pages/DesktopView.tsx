import { FC, useEffect } from 'react';
import placeholder from '../images/img.jpg';
import { TextFiller } from '../components/utils';
import { IPageProps } from '../types';
import Sidebar from '../components/Sidebar';
import { useLocation } from 'react-router-dom';
import DisplayAds from '../modules/DisplayAd';

const DesktopView: FC<IPageProps> = ({ setPage, currentPage, pageHeader }) => {
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
      <div id='wrapper'>

        <DisplayAds placementName='vertical_sticky' page={currentPage} />
        <DisplayAds placementName='horizontal_sticky' page={currentPage} />
        <DisplayAds placementName='pvp_video_slider' page={currentPage} />

        <div id='content-container' className='flex justify-center p-4'>
          <div className='w-full  2xl:max-w-6xl max-w-5xl  sm:w-sm'>
            <div className='flex justify-center mb-5'>
              <DisplayAds placementName='billboard' page={currentPage} />
            </div>
            <div className='flex flex-col md:flex-row  gap-5  '>
              <main
                id='article-body'
                className='w-full md:w-3/4 p-6 space-y-2  bg-gray-100 rounded-sm overflow-hidden  border shadow-lg roundwd-sm'
              >

                <h1 className='font-semibold text-2xl'>{currentPage && currentPage.replace('-', ' ').toUpperCase()}</h1>
                <DisplayAds placementName='leaderboard' page={currentPage} />

                <TextFiller />
                <div className='h-[200px]'>
                  <DisplayAds placementName='pvp_video' page={currentPage} />
                </div>
                <img className='m-auto' alt='placeholder' src={placeholder} />
                <TextFiller />
                <DisplayAds placementName='mpu' page={currentPage} />
                <img className='m-auto' alt='placeholder' src={placeholder} />
                <TextFiller lines={5} />
                <TextFiller lines={20} />
              </main>

              <aside className='w-full md:w-1/3 bg-gray-100 text-gray-900 p-4 space-y-10  border shadow-lg roundwd-sm'>
                <DisplayAds placementName='skyscraper' page={currentPage} />
                <TextFiller lines={4} />
                <img alt='placeholder' src={placeholder} />

                <TextFiller />
                <img alt='placeholder' src={placeholder} />
                <DisplayAds placementName='double_mpu' page={currentPage} />
                <TextFiller lines={5} />
                <img alt='placeholder' src={placeholder} />
                <TextFiller lines={15} />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopView;
