import { PageHeader } from '@/components';
import {
 About, Articles, Cultivation, Species,
} from '@/components/pages/Aloe';
import * as mocks from '@/mocks/Aloe.mocks';

const AloePage = () => (
  <main>
    <PageHeader {...mocks.header} className="aloe-header" />
    <Species {...mocks.species} />
    <About {...mocks.about} />
    <Cultivation {...mocks.cultivation} />
    <Articles {...mocks.articles} />
  </main>
);

export default AloePage;
