import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { IPageProps } from '../types';
import { PublishersMenu } from '../Constants';

const CategoryPage: FC<IPageProps> = ({ setPage, pageHeader, setPageHeader }) => {
  const categoriesMenu = PublishersMenu;

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
      <div id='wrapper'>
        <div className='max-w-6xl mx-auto space-y-3 mb-5'>
          {/* Header */}
          {pageHeader && <h1 className='flex font-semi text-4xl justify-center '>{pageHeader}</h1>}
          {categoriesMenu.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div key={index} className='border rounded-xl overflow-hidden'>
                <button
                  onClick={() => toggleAccordion(index)}
                  className={`text-lg w-full flex justify-between items-center p-4 font-semibold text-left bg-gray-50 hover:bg-venatusred hover:text-white transition
                    `}
                >
                  {item.category}
                  <span className='text-xl'>{isOpen ? '-' : '+'}</span>
                </button>

                {/* Content */}
                <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className='overflow-hidden'>
                    <div className='p-4 border-t'>
                      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3'>
                        {item.subPages.map((sub) => (
                          <Link
                            key={sub.pageId}
                            to={`${sub.path}?pageId=${sub.pageId}`}
                            className='relative w-full aspect-square overflow-hidden rounded-lg group block'
                            onClick={() => {
                              setPage(sub.pageId);
                              console.log('pageHeader ........', pageHeader)
                              setPageHeader?.(pageHeader ?? '')
                            }}
                          >
                            {/* Image */}
                            <img
                              src={sub.image}
                              alt={sub.name}
                              className='w-full h-full object-cover group-hover:scale-110 transition duration-300'
                            />

                            <div className='absolute inset-0 items-center text-center justify-center bg-black/40 opacity-100 group-hover:opacity-0 transition flex p-2'>
                              <span className='text-white text-4xl'>{sub.name}</span>
                            </div>

                            <div className='absolute inset-0 items-center text-center justify-center bg-venatusred/70 opacity-0 group-hover:opacity-100 transition flex p-2'>
                              <span className='text-white text-3xl border-white border-4 py-2 px-5'>{sub.name}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
