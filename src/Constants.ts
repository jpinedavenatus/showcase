import { TMenu } from './types';

import placeholder from './images/300x300.jpg';

export const PUBLISHERS_MENU: TMenu[] = [
  {
    category: 'Takeovers',
    collapseLabel: 'TO',
    expandLabel: 'Takeovers',
    subPages: [
      {
        name: 'Premium Modal',
        image: placeholder,
        path: '/desktop-takeover',
        pageId: 'premium-modal',
      },
      {
        name: 'Pushdown',
        image: placeholder,
        path: '/desktop-takeover',
        pageId: 'pushdown',
      },
    ],
  },
  {
    category: 'Rich Medias',

    collapseLabel: 'RM',
    expandLabel: 'Rich Media',
    subPages: [
      {
        name: 'Vertical Sticky',
        image: placeholder,
        path: '/desktop-view',
        pageId: 'vertical-sticky',
      },
      {
        name: 'Horizontal Sticky',
        image: placeholder,
        path: '/desktop-view',
        pageId: 'horizontal-sticky',
      },
      {
        name: 'Mobile Horizontal Sticky',
        image: placeholder,
        path: '/desktop-view',
        pageId: 'mobile-horizontal-sticky',
      },
    ],
  },
  {
    category: 'Display Ads',
    collapseLabel: '𖠿',
    expandLabel: 'Display',
    subPages: [
      {
        name: 'Desktop Ads',
        image: placeholder,
        path: '/desktop-view',
        pageId: 'desktop-regular-ads',
      },
      {
        name: 'Mobile Ads',
        image: placeholder,
        path: '/mobile-view',
        pageId: 'mobile-regular-ads',
      },
      {
        name: 'Desktop Interstitial',
        image: placeholder,
        path: '/desktop-view',
        pageId: 'desktop-interstitial',
      },
    ],
  },
  {
    category: 'Videos',
    collapseLabel: '[V]',
    expandLabel: 'Videos',
    subPages: [
      {
        name: 'Inline Video',
        image: placeholder,
        path: '/desktop-view',
        pageId: 'inline-video',
      },
      {
        name: 'Video Slider',
        image: placeholder,
        path: '/desktop-view',
        pageId: 'video-slider',
      },
      {
        name: 'Reward Video',
        image: placeholder,
        path: '/desktop-view',
        pageId: 'reward-video',
      },
      {
        name: 'Preroll Video',
        image: placeholder,
        path: '/preroll-video',
        pageId: 'prerol-video',
      },
    ],
  },
];

export const ADVERTISERS_MENU: TMenu[] = [

  {
    category: 'Desktop Takeovers',
    collapseLabel: 'DTO',
    expandLabel: 'Desktop Takeovers',
    subCategory: [
      {
        category: 'Templates', subPages: [
          {
            name: 'Premium Modal',
            image: placeholder,
            path: '/desktop-takeover',
            pageId: 'premium-modal',
          },
          {
            name: 'Premium Expandable',
            image: placeholder,
            path: '/desktop-takeover',
            pageId: 'premium-expandable',
          },
          {
            name: 'Microstitial',
            image: placeholder,
            path: '/desktop-takeover',
            pageId: 'microstitial',
          },
          {
            name: 'Toggle',
            image: placeholder,
            path: '/desktop-takeover',
            pageId: 'premium-toggle',
          },
          {
            name: 'Pushdown',
            image: placeholder,
            path: '/desktop-takeover',
            pageId: 'pushdown',
          },
          {
            name: 'Carousel',
            image: placeholder,
            path: '/desktop-takeover',
            pageId: 'carousel',
          },
          {
            name: 'Floor Overlay',
            image: placeholder,
            path: '/desktop-takeover',
            pageId: 'floor-overlay-banner',
          }
        ]
      },
      {
        category: 'Features', subPages: [
          {
            name: 'Video Background',
            image: placeholder,
            path: '/desktop-takeover',
            pageId: 'video-background',
          },
          {
            name: 'Side Change on Scroll',
            image: placeholder,
            path: '/desktop-takeover',
            pageId: 'side-change-on-scroll',
          },
          {
            name: 'Side Change on Expand',
            image: placeholder,
            path: '/desktop-takeover',
            pageId: 'side-change-on-expand',
          },
          {
            name: 'Sticky Video',
            image: placeholder,
            path: '/desktop-takeover',
            pageId: 'sticky-video',
          },
          {
            name: 'Interstitial with Poll Takeover',
            image: placeholder,
            path: '/desktop-takeover',
            pageId: 'interstitial-with-poll',
          },
          {
            name: 'Two Embeds Takeover',
            image: placeholder,
            path: '/desktop-takeover',
            pageId: 'two-embeds',
          },
          {
            name: 'Animations',
            image: placeholder,
            path: '/desktop-takeover',
            pageId: 'animations',
          },
        ]
      },
      {
        category: 'Embeds', subPages: [
          {
            name: 'Twitch',
            image: placeholder,
            path: '/desktop-takeover',
            pageId: 'premium-twitch',
          },
          {
            name: 'Spotify',
            image: placeholder,
            path: '/desktop-takeover',
            pageId: 'premium-spotify',
          },
          {
            name: 'Amazon',
            image: placeholder,
            path: '/desktop-takeover',
            pageId: 'amazon',
          },
          {
            name: 'Deezer',
            image: placeholder,
            path: '/desktop-takeover',
            pageId: 'deezer',
          },
          {
            name: 'Youtube',
            image: placeholder,
            path: '/desktop-takeover',
            pageId: 'premium-youtube',
          }
        ]
      }
    ],
  },
  {
    category: 'Mobile Takeovers',
    collapseLabel: 'MTO',
    expandLabel: 'Mobile Takeovers',
    subPages: [
      {
        name: 'Standard Takeover',
        image: placeholder,
        path: '/desktop-takeover',
        pageId: 'standard-takeover',
      },
      {
        name: 'Parallax',
        image: placeholder,
        path: '/desktop-takeover',
        pageId: 'Parallax',
      },
      {
        name: 'Video Takeover',
        image: placeholder,
        path: '/desktop-takeover',
        pageId: 'video',
      },
      {
        name: 'Swiper Format',
        image: placeholder,
        path: '/desktop-takeover',
        pageId: 'swiper',
      },
    ],
  },
  {
    category: 'Videos',
    collapseLabel: '[V]',
    expandLabel: 'Videos',
    subPages: [
      {
        name: 'Inline Video',
        image: placeholder,
        path: '/desktop-view',
        pageId: 'inline-video',
      },
      {
        name: 'Video Slider',
        image: placeholder,
        path: '/desktop-view',
        pageId: 'video-slider',
      },
      {
        name: 'Reward Video',
        image: placeholder,
        path: '/desktop-view',
        pageId: 'reward-video',
      },
      {
        name: 'Preroll Video',
        image: placeholder,
        path: '/preroll-video',
        pageId: 'prerol-video',
      },
    ],
  },
];
//ADVERTISERS_MENU[0].subPages = [...ADVERTISERS_MENU[2].subPages, ...ADVERTISERS_MENU[3].subPages];


export const desktopCreative = (param: string) => {
  const creatives = {
    'amazon': {
      creativeName: 'Premium Amazon Takeover',
      src: 'https://cdn.prvk.io/studio/modal-takeover/1219/creative.min.js?v=%%CACHEBUSTER%%',
      id: 'vdrm-script-1219',
    },
    'animations': {
      creativeName: 'Premium Animated Takeover',
      src: 'https://cdn.prvk.io/studio/interstitial-template/1632/creative.min.js?v=%%CACHEBUSTER%%',
      id: 'vdrm-script-1632',
    },
    'deezer': {
      creativeName: 'Premium Deezer Takeover',
      src: 'https://cdn.prvk.io/studio/modal-takeover/1220/creative.min.js?v=%%CACHEBUSTER%%',
      id: 'vdrm-script-1220',
    },
    'interstitial-animation': {
      creativeName: 'Interstitial Visual Effects Animation Takeover',
      src: 'https://cdn.prvk.io/studio/interstitial-template/1632/creative.min.js?v=%%CACHEBUSTER%%',
      id: 'vdrm-script-1632',
    },
    'interstitial-side-change-on-scroll': {
      creativeName: 'Interstitial Side Change on Scroll Takeover',
      src: 'https://cdn.prvk.io/studio/interstitial-template/1630/creative.min.js?v=%%CACHEBUSTER%%',
      id: 'vdrm-script-1630',
    },
    'interstitial-with-poll': {
      creativeName: 'Interstitial with Poll Takeover',
      src: 'https://cdn.prvk.io/studio/interstitial-template/1212/creative.min.js?v=%%CACHEBUSTER%%',
      id: 'vdrm-script-1212',
    },
    microstitial: {
      creativeName: 'Microstitial Takeover',
      src: 'https://cdn.prvk.io/studio/interstitial-template/1612/creative.min.js?v=%%CACHEBUSTER%%',
      id: 'vdrm-script-1612',
    },
    'premium-expandable': {
      creativeName: 'Premium Expandable Takeover',
      src: 'https://cdn.prvk.io/studio/AU-900301-FALLOUTFTP/1536/creative.min.js?v=%%CACHEBUSTER%%',
      id: 'vdrm-script-1602',
    },
    premium: {
      creativeName: 'Premium Takeover',
      src: 'https://cdn.prvk.io/studio/modal-takeover/1610/creative.min.js?v=%%CACHEBUSTER%%',
      id: 'vdrm-script-1610',
    },
    'side-change-on-scroll': {
      creativeName: 'Side Change on Scroll Takeover',
      src: 'https://cdn.prvk.io/studio/modal-takeover/668/creative.min.js?v=%%CACHEBUSTER%%',
      id: 'vdrm-script-1625',
    },
    'side-change-on-expand': {
      creativeName: 'Side Change on Expand Takeover',
      src: 'https://cdn.prvk.io/studio/modal-takeover-test/396/creative.min.js?v=%%CACHEBUSTER%%',
      id: 'vdrm-script-396',
    },
    'sticky-video': {
      creativeName: 'Sticky Video',
      src: 'https://cdn.prvk.io/studio/modal-takeover/1627/creative.min.js?v=%%CACHEBUSTER%%',
      id: 'vdrm-script-1627',
    },
    'premium-spotify': {
      creativeName: 'Premium Spotify Takeover',
      src: 'https://cdn.prvk.io/studio/modal-takeover/1211/creative.min.js?v=%%CACHEBUSTER%%',
      id: 'vdrm-script-1211',
    },
    'premium-twitch': {
      creativeName: 'Premium Twitch Takeover',
      src: 'https://cdn.prvk.io/studio/modal-takeover/1208/creative.min.js?v=%%CACHEBUSTER%%',
      id: 'vdrm-script-1208',
    },
    'two-embeds': {
      creativeName: 'Two Embeds Takeover',
      src: 'https://cdn.prvk.io/studio/modal-takeover/2030/creative.min.js?v=%%CACHEBUSTER%%',
      id: 'vdrm-script-2030',
    },
    'video-move-to-corner-on-scroll': {
      creativeName: 'Video Move to Corner on Scroll Takeover',
      src: 'https://cdn.prvk.io/studio/modal-takeover/1627/creative.min.js?v=%%CACHEBUSTER%%',
      id: 'vdrm-script-1627',
    },
    'with-floor-overlay': {
      creativeName: 'with Floor Overlay Takeover',
      src: 'https://cdn.prvk.io/studio/modal-takeover/1796/creative.min.js?v=%%CACHEBUSTER%%',
      id: 'vdrm-script-1796',
    },
    'premium-youtube': {
      creativeName: 'Premium Youtube Takeover',
      src: 'https://cdn.prvk.io/studio/modal-takeover/1221/creative.min.js?v=%%CACHEBUSTER%%',
      id: 'vdrm-script-1221',
    },
    'premium-toggle': {
      creativeName: 'Premium Toggle Takeover',
      src: 'https://cdn.prvk.io/studio/UK-501558-PHYRXIA/1871/creative.min.js?v=%%CACHEBUSTER%%',
      id: 'vdrm-script-1621',
    },
    'twitch-slider': {
      creativeName: 'Twitch Slider',
      src: 'https://cdn.prvk.io/studio/twitch-standalone/1620/creative.min.js?v=%%CACHEBUSTER%%',
      id: 'vdrm-script-1620',
    },
    'floor-overlay-banner': {
      creativeName: 'Floor Overlay',
      src: 'https://cdn.prvk.io/studio/modal-takeover/1893/creative.min.js?v=%%CACHEBUSTER%%',
      id: 'vdrm-script-1893',
    },
    pushdown: {
      creativeName: 'Pushdown Takeover',
      src: 'https://cdn.prvk.io/studio/stan-test-pushdown/1991/creative.min.js?v=%%CACHEBUSTER%%',
      id: 'vdrm-script-1991',
    },
    carousel: {
      creativeName: 'Carousel Takeover',
      src: 'https://cdn.prvk.io/studio/steam-takeover/440/creative.min.js?v=%%CACHEBUSTER%%',
      id: 'vdrm-script-440',
    },
    'video-background': {
      creativeName: 'Video Background',
      src: 'https://cdn.prvk.io/studio/steam-takeover/441/creative.min.js?v=%%CACHEBUSTER%%',
      id: 'vdrm-script-441',
    },
  };

  const defaultCreative = {
    creativeName: 'Premium Expandable Takeover',
    src: 'https://cdn.prvk.io/studio/UK_502648_RESIDENTEVIL_REQUIEM_PET/4555/creative.min.js?v=%%CACHEBUSTER%%',
    id: 'vdrm-script-4555',
  };
  type CreativeKey = keyof typeof creatives
  const result = creatives[param as CreativeKey] || defaultCreative;
  return result;
};
