import React, { useState } from 'react'
import { Button, Stack, TextField, Typography, InputAdornment } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import axios from 'axios';

function Form() {
    const [user, setUser] = useState({
        username : '',
        email : '', 
        password : '',
        confirmPassword : ''
    })
    const { username, email, password, confirmPassword } = user;
    const changeHandler = e => {
        setUser({...user, [e.target.name] : e.target.value})
    }
    const submitHandler = e => {
        e.preventDefault();
        axios.post('/signup', user).then(res => {
          alert(`${username} signup successfully`);  
        }).catch((err) => {
          alert('WRONG USER DETAILS')
        });
        console.log(user);
        setUser({username :'', email :'', password : '', confirmPassword : ''})
    }
  return (
    <div style={{width : '55%', margin : 'auto'}}>
        <Typography className='color' variant='h3' gutterBottom>Signup Form : </Typography>

      <form onSubmit={submitHandler}>
        <Stack spacing={4} direction='column' width="30%">
            <TextField type='text' variant='standard' name='username' value={username} label='enter username' onChange={changeHandler} required />
            <TextField type='email' variant='standard' name='email' label='enter email' value={email} onChange={changeHandler} required />
            <TextField type='password' label='enter password' name='password' variant='standard' value={password} onChange={changeHandler} required InputProps={{endAdornment : <InputAdornment position='end'>{<VisibilityIcon />}</InputAdornment>}} />
            <TextField type='password' label='enter confirmPassword' name='confirmPassword' variant='standard' value={confirmPassword} onChange={changeHandler} required InputProps={{endAdornment : <InputAdornment position='end'>{<VisibilityIcon />}</InputAdornment>}} />
            <Stack spacing={2} direction='row'>
                <Button variant='contained' type='submit'>submit</Button>
            </Stack>
        </Stack>
      </form>
    </div>
  )
}

export default Form
