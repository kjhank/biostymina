import { useState } from 'react';

import { GlobalStyle, Theme } from '@/theme';
import { type LayoutProps } from './Layout.types';
import {
  Footer, Header, Modal,
} from './components';
import { LayoutProvider } from './Layout.context';
import '@/theme/fonts/stylesheet.css';

const Layout = ({
  children, location, pageContext,
}: LayoutProps) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModal = () => { setModalOpen(current => !current); };

  return (
    <LayoutProvider value={{
      isModalOpen,
      location,
      toggleModal: handleModal,
    }}
    >
      <Theme>
        <GlobalStyle />
        <Header />
        {children}
        <Modal {...pageContext.options.whereToBuyModal} />
        <Footer {...pageContext.options.globalFooter} />
      </Theme>
    </LayoutProvider>
  );
};

export default Layout;
