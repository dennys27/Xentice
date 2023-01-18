import React from 'react'
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container, Divider, Typography } from '@mui/material';
import './Footer.css'



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Footer = () => {
    return (
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#012b72",
          minHeight: "300px",
          paddingTop: "50px",
          paddingBottom: "100px",
        }}
      >
        <Container
          sx={{ width: "100%", backgroundColor: "#012b72", minHeight: "300px",maxHeigth:"700px" }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <Grid item xs={2} sm={4} md={3}>
                <Typography className="header">ABOUT</Typography>
                <Typography className="links">How Xentice works</Typography>
                <Typography className="links">Founders Letter</Typography>
                <Typography className="links">Newsroom</Typography>
                <Typography className="links">Investors</Typography>
                <Typography className="links">Xentice Gold</Typography>
                <Typography className="links">Xentice Platinum</Typography>
                <Typography className="links">Startup Support</Typography>
                <Typography className="links">Careers</Typography>
              </Grid>
              <Grid item xs={2} sm={4} md={3}>
                <Typography className="header">EXPLORE</Typography>
                <Typography className="links">
                  Diversity & Discrimination
                </Typography>
                <Typography className="links">Accessibility</Typography>
                <Typography className="links">Xentice Associates</Typography>
                <Typography className="links">Xentice Team</Typography>
                <Typography className="links">Xentice Mall</Typography>
                <Typography className="links">Xstudio</Typography>
                <Typography className="links">Xmoney</Typography>
                <Typography className="links">Entice Spaces</Typography>
              </Grid>

              <Grid item xs={2} sm={4} md={3}>
                <Typography className="header">SERVICES</Typography>
                <Typography className="links">Buttons & Badges</Typography>
                <Typography className="links">Mobile Apps</Typography>
                <Typography className="links">For Companies</Typography>
                <Typography className="links">Mobile Apps</Typography>
                <Typography className="links">Review Professionals</Typography>
                <Typography className="links">
                  Suggested Professionals
                </Typography>
                <Typography className="links">Resource Centre</Typography>
                <Typography className="links">Community Centre</Typography>
              </Grid>

              <Grid item xs={2} sm={4} md={3}>
                <Typography className="header">SUPPORT</Typography>
                <Typography className="links">Our COVID-19 Response</Typography>
                <Typography className="links">Help Centre</Typography>
                <Typography className="links">Cancellation options</Typography>
                <Typography className="links">Neighbourhood Support</Typography>
                <Typography className="links">Corporate contact</Typography>
                <Typography className="links">Trust & Safety</Typography>
                <Typography className="links">FAQ</Typography>
                <Typography className="links">Payment gateway</Typography>
              </Grid>
            </Grid>
          </Box>

          <Box
            sx={{
              display: "flex",
              marginTop: "50px",
              justifyContent: "space-between",
            }}
          >
            <Box className="contentwrapper">
              <Box className="header">DISCLAIMER</Box>
              <Typography className="details">
                Please do not share your xentice password, Credit/Debit card
                pin, other confidential information with anyone even if he/she
                claims to be from xentice. We advise our customers to completely
                ignore such communications & report to us at
                support@xentice.com.
              </Typography>
            </Box>

            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingTop: "50px",
                }}
              >
                <img
                  src="https://www.xentice.com/static/media/google-play-badge.609afac0.png"
                  alt=""
                  style={{ width: "150px" }}
                />
                <img
                  src="https://www.xentice.com/static/media/badge-download-on-the-app-store.e8046ecc.png"
                  alt=""
                  style={{ width: "150px" }}
                />
              </Box>
            </Box>
          </Box>
          <Divider sx={{ backgroundColor: "white", marginTop: "5px" }} />
        </Container>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: "Poppins,sans-serif",
                fontWeight: 500,
                color: "white",
              }}
            >
              © Xentice Group of Companies 2023 . All Rights Reserved
            </Typography>
          </Box>

          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                gap: 3,
                fontFamily: "Poppins,sans-serif",
                fontWeight: 500,
                color: "white",
              }}
            >
              <Typography>About Us</Typography>
              <Typography>Contact Us</Typography>
              <Typography>Privacy Policy</Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    );
}

export default Footer