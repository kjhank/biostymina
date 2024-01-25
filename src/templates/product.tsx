import { PageHeader } from '@/components';
import { Meta } from '@/components/Layout/components/Meta';
import {
  Articles, Dosage, Ingredients, Instructions, Intro, Recommendations, Warnings,
} from '@/components/pages/Product';
import { type ProductPageProps } from '@/types/pages.types';

const ProductPage = ({ pageContext: { content, options } }: ProductPageProps) => (
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
    <Articles {...options.articles} />
  </main>
);

export const Head = ({ pageContext }: ProductPageProps) => <Meta {...pageContext.metadata} />;

export default ProductPage;
