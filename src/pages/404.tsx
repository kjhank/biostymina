import { Container } from '@/components';

import {
  StyledLink, Text,
} from '@/components/styled';

export const NotFoundContainer = () => (
  <main>
    <Container>
      <h1>Hello there</h1>
      <Text>
        This is a custom 404 page.
        {' '}
        <StyledLink to="/">Click here</StyledLink>
        {' '}
        to go home.
      </Text>
    </Container>
  </main>
);
