import { type ReactNode } from 'react';
import { type ACFFile } from './wordpress.types';
import { type Slug } from '@/constants/constants.types';

export type NavLink = {
  text: ReactNode;
  url: string;
};

export type ArticleThumb = {
  thumbnail: string;
  timestamp: string;
  title: string;
  url: string;
};

export type ArticlesList = {
  heading: string;
  list: Array<ArticleThumb>;
  more: NavLink;
};

export type Video = {
  poster: string;
  sources: {
    mp4?: Partial<ACFFile>;
    webm: Partial<ACFFile>;
  };
};

export type PageHeader = {
  background: string;
  heading: string;
} & (
    {
      hasLink: true;
      file: NavLink;
    } | {
      hasLink?: false | never;
      file?: never;
    }
  );

export type Template = 'aloe' | 'history' | 'home' | 'product';

export type Templates = Record<Slug, string>;

export type RequestParams = string |
  Array<Array<string>> |
  Record<string, string> |
  URLSearchParams |
  undefined;
