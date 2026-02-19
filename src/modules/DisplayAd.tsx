import Ad from "./Ad";
import { FC } from 'react';
const  DisplayAds: FC<{ page: string; placementName: string }> = ({ page, placementName }) => {
  //return 'desktop takeover'

 let supportedPlacements = [''];
  switch (page) {
    case 'vertical-sticky':
      supportedPlacements = ['vertical_sticky'];
      break;
    case 'horizontal-sticky':
      supportedPlacements = ['horizontal_sticky'];
      break;

     case 'mobile-horizontal-sticky':
      supportedPlacements = ['mobile_horizontal_sticky'];
      break;

    case 'desktop-regular-ads':
      supportedPlacements = ['leaderboard', 'double_mpu', 'billboard', 'mpu', 'skyscraper'];
      break;

    case 'inline-video':
      console.log('hdfhfhdfhdfhs', placementName)
      supportedPlacements = ['pvp_video', 'video'];
      break;

    case 'video-slider':
      console.log('hdfhfhdfhdfhs', placementName)
      supportedPlacements = ['pvp_video_slider', 'video_slider'];
      break;

    default:
      //  console.log('DisplayAds: page not found to set supportedPlacements!', page);
      break;
  }
  if (!supportedPlacements.includes(placementName)) return <></>;
  else {
    if (placementName == 'pvp_video') return <div className="flex justify-center align-middle h-[200px]"><Ad placementName={placementName} /></div>;
    else return <div className="flex justify-center align-middle"><Ad placementName={placementName} /></div>;
  }
};
export default DisplayAds;