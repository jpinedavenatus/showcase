import { FC, useEffect, useRef } from 'react';
// import placeholder from '../images/img.jpg';
// import { TextFiller } from '../components/utils';
import placeholder from '../images/img.jpg';
import { E_DEVICE_TYPE, IPageProps } from '../types';
import { useLocation } from 'react-router-dom';
import { prvkCreative } from '../lib/prvkCreative';
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

    const handleLoad = () => {
      const iframeWindow = iframe.contentWindow;
    if (!iframeWindow) return;

      // inject class
    iframeWindow.prvkCreative = prvkCreative;

      // trigger event AFTER listener exists
    iframeWindow.dispatchEvent(new Event('prvk-ready'));
    };

    iframe.addEventListener('load', handleLoad);

    return () => {
      iframe.removeEventListener('load', handleLoad);
      //  creative.removeScript();
      //   document.body.removeChild(script); // cleanup on unmount
    };

  }, [currentPage, setPage, location.search]);

/*   const createCSS = () => {
    return `
        <style>
        html, body {
          height: 100%;
          margin: 0;
          overflow-y: scroll; 
        }

        * {
          scrollbar-width: thin;
          scrollbar-color: rgba(0,0,0,0.3) transparent;
        }
        *::-webkit-scrollbar {
          width: 6px;
        }
        *::-webkit-scrollbar-track {
          background: transparent;
        }
        *::-webkit-scrollbar-thumb {
          background-color: rgba(0,0,0,0.3);
          border-radius: 10px;
          border: 2px solid transparent;
        }
        *::-webkit-scrollbar-thumb:hover {
          background-color: rgba(0,0,0,0.5);
        }
      </style>`
  } */

  const importPrvkCreative = () => {
    return `
      <script>
      console.log('add event listener')
        window.addEventListener('prvk-ready', () => {
          console.log('iframe loaded')
           const creative = new window.prvkCreative({creativeName:"${currentPage}", device: "${E_DEVICE_TYPE.MOBILE}"});
          console.log('Creative loaded in iframe:', creative);
        });
      </script>
  `
  }

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
      <meta charset="UTF-8" />
      <script src="https://cdn.tailwindcss.com"></script>
      ${importPrvkCreative()}

      </head>

      <body class="h-full">
        <div id="header" class="bg-neutral-400 text-xl py-2 justify-center flex align-center pt-8 shadow-md border-b-2 border-b-gray-300"> HavBar Header </div>
        <div class="h-full overflow-y-auto pt-10 px-4 space-y-4 bg-gray-100 rounded-lg">
          <div id="content-container" class="flex justify-center">
            <div class="w-full">
              <div class="flex flex-col gap-5">

                <main id="article-body"
                  class="w-full p-6 space-y-4 rounded-sm overflow-hidden border shadow-lg">

                  <h1 class="font-semibold text-2xl">Mobile Takeover</h1>

                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                  <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                    <img class="m-auto" alt="placeholder" src="${placeholder}" />
                  

                  <div class="flex justify-center mb-5">
                    <div class="w-[300px] h-[250px] bg-gray-300 flex items-center justify-center">
                      AD MPU
                    </div>
                  </div>

                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>

                  <img class="m-auto" alt="placeholder" src="${placeholder}" />

                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>

                </main>
                <div id="middle-placement" />
                <aside class="w-full text-gray-900 p-4 space-y-6 border shadow-lg">

                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>

                  <img class="m-auto" alt="placeholder" src="${placeholder}" />

                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>

                </aside>

              </div>
            </div>
          </div>
        </div>
       <div id="footer" class="bg-neutral-400 text-xl py-2 justify-center flex align-center pt-8 shadow-md border-b-2 border-b-gray-300"> HavBar Header </div>
      </body>
    </html>
  `;


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
              srcDoc={html}
              sandbox="allow-scripts allow-same-origin"
              className="w-full h-full overflow-hidden"
            />
          </div>
        </div>
      </div>




      {/*  <div id='slot-desktop-takeover' className='w-[970px] justify-center flex m-auto mt-5'></div>

            <div id='content-container' className='m-auto w-full  2xl:max-w-6xl max-w-5xl  sm:w-sm px-5 flex justify-center p-4'>

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
            </div> */}



    </>
  );
};

export default MobileTakeover;
