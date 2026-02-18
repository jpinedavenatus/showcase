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

    default:
      console.warn('DisplayAds: page not found to set supportedPlacements!', page);
      break;
  }
  if (!supportedPlacements.includes(placementName)) return <></>;
  else return <div className="flex justify-center align-middle"><Ad placementName={placementName}/></div>;
};
export default DisplayAds;