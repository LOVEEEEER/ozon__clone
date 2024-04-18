import {FC, Suspense} from "react"
import { AppLayout } from "./providers/AppLayout"
import { AppRouter } from "./providers/AppRouter/ui/AppRouter"

export const App: FC = () => {
  return (
    <AppLayout>
      dsfsdfsdfs
      <Suspense fallback="loading...">
        <AppRouter />
      </Suspense>
    </AppLayout>
  )
}