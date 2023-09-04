import React, { useState, useEffect } from 'react'
import { EditorState, convertToRaw } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import draftToHtml from 'draftjs-to-html'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import './TextEditor.module.css'

function TextEditor() {
  const [editorState, setEditorState] = useState(
    EditorState.createEmpty()
  )

  useEffect(() => {
    // This effect runs whenever editorState changes.
    const contentState = editorState.getCurrentContent()
    const contentHtml = draftToHtml(
      convertToRaw(contentState)
    )
    // Do something with contentHtml if needed
  }, [editorState])

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState)
  }

  return (
    <div>
      <Editor
        editorState={editorState}
        wrapperClassName='demo-wrapper'
        editorClassName='demo-editor'
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
      {/* <textarea
        disabled
        value={draftToHtml(
          convertToRaw(editorState.getCurrentContent())
        )}
      /> */}
    </div>
  )
}

export default TextEditor
