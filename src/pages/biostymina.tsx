import { PageHeader } from '@/components';
import {
  Articles, Dosage, Ingredients, Instructions, Intro, Recommendations, Warnings,
} from '@/components/Product';
import * as mocks from '@/mocks/Product.mocks';

const ProductPage = () => (
  <main>
    <PageHeader
      {...mocks.header} className="product-header"
      gridLayout="start"
    />
    <Intro {...mocks.intro} />
    <Ingredients {...mocks.ingredients} />
    <Recommendations {...mocks.recommendations} />
    <Dosage {...mocks.dosage} />
    <Instructions {...mocks.instructions} />
    <Warnings {...mocks.warnings} />
    <Articles {...mocks.articles} />
  </main>
);

export default ProductPage;
// 441.41999999999996
