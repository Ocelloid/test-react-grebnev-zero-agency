import styles from "./page.module.scss";
import { queries } from "@/api";
import type { Post } from "@/types";
import PostCard from "@/app/_components/PostCard";

const Home = async () => {
  const posts: Post[] = await queries.getPosts();
  return (
    <main className={styles.main}>
      <h1>Посты</h1>
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </main>
  );
};

export default Home;
