import { type GatsbyNode } from 'gatsby';
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// export {};

export const onCreateBabelConfig: GatsbyNode['onCreateBabelConfig'] = ({ actions }) => {
  actions.setBabelPreset({
    name: 'babel-preset-gatsby',
    options: {
      reactRuntime: 'automatic',
    },
  });
};
// export const config: GatsbyNode = {
//   onCreateBabelConfig: ({ actions }) => {
//     actions.setBabelPreset({
//       name: 'babel-preset-gatsby',
//       options: {
//         reactRuntime: 'automatic',
//       },
//     });
//   },
// };

// export default config;
