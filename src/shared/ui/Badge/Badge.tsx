import { memo, MouseEvent } from "react";
import styles from "./Badge.module.scss";
import classNames from "classnames";

export enum BadgeThemes {
  GREY = 'grey'
}

interface BadgeProps {
  text: string,
  theme?: BadgeThemes.GREY,
  onClick?: (e: MouseEvent) => void,
  className?: string,
}

export const Badge = memo((props: BadgeProps) => {
  const { text, theme = BadgeThemes.GREY, onClick, className } = props;
  const isClickable = Boolean(onClick);
  return (
    <div className={classNames(styles.Badge, styles[theme], theme, className, {[styles.clickable]: isClickable})} onClick={onClick}>
      {text}
    </div>
  )
})