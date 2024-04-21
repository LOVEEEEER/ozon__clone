import { lazy } from "react";

const ProductsPageAsync = lazy(() => import('./ProductsPage'));

export { ProductsPageAsync as ProductsPage }