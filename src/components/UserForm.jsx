import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../context/store"; 
import { TextField, Button, Box, Typography } from "@mui/material";

const UserForm = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [formData, setFormData] = useState(user);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (JSON.stringify(user) !== JSON.stringify(formData)) {
        event.preventDefault();
        event.returnValue = '';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [user, formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const updatedData = { ...formData, id: Date.now().toString() };
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = [...existingUsers, updatedData];

    dispatch(setUser(updatedData));
    setFormData(updatedData);

    localStorage.setItem('users', JSON.stringify(updatedUsers));
    localStorage.setItem('latestUser', JSON.stringify(updatedData));

    alert('Form Data Saved Successfully');
  };

  return (
    <Box sx={{ p:2 , m:2 }} >
      <Typography variant="h5" gutterBottom>User Form</Typography>
      <TextField
        label='Name'
        name='name'
        variant="standard"
        // margin='normal'
        fullWidth
        padding="normal"
        value={formData.name || ''}
        onChange={handleChange}
      />
      <TextField
        label='Address'
        name='address'
        variant="standard"
        margin="normal"
        fullWidth
        value={formData.address || ''}
        onChange={handleChange}
      />
      <TextField
        label='Email'
        name="email"
        fullWidth
        margin="normal"
        variant="standard"
        value={formData.email || ''}
        onChange={handleChange}
      />
      <TextField
        label='Phone'
        name="phone"
        value={formData.phone || ''}
        onChange={handleChange}
        variant="standard"
        margin="normal"
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ marginTop: 2 }}>Save</Button>
    </Box>
  );
};

export default UserForm;
