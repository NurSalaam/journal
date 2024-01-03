import Post from "../types/Post";
import Annotation from "../types/Annotation";
import Tag from "../types/Tag";
import { convertToPost } from "../utils/convert-to-post";
import { mockPosts as mock } from "../mocks/mock-posts";

// Mock API
let mockPosts: Post[] = convertToPost(mock); // import your mock data

export async function createPost(post: Post): Promise<Post> {
  // Here you can replace this with your real API call
  mockPosts.push(post);
  return post;
}

export async function editPost(post: Post): Promise<Post> {
  // Here you can replace this with your real API call
  const index = mockPosts.findIndex((p) => p.id === post.id);
  mockPosts[index] = post;
  return post;
}

export async function deletePost(id: string): Promise<void> {
  // Here you can replace this with your real API call
  mockPosts = mockPosts.filter((post) => post.id !== id);
}

export async function deletePosts(ids: string[]): Promise<void> {
  // Here you can replace this with your real API call
  mockPosts = mockPosts.filter((post) => !ids.includes(post.id));
}

export async function getPost(id: string): Promise<Post> {
  const post = mockPosts.find((post) => post.id === id);
  if (!post) {
    throw new Error(`Post with id ${id} not found`);
  }
  return post;
}

export async function getPosts(): Promise<Post[]> {
  // Here you can replace this with your real API call
  return mockPosts;
}
