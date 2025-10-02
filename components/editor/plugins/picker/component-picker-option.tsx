import { JSX } from "react"
import { MenuOption } from "@lexical/react/LexicalTypeaheadMenuPlugin"
import { LexicalEditor } from "lexical"

export class ComponentPickerOption extends MenuOption {
  title: string
  icon?: JSX.Element
  keywords: Array<string>
  keyboardShortcut?: string
  onSelect: (
    queryString: string,
    editor: LexicalEditor,
    showModal: (
      title: string,
      showModal: (onClose: () => void) => JSX.Element
    ) => void
  ) => void

  constructor(
    title: string,
    options: {
      icon?: JSX.Element
      keywords?: Array<string>
      keyboardShortcut?: string
      onSelect: (
        queryString: string,
        editor: LexicalEditor,
        showModal: (
          title: string,
          showModal: (onClose: () => void) => JSX.Element
        ) => void
      ) => void
    }
  ) {
    super(title)
    this.title = title
    this.keywords = options.keywords || []
    this.icon = options.icon
    this.keyboardShortcut = options.keyboardShortcut
    this.onSelect = options.onSelect.bind(this)
  }

  // ✅ Add custom rendering
  render() {
    return (
      <div className="bg-white flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer hover:bg-gray-100">
        {this.icon && <span>{this.icon}</span>}
        <span>{this.title}</span>
      </div>
    )
  }
}

