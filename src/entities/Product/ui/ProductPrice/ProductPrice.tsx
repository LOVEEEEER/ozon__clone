import { memo } from "react";
import styles from "./ProductPrice.module.scss";
import classNames from "classnames";
import { getNumberWithSpaces } from "@/shared/lib/getNumberWithSpaces/getNumberWithSpaces";

interface ProductPriceProps {
  newPrice: number,
  oldPrice: number,
  className?: string
}

export const ProductPrice = memo((props: ProductPriceProps) => {
  const { newPrice, oldPrice, className } = props
  return (
    <div className={classNames(styles.ProductPrice, className)}>
      <span className={styles.newPrice}>{getNumberWithSpaces(newPrice)}</span>
      <span className={styles.oldPrice}>{getNumberWithSpaces(oldPrice)}</span>
    </div>
  )
})