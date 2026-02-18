import { FC } from 'react';
import placeholder from '../images/img.jpg';
/*
 SPA TAG IMPLEMENTATION

 MPA IMPLEMENTATION

*/
const Thumbnail = () => (
  <div
    className='
  w-[300px]
  flex flex-col items-center
  p-4
  border border-default
  rounded-sm
  shadow-xs
  bg-neutral-primary-soft
  transition-all duration-500 ease-out
  hover:shadow-md
  hover:bg-gradient-to-r
  bg-gray-800
  text-white
  hover:from-red-500
  hover:to-red-800
'
  >
    <a href='#'>
      <img className='m-auto md:w-[100px] md:h= rounded-md' alt='placeholder' src={placeholder} />

      <div className='flex justify-center pt-2'>
        <div className='text-center  gap-2'>
          <h5 className='text-1xl font-bold'>test</h5>
        </div>
      </div>
    </a>
  </div>
);

/* interface ThumbnailItem {
  id: number;
  image: string;
  title: string;
} */
const Sandbox: FC = () => {

/*   const thumbnails: ThumbnailItem[] = [
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
    }] */

  return (
    <div id='wrapper'>
      <div className='m-auto flex w-full '>
        <h1 className='text-4xl font-bold mx-auto'>Sandbox Demos</h1>
      </div>

      <div className='flex justify-center p-4'>
        <div id='content-container' className='w-full max-w-6xl sm:w-sm flex justify-center'>
          <div className='flex flex-wrap gap-2 justify-center items-center max-w-[940px]'>
            <Thumbnail />
            <Thumbnail />
            <Thumbnail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sandbox;
