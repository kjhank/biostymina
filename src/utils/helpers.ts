import type sanitize from 'sanitize-html';

// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
export const isBrowser = !!(window?.document?.createElement);

export const sanitizeConfig: sanitize.IOptions = {
  allowedTags: [
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
