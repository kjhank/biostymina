import { Container } from '@/components';
import { SectionHeading } from '@/components/styled';
import { type VideoAd as VideoProps } from '@/mocks/static.types';
import { Section } from '../styled';

export const Video = ({
  heading, video,
}: VideoProps) => (
  <Section $hasCenteredHeading className="video-section">
    <Container>
      <SectionHeading>{heading}</SectionHeading>
    </Container>
  </Section>
);

