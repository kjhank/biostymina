import { PageHeader } from '@/components';
import {
 Articles, Intro, Timeline,
} from '@/components/pages/History';
import * as mocks from '@/mocks/History.mocks';

const HistoryPage = () => (
  <main>
    <PageHeader {...mocks.header} className="history-header" />
    <Intro {...mocks.intro} />
    <Timeline {...mocks.timeline} />
    <Articles {...mocks.articles} />
  </main>
);

export default HistoryPage;
