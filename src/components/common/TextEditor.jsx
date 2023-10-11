import React, { useEffect, useState } from 'react'
import {
  ContentState,
  EditorState,
  convertToRaw,
} from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import draftToHtml from 'draftjs-to-html'

function TextEditor({ name, onChange, value }) {
  const [editorState, setEditorState] = useState(
    EditorState.createEmpty()
  )

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState)
    onChange(
      name,
      draftToHtml(
        convertToRaw(editorState.getCurrentContent())
      )
    )
  }

  useEffect(() => {
    if (value) {
      setEditorState(
        EditorState.createWithContent(
          ContentState.createFromText(value)
        )
      )
    }
  }, [])

  return (
    <div className='z-10'>
      <Editor
        editorState={editorState}
        editorClassName='text-editor'
        localization={{
          locale: 'ko',
        }}
        onEditorStateChange={onEditorStateChange}
        toolbar={{
          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true },
        }}
      />
    </div>
  )
}

export default TextEditor
