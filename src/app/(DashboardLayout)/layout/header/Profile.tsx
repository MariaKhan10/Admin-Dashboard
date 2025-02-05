import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import {
  Box,
  Menu,
  Avatar,
  Typography,
  Divider,
  Button,
  IconButton,
  ListItemButton,
  List,
  ListItemText,
} from "@mui/material";
import { IconChevronDown } from "@tabler/icons-react";

const Profile = () => {
  const [anchorEl2, setAnchorEl2] = useState(null);
  
  const handleClick2 = (event: any) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const handleLogout = () => {
    console.log("Logging out...");
    
    // Local Storage se token hatao
    localStorage.removeItem("authToken");
  
    // Dropdown band karo
    setAnchorEl2(null);
  
    // Page ko reload karo ya login page pe redirect karo
    window.location.href = "/"; // Redirect to login page
  };
  

  return (
    <Box>
      <IconButton size="large" aria-label="menu" color="inherit" onClick={handleClick2}>
        <Avatar
          src={"/images/users/user2.jpg"}
          alt={"ProfileImg"}
          className="w-8 h-8"
        />
        <Box className="hidden sm:flex items-center ml-2">
          <Typography color="textSecondary" className="text-sm font-semibold">
            Hi,
          </Typography>
          <Typography className="text-sm font-bold ml-2">Maria</Typography>
          <IconChevronDown className="w-5 h-5" />
        </Box>
      </IconButton>

      {/* Dropdown Menu */}
      <Menu
        id="msgs-menu"
        anchorEl={anchorEl2}
        keepMounted
        open={Boolean(anchorEl2)}
        onClose={handleClose2}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        sx={{
          "& .MuiMenu-paper": {
            width: "280px",
            p: 1,
          },
        }}
      >
        <List>
          <ListItemButton component="a" href="#">
            <ListItemText primary="Edit Profile" />
          </ListItemButton>
          <ListItemButton component="a" href="#">
            <ListItemText primary="Account" />
          </ListItemButton>
          <ListItemButton component="a" href="#">
            <ListItemText primary="Change Password" />
          </ListItemButton>
          <ListItemButton component="a" href="#">
            <ListItemText primary="My Settings" />
          </ListItemButton>
        </List>
        
        <Divider />

        {/* ✅ Styled Logout Button */}
        <Box className="mt-2 px-4">
          <Button 
            fullWidth 
            variant="contained" 
            color="primary" 
            className="bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg text-sm"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Box>
      </Menu>
    </Box>
  );
};

export default Profile;
