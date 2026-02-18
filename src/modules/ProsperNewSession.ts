import { useEffect } from "react";

const ProsperNewSession = () => {
  useEffect(() => {
    self.__VM = self.__VM || [];
    self.__VM.push(function (admanager: any, scope: any) {
      scope.Instances.pageManager.on('navigated', () => {
        // this should trigger everytime you consider the content a "new page"
        scope.Instances.pageManager.newPageSession();
        console.log('[PROSPER] New page session.')
      }, false);
    });

    return () => {

    };
  }, []);
  return null;
};

export default ProsperNewSession;
