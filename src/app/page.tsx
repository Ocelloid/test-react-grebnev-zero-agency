import { queries } from "@/api";
import type { Post } from "@/types";
import PostCard from "@/app/_components/PostCard";
import Pagination from "@/app/_components/Pagination";
import { Suspense } from "react";

const Posts = async ({
  searchParams,
}: {
  searchParams?: { page?: string };
}) => {
  const currentPage: number = searchParams?.page
    ? parseInt(searchParams.page)
    : 1;
  const posts: Post[] = await queries.getPosts(currentPage, 10);
  const total: number = await queries.getTotalPosts();
  return (
    <>
      <h1>Посты</h1>
      <Pagination total={total} currentPage={currentPage} />
      <Suspense key={currentPage} fallback={<div>Загрузка...</div>}>
        {posts.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </Suspense>
    </>
  );
};

export default Posts;
