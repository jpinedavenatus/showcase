import { FC, useEffect, useState } from 'react';
import { pvPlayer } from '../lib/pvPlayer';
import { TextFiller } from '../components/DisplayUtils';

const PrerollVideo: FC = () => {
  const [videoVisible, setVideoVisible] = useState<boolean>(false);
  let pvp: pvPlayer;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    pvp = new pvPlayer({
      container: 'player-container',
      placementName: 'pvp_custom_video',
      onFlowComplete: onFlowCompleteCallback,
      onVideoFinished: rewardGrandedCallback,
    });
    return () => {};
  }, []);

  const onFlowCompleteCallback = () => {
    alert('proceed to content!');
    setVideoVisible(false);
    document.body.style.overflow = 'unset';
  };
  const rewardGrandedCallback = () => {
    alert('video finished! reward granded!');
    setVideoVisible(false);
    document.body.style.overflow = 'unset';
  };

  const handlePlay = () => {
    setVideoVisible(true);
    document.body.style.overflow = 'hidden';
    pvp.playVideo();
  };

  return (
    <>
      <div
        id="player-container"
        className="hidden z-20 w-[970px] aspect-video text-center   top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  fixed bg-white p-2 rounded-sm shadow-lg"
      ></div>
      {videoVisible && <div className="z-10 fixed inset-0 bg-black bg-opacity-65 backdrop-blur-sm"></div>}

      <div id="content-container" className="flex justify-center p-4 mt-5">
        <div className="w-full max-w-6xl sm:w-sm md:m-h-[250]">
          <div className="flex flex-col md:flex-row  gap-5">
            <main
              id="article-body"
              className="w-full p-6 space-y-2  bg-gray-100 rounded-sm overflow-hidden  border shadow-lg roundwd-sm"
            >
              <h1 className="font-semibold text-2xl"> <span className='text-venatusred font-bold'> Preroll</span> Video</h1>

              <TextFiller lines={3} />
              <div>
                <div className="flex">
                  <div id="game-wrapper" className="relative  w-full md:w-3/4 border-2 border-dashed border-gray-300 h-[500px] mx-auto bg-slate-400">

                    <button
                      id="playButton"
                      onClick={handlePlay}
                      className="hover:bg-gray-100 hover:text-venatusred hover:border-venatusred bg-venatusred border-2 rounded-md text-white text-center px-10 py-5 text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
                    >
                      Play Video
                    </button>

                  </div>
                </div>
              </div>
              <TextFiller lines={3} />
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrerollVideo;
