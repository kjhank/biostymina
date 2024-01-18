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
  mp4?: ACFFile;
  poster: string;
  webm: ACFFile;
};

export type PageHeader = {
  background: string;
  heading: string;
} & (
    {
      hasLink: true;
      link: NavLink;
    } | {
      hasLink?: false | never;
      link?: never;
    }
  );
