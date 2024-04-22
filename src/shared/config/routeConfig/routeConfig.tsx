import { RouteObject } from "react-router-dom";
import { ProductsPage } from "../../../pages/ProductsPage";

export enum RoutePaths {
  PRODUCTS = "/",
}

export const routes: RouteObject[] = [
  {
    path: RoutePaths['PRODUCTS'],
    element: <ProductsPage />
  }
]