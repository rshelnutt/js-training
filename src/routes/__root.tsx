import { Outlet, createRootRoute } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools"
import SideNav from "~/components/SideNav"

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="grid grid-cols-[max-content_auto] min-h-screen">
        <SideNav />

        <div className="py-[88px] px-20">
          <Outlet />
        </div>
      </div>
      <TanStackRouterDevtools />
    </>
  ),
})
