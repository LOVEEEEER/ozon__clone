import {InputHTMLAttributes, memo} from "react";
import styles from "./Input.module.scss";
import classNames from "classnames";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

export const Input = memo((props: InputProps) => {
  const {className, ...rest} = props;
  return (
    <input
      className={classNames(styles.Input, className)}
      type="text"
      placeholder="Электронная почта"
      {...rest}
    />
  )
})