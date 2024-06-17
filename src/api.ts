export const queries = {
  getTotalPosts: async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) {
      throw new Error("Это не те посты, которые вы ищете.");
    }
    const posts = await res.json();
    return posts.length;
  },
  getPosts: async (page: number, take: number) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) {
      throw new Error("Это не те посты, которые вы ищете.");
    }
    const posts = await res.json();
    return posts.slice((page - 1) * take, page * take);
  },
  getPostById: async (postId: string) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    if (!res.ok) {
      throw new Error("Пост наказан и не выйдет гулять.");
    }
    return res.json();
  },
  getComments: async (postId: string) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    );
    if (!res.ok) {
      throw new Error("С комментами что-то незаладилось.");
    }
    return res.json();
  },
};
