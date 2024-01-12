import { useContext } from 'react';
import { LayoutContext } from '@/components/Layout/Layout.context';
import { type LayoutContextProps } from '@/components/Layout/Layout.types';

export const useLayout = () => {
  const context = useContext<LayoutContextProps>(LayoutContext);

  if (context === undefined) throw new Error('ctx');

  return context;
};
