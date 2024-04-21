import {FC, ImgHTMLAttributes} from "react";
import logoImg from "@/shared/assets/icons/logo-200-44.png";
import styles from "./Logo.module.scss";
import classNames from "classnames";

type ImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src">

interface LogoProps extends ImageProps {
  className?: string,
}

export const Logo: FC<LogoProps> = (props) => {
  const { alt, className, ...rest } = props;
  return (
    <img
      className={classNames(styles.Logo, className)}
      src={logoImg}
      alt={alt}
      {...rest}
    />
  )
} 