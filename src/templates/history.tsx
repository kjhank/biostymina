import { PageHeader } from '@/components';
import { Meta } from '@/components/Layout/components/Meta';
import {
  Articles, Intro, Timeline,
} from '@/components/pages/History';
import { type HistoryPageProps } from '@/types/pages.types';

const HistoryPage = ({ pageContext: { content, options } }: HistoryPageProps) => (
  <main>
    <PageHeader {...content.pageHeader} className="history-header" />
    <Intro {...content.introSection} />
    <Timeline items={content.historyElements} />
    <Articles {...options.articles} />
  </main>
);

export const Head = ({ pageContext }: HistoryPageProps) => <Meta {...pageContext.metadata} />;

export default HistoryPage;
