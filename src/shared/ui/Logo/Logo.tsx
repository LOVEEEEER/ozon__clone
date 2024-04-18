import {FC, ImgHTMLAttributes} from "react";
import logoImg from "@/shared/assets/icons/logo-200-44.png"

type ImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src">

enum LogoSizes {
  SMALL = "small",
  LARGE = "large"
}

interface LogoProps extends ImageProps {
  size: LogoSizes,
}

export const Logo: FC<LogoProps> = (props) => {
  const { alt, size, ...rest } = props;
  return <img src={logoImg} alt={alt} {...rest} />
}