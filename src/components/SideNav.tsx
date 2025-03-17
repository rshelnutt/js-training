import { useRouterState, Link } from "@tanstack/react-router"

import { Route as homeRoute } from '~/routes/index.tsx'
import { Route as solidRoute } from '~/routes/solid/index.tsx'
import { Route as srpRoute } from '~/routes/solid/srp.tsx'
import { Route as ocpRoute } from '~/routes/solid/ocp.tsx'
import { Route as lspRoute } from '~/routes/solid/lsp.tsx'
import { Route as ispRoute } from '~/routes/solid/isp.tsx'
import { Route as dipRoute } from '~/routes/solid/dip.tsx'

interface SideNavLinkProps {
  title?: string
  className?: string
  route: any
}

const SideNavLink = ({ title, className, route, ...rest }: SideNavLinkProps) => {
  const router = useRouterState()
  const pathname = router.location.pathname
  let routeTo =  route.to

  // If routeTo ends with /, remove it
  if (routeTo?.length > 1 && routeTo.endsWith("/")) routeTo = route.to?.slice(0, -1)

  const isActive = (routeTo !== '/' && pathname.includes(routeTo)) || pathname === routeTo

  const classes = [
    "flex flex-nowrap items-center gap-2",
    "border-l-2 hover:text-white hover:border-white/20 transition-all ease-out pl-4",
    "[[data-sub]_&]:text-sm [[data-sub]_&]:border-l-0 [[data-sub]_&]:pl-4",
    isActive ? "border-primary hover:!border-primary-pop text-white [[data-sub]_&_a]:!text-secondary" : "border-transparent text-white/50",
    className
  ].join(" ")

  return (
    <div className={classes}>
      <span className="flex-none hidden [[data-sub]_&]:inline !text-white/50" >└</span>
      <Link
        className="w-full"
        to={route.to}
        {...rest}
      >
        { title }
      </Link>
    </div>
  )
}

const SideNav = () => {
  return (
    <div className="bg-[#121212] pl-6 pr-12 pt-0">
      <ul className="flex flex-col gap-4 sticky top-0 pt-[100px]">
        <li><SideNavLink route={homeRoute} title="Home" /></li>
        <li><SideNavLink route={solidRoute} title="SOLID Principles" /></li>
        <ul className="flex flex-col gap-2">
          <li data-sub><SideNavLink route={srpRoute} title="Single Responsibility" /></li>
          <li data-sub><SideNavLink route={ocpRoute} title="Open Closed" /></li>
          <li data-sub><SideNavLink route={lspRoute} title="Liskov Substitution" /></li>
          <li data-sub><SideNavLink route={ispRoute} title="Interface Segregation" /></li>
          <li data-sub><SideNavLink route={dipRoute} title="Dependency Inversion" /></li>
        </ul>
      </ul>
    </div>
  )
}

export default SideNav
