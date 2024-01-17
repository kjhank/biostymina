import { Layout } from '@/components';
import { type WrapPageElement, type WrapPageProps } from './utils.types';

export const wrapPageElement: WrapPageElement = ({ element, props }: WrapPageProps) => (
  <Layout {...props}>
    {element}
  </Layout>
);
