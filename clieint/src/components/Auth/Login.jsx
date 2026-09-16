import { Button, Container, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

export default function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const {login} = useAuth();

  const handleLogin =()=>{

    login(userData);
  }
  return (
    <>
      <Container sx={{ margin: "auto" }}>
        <Paper sx={{ display: "flex", flexDirection: "column", gap: 3, p: 3 }}>
          <Typography variant="h3">Sign Up</Typography>
          <Typography variant="body2">complete your journy !</Typography>

          <TextField
            type="email"
            label="Email"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
          <TextField
            type="password"
            label="Password"
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />

          <Button variant="contained" onClick={() => handleLogin()}>
            Sign In
          </Button>
        </Paper>
      </Container>
    </>
  );
}
