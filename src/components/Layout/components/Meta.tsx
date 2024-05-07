import type { Cookies } from '@/types/pages.types';

type MetaProps = {
  cookies: Cookies;
  title: string;
}

export const Meta = ({ title, cookies }: MetaProps) => (
  <>
    <title>
      Biostymina:
      {' '}
      {title}
    </title>
    {cookies.css ? <link href={cookies.css} rel="stylesheet" /> : null}
    {cookies.css ? <script defer src={cookies.js} /> : null}
  </>
  );
