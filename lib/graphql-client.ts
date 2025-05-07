import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient(
  process.env.NEXT_PUBLIC_WORDPRESS_API_URL ||"http://localhost:10080/graphql"
);

export default client;
