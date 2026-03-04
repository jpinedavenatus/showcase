import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IPageProps } from '../types';
import AdvertisersMenu, { PublishersMenu } from '../Constants';

const CategoryPage: FC<IPageProps> = ({ setPage, pageHeader, setPageHeader }) => {
  const categoriesMenu = pageHeader === 'Publisher' ? PublishersMenu : AdvertisersMenu;

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeSubIndex, setActiveSubIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const toggleSubAccordion = (index: number) => {
    setActiveSubIndex(activeSubIndex === index ? null : index);
  };
  useEffect(() => {
    return () => {
      setActiveIndex(null);
      setActiveSubIndex(null);
    };
  }, []);

  const Thumbnails = (props: { image: string, name: string }) => (
    <>
      <img
        src={props.image}
        alt={props.name}
        className='w-full h-full object-cover group-hover:scale-110 transition duration-300'
      />

      <div className='absolute inset-0 items-center text-center justify-center bg-gradient-to-tr from-red-950/40 to-venatusred opacity-100/40 group-hover:opacity-0 transition flex p-2'>
        <span className='text-white text-4xl'>{props.name}</span>
      </div>

      <div className='absolute inset-0 items-center text-center justify-center bg-gray-800 opacity-0 group-hover:opacity-100 transition flex p-2 border-4 border-white shadow-xl'>

        <span className='text-white text-3xl border-white border-4 py-2 px-5'>{props.name}</span>
      </div>
    </>
  );

  return (
    <>
      <div className='max-w-6xl mx-auto space-y-3 mb-5 mt-10'>
        {/* Header */}
        {pageHeader && <h1 className='flex font-semi text-4xl justify-center'>{pageHeader}</h1>}
        {categoriesMenu.map((item, index) => {
          const isOpen = activeIndex === index;

          return (
            <div key={index} className={`border border-gray-300 overflow-hidden 
              
              ${isOpen ? ' border-b-venatusred border-b-4' : ''}
              
              `}
              >
              <button
                onClick={() => toggleAccordion(index)}
                className={`text-lg w-full flex justify-between items-center p-4 font-semibold text-left bg-gray-50 hover:bg-venatusred hover:text-white transition
                    ${isOpen ? 'bg-venatusred text-white border-b-venatusred border-b-4' : ''}
                    `}
              >
                {item.category}
                <span className='text-xl'>{isOpen ? '-' : '+'}</span>
              </button>

              {/* Content */}
              <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className='overflow-hidden'>
                  {item.subCategory ? (
                    <>
                      {item.subCategory.map((item, index) => {
                        const isSubOpen = activeSubIndex === index;

                        return (
                          <div key={index} className='border bg-slate-100 border-gray-300 overflow-hidden m-2'>
                            <button
                              onClick={() => toggleSubAccordion(index)}
                              className='pl-5 text-md w-full flex justify-between items-center p-2 font-semibold text-left text-white bg-gray-700 hover:bg-venatusred hover:text-white transition'
                            >
                              {item.category}
                              <span className='text-lg'>{isSubOpen ? '-' : '+'}</span>
                            </button>

                            {/* Content */}
                            <div
                              className={`grid transition-all duration-300 ${isSubOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                            >
                              <div className='overflow-hidden'>
                                <div className='p-4 border-t'>
                                  <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3'>
                                    {item?.subPages.map((sub) => (
                                      <Link
                                        key={sub.pageId}
                                        to={`${sub.path}?pageId=${sub.pageId}`}
                                        className='relative w-full aspect-square overflow-hidden group block'
                                        onClick={() => {
                                          setPage(sub.pageId);
                                          console.log('pageHeader ........', pageHeader);
                                          setPageHeader?.(pageHeader ?? '');
                                        }}
                                      >
                                        {/* Image */}
                                        <Thumbnails image={sub.image} name={sub.name} />
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </>
                  ) : (
                    <div className='p-4 border-t'>
                      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3'>
                        {
                          // only subpages
                          item?.subPages &&
                            item?.subPages.map((sub) => (
                              <Link
                                key={sub.pageId}
                                to={`${sub.path}?pageId=${sub.pageId}`}
                                className='relative w-full aspect-square overflow-hidden  group block'
                                onClick={() => {
                                  setPage(sub.pageId);
                                  setPageHeader?.(pageHeader ?? '');
                                }}
                              >
                                <Thumbnails image={sub.image} name={sub.name} />

                              </Link>
                            ))
                        }
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CategoryPage;
