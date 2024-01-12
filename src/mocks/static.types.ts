import {
 type ArticlesList, type NavLink, type Video,
} from '@/types/global.types';
import { type ACFImage } from '@/types';

export type Hero = {
  background: ACFImage;
  heading: string;
  link: NavLink;
  subheading: string;
};

export type Product = {
  brow: string;
  decoration: ACFImage;
  heading: string;
  image: ACFImage;
  link: NavLink;
  text: string;
};

export type Aloe = {
  brow: string;
  decoration: ACFImage;
  heading: string;
  link: NavLink;
  text: string;
};

export type History = {
  brow: string;
  heading: string;
  link: NavLink;
  text: string;
};

export type Articles = {
  brow: string;
} & ArticlesList

export type VideoAd = {
  heading: string;
  video: Video;
}
