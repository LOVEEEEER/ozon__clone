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
  beforeTextIcon?: FC<SVGProps<SVGElement>>,
  afterTextIcon?: FC<SVGProps<SVGElement>>,
  theme?: AnchorThemes,
  direction?: "row" | "column",
  className?: string,
}

export const Anchor = memo((props: AnchorProps) => {
  const { 
    children,
    to,
    beforeTextIcon: BeforeTextIcon,
    afterTextIcon: AfterTextIcon,
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
      {BeforeTextIcon && <BeforeTextIcon className={styles.icon} width={24} height={24} />}
      {children}
      {AfterTextIcon && <AfterTextIcon className={styles.icon} width={24} height={24} />}
    </Link>
  )
})