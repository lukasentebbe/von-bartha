// import React from "react"
// import { Link, graphql } from "gatsby"

// import Layout from "../components/layout"

// const CategoryTemplate = (props) => {
//   const {
//     title,
//     postPrefix,
//   } = props.data.site.siteMetadata;
//   const posts = props.data.allWordpressPost.edges;

//   return (
//     <Layout location={props.location} title={title}></Layout>
//   )
// }

// export default CategoryTemplate;

// // export const pageQuery = graphql`
// // query category($slug: String) {
// //   site {
// //     siteMetadata {
// //       title
// //       author
// //       postPrefix
// //     }
// //   }
// //   allWordpressPost(filter: {categories: {elemMatch: {slug: {eq: $slug}}}}) {
// //     edges {
// //       node {
// //         date(formatString: "MMMM DD, YYYY")
// //         slug
// //         title
// //         modified
// //         excerpt
// //         id
// //         categories {
// //           name
// //           id
// //           slug
// //         }
// //         content
// //       }
// //     }
// //   }
// // }
// // `
