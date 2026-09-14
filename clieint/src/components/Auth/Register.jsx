import { Button, Container, Paper, TextField, Typography } from "@mui/material";

export default function Register() {
  return (
    <>
      <Container sx={{margin:"auto"}}>
        <Paper sx={{display:"flex",flexDirection:"column",gap:3,p:3}}>
          <Typography variant="h3">Sign Up</Typography>
          <Typography variant="body2">Explore our Products !</Typography>
          <TextField type="text" label="name" />
          <TextField type="tel" label="Phone Number"/>
          <TextField type="email" label="Email"/>
          <TextField type="password" label="Password"/>
          <TextField type="password" label="Confirm Password"/>
          <Button variant="contained">Sign Up</Button>
        </Paper>
      </Container>
    </>
  );
}
