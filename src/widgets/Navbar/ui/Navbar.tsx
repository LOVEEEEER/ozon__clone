import {memo} from "react";
import styles from "./Navbar.module.scss";
import { Logo } from "@/shared/ui/Logo/Logo";
import { Button } from "@/shared/ui/Button/Button";
import { Anchor, AnchorThemes } from "@/shared/ui/Anchor/Anchor";
import CatalogIcon from "@/shared/assets/icons/catalog.svg";
import SmileIcon from "@/shared/assets/icons/navbar/smile.svg";
import OrdersIcon from "@/shared/assets/icons/navbar/orders.svg";
import FavoritesIcon from "@/shared/assets/icons/navbar/favorites.svg";
import BasketIcon from "@/shared/assets/icons/navbar/basket.svg";
import { NavbarHeader } from "./NavbarHeader/NavbarHeader";
import { Searchbar } from "@/features/Search";
import { NavbarFooter } from "./NavbarFooter/NavbarFooter";

export const Navbar = memo(() => {
  return (
    <nav className={styles.Navbar}>
      <NavbarHeader />
      <div className={styles.NavbarMain}>
        <Logo />
        <Button icon={CatalogIcon}>
          Каталог
        </Button>
        <Searchbar className={styles.search} />
        <Anchor
          to="/"
          theme={AnchorThemes.DARK}
          beforeTextIcon={SmileIcon}
        >
          Войти
        </Anchor>
        <Anchor
          to="/"
          theme={AnchorThemes.DARK}
          beforeTextIcon={OrdersIcon}
        >
          Заказы
        </Anchor>
        <Anchor
          to="/"
          theme={AnchorThemes.DARK}
          beforeTextIcon={FavoritesIcon}
        >
          Избранное
        </Anchor>
        <Anchor
          to="/"
          theme={AnchorThemes.DARK}
          beforeTextIcon={BasketIcon}
        >
          Корзина
        </Anchor>
      </div>
      <NavbarFooter />
    </nav>
  )
})