import {FC} from "react"
import styles from "./NavbarHeader.module.scss";
import { Badge } from "@/shared/ui/Badge/Badge";
import { Anchor } from "@/shared/ui/Anchor/Anchor";
import classNames from "classnames";

export const NavbarHeader: FC = () => {
  return (
    <div className={styles.NavbarHeader}>
      <Badge text="RUB" />
      <div className={styles.links}>
        <Anchor 
          className={classNames(styles.link, styles.marked)}
          to="/"
        >
          Стать продавцом
        </Anchor>
        <Anchor
          className={styles.link}
          to="/"
        >
          Покупать как компания
        </Anchor>
        <Anchor
          className={styles.link}
          to="/"
        >
          Мобильное приложение
        </Anchor>
        <Anchor
          className={styles.link}
          to="/"
        >
          Подарочные сертификаты
        </Anchor>
        <Anchor
          className={styles.link}
          to="/"
        >
          Помощь
        </Anchor>
        <Anchor
          className={styles.link}
          to="/"
        >
          Пункты выдачи
        </Anchor>
      </div>
    </div>
  )
}