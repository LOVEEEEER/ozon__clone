import { memo, ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";

interface AnchorProps extends LinkProps {
  children?: ReactNode;
}

export const Anchor = memo((props: AnchorProps) => {
  const { children, to, ...rest } = props;

  return <Link to={to} {...rest}>{children}</Link>
})