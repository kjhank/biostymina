import {
  useEffect, useRef, useState,
} from 'react';
import { Logo } from '@/icons';
import {
  Container, HeaderNode, HomeLink, List, Navigation, NavLink,
} from './Header.styled';
import { ButtonLink } from '@/components/ButtonLink/ButtonLink';
import { useDebounce, useLayout } from '@/hooks';
import { type HeaderProps } from '../Layout.types';

export const Header = ({ modalTriggerLabel, navItems }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const { location, toggleModal } = useLayout();
  const isScrolledDebounced = useDebounce(isScrolled, 200);

  const handleScroll = () => {
    const { height: headerHeight } = headerRef.current?.getBoundingClientRect() ?? { height: 0 };

    setIsScrolled(headerHeight / 2 < window.scrollY);
  };

  useEffect(() => {
    const { current: headerNode } = headerRef;

    if (headerNode) {
      handleScroll();
      window.addEventListener('scroll', handleScroll);
    }

    return () => { window?.removeEventListener('scroll', handleScroll); };
  }, [headerRef.current]);

  return (
    <HeaderNode $isFilled={isScrolledDebounced} ref={headerRef}>
      <Container>
        <Navigation>
          <HomeLink to="/">
            <Logo />
          </HomeLink>
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
      </Container>
    </HeaderNode>
  );
};
