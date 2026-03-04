import { TMenu } from './types';

import placeholder from './images/300x300.jpg';

export const PublishersMenu: TMenu[] = [
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

const AdvertisersMenu: TMenu[] = [
  {
    category: 'All Formats',
    collapseLabel: 'All',
    expandLabel: 'All Formats',
    subPages: [],
  },
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
//AdvertisersMenu[0].subPages = [...AdvertisersMenu[2].subPages, ...AdvertisersMenu[3].subPages];

export default AdvertisersMenu;

export const desktopCreative = (param: string) => {
  let result;

  switch (param) {
    case 'amazon':
      result = {
        creativeName: 'Premium Amazon Takeover',
        src: 'https://cdn.prvk.io/studio/modal-takeover/1219/creative.min.js?v=%%CACHEBUSTER%%',
        id: 'vdrm-script-1219',
      };
      break;
    case 'animations':
      result = {
        creativeName: 'Premium Animated Takeover',
        src: 'https://cdn.prvk.io/studio/interstitial-template/1632/creative.min.js?v=%%CACHEBUSTER%%',
        id: 'vdrm-script-1632',
      };
      break;
    case 'deezer':
      result = {
        creativeName: 'Premium Deezer Takeover',
        src: 'https://cdn.prvk.io/studio/modal-takeover/1220/creative.min.js?v=%%CACHEBUSTER%%',
        id: 'vdrm-script-1220',
      };
      break;
    case 'interstitial-animation':
      result = {
        creativeName: 'Interstitial Visual Effects Animation Takeover',
        src: 'https://cdn.prvk.io/studio/interstitial-template/1632/creative.min.js?v=%%CACHEBUSTER%%',
        id: 'vdrm-script-1632',
      };
      break;
    case 'interstitial-side-change-on-scroll':
      result = {
        creativeName: 'Interstitial Side Change on Scroll Takeover',
        src: 'https://cdn.prvk.io/studio/interstitial-template/1630/creative.min.js?v=%%CACHEBUSTER%%',
        id: 'vdrm-script-1630',
      };
      break;
    case 'interstitial-with-poll':
      result = {
        creativeName: 'Interstitial with Poll Takeover',
        src: 'https://cdn.prvk.io/studio/interstitial-template/1212/creative.min.js?v=%%CACHEBUSTER%%',
        id: 'vdrm-script-1212',
      };
      break;
    case 'microstitial':
      result = {
        creativeName: 'Microstitial Takeover',
        src: 'https://cdn.prvk.io/studio/interstitial-template/1612/creative.min.js?v=%%CACHEBUSTER%%',
        id: 'vdrm-script-1612',
      };
      break;
    case 'premium-expandable':
      result = {
        creativeName: 'Premium Expandable Takeover',
        src: 'https://cdn.prvk.io/studio/modal-takeover/1602/creative.min.js?v=%%CACHEBUSTER%%',
        id: 'vdrm-script-1602',
      };
      break;
    case 'premium':
      result = {
        creativeName: 'Premium Takeover',
        src: 'https://cdn.prvk.io/studio/modal-takeover/1610/creative.min.js?v=%%CACHEBUSTER%%',
        id: 'vdrm-script-1610',
      };
      break;
    case 'side-change-on-scroll':
      result = {
        creativeName: 'Side Change on Scroll Takeover',
        src: 'https://cdn.prvk.io/studio/modal-takeover/668/creative.min.js?v=%%CACHEBUSTER%%',
        id: 'vdrm-script-1625',
      };
      break;
    case 'side-change-on-expand':
      result = {
        creativeName: 'Side Change on Expand Takeover',
        src: 'https://cdn.prvk.io/studio/modal-takeover-test/396/creative.min.js?v=%%CACHEBUSTER%%',
        id: 'vdrm-script-396',
      };
      break;
    case 'sticky-video':
      result = {
        creativeName: 'Sticky Video',
        src: 'https://cdn.prvk.io/studio/modal-takeover/1627/creative.min.js?v=%%CACHEBUSTER%%',
        id: 'vdrm-script-1627',
      };
      break;
    case 'premium-spotify':
      result = {
        creativeName: 'Premium Spotify Takeover',
        src: 'https://cdn.prvk.io/studio/modal-takeover/1211/creative.min.js?v=%%CACHEBUSTER%%',
        id: 'vdrm-script-1211',
      };
      break;
    case 'premium-twitch':
      result = {
        creativeName: 'Premium Twitch Takeover',
        src: 'https://cdn.prvk.io/studio/modal-takeover/1208/creative.min.js?v=%%CACHEBUSTER%%',
        id: 'vdrm-script-1208',
      };
      break;
    case 'two-embeds':
      result = {
        creativeName: 'Two Embeds Takeover',
        src: 'https://cdn.prvk.io/studio/modal-takeover/2030/creative.min.js?v=%%CACHEBUSTER%%',
        id: 'vdrm-script-2030',
      };
      break;
    case 'video-move-to-corner-on-scroll':
      result = {
        creativeName: 'Video Move to Corner on Scroll Takeover',
        src: 'https://cdn.prvk.io/studio/modal-takeover/1627/creative.min.js?v=%%CACHEBUSTER%%',
        id: 'vdrm-script-1627',
      };
      break;
    case 'with-floor-overlay':
      result = {
        creativeName: 'with Floor Overlay Takeover',
        src: 'https://cdn.prvk.io/studio/modal-takeover/1796/creative.min.js?v=%%CACHEBUSTER%%',
        id: 'vdrm-script-1796',
      };
      break;
    case 'premium-youtube':
      result = {
        creativeName: 'Premium Youtube Takeover',
        src: 'https://cdn.prvk.io/studio/modal-takeover/1221/creative.min.js?v=%%CACHEBUSTER%%',
        id: 'vdrm-script-1221',
      };
      break;
    case 'premium-toggle':
      result = {
        creativeName: 'Premium Toggle Takeover',
        src: 'https://cdn.prvk.io/studio/UK-501558-PHYRXIA/1871/creative.min.js?v=%%CACHEBUSTER%%',
        id: 'vdrm-script-1621',
      };
      break;
    case 'twitch-slider':
      // document.querySelector("body > section > div.banner-container").style.display = 'none';
      result = {
        creativeName: 'Twitch Slider',
        src: 'https://cdn.prvk.io/studio/twitch-standalone/1620/creative.min.js?v=%%CACHEBUSTER%%',
        id: 'vdrm-script-1620',
      };
      break;
    case 'floor-overlay-banner':
      result = {
        creativeName: 'Floor Overlay',
        src: 'https://cdn.prvk.io/studio/modal-takeover/1893/creative.min.js?v=%%CACHEBUSTER%%',
        id: 'vdrm-script-1893',
      };
      break;
    case 'pushdown':
      result = {
        creativeName: 'Pushdown Takeover',
        src: 'https://cdn.prvk.io/studio/stan-test-pushdown/1991/creative.min.js?v=%%CACHEBUSTER%%',
        id: 'vdrm-script-1991',
      };
      break;
    case 'carousel':
      result = {
        creativeName: 'Carousel Takeover',
        src: 'https://cdn.prvk.io/studio/steam-takeover/440/creative.min.js?v=%%CACHEBUSTER%%',
        id: 'vdrm-script-440',
      };
      break;
    case 'video-background':
      result = {
        creativeName: 'Video Background',
        src: 'https://cdn.prvk.io/studio/steam-takeover/441/creative.min.js?v=%%CACHEBUSTER%%',
        id: 'vdrm-script-441',
      };
      break;
    /*         case '%%%%mpu-dynamic-banner': //not wprking yet
                var element = document.getElementById("mpu");
                element.classList.add("five");
                element.classList.add("columns");
                element.classList.add("add-bottom");
                element.classList.add("smallphoto");
    
                var placement = document.createElement("div");
                placement.setAttribute("class", "vm-placement");
                placement.setAttribute("data-id", '63d2479a8e2021527a145883');
                
                element.appendChild(placement);
    
                result = {
                    creativeName: 'Dynamic Banner',
                    src : 'https://cdn.prvk.io/studio/mpu-banner-template/1887/creative.min.js?v=%%CACHEBUSTER%%',
                    id : 'vdrm-script-1887'
                };
                break; */
    default:
      result = {
        creativeName: 'Premium Expandable Takeover',
        src: 'https://cdn.prvk.io/studio/UK_502648_RESIDENTEVIL_REQUIEM_PET/4555/creative.min.js?v=%%CACHEBUSTER%%',
        id: 'vdrm-script-4555',
      };
      break;
  }

  return result;
};
