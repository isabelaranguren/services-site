export interface Post {
  id: string;
  date: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
  categories?: {
    nodes: Category[];
  };
  author?: {
    node: Author;
  };
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface Author {
  id: string;
  name: string;
  slug: string;
  avatar?: {
    url: string;
  };
}

export interface QueryResult<T> {
  data: T;
}
