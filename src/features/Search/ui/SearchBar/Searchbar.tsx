import { memo } from "react";
import { Input } from "@/shared/ui/Input/Input";
import styles from "./Searchbar.module.scss";
import classNames from "classnames";

interface SearchbarProps {
  className?: string
}

export const Searchbar = memo(({ className }: SearchbarProps) => {
  return (
    <Input 
      className={classNames(styles.Searchbar, className)}
      placeholder="Искать на Ozon"
    />
  )
})