import { ProductCard } from "@/entities/Product"

const ProductsPage = () => {
  return <div>
    <ProductCard 
      image="https://kartinki.pics/pics/uploads/posts/2022-09/1662729713_1-kartinkin-net-p-samie-milie-kotiki-pinterest-1.jpg" name="Товар" newPrice={16000} oldPrice={20000} dateOfDelivery="16 мая"  />
  </div>
}

export default ProductsPage