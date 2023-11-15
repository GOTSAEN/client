import React from 'react';
export default function MarkdownViewer({ content }) {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}
