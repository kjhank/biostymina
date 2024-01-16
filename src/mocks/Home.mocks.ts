import {
  type Aloe, type Articles, type Hero,
  type History, type Product, type VideoAd,
} from './static.types';

export const hero: Hero = {
  heading: `Niezbędne
  zasilenie`,
  link: {
    text: 'Dowiedz się więcej',
    url: '/biostymina',
  },
  subheading: 'Twojej odporności',
};

export const product: Product = {
  brow: 'Biostymina®',
  heading: 'Naturalny lek<br />przeciw infekcjom',
  link: {
    text: 'Dowiedz się więcej',
    url: '/biostymina',
  },
  text: 'Odkryj moc czystego wyciągu ze świeżych liści aloesu drzewiastego w produkcie Biostymina<sup>®</sup> - leku, który wzmacnia odporność i pomaga zwalczać infekcje. Bez dodatków konserwantów, cukru, alkoholu, glutenu, laktozy oraz substancji pomocniczych. Idealny w walce z infekcjami górnych dróg oddechowych i obniżoną odpornością.',
};

export const aloe: Aloe = {
  brow: 'Aloes drzewiasty',
  heading: `W literaturze opisanych jest
  ponad 360 gatunków aloesu`,
  link: {
    text: 'Dowiedz się więcej',
    url: '/aloes-drzewiasty',
  },
  text: `Najczęściej spotykane są 4: aloes drzewiasty (Aloe arborescens), aloes zwyczajny
  <em>(Aloe vera),</em> aloes mydlany <em>(Aloe saponaria, Aloe maculata),</em> aloes uzbrojony <em>(Aloe ferox).</em>
  <strong>Jedyne w Europie kontrolowane uprawy szklarniowe aloesu drzewiastego znajdują się
  w Phytopharm Klęka S.A.</strong>`,
};

export const history: History = {
  brow: 'Historia marki',
  heading: 'Powstanie Biostyminy®',
  link: {
    text: 'Dowiedz się więcej',
    url: '/historia-biostyminy',
  },
  text: `<p>Wyciąg wodny z liści aloesu drzewiastego został wprowadzony do lecznictwa pod nazwą Biostymina w 1956 r. jako efekt podjętych
  w 1949 r. przez prof. Jana Muszyńskiego prac rozwojowych nad preparatem leczniczym,
  w oparciu o doświadczenia Fiłatowa z wodnym wyciągiem z liści aloesu drzewiastego.</p>
  <p><strong>Biostymina® ma ponad 60-letnią tradycję stosowania leku, który początkowo był sprzedawany wyłącznie na receptę. Ze względu na potwierdzone bezpieczeństwo,
  w 2007 roku zyskał status leku bez recepty.</strong></p>`,
};

export const articles: Articles = {
  articles: [],
  brow: 'Odporność',
  heading: 'Zainspiruj się naszymi artykułami',
  more: {
    text: 'Zobacz więcej artykułów',
    url: '/artykuly',
  },
};

export const videoAd: VideoAd = {
  heading: 'Zobacz naszą reklamę',
  video: {},
};
