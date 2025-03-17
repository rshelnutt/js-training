import { FC } from "react"
import Markdown from "react-markdown"
import CodeBox from "./CodeBox"

type MarkdownRenderProps = {
  markdownContent: string
}

const MarkdownRender: FC<MarkdownRenderProps> = ({ markdownContent }) => {
  return (
    <div className="markdown">
      <Markdown
        children={markdownContent}
        components={{
          code(props) {
            const { children, className, node, ...rest } = props
            const match = /language-(\w+)/.exec(className || "")

            // Extract file name if it exists in the format [[ fileName.tsx ]]
            let fileName = ""
            let codeContent = children as string

            const fileNameMatch = /^\[\[\s*(.+?)\s*\]\]\n\n/.exec(
              codeContent
            )
            if (fileNameMatch) {
              fileName = fileNameMatch[1]
              // Remove the file name pattern from the code content
              codeContent = codeContent.replace(fileNameMatch[0], "")
            }

            return match ? (
              <CodeBox
                files={{
                  [fileName]: {
                    active: true,
                    code: codeContent,
                    readOnly: true,
                  },
                }}
              />
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            )
          },
        }}
      />
    </div>
  )
}

export default MarkdownRender
