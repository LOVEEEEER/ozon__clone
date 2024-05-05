import { memo } from "react";
import styles from "./ProductCard.module.scss";
import { Button } from "@/shared/ui/Button/Button";
import classNames from "classnames";
import { ProductRating } from "../ProductRating/ProductRating";
import { ProductPrice } from "../ProductPrice/ProductPrice";
import { Product } from "../../model/types/product";

interface ProductCardProps extends Product {
  className?: string
}

export const ProductCard = memo((props: ProductCardProps) => {
  const { 
    image,
    name,
    newPrice,
    oldPrice,
    dateOfDelivery,
    className 
  } = props;

  return (
    <div className={classNames(styles.ProductCard, className)}>
      <img className={styles.image} src={image} alt={name} />
      <ProductPrice newPrice={newPrice} oldPrice={oldPrice} />
      <h3 className={styles.name}>{name}</h3>
      <ProductRating commentsCount={26} rate="4.6" />
      <Button className={styles.dateButton}>{dateOfDelivery}</Button>
    </div>
  )
})