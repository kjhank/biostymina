import {
  type ArticlesList, type Dosage, type Ingredients,
  type Instructions, type Intro, type PageHeader,
  type Recommendations, type Warnings,
} from '@/types';
import { articlesList } from './global.mocks';

export const header: PageHeader = {
  background: '',
  file: {
    text: 'Zobacz ulotkę',
    url: '#',
  },
  hasLink: true,
  heading: 'Biostymina®',
};

export const intro: Intro = {
  items: [
    {
      image: 'https://pub.kjhank.dev/biostymina/product/intro-1.png',
      text: `Produkt zawiera <span class="intro-highlight">czysty
      wyciąg płynny</span> ze świeżych
      liści aloesu drzewiastego`,
    },
    {
      image: 'https://pub.kjhank.dev/biostymina/product/intro-2.png',
      text: `Stymuluje układ immunologiczny
      <span class="intro-highlight">wzmacniając odpornosć</span> organizmu
      na zakażenia bakteryjne i wirusowe`,
    },
  ],
};

export const ingredients: Ingredients = {
  amount: `1 ml płynu = 1 ml wyciągu płynnego ze świeżych liści aloesu
  drzewiastego (<em>Aloe arborescens folii recentis extractum</em>)`,
  decoration: 'https://pub.kjhank.dev/biostymina/product/ingredients-decoration.png',
  descriptionList: [
    'Czysty wyciąg ze świeżych liści aloesu drzewiastego',
    'Bez konserwantów',
    'Bez cukru',
    'Bez alkoholu',
    'Bez glutenu',
    'Bez laktozy',
    'Bez substancji pomocniczych',
  ],
  heading: 'Skład:',
  image: 'https://pub.kjhank.dev/biostymina/product/ingredients-image.png',
  largeText: `Biostymina® Ampułka
  - czysta forma`,
  list: [
    'Zawiera czysty wyciąg płynny ze świeżych liści aloesu drzewiastego',
    'Zamknięty w szkle',
    'Bez konserwantów',
    'Precyzyjnie odmierzona dawka',
  ],
};

export const recommendations: Recommendations = {
  heading: 'Wskazania do zastosowania leku Biostymina®:',
  image: 'https://pub.kjhank.dev/biostymina/product/package.png',
  list: [
    `Tradycyjnie w infekcjach górnych dróg oddechowych
    o podłożu bakteryjnym i wirusowym.`,
    `Pomocniczo w nawracających zakażenia
    górnych dróg oddechowych.`,
    `Pomocniczo w innych, rozpoznanych
    przez lekarza stanach obniżonej odporności,
    po konsultacji z lekarzem.`,
  ],
};

export const dosage: Dosage = {
  doses: [
    {
      heading: `Dorośli
      18+`,
      image: 'https://pub.kjhank.dev/biostymina/product/ampoule-1-hq.png',
      text: `<strong>1 ml
      1 ampułka</strong>
      codziennie lub
      co drugi dzień`,
    },
    {
      heading: `Dzieci
      5+`,
      image: 'https://pub.kjhank.dev/biostymina/product/ampoule-2-hq.png',
      text: `<strong>0,5 ml
      ½ ampułki</strong>
      codziennie lub
      co drugi dzień`,
    },
  ],
  heading: 'Dawkowanie i sposób podania.',
  image: 'https://pub.kjhank.dev/biostymina/product/dosage.png',
};

export const instructions: Instructions = {
  instructions: [
    {
      hasSeparator: true,
      heading: 'Znajdź kropkę!',
      image: 'https://pub.kjhank.dev/biostymina/product/instructions-1.png',
      text: 'Szkło pod kropką jest specjalnie ukształtowane, by ułatwić przełamanie, dzięki temu pilniczek nie jest potrzebny',
    },
    {
      image: 'https://pub.kjhank.dev/biostymina/product/instructions-2.png',
      text: 'Przykryj kciukiem kropkę i przełam ampułkę zdecydowanym ruchem.',
    },
  ],
  title: {
    description: 'Zobacz jakie to proste!',
    heading: 'Jak bezpiecznie otworzyć ampułkę?',
  },
};

export const warnings: Warnings = {
  list: [
    'Lek stosować WYŁĄCZNIE DOUSTNIE.',
    'Nie stosować w formie iniekcji!',
    'Nie przechowywać ampułki po otwarciu.',
  ],
};

export const articles: ArticlesList = {
  heading: 'Zainspiruj się naszymi artykułami',
  list: articlesList,
  more: {
    text: 'Zobacz więcej artykułów',
    url: '/artykuly',
  },
};
