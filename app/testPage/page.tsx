import EditorComponent from '@/src/testComponent/EditorComponent'
import { TextField } from '@mui/material'
import React from 'react'

const page = () => {
  return (
    <div>
      <TextField id='filled-basic' fullWidth placeholder="제목을 입력해주세요" size='medium'/>
      <EditorComponent></EditorComponent>
    </div>
  )
}

export default page