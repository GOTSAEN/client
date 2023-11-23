import React, { useEffect, useState } from 'react';
import { ContentState, EditorState, convertFromHTML, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';

function TextEditor({ name, onChange, value }) {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
    const contentState = newEditorState.getCurrentContent();
    const contentStateStr = JSON.stringify(convertToRaw(contentState));
    onChange(name, draftToHtml(JSON.parse(contentStateStr)));
  };

  useEffect(() => {
    if (value !== draftToHtml(convertToRaw(editorState.getCurrentContent()))) {
      const blocksFromHTML = convertFromHTML(value);

      const contentState = ContentState.createFromBlockArray(blocksFromHTML.contentBlocks, blocksFromHTML.entityMap);

      const input = EditorState.createWithContent(contentState);
      setEditorState(input);
    }
  }, [value]);

  return (
    <div className="z-10">
      <Editor
        editorState={editorState}
        editorClassName="text-editor"
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
  );
}

export default TextEditor;
