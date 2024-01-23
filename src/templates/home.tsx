import { Meta } from '@/components/Layout/components/Meta';
import {
  Aloe, Articles, Hero, History, Product, Video,
} from '@/components/pages/Home';
import * as mocks from '@/mocks/Home.mocks';
import { type HomePageProps } from '@/types/pages.types';

const HomePage = ({ pageContext: { content } }: HomePageProps) => (
  <main>
    <Hero {...content.heroSection} />
    <Product {...content.productSection} />
    <Aloe {...content.aloeSection} />
    <History {...content.historySection} />
    <Articles {...mocks.articles} />
    <Video {...content.videoSection} />
  </main>
);

export const Head = ({ pageContext }: HomePageProps) => <Meta {...pageContext.metadata} />;

export default HomePage;
