import { ButtonNode, LinkNode } from './ButtonLink.styled';
import { type ButtonLinkProps } from './ButtonLink.types';

export const ButtonLink = ({
  children, size = 'regular', onClick, to, variant = 'dark',
// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
}: ButtonLinkProps) => (to
  ? (
    <LinkNode
      $size={size} $variant={variant}
      to={to}
    >
      {children}
    </LinkNode>
  )
  : (
    <ButtonNode
      $size={size} $variant={variant}
      onClick={onClick}
    >
      {children}
    </ButtonNode>
  ));
