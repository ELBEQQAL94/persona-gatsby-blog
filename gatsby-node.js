exports.createPages = async function({actions, graphql}) {
  const { createPage } = actions;
  const path = require('path');
  const {data} = await graphql(`
    query {
      allMdx(sort: {fields: frontmatter___date, order: DESC}) {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  // Create Single Post
  data.allMdx.edges.forEach((edge) => {
    const id = edge.node.id;
    const slug = edge.node.frontmatter.slug;

    createPage({
      path: `/${slug}`,
      component: path.resolve('./src/templates/singlePost.js'),
      context: {
        id,
      },
    });
  });

};
