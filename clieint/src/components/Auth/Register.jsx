import { Button, Container, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

export default function Register() {
  const [userData,setUserData] = useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:"",
    phoneNumber:"",
  }); 
  const{register} = useAuth();
  const handleRegister = () =>{
    register(userData);

  };
  return (
    <>
      <Container sx={{ margin: "auto" }}>
        <Paper sx={{ display: "flex", flexDirection: "column", gap: 3, p: 3 }}>
          <Typography variant="h3">Sign Up</Typography>
          <Typography variant="body2">Explore our Products !</Typography>
          <TextField
            type="text"
            label="name"
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
          <TextField
            type="tel"
            label="Phone Number"
            value={userData.phoneNumber}
            onChange={(e) =>
              setUserData({ ...userData, phoneNumber: e.target.value })
            }
          />
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
          <TextField
            type="password"
            label="Confirm Password"
            value={userData.confirmPassword}
            onChange={(e) =>
              setUserData({ ...userData, confirmPassword: e.target.value })
            }
          />
          <Button variant="contained" onClick={() => handleRegister()}>
            Sign Up
          </Button>
        </Paper>
      </Container>
    </>
  );
}
