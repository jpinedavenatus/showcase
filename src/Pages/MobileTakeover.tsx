import { FC, useEffect, useRef } from 'react';
// import placeholder from '../images/img.jpg';
// import { TextFiller } from '../components/utils';
// import placeholder from '../images/img.jpg';
import { IPageProps } from '../types';
import { useLocation } from 'react-router-dom';
import { prvkCreative } from '../lib/prvkCreative';
import Sidebar from '../components/Sidebar';
/* import { TextFiller } from '../components/utils';
import ReactDOMServer from 'react-dom/server'; */

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

  /* const importPrvkCreative = () => {
    return `
      <script>
      console.log('add event listener')
        window.addEventListener('prvk-ready', () => {
          console.log('iframe loaded')
           const creative = new window.prvkCreative({creativeName:"${currentPage}", device: "${E_DEVICE_TYPE.MOBILE}"});
          console.log('Creative loaded in iframe:', creative);
        });
      </script>
  `;
  }; */


  /* const importPrvkCreative2 = () => {
    return `
    <script> 
    document.addEventListener("DOMContentLoaded", function () {
     

    if (typeof window.top.vdrmDestroySkin === "function") window.top.vdrmDestroySkin();
    var parentElement = document.querySelector("#prvk-creative-script-4586");
    if (parentElement && parentElement.parentNode)
      parentElement.parentNode.classList.add("prvk-creative-script-parent-4586");
    var nodes = document.querySelectorAll("script[id*='vdrm-script']");
    for (var i = 0; i < nodes.length; i++) {
        nodes[i].parentNode.removeChild(nodes[i]);
    }
    window.top.prvkOverrideSettings = {
        extraStylePath: '',
        extraStylesForDomainPath: '',
        websitesPath: '',
        injectJsPath: ''
    };
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://cdn.prvk.io/studio/KR_700935-INCROSS-LINEAGE-MAR9-MOBILE/4586/creative.min.js?v=%%CACHEBUSTER%%";
    script.id = "vdrm-script-4586";
    parent.__VM && parent.__VM.push(function (admanager, scope) {
      window.frameElement.placement = admanager.getPlacementByWindow(self);
    });
    script.iframeElement = window.frameElement;
    script.clickTag = "%%CLICK_URL_UNESC%%%%DEST_URL_UNESC%%";
    script.li = "%eaid!";
    script.async = true;
    script.dataset.cfasync = false;
    document.body.appendChild(script);
    });
    </script>

  `;
  }; */

/*   const textFillerHTML = (lines: number = 10) => {
    return ReactDOMServer.renderToStaticMarkup(<TextFiller lines={lines} />);
  }; */

  /* const pageContent = () => `

        <div  class='flex justify-center  mt-50'>
          <div id='content-container' class='w-full  px-5'>
            <div class='flex justify-center mb-5'>
            </div>
            <div class='flex flex-col md:flex-row  gap-5  '>
              <main
                id='article-body'
                class='w-full md:w-3/4 p-6 space-y-2  bg-gray-100 rounded-sm overflow-hidden  border shadow-lg roundwd-sm'
              >
                <h1 class='font-semibold text-2xl'>TEST PAGE</h1>

                ${textFillerHTML()}
                <img class="m-auto" alt="placeholder" src="${placeholder}" /> 
                ${textFillerHTML()}
                ${textFillerHTML(5)}  
                ${textFillerHTML(20)}
              </main>
              <div id="middle-placement" >
              </div>
              <aside class='w-full md:w-1/3 bg-gray-100 text-gray-900 p-4 space-y-10  border shadow-lg roundwd-sm'>
                ${textFillerHTML(4)}

                <TextFiller />
                ${textFillerHTML(5)}
                <img class="m-auto" alt="placeholder" src="${placeholder}" /> 
                ${textFillerHTML(15)}
              </aside>
            </div>
          </div>
          </div>
  `; */

/*   const html = `
    <!DOCTYPE html>
    <html>
      <head>
      <meta charset="UTF-8" />
      <script src="https://cdn.tailwindcss.com"></script>
      <base href="https://test.venatusmedia.com/">
      
      ${importPrvkCreative2()}

      </head>

      <body class="h-full">
        <div  id="top_container" >
        <div id="sticky_nav" class="navigation w-full bg-sky-300 text-xl justify-center flex align-center py-8 shadow-md border-2 border-dashed rounded-lg border-b-gray-300"> 
         HEADER 
        </div>
        </div>
        

        ${pageContent()}

       <footer id="bottom_container" class=" w-full bg-sky-300 text-xl justify-center flex align-center py-8 shadow-md border-2 border-dashed rounded-lg border-b-gray-300"> 
       FOOTER 
       </footer>
      </body>
    </html>
  `; */

  return (
    <>
      <Sidebar currentPage={currentPage} setPage={setPage} pageHeader={pageHeader} />

      <div className='flex justify-center items-center mt-10'>
        {/* Phone body */}
        <div className='relative w-[390px] h-[780px] bg-black rounded-[3rem] p-3 shadow-2xl'>
          {/* Side buttons */}
          <div className='absolute left-[-3px] top-32 h-16 w-1 bg-gray-700 rounded'></div>
          <div className='absolute left-[-3px] top-52 h-10 w-1 bg-gray-700 rounded'></div>
          <div className='absolute right-[-3px] top-44 h-20 w-1 bg-gray-700 rounded'></div>

          {/* Screen */}
          <div className='relative h-full w-full bg-white rounded-[2.5rem] overflow-hidden'>
            {/* Notch */}
            <div className='absolute top-0 left-1/2 -translate-x-1/2 z-10'>
              <div className='h-6 w-40 bg-black rounded-b-2xl flex items-center justify-center'>
                <div className='h-1 w-16 bg-gray-700 rounded-full'></div>
              </div>
            </div>

            {/* iframe screen */}
            <iframe
              ref={iframeRef}
              // srcDoc={html}
              src='testpage'
              sandbox='allow-scripts allow-same-origin'
              className='w-full h-full overflow-hidden'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileTakeover;
