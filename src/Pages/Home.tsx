import { FC } from 'react';

interface ThumbnailItem {
  id: number;
  image: string;
  title: string;
}
const Thumbnail = () => (
  <div
    className='
  w-[220px]
  h-[200px]
  md:h-[200px]
  flex 
  p-4
  border border-default
  rounded-md
  shadow-xs
  bg-neutral-primary-soft
  transition-all duration-500 ease-out
  hover:shadow-md
  hover:bg-gradient-to-r
  bg-gray-800
  text-white
  hover:from-red-500
  hover:to-red-800
  cursor-pointer
'
  >
    <a href='#'>
      {/* <img className='m-auto md:w-[100px] md:h= rounded-md' alt='placeholder' src={placeholder} /> */}

      <div className=' pt-2'>
        <div className=''>
          {/* <h5 className='text-1xl font-bold'>test</h5> */}
          <div className="w-min break-all h-fit p-2 uppercase font-bold text-2xl">

          </div>
        </div>
      </div>
    </a>
  </div>
);



const Home: FC = () => {

  const thumbnails: ThumbnailItem[] = [
    {
      id: 1,
      image: "https://picsum.photos/600/400?1",
      title: "Thumbnail One",
    },
    {
      id: 2,
      image: "https://picsum.photos/600/400?2",
      title: "Thumbnail Two",
    },
    {
      id: 3,
      image: "https://picsum.photos/600/400?3",
      title: "Thumbnail Three",
    }]

  return (
    <div id='wrapper'>
      <div className='m-auto flex w-full '>
        <h1 className='text-4xl font-bold mx-auto'>Advertiser</h1>
      </div>

      <div className='flex justify-center p-4'>
        <div id='content-container' className='w-full max-w-6xl gap-10 sm:w-sm flex justify-center'>
          <div className='flex flex-wrap gap-10 justify-center items-center max-w-[940px]'>
            <Thumbnail />
            <Thumbnail />
            <Thumbnail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
