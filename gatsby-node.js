/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
// const axios = require(`axios`)
// const getPokemonData = names =>
//   Promise.all(
//     names.map(
//       async name => await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
//     )
//   )
exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: 'babel-plugin-import',
    options: {
      libraryName: 'antd',
      // style: 'css', // default.or true,if you want to use less
    },
  })
}
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  //   const allPokemon = await getPokemonData([`pikachu`, `charizard`, `squirtle`])
  //   // Create a page that lists all Pokémon.
  //   createPage({
  //     path: `/`,
  //     component: require.resolve(`./src/templates/all-pokemon.js`),
  //     context: { allPokemon },
  //   })
  // const { data } = await graphql(`
  //   {
  //     allMongodbStrDocuments {
  //       edges {
  //         node {
  //           id
  //           md
  //         }
  //       }
  //     }
  //   }
  // `)
  // for (const { node } of data.allMongodbStrDocuments.edges) {
  //   createPage({
  //     // Each page is required to have a `path` as well
  //     // as a template component. The `context` is
  //     // optional but is often necessary so the template
  //     // can query data specific to each page.
  //     path: `/item/${node.id}/`,
  //     component: path.resolve(`./src/templates/item.js`),
  //     context: {
  //       id: node.id,
  //     },
  //   })
  // }

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      })
    })
  })
}
