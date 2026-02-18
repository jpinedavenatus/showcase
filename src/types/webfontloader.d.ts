declare module 'webfontloader' {
  const WebFont: {
    load: (config: {
      google?: {
        families: string[];
      };
      custom?: {
        families: string[];
        urls: string[];
      };
      active?: () => void;
      inactive?: () => void;
    }) => void;
  };

  export default WebFont;
}
