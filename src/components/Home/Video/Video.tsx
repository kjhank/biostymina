import { Container } from '@/components/Container/Container';
import { SectionHeading } from '@/components/styled';
import { type VideoAd as VideoProps } from '@/mocks/static.types';
import { Section } from '../styled';

export const Video = ({
  heading, video,
}: VideoProps) => (
  <Section $hasCenteredHeading>
    <Container>
      <SectionHeading>{heading}</SectionHeading>
    </Container>
  </Section>
);

