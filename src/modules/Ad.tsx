import { FC, useEffect, useRef } from 'react';
import { AdProps } from '../types';
import { isHSorVideoSlider } from '../components/utils';

const Ad: FC<AdProps> = ({ placementName, alias }) => {
  const elRef = useRef(null);


  useEffect(() => {
    let placement: any;
    console.log('[PROSPER] add', placementName);

    const handleAdManagerPush = (admanager: any, scope: any) => {
      if (admanager) {
        //dummy)
      }

      if (placementName === 'vertical_sticky') {
        scope.Config.verticalSticky().display();
      } else {
        placement = scope.Config.get(placementName, alias).display(
          isHSorVideoSlider(placementName) ? { body: true } : elRef.current,
        );
      }
    };

    const handleUnmount = (admanager: any, scope: any) => {
      console.log('[PROSPER] removed', placementName);

      if (placementName === 'vertical_sticky') {
        scope.Config.verticalSticky().destroy();
      } else {
        admanager.removePlacement(placement.instance());
      }
    };

    self.__VM.push(handleAdManagerPush);

    return () => {
      self.__VM.push(handleUnmount);
    };
  }, []);
  return <div ref={elRef}></div>;
};

export default Ad;
