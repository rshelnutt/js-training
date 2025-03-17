import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/solid/")({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>WIP - SOLID Overview</div>
}
