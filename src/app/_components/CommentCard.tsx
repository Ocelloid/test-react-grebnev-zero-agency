import type { Comment } from "@/types";
import styles from "./comment.module.scss";

const CommentCard = ({ comment }: { comment: Comment }) => {
  return (
    <div className={styles.comment}>
      <div>
        <h5>{comment.name}</h5>
        <p>{comment.body}</p>
      </div>
    </div>
  );
};

export default CommentCard;
