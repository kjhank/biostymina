import { type ReactNode } from 'react';
import { type ACFFile } from './wordpress.types';

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
  articles: Array<ArticleThumb>;
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
      fileLink: NavLink;
    } | {
      hasLink?: false | never;
      fileLink?: never;
    }
  );
