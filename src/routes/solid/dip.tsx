import { createFileRoute } from "@tanstack/react-router"
import MarkdownRender from "~/components/MarkdownRender"
import DIPMarkdown from "~/docs/dip.md?raw"

export const Route = createFileRoute("/solid/dip")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <MarkdownRender markdownContent={DIPMarkdown} />
  )
}
