import { useState, useEffect } from 'react';
import { Button, Box } from '@mui/material';
import { RichTextEditor } from '@mantine/rte';
import { useSelector } from 'react-redux';

const RichTextEditorComponent = () => {
  const [content, setContent] = useState('');
  const user = useSelector((state)=>state.user);

  useEffect(() => {
    const savedContent = localStorage.getItem('richText');
    const latestUserDataJSON = localStorage.getItem('latestUser');
    if (latestUserDataJSON) {
      const userData = JSON.parse(latestUserDataJSON);
      const { name, address, email, phone, id } = userData;
      const userDataText = `
        <p><strong>Name:</strong> ${Array.isArray(name) ? name.join(', ') : name}</p>
        <p><strong>Address:</strong> ${Array.isArray(address) ? address.join(', ') : address}</p>
        <p><strong>Email:</strong> ${Array.isArray(email) ? email.join(', ') : email}</p>
        <p><strong>Phone:</strong> ${Array.isArray(phone) ? phone.join(', ') : phone}</p>
        <p><strong>ID:</strong> ${Array.isArray(id) ? id.join(', ') : id}</p>
      `;
      setContent(userDataText || savedContent );
    } else if (savedContent) {
      setContent(savedContent);
    }
  },[user]);

  const handleSave = () => {
    localStorage.setItem('richText', content);
    alert('Content saved successfully!');
  };

  return (
    <Box sx={{ padding: 2, margin: '20px auto', maxWidth: '800px' }}>
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
      />
      <Button variant="contained" color="primary" onClick={handleSave} sx={{ marginTop: 2 }}>
        Save
      </Button>
    </Box>
  );
};

export default RichTextEditorComponent;
