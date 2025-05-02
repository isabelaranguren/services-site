import { gql } from "graphql-request";

export const GET_ALL_POSTS = gql`
  query AllPosts {
    posts(first: 20, where: { status: PUBLISH }) {
      nodes {
        id
        date
        title
        slug
        excerpt
        content
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        categories {
          nodes {
            id
            name
            slug
          }
        }
        author {
          node {
            name
            slug
            avatar {
              url
            }
          }
        }
      }
    }
  }
`;

export const GET_POST_BY_SLUG = gql`
  query PostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      date
      title
      slug
      excerpt
      content
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      categories {
        nodes {
          id
          name
          slug
        }
      }
      author {
        node {
          name
          slug
          avatar {
            url
          }
        }
      }
    }
  }
`;

export const GET_ALL_CATEGORIES = gql`
  query AllCategories {
    categories(first: 100) {
      nodes {
        id
        name
        slug
      }
    }
  }
`;
