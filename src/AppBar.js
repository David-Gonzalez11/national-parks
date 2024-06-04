import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import TextField from "@mui/material/TextField"
import SearchIcon from "@mui/icons-material/Search"
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ backgroundColor: "black", width: "100%" }}
      >
        <Toolbar>
          <img
            src="https://www.researchgate.net/publication/320011942/figure/fig1/AS:586733053837312@1516899469104/Redesigned-National-Park-Service-logo.png"
            className="nps-img"
          />

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            National Park Service
          </Typography>
          <SearchIcon style={{ color: "white" }} />

          <TextField
            className="sesrch-text"
            variant="outlined"
            label="Search"
            style={{
              backgroundColor: "black",
              borderRadius: "20px",
              color: "#fff8e1",
            }}
            sx={{ label: { color: "white" } }}
          >
            Search
          </TextField>

          <Button color="inherit">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              style={{ backgroundColor: "black" }}
            >
              <MenuIcon />
            </IconButton>
            Menu
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
