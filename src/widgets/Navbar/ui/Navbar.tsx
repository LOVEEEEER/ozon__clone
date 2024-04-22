import {FC, memo} from "react";
import styles from "./Navbar.module.scss";
import { Logo } from "@/shared/ui/Logo/Logo";
import { Button } from "@/shared/ui/Button/Button";
import { Input } from "@/shared/ui/Input/Input";
import { Anchor, AnchorThemes } from "@/shared/ui/Anchor/Anchor";
import CatalogIcon from "@/shared/assets/icons/catalog.svg";
import SmileIcon from "@/shared/assets/icons/navbar/smile.svg";
import OrdersIcon from "@/shared/assets/icons/navbar/orders.svg";
import FavoritesIcon from "@/shared/assets/icons/navbar/favorites.svg";
import BasketIcon from "@/shared/assets/icons/navbar/basket.svg";
import { NavbarHeader } from "./NavbarHeader/NavbarHeader";

export const Navbar = memo(() => {
  return (
    <nav className={styles.Navbar}>
      <NavbarHeader />
      <div className={styles.NavbarMain}>
        <Logo />
        <Button icon={CatalogIcon}>
          Каталог
        </Button>
        <Input className={styles.search} />
        <Anchor
          to="/"
          theme={AnchorThemes.DARK}
          icon={SmileIcon}
        >
          Войти
        </Anchor>
        <Anchor
          to="/"
          theme={AnchorThemes.DARK}
          icon={OrdersIcon}
        >
          Заказы
        </Anchor>
        <Anchor
          to="/"
          theme={AnchorThemes.DARK}
          icon={FavoritesIcon}
        >
          Избранное
        </Anchor>
        <Anchor
          to="/"
          theme={AnchorThemes.DARK}
          icon={BasketIcon}
        >
          Корзина
        </Anchor>
      </div>
    </nav>
  )
})