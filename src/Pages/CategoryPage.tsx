import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IPageProps, TThumbnailProps } from '../types';
import { ADVERTISERS_MENU, PUBLISHERS_MENU } from '../Constants';

const CategoryPage: FC<IPageProps> = ({ setPage, pageHeader, setPageHeader }) => {
  const categoriesMenu = pageHeader === 'Publisher' ? PUBLISHERS_MENU : ADVERTISERS_MENU;

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

  /* 
  * thumbnails template
  */
  type TInnerAccordionProps = {
    index: number;
    isOpen: boolean;
    category: string;
    onToggle: () => void;
    children: React.ReactNode;


  }
  const InnerAccordion = ({ isOpen, category, onToggle, children }: TInnerAccordionProps) => (
    <div className='border bg-slate-100 border-gray-300 overflow-hidden m-2'>
      <button
        onClick={() => onToggle()}
        className='pl-5 text-md w-full flex justify-between items-center p-2 font-semibold text-left text-white bg-gray-700 hover:bg-venatusred hover:text-white transition'
      >
        {category}
        <span className='text-lg'>{isOpen ? '-' : '+'}</span>
      </button>

      {/* Content */}
      <div
        className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className='overflow-hidden'>
          <div className='p-4 border-t'>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3'>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const Thumbnail = ({ name, image, pageId, path, pageHeader }: TThumbnailProps) => (
    <Link
      to={`${path}?pageId=${pageId}`}
      className='relative w-full aspect-square overflow-hidden  group block'
      onClick={() => {
        setPage(pageId);
        setPageHeader?.(pageHeader ?? '');
      }}
    >
      <img
        src={image}
        alt={name}
        className='w-full h-full object-cover group-hover:scale-110 transition duration-300'
      />

      <div className='absolute inset-0 items-center text-center justify-center bg-gradient-to-tr from-red-950/40 to-venatusred opacity-100/40 group-hover:opacity-0 transition flex p-2'>
        <span className='text-white text-4xl'>{name}</span>
      </div>

      <div className='absolute inset-0 items-center text-center justify-center bg-gray-800 opacity-0 group-hover:opacity-100 transition flex p-2 border-4 border-white shadow-xl'>
        <div className='text-white  border-white border-4 p-1 w-full h-full flex justify-center align-center'>
          <span className='text-3xl self-center'>{name}</span>
        </div>

      </div>
    </Link>
  )

  return (
    <>
      <div className='max-w-6xl mx-auto space-y-3 mb-5 mt-10 px-5'>
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
                    ${isOpen ? 'bg-venatusred text-white' : ''}
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
                      {item.subCategory.map((item, subIndex) => {


                        return (
                          <InnerAccordion
                            index={subIndex}
                            isOpen={activeSubIndex === subIndex}
                            onToggle={() => toggleSubAccordion(subIndex)}
                            category={item.category}
                          >
                            {item?.subPages.map((subitems, subIndex2) => (
                              <Thumbnail key={subIndex2} {...subitems} />
                            ))}

                          </InnerAccordion>
                        );
                      })}
                    </>
                  ) :
                    /* no sub categories */
                    (
                    <div className='p-4 border-t'>
                      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3'>
                        {
                          // only subpages
                          item?.subPages &&
                            item?.subPages.map((subitems, subIndex) => (
                              <Thumbnail key={subIndex} {...subitems} />
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
