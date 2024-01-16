/* eslint-disable @typescript-eslint/no-unsafe-argument */

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

const content = {
  address: `Phytopharm Klęka S.A.
  Klęka 1, 63-040 Nowe Miasto nad Wartą
  tel: <a href="tel:+48612868000">+48 61 28 68 000</a>, fax: <a href="tel:+48 61 28 68 529">+48 61 28 68 529</a>

  email: <a href="mailto:welcome@europlant-group.pl">welcome@europlant-group.pl</a>
  <a href="//www.europlant-group.pl">www.europlant-group.pl</a>

  Polityka prywatności: podejrzyj  |  pobierz
  Informacja dot. przetwarzania danych osobowych
  Informacje dla akcjonariuszy`,
  copyright: 'Copyright © 2023 Phytopharm',
  finePrint: '<b>Biostymina,</b> 1 ml, płyn doustny. <b>Substancja czynna i dawka:</b> W 1 ml płynu znajduje się 1 ml wyciągu płynnego ze świeżych liści aloesu drzewiastego (<em>Aloe arborescens folii recentis extractum;</em> DER 1:4). Rozpuszczalnik ekstrakcyjny: woda. Substancje pomocnicze: brak. <b>Postać farmaceutyczna:</b> Płyn doustny. <b>Wskazania do stosowania:</b> tradycyjnie do stosowania w infekcjach górnych dróg oddechowych o podłożu bakteryjnym i wirusowym. Pomocniczo w nawracających zakażenia górnych dróg oddechowych i innych, rozpoznanych przez lekarza stanach obniżonej odporności, po konsultacji z lekarzem. Produkt leczniczy jest wskazany do stosowania u dorosłych, młodzieży i dzieci w wieku powyżej 5 lat. <b>Podmiot odpowiedzialny:</b> Phytopharm Klęka S.A., Klęka 1, 63-040 Nowe Miasto nad Wartą, Polska. ',
  legal: `INFORMACJE O NASZYCH PRODUKTACH
  ORAZ ZGŁASZANIE DZIAŁAŃ NIEPOŻĄDANYCH

  Dział Informacji Naukowej
  e-mail: <a href="mailto:info@europlant-group.pl">info@europlant-group.pl</a>
  lub pod numerem telefonu:
  <a href="tel:+48601863704">+48 601 863 704</a> lub <a href="tel:+48697741808">+48 697 741 808</a>

  Kontakt B2B
  e-mail: <a href="mailto:b2b@europlant-group.pl">b2b@europlant-group.pl</a>`,
  registration: `Sąd Rejonowy Poznań Nowe Miasto i Wilda  w Poznaniu
  Wydział IX Gospodarczy  Krajowego Rejestru Sądowego
  Krajowy Rejestr Sądowy nr 00000 51392

  Kapitał zakładowy: 20 000 000 zł
  Identyfikator: 632100130
  NIP: 786-00-05-532`,
  safety: `To jest lek. Dla bezpieczeństwa stosuj go zgodnie z ulotką dołączoną do opakowania.
  Nie przekraczaj maksymalnej dawki leku. W przypadku wątpliwości skonsultuj się z lekarzem lub farmaceutą.`,
};

const sanitizeConfig: sanitize.IOptions = {
  allowedTags: [
'a',
'b',
'em',
'i',
'strong',
],
};

export const Footer = () => {
  const { location } = useLayout();
  const shouldShowFootnotes = pathsWithFootnotes.includes(location?.pathname ?? '');

  return (
    <FooterNode>
      <Container>
        {shouldShowFootnotes && (
          <FootnotesPart>
            <Manufacturer />
            <FinePrint
              dangerouslySetInnerHTML={{ __html: sanitize(content.finePrint, sanitizeConfig) }}
            />
            <Safety>{content.safety}</Safety>
          </FootnotesPart>
        )}
        <BottomWrapper>
          <LeftPart>
            <Address
              dangerouslySetInnerHTML={{ __html: sanitize(content.address, sanitizeConfig) }}
            />
            <Copyright>{content.copyright}</Copyright>
          </LeftPart>
          <RightPart>
            <LegalWrapper>
              <Registration
                dangerouslySetInnerHTML={{ __html: sanitize(content.registration, sanitizeConfig) }}
              />
              <Legal
                dangerouslySetInnerHTML={{ __html: sanitize(content.legal, sanitizeConfig) }}
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
