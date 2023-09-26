import React, { useState, useEffect } from 'react'
import { EditorState, convertToRaw } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import draftToHtml from 'draftjs-to-html'

function TextEditor({ name, onChange }) {
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
