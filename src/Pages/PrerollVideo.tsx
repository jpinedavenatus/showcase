import { FC, useEffect } from 'react'
import placeholder from '../images/img.jpg'
import { pvPlayer } from '../lib/pvPlayer'
import { TextFiller } from '../components/utils'

const PrerollVideo: FC = () => {
  let pvp: pvPlayer

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    pvp = new pvPlayer({
      container: 'player-container',
      placementName: 'pvp_custom_video',
      onFlowComplete: onFlowCompleteCallback,
      onVideoFinished: rewardGrandedCallback,
    })
    return () => {}
  }, [])

  const onFlowCompleteCallback = () => {
    alert('proceed to content!')
         document.body.style.overflow = 'unset';
     
  }
  const rewardGrandedCallback = () => {
    alert('video finished! reward granded!')
      document.body.style.overflow = 'unset';
  }

  const handlePlay = () => {
      document.body.style.overflow = 'hidden';
    pvp.playVideo()
  }

  return (
    <>
      <div
        id="player-container"
        className="hidden z-10 w-[970px] aspect-video text-center   top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  fixed bg-white p-2 rounded-sm shadow-lg"
      ></div>
       <div id='wrapper'>



        <div id='content-container' className='flex justify-center p-4'>
          <div className='w-full max-w-6xl sm:w-sm md:m-h-[250]'>
            <div className='flex justify-center mb-5'>
            </div>
            <div className='flex flex-col md:flex-row  gap-5  '>
              <main
                id='article-body'
                className='w-full p-6 space-y-2  bg-gray-100 rounded-sm overflow-hidden  border shadow-lg roundwd-sm'
              >

                <h1 className='font-semibold text-2xl'>Preroll Video</h1>

                <TextFiller />
                <div className='h-[200px]'>
                  <div className="flex">
                  <div
                    id="game-wrapper"
                    className="relative  w-full md:w-3/4 border h-[400px] mx-auto"
                  >
                    <button
                      id="playButton"
                      onClick={handlePlay}
                      className="hover:bg-gray-100 hover:text-red-700 hover:border-red-700 bg-red-700 border rounded-md text-white text-center px-10 py-5 text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
                    >
                      Play Video
                    </button>
                    <img
                      className="m-auto"
                      alt="placeholder"
                      src={placeholder}
                    />
                  </div>
                </div>
                </div>
                <img className='m-auto' alt='placeholder' src={placeholder} />
                <TextFiller />
          
              </main>

            
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default PrerollVideo
