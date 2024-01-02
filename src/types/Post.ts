import Annotation from "./Annotation";
import Tag from "./Tag";

type Post = {
  id: string;
  title: string;
  author: string;
  lead: string;
  tags: Tag[];
  body: string;
  created_at: Date;
  updated_at: Date;
  resources: string[];
  annotations: Annotation[];
};

export default Post;
