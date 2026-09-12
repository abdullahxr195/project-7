import {
  AppBar,
  Box,
  MenuItem,
  MenuList,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
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
              <MenuItem onClick={()=>navigate("/product")}>Products</MenuItem>
              <MenuItem onClick={()=>navigate("/categories")}>Categories</MenuItem>
              <MenuItem>About</MenuItem>
              <MenuItem>Login</MenuItem>
              <MenuItem>Register</MenuItem>
              <MenuItem>Contact Us</MenuItem>
              <MenuItem>Cart</MenuItem>
            </MenuList>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
