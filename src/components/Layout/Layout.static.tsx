import { type NavLink } from '@/types';

/* eslint-disable react/jsx-closing-tag-location */
export const htmlAttributes = { lang: 'pl' };

export const navLinks: Array<NavLink> = [
  {
    text: <>
      Biostymina®
    </>,
    url: '/biostymina',
  },
  {
    text: 'Aloes drzewiasty',
    url: '/aloes-drzewiasty',
  },
  {
    text: 'Historia marki',
    url: '/historia-marki',
  },
  {
    text: 'Odporność',
    url: '/odpornosc',
  },
];

export const pathsWithFootnotes = ['/', '/biostymina/'];
