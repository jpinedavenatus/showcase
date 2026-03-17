import { useEffect, useState } from 'react';

const ProsperNewSession = () => {
  const [eventAdded, setEventAdded] = useState<boolean>(false);
  useEffect(() => {
    self.__VM = self.__VM || [];
    self.__VM.push(function (admanager: any, scope: any) {
      if (admanager) {
        //dummy)
      }
      if (!eventAdded) {
        setEventAdded(true);
        console.log('Ad Event');
        scope.Instances.pageManager.on(
          'navigated',
          () => {
            // this should trigger everytime you consider the content a "new page"
            scope.Instances.pageManager.newPageSession();
            console.log('[PROSPER] New page session.');
            if (typeof window.vdrmDestroySkin === 'function') window.vdrmDestroySkin();
          },
          false,
        );
      }
    });

    return () => {};
  }, []);
  return null;
};

export default ProsperNewSession;
