import { PageHeader } from '@/components';
import { Articles } from '@/components/pages/Articles';
import { type GenericPageProps } from '@/types/pages.types';

const ArticlesPage = ({ pageContext: { content, options } }: GenericPageProps) => (
  <main>
    <PageHeader {...content.pageHeader} className="articles-header" />
    <Articles {...options.articles} />
  </main>
);

export default ArticlesPage;
