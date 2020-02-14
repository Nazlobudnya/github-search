import gql from "graphql-tag";

const SEARCH = gql`
  query Repos($repoName: String!) {
    search(query: $repoName, type: REPOSITORY, first: 10) {
      edges {
        node {
          ... on Repository {
            id
            name
            description
            url
            primaryLanguage {
              name
            }
            watchers {
              totalCount
            }
            owner {
              login
              avatarUrl
            }
          }
        }
      }
    }
  }
`;

export { SEARCH };
