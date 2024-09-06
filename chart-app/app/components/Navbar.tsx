import * as React from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

//navagation bar component
export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "white" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2, color: "black" }}
          >
            <MenuIcon />
          </IconButton>
          <Button sx={{ color: "black" }}>
            <Link href="#candlestick">Candlestick Chart</Link>
          </Button>
          <Button sx={{ color: "black" }}>
            <Link href="#line">Line Chart</Link>
          </Button>
          <Button sx={{ color: "black" }}>
            <Link href="#bar">Bar Chart</Link>
          </Button>
          <Button sx={{ color: "black" }}>
            <Link href="#pie">Pie Chart</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
