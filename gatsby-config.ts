import { type GatsbyConfig } from 'gatsby';
import path from 'path';

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
        icon: 'src/images/gatsby-icon.png',
        name: 'Biostymina',
        short_name: 'foo',
        start_url: '/',
        theme_color: '#285c3f', // TODO: set these up 👆
      },
      resolve: 'gatsby-plugin-manifest',
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-svg',
  ],
  siteMetadata: {
    author: '@kjhank',
    description: 'Biostymina 2024',
    title: 'Biostymina',
  },
};

export { };

export default config;
