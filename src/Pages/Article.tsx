import { FC } from 'react';
import placeholder from '../images/img.jpg';
import { TextFiller } from '../components/utils';

const Article: FC = () => {
  return (
    <div id='wrapper'>
      <div id='content-container' className='flex justify-center p-4'>
        <div className='w-full max-w-6xl sm:w-sm'>
          <div className='flex flex-col md:flex-row  gap-5  '>

            <main
              id='article-body'
              className='w-full md:w-3/4 p-6 space-y-2  bg-gray-100 rounded-sm overflow-hidden  border shadow-lg roundwd-sm'
            >
              <h1 className='font-semibold text-2xl'>
                Sample Article
              </h1>
              <TextFiller />
              <img className='m-auto' alt='placeholder' src={placeholder} />
              <TextFiller />
              <img className='m-auto' alt='placeholder' src={placeholder} />
              <TextFiller lines={5} />
              <TextFiller lines={20} />
            </main>

            <aside className='w-full md:w-1/3 bg-gray-100 text-gray-900 p-4 space-y-10  border shadow-lg roundwd-sm'>
              <div id='slot-mpu-1' className='venatus-ads'></div>
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
  );
};

export default Article;
