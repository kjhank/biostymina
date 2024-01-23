import {
  type AboutAloe, type Cultivation, type SpeciesSection,
} from './content/aloe.types';
import { type HistoryIntro, type Timeline } from './content/history.types';
import {
  type Aloe,
  type Hero, type History, type Product, type VideoAd,
} from './content/home.types';
import {
  type Dosage,
  type Ingredients,
  type Instructions,
  type Intro, type Recommendations, type Warnings,
} from './content/product.types';
import {
  type ArticlesList, type PageHeader,
} from './global.types';
import { type ACFImage, type ACFLink } from './wordpress.types';

export type FooterKeys = 'address' | 'copyright' | 'finePrint' | 'legal' | 'registration' | 'warning';

export type LayoutHeader = {
  modalTriggerLabel: string;
  navItems: Array<any>;
};

export type PageMetadata = {
  title: string;
}

export type GlobalFooter = Record<FooterKeys, string>;

export type Pharmacy = {
  image: ACFImage;
  link: ACFLink;
  name: string;
}

export type WhereToBuyModal = {
  heading: string;
  items: Array<Pharmacy>;
};

export type PageOptions = {
  articles: Array<any>;
  globalFooter: GlobalFooter;
  layoutHeader: LayoutHeader;
  whereToBuyModal: WhereToBuyModal;
}

export type PageContext<T = unknown> = {
  content: { pageHeader: PageHeader };
  metadata: PageMetadata;
  options: PageOptions;
} & T;

export type PageProps<T> = {
  pageContext: T;
}

export type HistoryContext = PageContext<{
  content: {
    articles: ArticlesList;
    historyElements: Timeline;
    introSection: HistoryIntro;
    pageHeader: PageHeader;
  };
}>

export type AloeContext = PageContext<{
  content: {
    aboutAloeSection: AboutAloe;
    cultivationSection: Cultivation;
    pageHeader: PageHeader;
    speciesSection: SpeciesSection;
  };
}>

export type HomeContext = PageContext<{
  content: {
    heroSection: Hero;
    productSection: Product;
    aloeSection: Aloe;
    historySection: History;
    videoSection: VideoAd;
  };
}>

export type ProductContext = PageContext<{
  content: {
    dosage: Dosage;
    ingredientsSection: Ingredients;
    instructionSection: Instructions;
    introSection: Intro;
    recommendationsSection: Recommendations;
    warnings: Warnings;
  };
}>

export type HistoryPageProps = PageProps<HistoryContext>;
export type AloePageProps = PageProps<AloeContext>;
export type HomePageProps = PageProps<HomeContext>;
export type ProductPageProps = PageProps<ProductContext>;
