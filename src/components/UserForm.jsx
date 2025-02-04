import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../context/store";
import { TextField, Button, Box, Typography } from "@mui/material";


const UserForm = () => {
  const dispatch = useDispatch();
  const user = useSelector((state)=>state.user);
  const [ formData, setformData ] = useState(user);


  useEffect(()=>{
    const handleBeforeUnload = (event)=>{
      if(JSON.stringify(user) !== JSON.stringify(formData)){
        event.preventDefault();
        event.returnValue= '';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return ()=> window.removeEventListener('beforeunload', handleBeforeUnload)
  },[user,formData]);


  const handelChange = (e)=>{
    setformData({...formData, [e.target.name]:[e.target.value]});
  };

  const handelSubmit = () => {
    const updateData = {...formData, id: Date.now().toString() };

    const existingUser = JSON.parse(localStorage.getItem('users')) || [];

    const updateUsers = [...existingUser, updateData];

    dispatch(setUser(updateData));

    setformData(updateData);
    
    localStorage.setItem('users',JSON.stringify(updateUsers));

    console.log(updateUsers)
    alert(`Form Data Saved Sucessfully`)
  };

  return (
    <>
    <Box sx={{ padding:2 }}>
      <Typography variant="h5" gutterBottom>User Form</Typography>
      <TextField
        label='Name'
        name='name'
        variant="outlined"
        margin='normal'
        fullWidth
        value={formData.name}
        onChange={handelChange}
      />
      <TextField
        label='Address'
        name='address'
        variant="outlined"
        margin="normal"
        fullWidth
        value={formData.adress}
        onChange={handelChange}
      />
      <TextField
        label='Email'
        name="email"
        fullWidth
        margin="normal"
        variant="outlined"
        value={formData.email}
        onChange={handelChange}
      />
      <TextField
        label='Phone'
        name="phone"
        value={formData.phone}
        onChange={handelChange}
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={handelSubmit} sx={{marginTop:2}}>Save</Button>
    </Box>
    </>
  );
};

export default UserForm