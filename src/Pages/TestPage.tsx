import { FC, useEffect } from 'react';
import placeholder from '../images/img.jpg';
import { TextFiller } from '../components/DisplayUtils';
import { E_DEVICE_TYPE, IPageProps } from '../types';
import { useLocation } from 'react-router-dom';
import { prvkCreative } from '../lib/prvkCreative';

const TestPage: FC<IPageProps> = ({ setPage, currentPage }) => {
  const location = useLocation();
  useEffect(() => {
    if (currentPage == '') {
      const params = new URLSearchParams(location.search);

      const pageId = params.get('pageId');
      if (pageId != null) {
        setPage(pageId);
      }
    }

    let creative!: prvkCreative | null;
    if (currentPage !== '') {
      creative = new prvkCreative({ creativeName: currentPage, device: E_DEVICE_TYPE.MOBILE });
    }

    return () => {
      if (creative) {
        creative.removeScript();
      }
    };
  }, [currentPage, setPage, location.search]);
  return (
    <>
      <div className="flex justify-center  mt-50">
        <div id="content-container" className="w-full md:p-0">
          <div className="flex flex-col md:flex-row  gap-5 mt-5 ">
            <main
              id="article-body"
              className=" space-y-2 mx-5 px-5 bg-gray-100 rounded-sm overflow-hidden  border shadow-lg roundwd-sm"
            >
              <h1 className="font-semibold text-2xl pt-5">
                <span className="text-venatusred font-bold">{currentPage.replaceAll('-', ' ').toUpperCase()}</span>{' '}
                TAKEOVER
              </h1>
              <TextFiller />
              <img alt="placeholder" src={placeholder} />
              <TextFiller />
              <TextFiller />
            </main>
            <div id="middle-placement" className="left-[-21px] relative px-10" />
            <aside className="m-5 px-5 bg-gray-100 text-gray-900 p-4 space-y-10  border shadow-lg roundwd-sm">
              <TextFiller lines={4} />

              <TextFiller />
              <TextFiller lines={5} />
              <img alt="placeholder" src={placeholder} />
              <TextFiller lines={15} />
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestPage;
