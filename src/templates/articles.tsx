import { PageHeader } from '@/components';
import { Meta } from '@/components/Layout/components/Meta';
import { Articles } from '@/components/pages/Articles';
import { type GenericPageProps } from '@/types/pages.types';

const ArticlesPage = ({ pageContext: { content, options } }: GenericPageProps) => (
  <main>
    <PageHeader {...content.pageHeader} className="articles-header" />
    <Articles {...options.articles} />
  </main>
);

export const Head = ({ pageContext }: GenericPageProps) => <Meta {...pageContext.metadata} />;

export default ArticlesPage;
