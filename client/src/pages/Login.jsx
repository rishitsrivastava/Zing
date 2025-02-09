import {Button, Container, Paper, TextField, Typography} from "@mui/material"
import { useState } from "react"

export default function Login() {
  
  const [isLogin, setIsLogin] = useState(true)

  const toggleLogin = () => {
    setIsLogin((prev) => !prev);
  }
  
  return (
    <Container component={"main"} maxWidth="xs" sx={{height: "100vh", display: "flex", justifyContent: "center" , alignItems: "center"}}>
      <Paper elevation={4} sx={{padding: 4, display: "flex", flexDirection:"column", alignItems:"center"}}>

        {
          isLogin ? (
            <>
              <Typography variant="h5">Login</Typography>
              <form style={{ width: "100%", marginTop: "1rem"}}>
                <TextField required fullWidth label="Username" margin="normal" variant="outlined" />

                <TextField required fullWidth label="Passowrd" margin="normal" variant="outlined" />

                <Button sx={{marginTop: "1rem"}} variant="contained" fullWidth color="primary" type="submit">Login</Button>

                <Typography sx={{display:"flex", paddingTop: 4, flexDirection:"column", alignItems:"center" }}>Or</Typography>
                
                <Button sx={{marginTop: "1rem"}} variant="text" fullWidth type="submit" onClick={toggleLogin}>Sign Up Instead?</Button>
              </form>
            </>
          ) : <>
            <Typography variant="h5">Sign Up</Typography>
            <form style={{ width: "100%", marginTop: "1rem"}}>
              <TextField required fullWidth label="Name" margin="normal" variant="outlined" />

              <TextField required fullWidth label="Username" margin="normal" variant="outlined" />

              <TextField required fullWidth label="Bio" margin="normal" variant="outlined" />

              <TextField required fullWidth label="Passowrd" margin="normal" variant="outlined" />

              <Button sx={{marginTop: "1rem"}} variant="contained" fullWidth color="primary" type="submit">Sign Up</Button>

              <Typography sx={{display:"flex", paddingTop: 4, flexDirection:"column", alignItems:"center" }}>Or</Typography>
              
              <Button sx={{marginTop: "1rem"}} variant="text" fullWidth type="submit" onClick={toggleLogin}>Have Account? Login</Button>
            </form>
        </>
          
        }
      </Paper>
    </Container>
  )
}
