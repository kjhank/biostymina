import {
  type ArticlesList, type HistoryIntro, type PageHeader, type Timeline,
} from '@/types';
import { articlesList } from './global.mocks';

export const header: PageHeader = {
  background: 'https://pub.kjhank.dev/biostymina/history/headerBg.png',
  heading: 'Historia marki',
};

export const intro: HistoryIntro = {
  decoration: 'https://pub.kjhank.dev/biostymina/history/intro-decoration.png',
  image: 'https://pub.kjhank.dev/biostymina/history/product-image.png',
  text: `Wyciąg wodny z liści aloesu drzewiastego został wprowadzony do lecznictwa pod nazwą Biostymina w 1956 r. jako efekt podjętych
  w 1949 r. przez prof. Jana Muszyńskiego prac rozwojowych nad preparatem leczniczym,
  w oparciu o doświadczenia Fiłatowa z wodnym wyciągiem z liści aloesu drzewiastego.`,
};

export const timeline: Timeline = [
  {
    date: '1956 r.',
    icon: 'Syringe',
    text: `Lek dostępny na receptę, stosowany
  w postaci iniekcji podskórnych lub domięśniowych,
  szerokie spektrum zastosowania.`,
  },
  {
    date: `Lata: 70-te
    do końca XX. w.`,
    icon: 'Leaves',
    text: `Intensywne badania nad składem
    fitochemicznym liści i wyciągu
    z aloesu drzewiastego oraz badania
    niekliniczne i kliniczne.`,
  },
  {
    date: `28 stycznia
    2002 r.`,
    icon: 'Ampoules',
    text: `Oficjalne rozszerzenie drogi podania o
      doustne, w oparciu o powszechnie stosowaną
      i uznaną praktykę ordynowaniu leku doustnie
      przez lekarzy oraz potwierdzenie równoważności
      działania immunostymulującego obu dróg podania
      w stosownych badaniach`,
  },
  {
    date: `7 lutego
    2007 r.`,
    icon: 'Silhouettes',
    text: `Ze względu na potwierdzone
      bezpieczeństwo stosowania lek staje się
      dostępny dla pacjentów bez recepty`,
  },
];

export const articles: ArticlesList = {
  heading: 'Zainspiruj się naszymi artykułami',
  list: articlesList,
  more: {
    text: 'Zobacz więcej artykułów',
    url: '/artykuly',
  },
};
