import { createContext } from 'react';
import { type LayoutContextProps, type LayoutContextProviderProps } from './Layout.types';

export const LayoutContext = createContext({ toggleModal: () => { } } satisfies LayoutContextProps);

export const LayoutProvider = ({ children, value }: LayoutContextProviderProps) => (
  <LayoutContext.Provider value={value}>
    {children}
  </LayoutContext.Provider>
);
