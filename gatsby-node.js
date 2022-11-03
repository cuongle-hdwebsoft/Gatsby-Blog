// www.gatsbyjs.com/docs/how-to/querying-data/using-gatsby-without-graphql/
// https://github.com/gatsbyjs/gatsby/issues/7810

const axios = require("axios");

exports.createPages = async ({ actions: { createPage } }) => {
  try {
    const getAllBlogs = await axios.get("http://localhost:3001/posts");

    if (getAllBlogs.status === 200) {
      const { data } = getAllBlogs;

      if (data) {
        console.log("data", data);
        data.forEach((item) => {
          createPage({
            path: `/blog/${item.id}/`,
            component: require.resolve("./src/templates/blog.js"),
            context: { item },
          });
        });
      }
    }
  } catch (error) {
    console.log("error", error);
  }
};
