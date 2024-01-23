import { PageHeader } from '@/components';
import { Meta } from '@/components/Layout/components/Meta';
import {
  Articles, Intro, Timeline,
} from '@/components/pages/History';
import * as mocks from '@/mocks/History.mocks';
import { type HistoryPageProps } from '@/types/pages.types';

const HistoryPage = ({ pageContext: { content } }: HistoryPageProps) => (
  <main>
    <PageHeader {...content.pageHeader} className="history-header" />
    <Intro {...content.introSection} />
    <Timeline items={content.historyElements} />
    <Articles {...mocks.articles} />
  </main>
);

export const Head = ({ pageContext }: HistoryPageProps) => <Meta {...pageContext.metadata} />;

export default HistoryPage;
