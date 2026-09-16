import {
  AppBar,
  Box,
  MenuItem,
  MenuList,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { currentUser } from "../../../../server/src/controller/auth.Controller";
import { useAuth } from "../../hooks/useAuth";
import { useEffect } from "react";

export default function Header() {
  const navigate = useNavigate();
  const { currentUser, logout, authMe } = useAuth();
  useEffect(() => {
    authMe();
  }, []);
  return (
    <>
      <AppBar position="sticky" sx={{ bgcolor: "#0048BA" }}>
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            p: 2,
          }}
        >
          <Typography variant="h4">Store</Typography>
          <Box>
            <MenuList
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: 2,
              }}
            >
              <MenuItem onClick={() => navigate("/products")}>
                Products
              </MenuItem>
              <MenuItem onClick={() => navigate("/categories")}>
                Categories
              </MenuItem>
              <MenuItem>About</MenuItem>

              <MenuItem>Contact Us</MenuItem>
              <MenuItem>Cart</MenuItem>
              {!currentUser || Object.keys(currentUser).length === 0 ? (
                <>
                  <MenuItem onClick={() => navigate("/login")}>Login</MenuItem>
                  <MenuItem onClick={() => navigate("/register")}>
                    Register
                  </MenuItem>
                </>
              ) : (
                <>
                  <MenuItem onClick={() => logout()}>Logout</MenuItem>
                </>
              )}
            </MenuList>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
