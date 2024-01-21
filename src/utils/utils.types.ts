import type React from 'react';
import { type GatsbyBrowser, type GatsbySSR } from 'gatsby';

export type WrapPageElement =
  | GatsbyBrowser['wrapPageElement']
  | GatsbySSR['wrapPageElement'];

export type WrapPageProps = {
  element: React.ReactNode;
  props: Record<string, unknown>;
}
