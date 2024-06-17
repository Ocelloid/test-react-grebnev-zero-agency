import { queries } from "@/api";
import styles from "./page.module.scss";
import type { Post, Comment } from "@/types";
import CommentCard from "@/app/_components/CommentCard";

const PostPage = async ({ params }: { params: { pid: string } }) => {
  const post: Post = await queries.getPostById(params.pid);
  const comments: Comment[] = await queries.getComments(params.pid);
  return (
    <div className={styles.post}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <div>
        <h4>Комментарии</h4>
        {comments.map((comment) => (
          <CommentCard comment={comment} key={comment.id} />
        ))}
      </div>
    </div>
  );
};

export default PostPage;
