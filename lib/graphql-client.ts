import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient(
  process.env.NEXT_PUBLIC_WORDPRESS_API_URL ||"https://yourwordpresssite.com/graphql"
);

export default client;
