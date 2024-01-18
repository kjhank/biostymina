import {
  type Articles,
  type Dosage,
  type Ingredients,
  type Instructions,
  type Intro, type PageHeader, type Recommendations, type Warnings,
} from '@/types';
import { articlesList } from './global.mocks';

export const header: PageHeader = {
  background: '',
  hasLink: true,
  heading: 'Biostymina®',
  link: {
    text: 'Zobacz ulotkę',
    url: '#',
  },
};

export const intro: Intro = {
  items: [
    {
      image: '',
      text: `Produkt zawiera <span class="intro-highlight">czysty
      wyciąg płynny</span> ze świeżych
      liści aloesu drzewiastego`,
    },
    {
      image: '',
      text: `Stymuluje układ immunologiczny
      <span class="intro-highlight">wzmacniając odpornosć</span> organizmu
      na zakażenia bakteryjne i wirusowe`,
    },
  ],
};

export const ingredients: Ingredients = {
  amount: `1 ml płynu = 1 ml wyciągu płynnego ze świeżych liści aloesu
  drzewiastego (<em>Aloe arborescens folii recentis extractum</em>)`,
  decoration: '',
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
  image: '',
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
  image: '',
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
      image: '',
      text: `<strong>1 ml
      1 ampułka</strong>
      codziennie lub
      co drugi dzień`,
    },
    {
      heading: `Dzieci
      5+`,
      image: '',
      text: `<strong>0,5 ml
      ½ ampułki</strong>
      codziennie lub
      co drugi dzień`,
    },
  ],
  heading: 'Dawkowanie i sposób podania.',
  image: '',
};

export const instructions: Instructions = {
  title: {
    description: 'Zobacz jakie to proste!',
    heading: 'Jak bezpiecznie otworzyć ampułkę?',
  },
  video: {},
};

export const warnings: Warnings = {
  list: [
    'Lek stosować WYŁĄCZNIE DOUSTNIE.',
    'Nie stosować w formie iniekcji!',
    'Nie przechowywać ampułki po otwarciu.',
  ],
};

export const articles: Articles = {
  articles: articlesList,
  heading: 'Zainspiruj się naszymi artykułami',
  more: {
    text: 'Zobacz więcej artykułów',
    url: '/artykuly',
  },
};
