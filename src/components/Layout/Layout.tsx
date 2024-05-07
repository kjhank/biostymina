import { useRef } from 'react';

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
  const modalRef = useRef<HTMLDialogElement>(null);

  const handleModal = () => {
    const { current: dialogNode } = modalRef;

    if (dialogNode) {
      if (dialogNode.open) {
        dialogNode.close();
      } else {
        dialogNode.showModal();
      }
    }
  };

  return (
    <LayoutProvider value={{
      location,
      toggleModal: handleModal,
    }}
    >
      <Theme>
        <GlobalStyle />
        {pageContext.options?.navigation && <Header {...pageContext.options.navigation} />}
        {children}
        {pageContext.options?.whereToBuyModal
        && <Modal ref={modalRef} {...pageContext.options.whereToBuyModal} />}
        {pageContext.options?.globalFooter && (
          <Footer
            {...pageContext.options.globalFooter} {...pageContext.options.navigation}
            shouldShowFootnotes={pageContext.content.shouldShowFootnotes} toggleModal={handleModal}
          />
        )}
      </Theme>
      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: pageContext.metadata.cookies.markup }} />
    </LayoutProvider>
  );
};

export default Layout;
