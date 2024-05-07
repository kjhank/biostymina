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
    <link href={cookies.css} rel="stylesheet" />
    <script defer src={cookies.js} />
  </>
  );
