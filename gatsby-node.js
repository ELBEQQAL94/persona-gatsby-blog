// exports.creaetPages = async function({actions, graphql}) {
//   const {data} = await graphql`
//     query {
//       allMdx(sort: {fields: frontmatter___date, order: DESC}) {
//         edges {
//           node {
//             id
//             frontmatter {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `;

//   // Create paginated pages for posts
//   const postPerPage = 1;
//   const numPages = Math.ceil(data.allMdx.edges.length / postPerPage);

//   Array.from({ length: numPages }).forEach((_, i), () => {
//     actions.creaetPages({
//       path: i === 0 ? `/` : `/${ i + 1}`,
//       component: require.resolve("./src/templates/allPosts.js"),
//       context: {
//         limit: postPerPage,
//         skip: i * postPerPage,
//         numPages,
//         currentPage: i + 1,
//       },
//     });
//   });

//   // Create Single Post
//   data.allMdx.edges.forEach((edge) => {
//     const id = edge.node.id;
//     const slug = edge.node.frontmatter.slug;

//     actions.creaetPages({
//       path: slug,
//       component: require.resolve(`./src/templates/singlePost.js`),
//       context: {id},
//     });
//   });

// };
