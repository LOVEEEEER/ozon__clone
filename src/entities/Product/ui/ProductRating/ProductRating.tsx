import { memo } from "react";
import Star from "@/shared/assets/icons/star.svg";
import Comment from "@/shared/assets/icons/comment.svg";
import classNames from "classnames";
import styles from "./ProductRating.module.scss";

interface ProductRatingProps {
  rate: string | number,
  commentsCount: string | number,
  className?: string
}

export const ProductRating = memo((props: ProductRatingProps) => {
  const { rate, commentsCount, className } = props;
  return (
    <div className={classNames(styles.ProductRating, className)}>
      <div className={styles.rateItem}>
        <Star className={styles.icon} />
        <span className={styles.itemText}>
          {rate}
        </span>
      </div>  
      <div className={styles.rateItem}>
        <Comment className={styles.icon} />
        <span className={styles.itemText}>
          {commentsCount} отзыв
        </span>
      </div>
    </div>
  );
})