import { PageHeader } from '@/components';
import { Meta } from '@/components/Layout/components/Meta';
import {
  Articles, Dosage, Ingredients, Instructions, Intro, Recommendations, Warnings,
} from '@/components/pages/Product';
import * as mocks from '@/mocks/Product.mocks';
import { type ProductPageProps } from '@/types/pages.types';

const ProductPage = ({ pageContext: { content } }: ProductPageProps) => (
  <main>
    <PageHeader
      {...content.pageHeader} className="product-header"
    />
    <Intro {...content.introSection} />
    <Ingredients {...content.ingredientsSection} />
    <Recommendations {...content.recommendationsSection} />
    <Dosage {...content.dosage} />
    <Instructions {...content.instructionSection} />
    <Warnings {...content.warnings} />
    <Articles {...mocks.articles} />
  </main>
);

export const Head = ({ pageContext }: ProductPageProps) => <Meta {...pageContext.metadata} />;

export default ProductPage;
