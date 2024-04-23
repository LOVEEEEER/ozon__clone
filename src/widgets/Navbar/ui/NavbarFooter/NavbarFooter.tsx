import {memo} from "react";
import { Anchor } from "@/shared/ui/Anchor/Anchor";
import styles from "./NavbarFooter.module.scss";

export const NavbarFooter = memo(() => {
  return <div className={styles.list}>
    <Anchor to="/">
      Ozon карта
    </Anchor>
    <Anchor to="/">
      Билеты, отели, туры
    </Anchor>
    <Anchor to="/">
      Одежда и обувь
    </Anchor>
    <Anchor to="/">
      Электроника
    </Anchor>
    <Anchor to="/">
      Дом и сад
    </Anchor>
    <Anchor to="/">
      Детские товары
    </Anchor>
    <Anchor to="/">
      Акции
    </Anchor>
    <Anchor to="/">
      Premium
    </Anchor>
    <Anchor to="/">
      Подарочные сертификаты
    </Anchor>
    <Anchor to="/">
      Продукты питания
    </Anchor>
  </div>
})