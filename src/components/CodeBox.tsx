import type { SandpackProps } from "@codesandbox/sandpack-react"
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
} from "@codesandbox/sandpack-react"
import { amethyst } from "@codesandbox/sandpack-themes"

const CodeBox = (props: SandpackProps) => {
  const filesWithAppOverride = Object.assign(props.files!, {
    "/App.js": {
      hidden: true,
    }
  })

  const hasFilesWithNames = !!Object.keys(props.files!).some((key) => key !== "/App.js" && key?.length > 0)

  return (
    <SandpackProvider
      template="react"
      theme={amethyst}
      files={filesWithAppOverride}
      options={{
        classes: {
          "sp-wrapper": "!rounded-2xl !overflow-hidden",
          "sp-editor": "!h-auto"
        },
      }}
    >
      <SandpackLayout>
        <SandpackCodeEditor
            showTabs={hasFilesWithNames}
            showLineNumbers={true}
        />
        {/* <SandpackPreview /> */}
      </SandpackLayout>
    </SandpackProvider>
  )
}

export default CodeBox
