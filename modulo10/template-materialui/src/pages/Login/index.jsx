import React, {useState, useEffect} from 'react';
import { FormControl, InputLabel, Input, FormHelperText, Grid } from '@mui/material';

const Login = () => {
  const [login, setLogin] = useState('');
  return (
    <Grid item xs={12}>
     <FormControl fullWidth>
      <Input id="Login_Nome" aria-describedby="Login_Nome_helper_text" value={Login} 
       onChange={e => { setLogin(e.target.value) }} />
      <FormHelperText id="Login_Nome_helper_text">Login.</FormHelperText>
     </FormControl>
   </Grid>
  );
}

export default Login;