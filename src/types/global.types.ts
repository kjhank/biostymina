import { type ReactNode } from 'react';
import {
 type ACFFile, type ACFLink, type Page,
} from './wordpress.types';
import { type Slug } from '@/constants/constants.types';

export type NavLink = {
  text: ReactNode;
  url: string;
};

export type ArticlesList = {
  heading: string;
  list: Array<Page>;
  more: ACFLink;
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

export type Templates = Record<Slug | 'generic', string>;

export type RequestParams = string |
  Array<Array<string>> |
  Record<string, string> |
  URLSearchParams |
  undefined;

export type Prettify<T> = {
  [K in keyof T]: T[K];
} & Record<string, unknown>;
