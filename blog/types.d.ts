export interface IPostMeta {
  draft: true;
  excerpt: string;
  slug: string;
  title: string;
  tags: string[];
  date: string;
  image: string;
  draft: boolean;
  status?: "Complete" | "Ongoing" | "Deprecated"
}

export interface IPost {
  content: string;
  meta: PostMeta;
}
