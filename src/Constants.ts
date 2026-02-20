import { TMenu } from './types';

export const PublishersMenu: TMenu[] = [
  {
    category: 'Takeovers',
    collapseLabel: 'TO',
    expandLabel: 'Takeovers',
    subPages: [
      {
        name: 'Premium Modal',
        image: `https://picsum.photos/300?random=1`,
            path: '/desktop-view',
        pageId: 'premium-modal',
      },
      {
        name: 'Pushdown',
        image: `https://picsum.photos/300?random=35`,
          path: '/desktop-view',
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
        image: `https://picsum.photos/300?random=1`,
            path: '/desktop-view',
        pageId: 'vertical-sticky',
      },
      {
        name: 'Horizontal Sticky',
        image: `https://fastly.picsum.photos/id/160/3200/2119.jpg?hmac=cz68HnnDt3XttIwIFu5ymcvkCp-YbkEBAM-Zgq-4DHE`,
          path: '/desktop-view',
        pageId: 'horizontal-sticky',
      },
      {
        name: 'Mobile Horizontal Sticky',
        image: `https://fastly.picsum.photos/id/160/3200/2119.jpg?hmac=cz68HnnDt3XttIwIFu5ymcvkCp-YbkEBAM-Zgq-4DHE`,
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
        image: `https://picsum.photos/300?random=1`,
            path: '/desktop-view',
        pageId: 'desktop-regular-ads',
      },
      {
        name: 'Mobile Ads',
        image: `https://fastly.picsum.photos/id/160/3200/2119.jpg?hmac=cz68HnnDt3XttIwIFu5ymcvkCp-YbkEBAM-Zgq-4DHE`,
          path: '/mobile-view',
        pageId: 'mobile-regular-ads',
      },
      {
        name: 'Desktop Interstitial',
        image: `https://fastly.picsum.photos/id/160/3200/2119.jpg?hmac=cz68HnnDt3XttIwIFu5ymcvkCp-YbkEBAM-Zgq-4DHE`,
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
        image: `https://picsum.photos/300?random=1`,
        path: '/desktop-view',
        pageId: 'inline-video',
      },
      {
        name: 'Video Slider',
        image: `https://picsum.photos/300?random=24`,
        path: '/desktop-view',
        pageId: 'video-slider',
      },
      {
        name: 'Reward Video',
        image: `https://picsum.photos/300?random=30`,
        path: '/desktop-view',
        pageId: 'reward-video',
      },
      {
        name: 'Preroll Video',
        image: `https://picsum.photos/300?random=31`,
        path: '/preroll-video',
        pageId: 'prerol-video',
      },
    ],
  },
];
