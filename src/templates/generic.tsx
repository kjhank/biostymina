import { PageHeader } from '@/components';
import {
 Articles, Content, Header,
} from '@/components/pages/Generic';
import { type GenericPageProps } from '@/types/pages.types';

const GenericPage = ({
  pageContext: {
    body, content, metadata, options,
  },
}: GenericPageProps) => (
  <main>
    <PageHeader
      {...content.pageHeader} className="articles-header"
      heading="Odporność"
    />
    <Header
      date={metadata.date} heading={metadata.title}
      image={content.articledata?.headerImage}
    />
    <Content html={body} />
    <Articles {...options.articles} />
  </main>
);

export default GenericPage;
