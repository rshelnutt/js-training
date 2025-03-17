import { createFileRoute } from "@tanstack/react-router"
import MarkdownRender from "~/components/MarkdownRender"
import ISPMarkdown from "~/docs/isp.md?raw"

export const Route = createFileRoute("/solid/isp")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <MarkdownRender markdownContent={ISPMarkdown} />
  )
}
