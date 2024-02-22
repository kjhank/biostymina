import { type PageProps as GatsbyPageProps } from 'gatsby';
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
  type ArticlesList,
  type PageHeader, type Prettify,
} from './global.types';
import { type ACFImage, type ACFLink } from './wordpress.types';

export type FooterKeys = 'address' | 'copyright' | 'finePrint' | 'legal' | 'registration' | 'warning';

export type LayoutNav = {
  modalTriggerLabel: string;
  navItems: Array<{ page: ACFLink }>;
};

export type PageMetadata = {
  date: string;
  title: string;
}

export type GlobalFooterProps = Prettify<Record<FooterKeys, string> & {
  shouldShowFootnotes: boolean;
  toggleModal: () => void;
} & LayoutNav>;

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
  articles: ArticlesList;
  globalFooter: GlobalFooterProps;
  navigation: LayoutNav;
  whereToBuyModal: WhereToBuyModal;
}

export type PageContext<T = unknown> = {
  body: string;
  content: { pageHeader: PageHeader; shouldShowFootnotes: boolean };
  metadata: PageMetadata;
  options: PageOptions;
} & T;

export type PageProps<T = unknown> = {
  pageContext: T;
} & GatsbyPageProps

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
    articlesSection: {
      heading: string;
    };
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

export type GenericContext = PageContext<{
  content: {
    articledata?: {
      headerImage?: ACFImage;
    };
  };
}>;

export type HistoryPageProps = Prettify<PageProps<HistoryContext>>;
export type AloePageProps = Prettify<PageProps<AloeContext>>;
export type HomePageProps = Prettify<PageProps<HomeContext>>;
export type ProductPageProps = Prettify<PageProps<ProductContext>>;
export type GenericPageProps = Prettify<PageProps<GenericContext>>;
