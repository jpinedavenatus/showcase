import { FC } from 'react';

interface ThumbnailItem {
  id: number;
  image: string;
  title: string;
}
interface ThumbnailProps {
  image: string;
  title: string;
  onClick?: () => void;
}

const Thumbnail: React.FC<ThumbnailProps> = ({ image, title, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex-shrink-0 overflow-hidden rounded-lg bg-gray-200 text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <div className="relative aspect-video w-full">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="p-2">
        <p className="text-sm font-medium text-gray-800 truncate">
          {title}
        </p>
      </div>
    </button>
  );
};


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
      <div className='m-auto block w-full '>
        <h1 className='text-4xl font-bold mx-auto'>Showcase</h1>
        <div className="p-4">
          <div className="flex flex-wrap gap-4">
            {thumbnails.map((item) => (
              <div
                key={item.id}
                className="w-full sm:w-[48%] lg:w-[31%] xl:w-[23%]"
              >
                <Thumbnail image={item.image} title={item.title} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
