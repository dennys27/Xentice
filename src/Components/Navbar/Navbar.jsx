import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img
          style={{
            minWidth: "160px",
            maxWidth: "160px",
            marginLeft: "10px",
            marginRight: "10px",
            objectFit: "contain",
          }}
          src="https://www.xentice.com/static/media/woxlandlogo.2adca2c7.png"
        />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", backgroundColor: "#ffff" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "#ffff",height:"80px" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "block",lg:"block" } }}
          >
                      <MenuIcon sx={{color:"gray"}} />
          </IconButton>

          <span
            style={{
              flexGrow: 1,
              display: {
                xs: "none",
                sm: "block",
                justifyContent: "center",
                alignItems: "center",
                visibility: "none",
              },
            }}
          >
            <img
              style={{
                minWidth: "160px",
                maxWidth: "160px",
                marginLeft: "10px",
                marginRight: "10px",
                objectFit: "contain",
              }}
              src="https://www.xentice.com/static/media/woxlandlogo.2adca2c7.png"
            />
          </span>

          <Box sx={{ gap:3,display: { xs: "none", sm: "block", lg:"flex"} }}>
           
              <Typography  sx={{ color: "blue",display:"block", fontSize:"14px",fontWeight:400,color:"#0a58ca" }}>
                Post Ad
              </Typography>
              <Typography  sx={{ color: "blue",display:"block", fontSize:"14px",fontWeight:400,color:"#0a58ca" }}>
                Near Me
              </Typography>
              <Typography  sx={{ color: "blue",display:"block", fontSize:"14px",fontWeight:400,color:"#0a58ca" }}>
                Login/sign up
              </Typography>
           
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
                  sx={{
              color:"grey",
            display: { xs: "block", sm: "block",md:"block",lg:"block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
