import {FC} from "react"
import styles from "./NavbarHeader.module.scss";
import { Badge } from "@/shared/ui/Badge/Badge";
import { Anchor } from "@/shared/ui/Anchor/Anchor";
import classNames from "classnames";
import { navbarHeaderItemsList } from "../../model/items";

export const NavbarHeader: FC = () => {
  return (
    <div className={styles.NavbarHeader}>
      <Badge text="RUB" />
      <ul className={styles.list}>
        {navbarHeaderItemsList.map((item) => (
          <li className={classNames(styles.item)} key={item.children + "_" + item.to}>
            <Anchor 
              className={classNames(item.marked ? styles.marked : undefined)}
              to={item.to}
            >
               {item.children}
            </Anchor>
          </li>
        ))}
      </ul>
    </div>
  )
}