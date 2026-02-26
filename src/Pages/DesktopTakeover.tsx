import { FC, useEffect } from 'react';
import placeholder from '../images/img.jpg';
import { TextFiller } from '../components/utils';
import { IPageProps } from '../types';
import Sidebar from '../components/Sidebar';
import { useLocation } from 'react-router-dom';
import { prvkCreative } from '../lib/prvkCreative';


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

        const creative = new prvkCreative(currentPage)
        return () => {
            creative.removeScript();
            //   document.body.removeChild(script); // cleanup on unmount
        };

    }, [currentPage, setPage, location.search]);

    return (
        <>
            <Sidebar currentPage={currentPage} setPage={setPage} pageHeader={pageHeader} />
            <div id='wrapper'>

                <div id='slot-desktop-takeover' className='w-[970px] justify-center flex m-auto'></div>
                <div className='flex justify-center p-4'>
                    <div id='content-container' className='w-full  2xl:max-w-6xl max-w-5xl  sm:w-sm px-5'>
                        <div className='flex justify-center mb-5'>
                        </div>
                        <div className='flex flex-col md:flex-row  gap-5  '>
                            <main
                                id='article-body'
                                className='w-full md:w-3/4 p-6 space-y-2  bg-gray-100 rounded-sm overflow-hidden  border shadow-lg roundwd-sm'
                            >

                                <h1 className='font-semibold text-2xl'>{currentPage && currentPage.replace('-', ' ').toUpperCase()}</h1>

                                <TextFiller />

                                <img className='m-auto' alt='placeholder' src={placeholder} />
                                <TextFiller />
                                <img className='m-auto' alt='placeholder' src={placeholder} />
                                <TextFiller lines={5} />
                                <TextFiller lines={20} />
                            </main>

                            <aside className='w-full md:w-1/3 bg-gray-100 text-gray-900 p-4 space-y-10  border shadow-lg roundwd-sm'>
                                <TextFiller lines={4} />
                                <img alt='placeholder' src={placeholder} />

                                <TextFiller />
                                <img alt='placeholder' src={placeholder} />
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

export default DesktopTakeover;
