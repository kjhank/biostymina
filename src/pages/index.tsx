import {
  Aloe, Articles, Hero, History, Product, Video,
} from '@/components/Home';
import * as mocks from '@/mocks/Home.mocks';

const IndexPage = () => (
  <main>
    <Hero {...mocks.hero} />
    <Product {...mocks.product} />
    <Aloe {...mocks.aloe} />
    <History {...mocks.history} />
    <Articles {...mocks.articles} />
    <Video {...mocks.videoAd} />
  </main>
);

export default IndexPage;
