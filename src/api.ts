export const queries = {
  getPosts: async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) {
      throw new Error("Что-то случилось с постами по пути сюда.");
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
