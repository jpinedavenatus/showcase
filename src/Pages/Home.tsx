import { FC } from 'react';
import { Link } from 'react-router-dom';


const Home: FC = () => {

  return (
    <>
      <div className='inset-0 h-[calc(100vh-200px)] md:h-[calc(100vh-270px)]  '>
        <div className="flex w-full flex-col md:flex-row overflow-hidden items-center justify-center h-full ">
          {/* Left Section */}
          <Link
            to='/publisher'
            className="h-full group relative flex flex-1 items-center justify-center bg-gray-900 transition-all duration-500 ease-in-out md:hover:flex-[1.5] w-full"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0  bg-cover bg-center opacity-60 transition-transform duration-700 group-hover:scale-110"
            />
            {/* Content */}
            <div className="relative  text-center">
              <h2 className="mb-4 text-5xl font-bold tracking-tighter text-white md:text-6xl">
                PUBLISHERS
              </h2>
              <div className="inline-block border-2 border-white px-8 py-3 text-sm font-bold tracking-widest text-white transition-colors duration-300 group-hover:bg-white group-hover:text-black">
                EXPLORE DEMOS
              </div>
            </div>
          </Link>

          {/* Right Section */}
          <Link
            to='/advertiser'
            className="h-full group relative flex flex-1 items-center justify-center bg-gray-800 transition-all duration-500 ease-in-out md:hover:flex-[1.5] w-full"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-60 transition-transform duration-700 group-hover:scale-110"
            />
            {/* Content */}
            <div className="relative text-center">
              <h2 className="mb-4 text-5xl font-bold tracking-tighter text-white md:text-6xl">
                ADVERTISERS
              </h2>
              <div className="inline-block border-2 border-white px-8 py-3 text-sm font-bold tracking-widest text-white transition-colors duration-300 group-hover:bg-white group-hover:text-black">
                EXPLORE DEMOS
          </div>
        </div>
          </Link>
      </div>
      </div>

    </>
  );
};

export default Home;
