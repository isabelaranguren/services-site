import client from "./graphql-client";
import {
  GET_ALL_POSTS,
  GET_POST_BY_SLUG,
 
  GET_ALL_CATEGORIES,
} from "./queries";
import { Post, Category} from "../types/wordpress";

export async function getAllPosts(): Promise<Post[]> {
  try {
    const result = await client.request<{ posts: { nodes: Post[] } }>(
      GET_ALL_POSTS
    );
    return result.posts.nodes;
  } catch (error) {
    console.error("Error fetching all posts:", error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const result = await client.request<{ post: Post }>(GET_POST_BY_SLUG, {
      slug,
    });
    return result.post;
  } catch (error) {
    console.error(`Error fetching post with slug ${slug}:`, error);
    return null;
  }
}




export async function getAllCategories(): Promise<Category[]> {
  try {
    const result = await client.request<{ categories: { nodes: Category[] } }>(
      GET_ALL_CATEGORIES
    );
    return result.categories.nodes;
  } catch (error) {
    console.error("Error fetching all categories:", error);
    return [];
  }
}

// Helper function to sanitize WordPress content
export function sanitizeContent(content: string): string {
  if (!content) return "";

  // You may need more comprehensive sanitization based on your needs
  return content
    .replace(/<!--(.|\s)*?-->/g, "") // Remove HTML comments
    .replace(/\[.*?\]/g, ""); // Remove shortcodes
}

