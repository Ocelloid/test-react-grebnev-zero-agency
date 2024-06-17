import { queries } from "@/api";
import type { Post } from "@/types";
import PostCard from "@/app/_components/PostCard";

const Posts = async () => {
  const posts: Post[] = await queries.getPosts();
  return (
    <>
      <h1>Посты</h1>
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </>
  );
};

export default Posts;
