import type sanitize from 'sanitize-html';

export type WYSIWYGProps = {
  html: string;
  wrapperAs?: keyof HTMLElementTagNameMap;
  sanitizeConfig?: sanitize.IOptions;
}
