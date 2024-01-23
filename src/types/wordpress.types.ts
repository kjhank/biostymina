import { type Slug } from '@/constants/constants.types';

export type MediaSizes = {
  thumbnail: string;
  'thumbnail-width': number;
  'thumbnail-height': number;
  medium: string;
  'medium-width': number;
  'medium-height': number;
  medium_large: string;
  'medium_large-width': number;
  'medium_large-height': number;
  large: string;
  'large-width': number;
  'large-height': number;
  '1536x1536': string;
  '1536x1536-width': number;
  '1536x1536-height': number;
  '2048x2048': string;
  '2048x2048-width': number;
  '2048x2048-height': number;
};

export type ACFLink = {
  target: string;
  title: string;
  url: string;
};

export type ACFImage = {
  ID: number;
  id: number;
  title: string;
  filename: string;
  filesize: number;
  url: string;
  link: string;
  alt: string;
  author: string;
  description: string;
  caption: string;
  name: string;
  status: string;
  uploaded_to: number;
  date: string;
  modified: string;
  menu_order: number;
  mime_type: string;
  type: string;
  subtype: string;
  icon: string;
  width: number;
  height: number;
  sizes: MediaSizes;
};

export type ACFFile = {
  ID: number;
  id: number;
  title: string;
  filename: string;
  filesize: number;
  url: string;
  link: string;
  alt: string;
  author: string;
  description: string;
  caption: string;
  name: string;
  status: string;
  uploaded_to: number;
  date: string;
  modified: string;
  menu_order: number;
  mime_type: string;
  type: string;
  subtype: string;
  icon: string;
  width: number;
  height: number;
  sizes: {
    thumbnail: string;
    'thumbnail-width': number;
    'thumbnail-height': number;
    medium: string;
    'medium-width': number;
    'medium-height': number;
    medium_large: string;
    'medium_large-width': number;
    'medium_large-height': number;
    large: string;
    'large-width': number;
    'large-height': number;
    '1536x1536': string;
    '1536x1536-width': number;
    '1536x1536-height': number;
    '2048x2048': string;
    '2048x2048-width': number;
    '2048x2048-height': number;
  };
};

type Guid = {
  rendered: string;
};

type Title = {
  rendered: string;
};

type Content = {
  rendered: string;
  protected: boolean;
};

type Excerpt = {
  rendered: string;
  protected: boolean;
};

export type PostType = 'page' | 'post';

export type OgImage = {
  height: string;
  width: string;
  url: string;
  type: string;
};

export type PageACF = any;

export type SEO = {
  title: string;
  description?: string;
  robots: {
    index: string;
    follow: string;
    'max-snippet': string;
    'max-image-preview': string;
    'max-video-preview': string;
  };
  og_image: Array<OgImage>;
  og_locale: string;
  og_type: string;
  og_title: string;
  og_description: string;
  og_url: string;
  og_site_name: string;
  path?: string;
  article_publisher: string;
  article_modified_time: string;
  twitter_card: string;
  twitter_title: string;
  twitter_description: string;
  twitter_image?: string;
  twitter_site: string;
  schema: {
    '@context': string;
    '@graph': Array<{
      '@type': string;
      '@id': string;
      url?: string;
      name?: string;
      isPartOf?: {
        '@id': string;
      };
      datePublished?: string;
      dateModified?: string;
      description?: string;
      breadcrumb?: {
        '@id': string;
      };
      inLanguage?: string;
      potentialAction?: Array<{
        '@type': string;
        target: any;
        'query-input'?: string;
      }>;
      itemListElement?: Array<{
        '@type': string;
        position: number;
        name: string;
        item?: string;
      }>;
      publisher?: {
        '@id': string;
      };
      logo?: {
        '@type': string;
        inLanguage: string;
        '@id': string;
        url: string;
        contentUrl: string;
        width: number;
        height: number;
        caption: string;
      };
      image?: {
        '@id': string;
      };
      sameAs?: Array<string>;
    }>;
  };
};

export type Page = {
  acf: PageACF;
  author: number;
  comment_status: string;
  content: Content;
  date_gmt: string;
  date: string;
  excerpt: Excerpt;
  featured_media: number;
  guid: Guid;
  id: number;
  lang: any;
  link: string;
  menu_order: number;
  meta: Array<any>;
  modified_gmt: string;
  modified: string;
  parent: number;
  ping_status: string;
  slug: Slug;
  status: string;
  template: string;
  title: Title;
  type: PostType;
  yoast_head_json: SEO;
  pll_sync_post: Array<any>;
  _links: {
    self: Array<{
      href: string;
    }>;
    collection: Array<{
      href: string;
    }>;
    about: Array<{
      href: string;
    }>;
    author: Array<{
      embeddable: boolean;
      href: string;
    }>;
    replies: Array<{
      embeddable: boolean;
      href: string;
    }>;
    'version-history': Array<{
      count: number;
      href: string;
    }>;
    'predecessor-version': Array<{
      id: number;
      href: string;
    }>;
    'wp:attachment': Array<{
      href: string;
    }>;
    curies: Array<{
      name: string;
      href: string;
      templated: boolean;
    }>;
  };
};
