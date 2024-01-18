import {
 ButtonNode, ExternalLinkNode, LinkNode,
} from './ButtonLink.styled';
import { type ButtonLinkProps } from './ButtonLink.types';

export const ButtonLink = ({
  children, href, size = 'regular', onClick, to, variant = 'dark', ...props
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
}: ButtonLinkProps) => {
  if (href) {
    return (
      <ExternalLinkNode
        $size={size} $variant={variant}
        href={href} {...props}
      >
        {children}
      </ExternalLinkNode>
    );
  }

  if (to) {
    return (
      <LinkNode
        $size={size} $variant={variant}
        to={to} {...props}
      >
        {children}
      </LinkNode>
    );
  }

  return (
    <ButtonNode
      $size={size} $variant={variant}
      onClick={onClick} {...props}
    >
      {children}
    </ButtonNode>
  );
};
