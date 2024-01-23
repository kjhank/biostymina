import { type ElementType } from 'react';
import {
  type HistoryIcon, type Timeline, type TimelineItem,
} from '@/types';

export type TimelineProps = { items: Timeline };

export type TimelineIcon = Record<HistoryIcon, ElementType>;

export type TimelineItemProps = TimelineItem;
