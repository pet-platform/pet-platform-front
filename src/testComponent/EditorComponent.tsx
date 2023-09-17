'use client'

import { FC } from "react";
import { useEffect, useState } from "react"

const EditorComponent = () => {
  const [Component, setComponent] = useState<JSX.Element>();

  useEffect(() => {
    async function loadModule() {
      const ClassicEditor = await import('@ckeditor/ckeditor5-build-classic');
      const { CKEditor } = await import('@ckeditor/ckeditor5-react');
      setComponent(
      <CKEditor
        data={'test'}
        editor={ClassicEditor.default}
        onChange={(e) => console.log("change")}></CKEditor>
      );
    }
    void loadModule();
  }, [])
  
  return (
    <div>
      {Component}
    </div>
  )
}

export default EditorComponent;