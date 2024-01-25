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

  console.log(pageContext.content);

  return (
    <LayoutProvider value={{
      isModalOpen,
      location,
      toggleModal: handleModal,
    }}
    >
      <Theme>
        <GlobalStyle />
        <Header {...pageContext.options.navigation} />
        {children}
        <Modal {...pageContext.options.whereToBuyModal} />
        <Footer
          {...pageContext.options.globalFooter} {...pageContext.options.navigation}
          shouldShowFootnotes={pageContext.content.shouldShowFootnotes} toggleModal={handleModal}
        />
      </Theme>
    </LayoutProvider>
  );
};

export default Layout;
