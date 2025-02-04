import { useState } from "react"
import {  Button, Box,  } from '@mui/material';
import { RichTextEditor } from '@mantine/rte';


const RichTextEditorComponent = () => {
  const [ content, setContent ] = useState(localStorage.getItem('richText')|| '')

  const handleSave = () =>{
    localStorage.setItem('richText', content);
    alert(`content saved sucessfully!`);
  }
  return (
    <>
    <Box sx={{padding:2}}>
      <RichTextEditor 
        value={content} 
        onChange={setContent}
       
        controls={[
          ['bold', 'italic', 'underline', 'strike'],
          ['unorderedList', 'orderedList'],
          ['link', 'image', 'blockquote'],
          ['clean'],
      ]}
      sx={{ minHeight: '300px', width: '100%' }}
      ></RichTextEditor>
      <Button variant="contained"  color='primary' onClick={handleSave} sx={{marginTop:2}}>Save</Button>
    </Box>
    </>
  );
};

export default RichTextEditorComponent;