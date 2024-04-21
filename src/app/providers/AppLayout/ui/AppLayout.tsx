import { FC, PropsWithChildren } from "react";
import styles from "./AppLayout.module.scss";

export const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}