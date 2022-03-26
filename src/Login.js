import { Login } from "@mui/icons-material";
import React from "react";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

export default function LoginForm() {
  return (
    <div id="main-login">
<div id="Adm-sip"> Admin Sign Up </div>

        <img id="img-auth" src="https://cdn-icons.flaticon.com/png/512/2273/premium/2273145.png?token=exp=1648264814~hmac=a426fb876ed819d5b5930d8f9e48548a"/>
      <div id="login-page">
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField id="outlined-basic" style={{marginTop:"25px"}} label="Password" variant="outlined" />
     
             <Button variant="contained" style={{marginTop:"25px"}}> Login </Button>
        
      </div>
    </div>
  );
}
