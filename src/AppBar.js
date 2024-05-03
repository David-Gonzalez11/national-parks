import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import TextField from "@mui/material/TextField"
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "black" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            style={{ backgroundColor: "black" }}
          >
            <MenuIcon />
          </IconButton>
          <img src="https://www.researchgate.net/publication/320011942/figure/fig1/AS:586733053837312@1516899469104/Redesigned-National-Park-Service-logo.png" />

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            National Park Service
          </Typography>
            <TextField variant="outlined" label="Search" style={{backgroundColor:"white", borderRadius: "20px"}} >
              Search
            </TextField>

          <Button color="inherit">Menu</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
