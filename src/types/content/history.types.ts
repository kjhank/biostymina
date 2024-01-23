import { type ACFImage } from '../wordpress.types';

export type HistoryIntro = {
  decoration: ACFImage;
  image: ACFImage;
  text: string;
}

export type HistoryIcon = 'Syringe' | 'Leaves' | 'Ampoules' | 'Silhouettes';

export type TimelineItem = {
  date: string;
  icon: HistoryIcon;
  text: string;
};

export type Timeline = Array<TimelineItem>;
