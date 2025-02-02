import {Button, Container, Paper, TextField, Typography} from "@mui/material"
import { useState } from "react"

export default function Login() {
  
  const [isLogin, setIsLogin] = useState(true)

  const toggleLogin = () => {
    setIsLogin(false);
  }
  
  return (
    <Container component={"main"} maxWidth="xs">
      <Paper elevation={4} sx={{padding: 4, display: "flex", flexDirection:"column", alignItems:"center"}}>

        {
          isLogin ? (
            <>
              <Typography variant="h5">Login</Typography>
              <form>
                <TextField required fullWidth label="Username" margin="normal" variant="outlined" />
                <TextField required fullWidth label="Passowrd" margin="normal" variant="outlined" />

                <Button sx={{marginTop: "1rem"}} variant="contained" fullWidth color="primary" type="submit">Login</Button>
                <Typography sx={{display:"flex", paddingTop: 4, flexDirection:"column", alignItems:"center" }}>Or</Typography>
                <Button sx={{marginTop: "1rem"}} variant="text" fullWidth type="submit" onClick={toggleLogin}>Register</Button>
              </form>
            </>
          ) : <span>Register</span>
          
        }
      </Paper>
    </Container>
  )
}
