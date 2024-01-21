import { type ComponentPropsWithoutRef } from 'react';
import { type ACFImage } from '@/types';

export type WPImageProps = ComponentPropsWithoutRef<'picture'> & {
  alt: string;
  loading?: 'eager' | 'lazy';
  imageData: Partial<ACFImage>;
}
