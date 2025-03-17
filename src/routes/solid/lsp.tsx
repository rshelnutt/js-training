import { createFileRoute } from "@tanstack/react-router"
import MarkdownRender from "~/components/MarkdownRender"
import LSPMarkdown from "~/docs/lsp.md?raw"

export const Route = createFileRoute("/solid/lsp")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <MarkdownRender markdownContent={LSPMarkdown} />
  )
}
