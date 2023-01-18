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
import CampaignIcon from '@mui/icons-material/Campaign';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Modal from "@mui/material/Modal";
import { Checkbox, TextField } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EditIcon from "@mui/icons-material/Edit";
import PersonIcon from "@mui/icons-material/Person";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";



const drawerWidth = 240;
const navItems = ["Post Requirements", "Post Ad", "Post Services","Profile","Notification","Near Me","Pricing"];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: '650px',
  height:'550px',
  bgcolor: "background.paper",
  boxShadow: 24,
  outline: "none",
  borderRadius:"9px"
};



function DrawerAppBar(props) {


   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
   const [form, setForm] = React.useState("login");


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
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "start", gap: 2 }}>
            <NotificationsIcon /> <ListItemText primary={"Post Ad"} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "start", gap: 2 }}>
            <CampaignIcon /> <ListItemText primary={"Post Requirements"} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "start", gap: 2 }}>
            <EditIcon /> <ListItemText primary={"Post Services"} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "start", gap: 2 }}>
            <PersonIcon /> <ListItemText primary={"Profile"} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "start", gap: 2 }}>
            <NotificationsIcon /> <ListItemText primary={"Notification"} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "start", gap: 2 }}>
            <LocationOnIcon /> <ListItemText primary={"Near Me"} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "start", gap: 2 }}>
            <LocalOfferIcon /> <ListItemText primary={"Pricing"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", backgroundColor: "#ffff" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "#ffff", height: "80px" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "block", lg: "block" } }}
          >
            <MenuIcon sx={{ color: "gray" }} />
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

          <Box
            sx={{ gap: 3, display: { xs: "none", sm: "block", lg: "flex" } }}
          >
            <Typography
              sx={{
                color: "blue",
                display: "flex",
                fontSize: "14px",
                fontWeight: 400,
                color: "#0a58ca",
                gap: 1,
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <CampaignIcon sx={{ color: "gray" }} /> Post Ad
            </Typography>
            <Typography
              sx={{
                color: "blue",
                display: "flex",
                fontSize: "14px",
                fontWeight: 400,
                color: "#0a58ca",
                gap: 1,
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <LocationOnIcon sx={{ color: "gray" }} /> Near Me
            </Typography>
            <Typography
              onClick={handleOpen}
              sx={{
                color: "blue",
                display: "flex",
                fontSize: "14px",
                fontWeight: 400,
                color: "#0a58ca",
                gap: 1,
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <ExitToAppIcon sx={{ color: "gray" }} /> Login/sign up
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
            color: "grey",
            display: { xs: "block", sm: "block", md: "block", lg: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                width: "65%",
                height: "550px",
                backgroundColor: "white",
                borderRadius: "9px 0px 0px 9px",
                p: 3,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  paddingTop: "50px",
                }}
              >
                <Typography
                  onClick={() => setForm("login")}
                  sx={{ color: "#012b72", width: "100%", textAlign: "center" }}
                  variant="text"
                >
                  Login
                </Typography>
                <Typography
                  onClick={() => setForm("registration")}
                  sx={{ color: "#012b72", width: "100%", textAlign: "center" }}
                  variant="text"
                >
                  Registration
                </Typography>
              </Box>

              {/* login */}

              {form == "login" ? (
                <Box>
                  <Box sx={{ paddingTop: "15px" }}>
                    <TextField
                      id="standard-basic"
                      label="Email"
                      variant="standard"
                      sx={{ width: "100%", marginBottom: "20px" }}
                    />
                    <TextField
                      id="standard-basic"
                      label="Password"
                      variant="standard"
                      sx={{ width: "100%", marginBottom: "20px" }}
                    />
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      textAlign: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Checkbox />
                      <Typography> Show password</Typography>
                    </Box>

                    <Typography>Forgot Password</Typography>
                  </Box>

                  <Button
                    sx={{
                      backgroundColor: "rgb(1, 43, 114)",
                      width: "100%",
                      p: 1,
                    }}
                    variant="contained"
                  >
                    Login
                  </Button>
                  <Typography sx={{ textAlign: "center", fontSize: "12px" }}>
                    or
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      textAlign: "center",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <img
                      style={{
                        height: "30px",
                        width: "30px",
                        marginLeft: "20px",
                      }}
                      src="data:image/png;base64,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"
                      alt=""
                    />
                    <Typography>Continue with Google</Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      textAlign: "center",
                      alignItems: "center",
                      gap: 2,
                      marginTop: "20px",
                    }}
                  >
                    <img
                      style={{
                        height: "30px",
                        width: "30px",
                        marginLeft: "20px",
                      }}
                      src="data:image/png;base64,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"
                      alt=""
                    />
                    <Typography>Continue with Facebook</Typography>
                  </Box>
                </Box>
              ) : (
                <Box>
                  <Box
                    sx={{
                      paddingTop: "15px",
                      display: "block",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    <TextField
                      id="standard-basic"
                      label="What's your name"
                      variant="standard"
                      sx={{ width: "100%", marginBottom: "20px" }}
                    />
                    <TextField
                      id="standard-basic"
                      label="Email"
                      variant="standard"
                      sx={{ width: "100%", marginBottom: "20px" }}
                    />
                    <Typography sx={{ textAlign: "center" }}>
                      Click the below button to get verification mail.
                    </Typography>
                    <Button
                      sx={{ textAlign: "center", marginTop: "20px" }}
                      variant="contained"
                    >
                      Continue
                    </Button>
                  </Box>
                </Box>
              )}
            </Box>

            {/* registration */}

            <Box
              sx={{
                width: "35%",
                height: "550px",
                backgroundColor: "#012b72",
                borderRadius: "0px 9px 9px 0px",
                p: 2,
              }}
            >
              <img
                src="https://www.xentice.com/static/media/terratycoon_flogo.6e80c163.png"
                alt=""
                style={{ width: "160px", height: "70px" }}
              />

              <Typography sx={{ color: "white" }}>
                Login to your account to unlock these benefits
              </Typography>

              <Box>
                <ol style={{ listStyleType: "disc" }}>
                  <li style={{color:"white"}}>Get latest updates about Properties and Projects.</li>
                  <li style={{color:"white"}}>Access millions of advertiser details in one click.</li>
                  <li style={{color:"white"}}>Get market information, reports and price trends.</li>
                  <li style={{color:"white"}}>Advertise your property for free!</li>
                </ol>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>

    </Box>
  );
}





DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
