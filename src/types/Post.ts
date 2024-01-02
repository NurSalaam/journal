import Annotation from "./Annotation";
import Tag from "./Tag";

type PostStatus = "draft" | "published";
export const POST_STATUS = {
  PUBLISHED: "published" as PostStatus,
  DRAFT: "draft" as PostStatus,
};

type Post = {
  id: string;
  title: string;
  author: string;
  lead: string;
  status: PostStatus;
  tags: Tag[];
  body: string;
  created_at: Date;
  updated_at: Date;
  resources: string[];
  annotations: Annotation[];
};

export default Post;
