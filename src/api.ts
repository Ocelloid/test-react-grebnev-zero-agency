export const queries = {
  getPosts: async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) {
      throw new Error("Это не те посты, которые вы ищете.");
    }
    return res.json();
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
