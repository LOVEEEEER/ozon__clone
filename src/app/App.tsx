import { FC, Suspense } from "react";
import { AppLayout } from "./providers/AppLayout";
import { AppRouter } from "./providers/AppRouter/ui/AppRouter";
import "./styles/index.scss";
import { Navbar } from "@/widgets/Navbar/ui/Navbar";

export const App: FC = () => {
  return (
    <AppLayout>
      <Navbar />
      <Suspense fallback="loading...">
        <AppRouter />
      </Suspense>
    </AppLayout>
  )
}