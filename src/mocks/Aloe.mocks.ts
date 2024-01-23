import {
  type AboutAloe, type ArticlesList, type Cultivation,
  type PageHeader, type SpeciesSection,
} from '@/types';
import { articlesList } from './global.mocks';

export const header: PageHeader = {
  background: 'https://pub.kjhank.dev/biostymina/aloe/headerBg.png',
  hasLink: false,
  heading: 'Aloes drzewiasty',
};

export const species: SpeciesSection = {
  description: 'W literaturze opisanych jest ponad 360 gatunków aloesu',
  heading: 'Gatunki rodzaju aloe ',
  species: [
    {
      image: 'https://pub.kjhank.dev/biostymina/aloe/species-1.png',
      name: `Aloes
      drzewiasty`,
    },
    {
      image: 'https://pub.kjhank.dev/biostymina/aloe/species-2.png',
      name: `Aloes zwyczajny
      <i>Aloe vera</i>`,
    },
    {
      image: 'https://pub.kjhank.dev/biostymina/aloe/species-3.png',
      name: `Aloe
      saponaria`,
    },
    {
      image: 'https://pub.kjhank.dev/biostymina/aloe/species-4.png',
      name: `Aloes
      uzbrojony`,
    },
  ],
};

export const about: AboutAloe = {
  heading: 'Aloes drzewiasty',
  items: [
    'Liście do <em class="emphasis">20-40 cm</em> długości',
    'Kwiatostan do <em class="emphasis">40 cm</em> długości',
    'Łodyga nawet do <em class="emphasis">30 cm</em> grubości',
    '2-6 m wysokości',
  ],
};

export const cultivation: Cultivation = {
  decoration: 'https://pub.kjhank.dev/biostymina/aloe/cultivation-decoration.png',
  description: `<p>Jedyne w Europie kontrolowane uprawy szklarniowe aloesu drzewiastego znajdują się w Phytopharm Klęka S.A.</p>

  <p>Gwarantuje to otrzymywanie wysokiej jakości surowca, jednolitego pod względem genetycznym.</p>`,
  heading: 'Aloes drzewiasty uprawa',
  items: [
    `Jedyna
  w Polsce`,
    'Unikatowa',
    `Kontrolowana
  pod kątem produkcji leku`,
    'Uprawa szklarniowa na powierzchni 4000 m<sup>2</sup>',
  ],
  map: '',
};

export const articles: ArticlesList = {
  heading: 'Zainspiruj się naszymi artykułami',
  list: articlesList,
  more: {
    text: 'Zobacz więcej artykułów',
    url: '/artykuly',
  },
};
