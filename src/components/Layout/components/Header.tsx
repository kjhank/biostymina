import {
  useEffect, useRef, useState,
} from 'react';
import { Logo } from '@/icons';
import {
  Container, HeaderNode, HomeLink, List, Navigation, NavLink,
} from './Header.styled';
import { navLinks } from '../Layout.static';
import { ButtonLink } from '@/components/ButtonLink/ButtonLink';
import { useDebounce, useLayout } from '@/hooks';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const { location } = useLayout();
  const isScrolledDebounced = useDebounce(isScrolled, 200);

  const handleScroll = () => {
    const { height: headerHeight } = headerRef.current?.getBoundingClientRect() ?? { height: 0 };

    setIsScrolled(headerHeight / 2 < window.scrollY);
  };

  useEffect(() => {
    const { current: headerNode } = headerRef;

    if (headerNode) {
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
            {navLinks.map(link => (
              <li key={link.url}>
                <NavLink $hasHighlight={location?.pathname === link.url} to={link.url}>
                  {link.text}
                </NavLink>
              </li>
            ))}
          </List>
        </Navigation>
        <ButtonLink onClick={() => { }} size="small">Gdzie kupić?</ButtonLink>
      </Container>
    </HeaderNode>
  );
};
