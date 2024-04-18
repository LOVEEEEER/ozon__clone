import { FC } from "react";
import { useRoutes } from "react-router-dom"
import {routes} from "@/shared/config/routeConfig/routeConfig";

export const AppRouter: FC = () => {
  const elements = useRoutes(routes)
  return elements;
}