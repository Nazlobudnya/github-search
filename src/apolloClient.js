import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const GITHUB_BASE_URL = "https://api.github.com/graphql";

const link = new HttpLink({
  uri: GITHUB_BASE_URL,
  headers: {
    authorization: `bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`
  }
});
const cache = new InMemoryCache();
const client = new ApolloClient({
  link,
  cache
});

export { client };
