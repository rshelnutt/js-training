import { createFileRoute } from "@tanstack/react-router"
import MarkdownRender from "~/components/MarkdownRender"
import SRPMarkdown from "~/docs/srp.md?raw"

export const Route = createFileRoute("/solid/srp")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <MarkdownRender markdownContent={SRPMarkdown} />
  )
}
