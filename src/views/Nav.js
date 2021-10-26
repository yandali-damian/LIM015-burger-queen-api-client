import React from 'react'
import Button from '@mui/material/Button'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/icons-material/Menu'

export default function Nav() {
    return (
        <div>
            <AppBar position="fixed" color="primary">
              <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                  <Menu />
                </IconButton>
                <Typography variant="h6">
                  
                </Typography>
              </Toolbar>
            </AppBar>
            <Button variant="text" color="default">
              
            </Button>
            <Button variant="text" color="default">
              
            </Button>
        </div>
    )
}
