import sanitize from 'sanitize-html';
import { Link } from 'gatsby';
import {
  Address,
  BottomWrapper, Container, Copyright, FinePrint, FooterNode, FootnotesPart,
  LeftPart, Legal, LegalWrapper, Navigation, Registration, RightPart, Safety,
} from './Footer.styled';
import { Manufacturer } from '@/icons';
import { type GlobalFooterProps } from '@/types/pages.types';

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
  address, copyright, finePrint, legal, modalTriggerLabel,
  navItems, registration, shouldShowFootnotes, toggleModal, warning,
}: GlobalFooterProps) => (
  <FooterNode>
    {shouldShowFootnotes && (
      <Container>
        <FootnotesPart>
          <Manufacturer />
          <FinePrint
            dangerouslySetInnerHTML={{ __html: sanitize(finePrint, sanitizeConfig) }}
          />
          <Safety>{warning}</Safety>
        </FootnotesPart>
      </Container>
    )}
    <BottomWrapper>
      <Container>
        <LeftPart>
          <Address
            dangerouslySetInnerHTML={{ __html: sanitize(address, sanitizeConfig) }}
          />
          <Copyright className="copyright">{copyright}</Copyright>
        </LeftPart>
        <RightPart>
          <LegalWrapper>
            <Registration
              dangerouslySetInnerHTML={{ __html: sanitize(registration, sanitizeConfig) }}
            />
            <Legal
              dangerouslySetInnerHTML={{ __html: sanitize(legal, sanitizeConfig) }}
            />
            <Copyright className="copyright">{copyright}</Copyright>
          </LegalWrapper>
          <Navigation>
            {navItems.map(({ page }) => {
              const linkPath = new URL(page.url).pathname;

              return <Link key={page.url} to={linkPath}>{page.title}</Link>;
            })}
            <button onClick={toggleModal} type="button">{modalTriggerLabel}</button>
          </Navigation>
        </RightPart>
      </Container>
    </BottomWrapper>
  </FooterNode>
);
