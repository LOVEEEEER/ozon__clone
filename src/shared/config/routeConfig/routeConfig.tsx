import { RouteObject } from "react-router";
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