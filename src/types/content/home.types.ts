import {
 type ArticlesList, type NavLink, type Video,
} from '@/types/global.types';

export type Hero = {
  background: string;
  heading: string;
  link: NavLink;
  subheading: string;
};

export type Product = {
  brow: string;
  decoration: string;
  heading: string;
  image: string;
  link: NavLink;
  text: string;
};

export type Aloe = {
  brow: string;
  decoration: string;
  heading: string;
  link: NavLink;
  text: string;
};

export type History = {
  brow: string;
  decoration: string;
  heading: string;
  image: string;
  link: NavLink;
  text: string;
};

export type ArticlesSection = {
  brow: string;
} & ArticlesList

export type VideoAd = {
  heading: string;
  video: Video;
}
