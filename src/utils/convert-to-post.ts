import Annotation from "../types/Annotation";
import Post from "../types/Post";
import Tag from "../types/Tag";

export function convertToPost(rawData: any): Post[] {
  console.log(rawData);
  return rawData.map(
    (item: any) =>
      ({
        id: item.id,
        title: item.title,
        author: item.author,
        lead: item.lead,
        status: item.status,
        tags: item.tags as Tag[],
        body: item.body,
        created_at: new Date(item.created_at),
        updated_at: new Date(item.updated_at),
        resources: item.resources,
        annotations: item.annotations.map(convertToAnnotation),
      } as Post)
  );
}

function convertToAnnotation(raw: any): Annotation {
  return {
    id: raw.id,
    text_occurrence_id: raw.text_occurrence_id,
    comment: raw.comment,
    created_at: new Date(raw.created_at),
  };
}
