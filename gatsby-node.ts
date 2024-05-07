import { type GatsbyNode } from 'gatsby';
import * as dotenv from 'dotenv';

import fetch from 'node-fetch';
import path from 'path';
import { endpoints } from './src/constants/endpoints';
import type {
 Page, RequestParams, Templates,
} from './src/types';
import { paths } from './src/constants/paths';

type FetchData = (
  entity: string,
  id?: number,
  params?: Record<string, string>,
  isInfinite?: boolean
) => any;

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const templates: Templates = {
  'aloes-drzewiasty': path.resolve('./src/templates/aloe.tsx'),
  biostymina: path.resolve('./src/templates/product.tsx'),
  generic: path.resolve('./src/templates/generic.tsx'),
  'historia-marki': path.resolve('./src/templates/history.tsx'),
  'not-found': path.resolve('./src/templates/generic.tsx'),
  odpornosc: path.resolve('./src/templates/articles.tsx'),
  'strona-glowna': path.resolve('./src/templates/home.tsx'),
};

const getRequestUrl = (endpoint: string, params?: RequestParams) => {
  const { GATSBY_BACKEND_URL: apiUrl } = process.env;
  const baseUrl = `${apiUrl}${endpoint}`;

  if (params && Object.keys(params).length > 0) {
    const urlParamas = new URLSearchParams(params);

    return `${baseUrl}?acf_format=standard&${urlParamas.toString()}`;
  }

  return `${baseUrl}?acf_format=standard`;
};

const fetchData: FetchData = async (entity, id, params = {}, isInfinite = false) => {
  const url = getRequestUrl(entity);

  const response = await fetch(url);

  if (isInfinite) {
    const pageCount = Number(response.headers.get('x-wp-totalpages'));

    const result = await Promise.all([...new Array(pageCount)].map(async (_, index) => {
      const loopUrl = getRequestUrl(entity, {
        page: String(index + 1),
        per_page: '30',
        ...params,
      });

      const loopResponse = await fetch(loopUrl);
      const loopResult = await loopResponse.json();

      return loopResult;
    }));

    return result.flat();
  }

  const result = await response.json();

  return result;
};

export const createPages: GatsbyNode['createPages'] = async ({ actions }) => {
  const allArticles: Array<Page> = await fetchData(endpoints.posts, undefined, undefined, true);
  const pages: Array<Page> = await fetchData(endpoints.pages);
  const options = await fetchData(endpoints.options);
  const cookies = await fetchData(endpoints.cookies);

  const getPath = ({ slug, type }: Page) => {
    if (type === 'page') {
      return paths?.[slug] ?? `/${slug}`;
    }

    return `/odpornosc/${slug}`;
  };

  const getTemplate = ({ slug }: Page) => templates?.[slug] ?? templates.generic;

  const getContext = (data: Page) => {
    const common = {
      body: data.content.rendered,
      metadata: {
        cookies,
        date: data.date,
        title: data.title.rendered,
      },
      options: {
        ...options,
        articles: {
          ...options.articles,
          list: allArticles.slice(0, 3),
        },
      },
    };

    if (data.type === 'page') {
      if (data.slug === 'odpornosc') {
        return {
          ...common,
          content: data.acf,
          options: {
            ...options,
            articles: {
              ...options.articles,
              list: allArticles,
            },
          },
        };
      }
    }

    return {
      ...common,
      content: data?.acf ?? {},
    };
  };

  const { createPage } = actions;

  [...pages, ...allArticles].forEach(page => {
    if (page === undefined) return;

    const pagePath = getPath(page);
    const template = getTemplate(page);
    const context = getContext(page);

    createPage({
      component: template,
      context,
      path: pagePath,
    });
  });
};

export const onCreateBabelConfig: GatsbyNode['onCreateBabelConfig'] = ({ actions }) => {
  actions.setBabelPreset({
    name: 'babel-preset-gatsby',
    options: {
      reactRuntime: 'automatic',
    },
  });
};

export { };
