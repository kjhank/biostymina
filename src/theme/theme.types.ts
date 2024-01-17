import type React from 'react';

export type ThemeProps = {
  children: React.ReactNode;
}

export type GetClamped = (maxPx: number, minPx?: number, root?: number) => string;

export type GetMinMax = (sizePx: number) => string;

export type Transition = 'fast' | 'default' | 'slow';
