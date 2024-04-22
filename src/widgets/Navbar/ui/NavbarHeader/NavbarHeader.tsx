import {FC} from "react"
import styles from "./NavbarHeader.module.scss";
import { Badge } from "@/shared/ui/Badge/Badge";

export const NavbarHeader: FC = () => {
  return (
    <div className={styles.NavbarHeader}>
      <Badge text="RUB" />
      
    </div>
  )
}