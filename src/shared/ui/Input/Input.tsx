import {InputHTMLAttributes, memo} from "react";
import styles from "./Input.module.scss";
import classNames from "classnames";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

export const Input = memo((props: InputProps) => {
  const {className, type, placeholder, onChange,  ...rest} = props;
  return (
    <input
      className={classNames(styles.Input, className)}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      {...rest}
    />
  )
})