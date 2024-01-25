import { PageHeader } from '@/components';
import { Meta } from '@/components/Layout/components/Meta';
import {
  About, Articles, Cultivation, Species,
} from '@/components/pages/Aloe';
import { type AloePageProps } from '@/types/pages.types';

const AloePage = ({ pageContext: { content, options } }: AloePageProps) => (
  <main>
    <PageHeader {...content.pageHeader} className="aloe-header" />
    <Species {...content.speciesSection} />
    <About {...content.aboutAloeSection} />
    <Cultivation {...content.cultivationSection} />
    <Articles {...options.articles} />
  </main>
);

export const Head = ({ pageContext }: AloePageProps) => <Meta {...pageContext.metadata} />;

export default AloePage;
