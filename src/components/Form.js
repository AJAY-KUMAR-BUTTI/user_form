import React, { useState } from 'react'
import { Button, Stack, TextField, Typography, InputAdornment } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
function Form() {
    const [user, setUser] = useState({
        username : '',
        email : '', 
        password : ''
    })
    const { username, email, password } = user;
    const changeHandler = e => {
        setUser({...user, [e.target.name] : e.target.value})
    }
    const submitHandler = e => {
        e.preventDefault();
        alert(`${username} signup successfully`)
        console.log(user);
        setUser({username :'', email :'', password : ''})
    }
  return (
    <div style={{width : '50%', margin : 'auto'}}>
        <Typography className='color' variant='h3' gutterBottom>Signup Form : </Typography>

      <form onSubmit={submitHandler}>
        <Stack spacing={4} direction='column' width="30%">
            <TextField type='text' variant='standard' name='username' value={username} label='enter username' onChange={changeHandler} required />
            <TextField type='email' variant='standard' name='email' label='enter email' value={email} onChange={changeHandler} required />
            <TextField type='password' label='enter password' name='password' variant='standard' value={password} onChange={changeHandler} required InputProps={{endAdornment : <InputAdornment position='end'>{<VisibilityIcon />}</InputAdornment>}} />
            <Stack spacing={2} direction='row'>
                <Button variant='contained' type='submit'>submit</Button>
            </Stack>
        </Stack>
      </form>
    </div>
  )
}

export default Form
