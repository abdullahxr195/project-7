import { Container, Typography } from "@mui/material";
import Header from "../../components/Layout/Header";
import { currentUser } from "../../../../server/src/controller/auth.Controller";
import { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";

export default function () {
  const { currentUser, authMe } = useAuth();

  useEffect(() => {
    authMe();
  }, []);
  console.log(currentUser);
  return (
    <>
      <Header />
      <Container>
        <Typography>hi,{currentUser.name}</Typography>
      </Container>
    </>
  );
}
