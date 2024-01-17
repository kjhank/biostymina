import { ButtonNode, LinkNode } from './ButtonLink.styled';
import { type ButtonLinkProps } from './ButtonLink.types';

export const ButtonLink = ({
  children, size = 'regular', onClick, to, variant = 'dark', ...props
// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
}: ButtonLinkProps) => (to
  ? (
    <LinkNode
      $size={size} $variant={variant}
      to={to} {...props}
    >
      {children}
    </LinkNode>
  )
  : (
    <ButtonNode
      $size={size} $variant={variant}
      onClick={onClick} {...props}
    >
      {children}
    </ButtonNode>
  ));
