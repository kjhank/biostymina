import { Meta } from '@/components/Layout/components/Meta';
import {
  Aloe, Articles, Hero, History, Product, Video,
} from '@/components/pages/Home';
import { type HomePageProps } from '@/types/pages.types';

const HomePage = ({ pageContext: { content, options } }: HomePageProps) => (
  <main>
    <Hero {...content.heroSection} />
    <Product {...content.productSection} />
    <Aloe {...content.aloeSection} />
    <History {...content.historySection} />
    <Articles {...options.articles} brow={content.articlesSection.heading} />
    <Video {...content.videoSection} />
  </main>
);

export const Head = ({ pageContext }: HomePageProps) => <Meta {...pageContext.metadata} />;

export default HomePage;
