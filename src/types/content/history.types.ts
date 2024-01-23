export type HistoryIntro = {
  decoration: string;
  image: string;
  text: string;
}

export type HistoryIcon = 'Syringe' | 'Leaves' | 'Ampoules' | 'Silhouettes';

export type TimelineItem = {
  date: string;
  icon: HistoryIcon;
  text: string;
};

export type Timeline = { items: Array<TimelineItem> };
