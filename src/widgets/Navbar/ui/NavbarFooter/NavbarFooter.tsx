import {memo} from "react";
import { Anchor, AnchorThemes } from "@/shared/ui/Anchor/Anchor";
import styles from "./NavbarFooter.module.scss";
import { navbarFooterItemsList } from "../../model/items";

export const NavbarFooter = memo(() => {
  return <ul className={styles.list}>
    {navbarFooterItemsList.map(item => (
      <li key={item.children + "_" + item.to}>
        <Anchor theme={AnchorThemes.DARK} to={item.to}>
          {item.children}
        </Anchor>
      </li>
    ))}
  </ul>
})