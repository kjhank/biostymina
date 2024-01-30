/* eslint-disable sort-keys */

export type Breakpoint = 'xxl' | 'xl' | 'l' | 'm' | 's' | 'xs' | 'xxs' | 'landscape' | 'nonTouch' | 'touch' | 'portrait';

export type Breakpoints = Record<Breakpoint, number | string>
export type Queries = Record<Breakpoint, string>;

export const breakpoints: Breakpoints = {
  xxl: 1440,
  xl: 1280,
  l: 1024,
  m: 920,
  s: 768,
  xs: 480,
  xxs: 360,
  landscape: '(orientation: landscape)',
  nonTouch: '(pointer: fine)',
  touch: '(hover: none) and (pointer: coarse)',
  portrait: '(orientation: portrait)',
};

// @ts-expect-error: Object.entries key is string
const queries: Queries = Object.fromEntries(Object.entries(breakpoints)
  .map(([key, value]) => [key, typeof value === 'number' ? `(max-width: ${value}px)` : value]));

  // @ts-expect-error: Object.entries key is string
const mfQueries: Record<Breakpoint, string> = Object.fromEntries(Object.entries(breakpoints)
  .map(([key, value]) => [key, typeof value === 'number' ? `(min-width: ${value}px)` : value]));

export {
  queries,
  mfQueries,
};
