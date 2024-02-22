import { type ArticlesList, type Video } from '@/types/global.types';
import { type ACFImage, type ACFLink } from '../wordpress.types';

export type Hero = {
  background: ACFImage;
  heading: string;
  link: ACFLink;
  subheading: string;
};

export type Product = {
  brow: string;
  decoration: ACFImage;
  heading: string;
  image: ACFImage;
  imagePortrait: ACFImage;
  link: ACFLink;
  text: string;
};

export type Aloe = {
  brow: string;
  decoration: ACFImage;
  decorationPortrait: ACFImage;
  heading: string;
  link: ACFLink;
  text: string;
};

export type History = {
  brow: string;
  decoration: ACFImage;
  decorationPortrait: ACFImage;
  heading: string;
  image: ACFImage;
  link: ACFLink;
  text: string;
};

export type ArticlesSection = {
  brow: string;
} & ArticlesList

export type VideoAd = {
  heading: string;
  video: Video;
}
