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


export function sanitizeContent(content: string): string {
  if (!content) return "";

  let sanitized = content;

  sanitized = sanitized.replace(
    /class="wp-image-\d+"/g,
    'class="rounded-lg shadow-md w-full h-auto"'
  );

  sanitized = sanitized.replace(
    /class="aligncenter"/g,
    'class="mx-auto block"'
  );

  sanitized = sanitized.replace(
    /class="alignleft"/g,
    'class="float-left mr-4 mb-4"'
  );

  sanitized = sanitized.replace(
    /class="alignright"/g,
    'class="float-right ml-4 mb-4"'
  );

  // Fix WordPress captions
  sanitized = sanitized.replace(
    /<figcaption class="wp-element-caption">(.*?)<\/figcaption>/g,
    '<figcaption class="text-center text-sm text-gray-500 mt-2">$1</figcaption>'
  );

  // Handle WordPress galleries
  sanitized = sanitized.replace(
    /<ul class="wp-block-gallery.*?>(.*?)<\/ul>/gs,
    '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">$1</div>'
  );

  // Fix problematic elements that could break layout
  // Remove width/height attributes from images
  sanitized = sanitized.replace(/<img (.*?)width="(\d+)"(.*?)>/g, "<img $1$3>");

  sanitized = sanitized.replace(
    /<img (.*?)height="(\d+)"(.*?)>/g,
    "<img $1$3>"
  );

  // Fix WordPress tables
  sanitized = sanitized.replace(
    /<table>/g,
    '<table class="w-full border-collapse my-6">'
  );

  sanitized = sanitized.replace(
    /<tr>/g,
    '<tr class="border-b border-gray-300">'
  );


  return sanitized;
}