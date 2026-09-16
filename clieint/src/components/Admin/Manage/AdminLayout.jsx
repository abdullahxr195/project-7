import { Box, Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return <>
  
  <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box sx={{ flex: "1" }}>
          <Sidebar />
        </Box>

        <Box sx={{ flex: "4" }}>
            <Outlet/>
         
        </Box>
      </Box>
  
  
  
  
  
  </>;
}
