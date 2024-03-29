import {
  BlendWrapper,
  Bubble, BubblesWrapper, HeaderNode, Title,
} from './PageHeader.styled';
import { ButtonLink } from '../ButtonLink/ButtonLink';
import { type PageHeaderProps } from './PageHeader.types';
import { Container } from '../Container/Container';

export const PageHeader = ({
   className, heading, hasLink, file: fileLink,
}: PageHeaderProps) => (
  <HeaderNode className={className}>
    <Container className="portrait">
      <Bubble className="portrait-bubble">
        <Title>{heading}</Title>
        {hasLink && <ButtonLink href={fileLink.url}>{fileLink.text}</ButtonLink>}
      </Bubble>
    </Container>
    <BlendWrapper $isWhite>
      <Container>
        <BubblesWrapper className="bubbles-wrapper-1">
          <Bubble $isBlended />
          <Bubble $isBlended />
          <Bubble $isBlended />
          <Bubble $isBlended />
        </BubblesWrapper>
      </Container>
      <Container>
        <BubblesWrapper className="bubbles-wrapper-2">
          <Bubble $isBlended />
          <Bubble $isBlended />
          <Bubble $isBlended />
        </BubblesWrapper>
      </Container>
    </BlendWrapper>
    <BlendWrapper>
      <Container>
        <BubblesWrapper className="bubbles-wrapper-1">
          <Bubble className={`bubble-${className}`} />
          <Bubble className={`bubble-${className}`}><Title>{heading}</Title></Bubble>
          <Bubble className={`bubble-${className}`}><Title>{heading}</Title></Bubble>
          <Bubble className={`bubble-${className}`} />
        </BubblesWrapper>
      </Container>
      <Container>
        <BubblesWrapper className="bubbles-wrapper-2">
          <Bubble className={`bubble-${className}`}>
            {hasLink && <ButtonLink href={fileLink.url}>{fileLink.text}</ButtonLink>}
          </Bubble>
          <Bubble className={`bubble-${className}`} />
          <Bubble className={`bubble-${className}`} />
        </BubblesWrapper>
      </Container>
    </BlendWrapper>
  </HeaderNode>
);
