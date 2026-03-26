import { TMenu } from './types';

import placeholder from './images/300x300.jpg';

export const PUBLISHERS_MENU: TMenu[] = [
  {
    category: 'Takeovers',
    collapseLabel: 'ChevronLeftIcon',
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

    collapseLabel: 'FilmIcon',
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
        path: '/mobile-view',
        pageId: 'mobile-horizontal-sticky',
      },
    ],
  },
  {
    category: 'Display Ads',
    collapseLabel: 'DevicePhoneMobileIcon',
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
        path: '/desktop-interstitial',
        pageId: '',
      },
    ],
  },
  {
    category: 'Videos',
    collapseLabel: 'VideoCameraIcon',
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
        path: '/reward-video',
        pageId: '',
      },
      {
        name: 'Preroll Video',
        image: placeholder,
        path: '/preroll-video',
        pageId: '',
      },
    ],
  },
];

export const ADVERTISERS_MENU: TMenu[] = [
  {
    category: 'Desktop Takeovers',
    collapseLabel: 'ComputerDesktopicon',
    expandLabel: 'Desktop Takeovers',

    subCategory: [
      {
        category: 'Templates',
        subPages: [
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
          },
        ],
      },
      {
        category: 'Features',
        subPages: [
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
        ],
      },
      {
        category: 'Embeds',
        subPages: [
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
          },
        ],
      },
    ],
  },
  {
    category: 'Mobile Takeovers',
    collapseLabel: 'DevicePhoneMobileIcon',
    expandLabel: 'Mobile Takeovers',
    subCategory: [
      {
        category: 'Templates',
        subPages: [
          {
            name: 'Standard Takeover',
            image: placeholder,
            path: '/mobile-takeover',
            pageId: 'standard-takeover',
          },
          {
            name: 'Parallax',
            image: placeholder,
            path: '/mobile-takeover',
            pageId: 'Parallax',
          },
          {
            name: 'Video Takeover',
            image: placeholder,
            path: '/mobile-takeover',
            pageId: 'video',
          },
          {
            name: 'Swiper Format',
            image: placeholder,
            path: '/mobile-takeover',
            pageId: 'swiper',
          },
          {
            name: 'Flipbook',
            image: placeholder,
            path: '/mobile-takeover',
            pageId: 'flipbook',
          },
          {
            name: 'Gallery',
            image: placeholder,
            path: '/mobile-takeover',
            pageId: 'image-gallery',
          },
        ],
      },

      {
        category: 'Embeds',
        subPages: [
          {
            name: 'Twitch',
            image: placeholder,
            path: '/mobile-takeover',
            pageId: 'twitch',
          },
          {
            name: 'Spotify',
            image: placeholder,
            path: '/mobile-takeover',
            pageId: 'spotify',
          },
          {
            name: 'Amazon',
            image: placeholder,
            path: '/mobile-takeover',
            pageId: 'amazon',
          },
          {
            name: 'Deezer',
            image: placeholder,
            path: '/mobile-takeover',
            pageId: 'deezer',
          },
          {
            name: 'Youtube',
            image: placeholder,
            path: '/mobile-takeover',
            pageId: 'youtube',
          },
          {
            name: 'Playable Games',
            image: placeholder,
            path: '/mobile-takeover',
            pageId: 'playable',
          },
        ],
      },
    ],
  },
  {
    category: 'Videos',
    collapseLabel: 'VideoCameraIcon',
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
    ],
  },
];
//ADVERTISERS_MENU[0].subPages = [...ADVERTISERS_MENU[2].subPages, ...ADVERTISERS_MENU[3].subPages];

export const DESKTOP_CREATIVE = (param: string) => {
  const creatives = {
    'amazon': {
      name: 'Premium Amazon Takeover',
      template: 'modal-takeover',
      id: '1219',
    },
    'animations': {
      name: 'Premium Animated Takeover',
      template: 'interstitial-template',
      id: '1632',
    },
    'deezer': {
      name: 'Premium Deezer Takeover',
      template: 'modal-takeover',
      id: '1220',
    },
    'interstitial-animation': {
      name: 'Interstitial Visual Effects Animation Takeover',
      template: 'interstitial-template',
      id: '1632',
    },
    'interstitial-side-change-on-scroll': {
      name: 'Interstitial Side Change on Scroll Takeover',
      template: 'interstitial-template',
      id: '1630',
    },
    'interstitial-with-poll': {
      name: 'Interstitial with Poll Takeover',
      template: 'interstitial-template',
      id: '1212',
    },
    'microstitial': {
      name: 'Microstitial Takeover',
      template: 'interstitial-template',
      id: '1612',
    },
    'premium-expandable': {
      name: 'Premium Expandable Takeover',
      template: 'AU-900301-FALLOUTFTP',
      id: '1602',
    },
    'premium': {
      name: 'Premium Takeover',
      template: 'modal-takeover',
      id: '1610',
    },
    'side-change-on-scroll': {
      name: 'Side Change on Scroll Takeover',
      template: 'modal-takeover',
      id: '1625',
    },
    'side-change-on-expand': {
      name: 'Side Change on Expand Takeover',
      template: 'modal-takeover-test',
      id: '396',
    },
    'sticky-video': {
      name: 'Sticky Video',
      template: 'modal-takeover',
      id: '1627',
    },
    'premium-spotify': {
      name: 'Premium Spotify Takeover',
      template: 'modal-takeover',
      id: '1211',
    },
    'premium-twitch': {
      name: 'Premium Twitch Takeover',
      template: 'modal-takeover',
      id: '1208',
    },
    'two-embeds': {
      name: 'Two Embeds Takeover',
      template: 'modal-takeover',
      id: '2030',
    },
    'video-move-to-corner-on-scroll': {
      name: 'Video Move to Corner on Scroll Takeover',
      template: 'modal-takeover',
      id: '1627',
    },
    'with-floor-overlay': {
      name: 'with Floor Overlay Takeover',
      template: 'modal-takeover',
      id: '1796',
    },
    'premium-youtube': {
      name: 'Premium Youtube Takeover',
      template: 'modal-takeover',
      id: '1221',
    },
    'premium-toggle': {
      name: 'Premium Toggle Takeover',
      template: 'UK-501558-PHYRXIA',
      id: '1621',
    },
    'twitch-slider': {
      name: 'Twitch Slider',
      template: 'twitch-standalone',
      id: '1620',
    },
    'floor-overlay-banner': {
      name: 'Floor Overlay',
      template: 'modal-takeover',
      id: '1893',
    },
    'pushdown': {
      name: 'Pushdown Takeover',
      template: 'stan-test-pushdown',
      id: '1991',
    },
    'carousel': {
      name: 'Carousel Takeover',
      template: 'steam-takeover',
      id: '440',
    },
    'video-background': {
      name: 'Video Background',
      template: 'steam-takeover',
      id: '441',
    },
  };

  const defaultCreative = {
    name: 'Premium Expandable Takeover',
    template: 'UK_502648_RESIDENTEVIL_REQUIEM_PET',
    id: '4555',
  };
  type CreativeKey = keyof typeof creatives;
  const result = creatives[param as CreativeKey] || defaultCreative;
  return result;
};

export const MOBILE_CREATIVE = (param: string) => {
  const creatives = {
    'standard-takeover': {
      name: 'Standard Takeover',
      template: 'mobile-rich-media',
      id: '1613',
    },
    'parallax': {
      name: 'Parallax Takeover',
      template: 'PG-100256-STRANGEWORLDCHILDREN',
      id: '1703',
    },
    'standard': {
      name: 'Standard Takeover',
      template: 'mobile-rich-media',
      id: '1615',
    },
    'video': {
      name: 'Takeover',
      template: 'mobile-rich-media',
      id: '1616',
    },
    'swiper': {
      name: 'Swiper Takeover',
      template: 'mobile-rich-media',
      id: '1617',
    },
    'flipbook': {
      name: 'Flipbook Takeover',
      template: 'mobile-rich-media',
      id: '1618',
    },
    'image-gallery': {
      name: 'Gallery Takeover',
      template: 'mobile-rich-media',
      id: '1619',
    },
    'youtube': {
      name: 'Youtube Takeover',
      template: 'mobile-rich-media',
      id: '1633',
    },
    'twitch': {
      name: 'Twitch Takeover',
      template: 'mobile-rich-media',
      id: '1634',
    },
    'playable': {
      name: 'Playable Games Takeover',
      template: 'mobile-rich-media',
      id: '1635',
    },
    'spotify': {
      name: 'Spotify Takeover',
      template: 'mobile-rich-media',
      id: '1710',
    },
    'amazon': {
      name: 'Amazon Takeover',
      template: 'mobile-rich-media',
      id: '1711',
    },
    'deezer': {
      name: 'Deezer Takeover',
      template: 'mobile-rich-media',
      id: '1712',
    },
  };

  const defaultCreative = {
    name: 'Standard Takeover',
    template: 'mobile-rich-media',
    id: '1613',
  };
  type CreativeKey = keyof typeof creatives;
  const result = creatives[param as CreativeKey] || defaultCreative;
  return result;
};
