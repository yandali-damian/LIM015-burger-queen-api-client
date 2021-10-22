import React from 'react'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BURGER
          </Typography>

          <Typography variant="h6" component="div" sx={{ flexGrow: 3 }}>
            QUEEN
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Typography  component="div" sx={{ flexGrow: 1 }}>
            NAME USER
          </Typography>
          <ExitToAppIcon />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
