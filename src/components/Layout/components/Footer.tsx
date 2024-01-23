import sanitize from 'sanitize-html';
import { Link } from 'gatsby';
import {
  Address,
  BottomWrapper, Container, Copyright, FinePrint, FooterNode, FootnotesPart,
  LeftPart, Legal, LegalWrapper, Navigation, Registration, RightPart, Safety,
} from './Footer.styled';
import { useLayout } from '@/hooks';
import { navLinks, pathsWithFootnotes } from '../Layout.static';
import { Manufacturer } from '@/icons';
import { type GlobalFooter } from '@/types/pages.types';

const sanitizeConfig: sanitize.IOptions = {
  allowedTags: [
    'a',
    'b',
    'em',
    'i',
    'p',
    'strong',
  ],
};

export const Footer = ({
  address, copyright, finePrint, legal, registration, warning,
}: GlobalFooter) => {
  const { location } = useLayout();

  const shouldShowFootnotes = pathsWithFootnotes.includes(location?.pathname ?? '');

  return (
    <FooterNode>
      <Container>
        {shouldShowFootnotes && (
          <FootnotesPart>
            <Manufacturer />
            <FinePrint
              dangerouslySetInnerHTML={{ __html: sanitize(finePrint, sanitizeConfig) }}
            />
            <Safety>{warning}</Safety>
          </FootnotesPart>
        )}
        <BottomWrapper>
          <LeftPart>
            <Address
              dangerouslySetInnerHTML={{ __html: sanitize(address, sanitizeConfig) }}
            />
            <Copyright>{copyright}</Copyright>
          </LeftPart>
          <RightPart>
            <LegalWrapper>
              <Registration
                dangerouslySetInnerHTML={{ __html: sanitize(registration, sanitizeConfig) }}
              />
              <Legal
                dangerouslySetInnerHTML={{ __html: sanitize(legal, sanitizeConfig) }}
              />
            </LegalWrapper>
            <Navigation>
              {navLinks.map(link => <Link key={link.url} to={link.url}>{link.text}</Link>)}
            </Navigation>
          </RightPart>
        </BottomWrapper>
      </Container>
    </FooterNode>
  );
};
