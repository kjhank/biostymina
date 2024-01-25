import sanitize from 'sanitize-html';
import { articleSanitizeConfig } from '@/utils';
import { type WYSIWYGProps } from './WYSIWYG.types';
import { Wrapper } from './WYSIWYG.styled';

export const WYSIWYG = ({
  html, wrapperAs = 'article', sanitizeConfig = articleSanitizeConfig,
}: WYSIWYGProps) => {
  const sanitizedHTML = sanitize(html, sanitizeConfig);

  return <Wrapper dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />;
};
