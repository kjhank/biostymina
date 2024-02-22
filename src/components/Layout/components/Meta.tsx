type MetaProps = {
  title: string;
}

export const Meta = ({ title }: MetaProps) => (
  <title>
    Biostymina:
    {' '}
    {title}
  </title>
);
