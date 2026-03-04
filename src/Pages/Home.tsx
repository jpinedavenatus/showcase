import { FC } from 'react';


const Home: FC = () => {

  return (
    <>
      <div className='flex items-center justify-center h-full'>
        <div className="flex  w-full flex-col md:flex-row overflow-hidden h-[400px] mb-10">
          {/* Left Section */}
          <a
            href="#him"
            className="group relative flex flex-1 items-center justify-center bg-gray-900 transition-all duration-500 ease-in-out md:hover:flex-[1.5]"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0  bg-cover bg-center opacity-60 transition-transform duration-700 group-hover:scale-110"
            />
            {/* Content */}
            <div className="relative z-10 text-center">
              <h2 className="mb-4 text-5xl font-bold tracking-tighter text-white md:text-6xl">
                PUBLISHERS
              </h2>
              <div className="inline-block border-2 border-white px-8 py-3 text-sm font-bold tracking-widest text-white transition-colors duration-300 group-hover:bg-white group-hover:text-black">
                EXPLORE DEMOS
              </div>
            </div>
          </a>

          {/* Right Section */}
          <a
            href="#her"
            className="group relative flex flex-1 items-center justify-center bg-gray-800 transition-all duration-500 ease-in-out md:hover:flex-[1.5]"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-60 transition-transform duration-700 group-hover:scale-110"
            />
            {/* Content */}
            <div className="relative z-10 text-center">
              <h2 className="mb-4 text-5xl font-bold tracking-tighter text-white md:text-6xl">
                ADVERTISERS
              </h2>
              <div className="inline-block border-2 border-white px-8 py-3 text-sm font-bold tracking-widest text-white transition-colors duration-300 group-hover:bg-white group-hover:text-black">
                EXPLORE DEMOS
          </div>
        </div>
          </a>
      </div>
      </div>

    </>
  );
};

export default Home;
