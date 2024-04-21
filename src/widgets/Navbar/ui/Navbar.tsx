import {FC} from "react";
import cls from "./Navbar.module.scss";
import { Logo } from "@/shared/ui/Logo/Logo";
import { Button } from "@/shared/ui/Button/Button";
import CatalorIcon from "@/shared/assets/icons/catalog.svg";
import { Input } from "@/shared/ui/Input/Input";

export const Navbar: FC = () => {
  return (
    <nav className={cls.Navbar}>
      <Logo />
      <Button icon={CatalorIcon}>
        Каталог
      </Button>
      <Input />
    </nav>
  )
}