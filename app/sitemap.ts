import { BASE_URL } from "@/lib/constants";
import client from "@/lib/graphql-client";
import { GET_ALL_POSTS } from "@/lib/queries";

type PostNode = {
  slug: string;
  date: string;
};


type PostsResponse = {
  posts: {
    nodes: PostNode[];
  };
};

export default async function sitemap() {
  const postsData = await client.request<PostsResponse>(GET_ALL_POSTS);
  const posts = postsData.posts.nodes.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));


  // Add your static routes
  const staticRoutes = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];

  return [...staticRoutes, ...posts ];
}
