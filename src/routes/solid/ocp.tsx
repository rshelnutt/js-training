import { createFileRoute } from "@tanstack/react-router"
import MarkdownRender from "~/components/MarkdownRender"
import OCPMarkdown from "~/docs/ocp.md?raw"

export const Route = createFileRoute("/solid/ocp")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <MarkdownRender markdownContent={OCPMarkdown} />
  )
}
