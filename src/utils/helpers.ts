import type sanitize from 'sanitize-html';

// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
export const isBrowser = typeof window !== 'undefined' && !!(window?.document?.createElement);

export const sanitizeConfig: sanitize.IOptions = {
  allowedTags: [
    'abbr',
    'b',
    'em',
    'i',
    'p',
    'span',
    'strong',
    'sub',
    'sup',
  ],
};

export const articleSanitizeConfig: sanitize.IOptions = {
  allowedTags: [
    ...sanitizeConfig.allowedTags as Array<string>,
    'a',
    'h2',
    'h3',
  ],
};

export const formatDate = (date: string) => new Intl.DateTimeFormat('pl-PL', { dateStyle: 'long' }).format(new Date(date));
