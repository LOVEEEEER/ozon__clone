import { FC, memo, ReactNode, SVGProps } from "react";
import { Link, LinkProps } from "react-router-dom";
import styles from "./Anchor.module.scss";
import classNames from "classnames";

export enum AnchorThemes {
  DARK = 'dark',
  GREY = 'grey'
}

interface AnchorProps extends LinkProps {
  children?: ReactNode;
  icon?: FC<SVGProps<SVGElement>>,
  theme?: AnchorThemes,
  direction?: "row" | "column",
  className?: string,
}

export const Anchor = memo((props: AnchorProps) => {
  const { 
    children,
    to,
    icon: Icon,
    theme = AnchorThemes.GREY,
    direction = "column",
    className,
    ...rest
   } = props;

  return (
    <Link 
      className={classNames(styles.Anchor, styles[theme], styles[direction], className)}
      to={to}
      {...rest}
    >
      {Icon && <Icon width={24} height={24} className={styles.icon} />}
      {children}
    </Link>
  )
})