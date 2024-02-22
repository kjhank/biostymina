import {
  useEffect, useRef, useState,
} from 'react';
import { Lines, Logo } from '@/icons';
import {
  Container, Drawer, HeaderNode, HomeLink, List, Navigation, NavLink, Trigger,
} from './Header.styled';
import { ButtonLink } from '@/components/ButtonLink/ButtonLink';
import { useDebounce, useLayout } from '@/hooks';
import { type HeaderProps } from '../Layout.types';

export const Header = ({ modalTriggerLabel, navItems }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const { location, toggleModal } = useLayout();
  const pathnameRef = useRef(location?.pathname);
  const isScrolledDebounced = useDebounce(isScrolled, 200);

  const handleScroll = () => {
    const { height: headerHeight } = headerRef.current?.getBoundingClientRect() ?? { height: 0 };

    setIsScrolled(headerHeight / 3 < window.scrollY);
  };

  const handleDrawer = () => {
    setIsDrawerOpen(current => !current);
  };

  useEffect(() => {
    const { current: headerNode } = headerRef;

    if (headerNode) {
      handleScroll();
      window.addEventListener('scroll', handleScroll);
    }

    return () => { window?.removeEventListener('scroll', handleScroll); };
  }, [headerRef.current]);

  useEffect(() => {
    if (pathnameRef.current !== location?.pathname) {
      setIsDrawerOpen(false);
      pathnameRef.current = location?.pathname;
    }
  }, [location]);

  return (
    <HeaderNode
      $isDrawerOpen={isDrawerOpen} $isFilled={isScrolledDebounced}
      ref={headerRef}
    >
      <Container>
        <HomeLink to="/">
          <Logo />
        </HomeLink>
        <Trigger onClick={handleDrawer}>
          <Lines />
        </Trigger>
        <Drawer $isOpen={isDrawerOpen}>
          <Navigation>
            <List>
              {navItems.map(({ page }) => {
                const linkPath = new URL(page.url).pathname;

                return (
                  <li key={page.url}>
                    <NavLink $hasHighlight={location?.pathname === linkPath} to={linkPath}>
                      {page.title}
                    </NavLink>
                  </li>
                );
              })}
            </List>
          </Navigation>
          <ButtonLink onClick={toggleModal} size="small">{modalTriggerLabel}</ButtonLink>
        </Drawer>
      </Container>
    </HeaderNode>
  );
};
