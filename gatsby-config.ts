import { type GatsbyConfig } from 'gatsby';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  plugins: [
    'gatsby-plugin-tsconfig-paths',
    'gatsby-plugin-typescript',
    {
      options: {
        name: 'images',
        path: path.join(__dirname, '/src/images'),
      },
      resolve: 'gatsby-source-filesystem',
    },
    {
      options: {
        background_color: '#285c3f',
        display: 'minimal-ui',
        icon: 'src/images/favicon.svg',
        name: 'Biostymina',
        short_name: 'biostymina',
        start_url: '/',
        theme_color: '#285c3f', // TODO: set these up 👆
      },
      resolve: 'gatsby-plugin-manifest',
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-svg',
    {
      options: {
        trackingIds: [process.env.GATSBY_GTAG_ID],
      },
      resolve: 'gatsby-plugin-google-gtag',
    },
  ],
  siteMetadata: {
    author: '@kjhank',
    description: 'Biostymina 2024',
    title: 'Biostymina',
  },
};

export { };

export default config;
