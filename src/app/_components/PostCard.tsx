import { Post } from "@/types";
import styles from "./postcard.module.scss";

export default function PostCard({ post }: { post: Post }) {
  return (
    <div className={styles.post}>
      <div>
        <h4>{post.title}</h4>
        <p>{post.body}</p>
      </div>
    </div>
  );
}
