import { Container, Video as Player } from '@/components';
import { SectionHeading } from '@/components/styled';
import { type VideoAd as VideoProps } from '@/types/content/home.types';
import { Section } from '../styled';

export const Video = ({
  heading, video,
}: VideoProps) => (
  <Section $hasCenteredHeading className="video-section">
    <Container>
      <SectionHeading>{heading}</SectionHeading>
      <Player {...video} />
    </Container>
  </Section>
);

