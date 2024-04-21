import { ButtonHTMLAttributes, FC, memo, ReactNode, SVGProps } from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

export enum ButtonSizes {
    MEDIUM = 'medium',
    LARGE = 'large'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode,
  size?: ButtonSizes,
  className?: string,
  icon?: FC<SVGProps<SVGElement>>
}

export const Button = memo((props: ButtonProps) => {
  const { children,
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
      <div className={styles.icon}>
        {Icon && <Icon width={24} height={24} fill="#FFFFFF" />}
      </div>
      {children}
    </button>
  )
});