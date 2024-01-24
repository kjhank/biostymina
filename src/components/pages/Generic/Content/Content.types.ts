import { type ComponentPropsWithoutRef } from 'react';

export type ContentProps = ComponentPropsWithoutRef<'section'> & {
  html: string;
}
