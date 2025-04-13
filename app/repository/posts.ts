import type {User} from "./auth"

export function createPostsRepository(appFetch: typeof $fetch) {
  return {
    all() {
      return appFetch<Post[]>('/posts');
    },
    one(id: string | number) {
      return appFetch<Post>(`/posts/${id}`);
    },
    add(body: PostStore) {
      return appFetch<true>('/posts', {
        method: 'post',
        body
      });
    }
  }
}

export interface Post {
  id: number
  url: string
  title: string
  content: string
  createdAt: string
  updatedAt: string
  UserId: number
  User: User
}

export interface PostStore {
  url: string
  title: string
  content: string
} 