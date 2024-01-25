import { Container } from '@/components/Container/Container';
import { ContentSection } from './Content.styled';
import { WYSIWYG } from '@/components/WYSIWYG/WYSIWYG';
import { type ContentProps } from './Content.types';

export const Content = ({ html, ...props }: ContentProps) => (
  <ContentSection {...props}>
    <Container>
      <WYSIWYG html={html} />
    </Container>
  </ContentSection>
);
