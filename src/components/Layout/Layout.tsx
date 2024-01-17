import { GlobalStyle, Theme } from '@/theme';
import { type LayoutProps } from './Layout.types';
import { Footer, Header } from './components';
import { LayoutProvider } from './Layout.context';
import '@/theme/fonts/stylesheet.css';

const Layout = ({ children, location }: LayoutProps) => (
  <LayoutProvider value={{ location }}>
    <Theme>
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
    </Theme>
  </LayoutProvider>
);

export default Layout;
