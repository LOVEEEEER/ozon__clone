import React from "react"
import { ButtonHTMLAttributes, FC, memo, ReactNode, SVGProps } from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

export enum ButtonSizes {
    MEDIUM = 'medium',
    LARGE = 'large'
}

export enum ButtonThemes {
  PRIMARY = 'primary'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode,
  size?: ButtonSizes,
  className?: string,
  icon?: FC<SVGProps<SVGElement>>
}

export const Button = memo((props: ButtonProps) => {
  const {
    children,
    size = ButtonSizes.MEDIUM,
    className,
    icon: Icon,
    ...rest
  } = props;
  return (
    <button 
      className={classNames(styles.Button, styles[size], className)}
      {...rest}
    >
      {Icon && (
      <div className={styles.icon}>
        <Icon width={24} height={24} fill="#FFFFFF" />
      </div>)
    }
      {children}
    </button>
  )
});