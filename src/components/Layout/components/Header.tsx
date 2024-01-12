import { Logo } from '@/icons';
import {
  Container, HeaderNode, HomeLink, List, Navigation, NavLink,
} from './Header.styled';
import { navLinks } from '../Layout.static';
import { ButtonLink } from '@/components/ButtonLink/ButtonLink';
import { useLayout } from '@/hooks';

export const Header = () => {
  const { location } = useLayout();

  return (
    <HeaderNode>
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
