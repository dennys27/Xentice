import React from 'react'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Box, Container } from '@mui/system';
import { Button, Typography } from '@mui/material';
import './carousel.css'
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";





const Carousels = ({data}) => {
  
   
    return (
      <Box>
        <Typography sx={{marginLeft:"100px"}} variant="h5">Service</Typography>

        <Container className="scroller"
          sx={{ marginBottom: "50px", display: "flex", overflow: "scroll",gap:3,scrollbarWidth:0, overflowX: 'hidden' }}
        >
          <Box>
            <Card sx={{ maxWidth: 250, maxHeight: 350 }}>
              <CardMedia
                component="img"
                height="180px"
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography gutterBottom variant="h6" component="div">
                    Lizard
                  </Typography>
                  <FavoriteBorderIcon />
                </Box>

                <Typography gutterBottom variant="p" component="p">
                  kochin
                </Typography>
                <Typography
                  sx={{ color: "red" }}
                  gutterBottom
                  variant="p"
                  component="p"
                >
                  Rs 11500/Month
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  textAlign: "end",
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <Button size="small" sx={{ fontWeight: 600, fontSize: "12px" }}>
                  Explore Now
                </Button>
              </CardActions>
            </Card>
          </Box>

          <Box>
            <Card sx={{ maxWidth: 250, maxHeight: 350 }}>
              <CardMedia
                component="img"
                height="180px"
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography gutterBottom variant="h6" component="div">
                    Lizard
                  </Typography>
                  <FavoriteBorderIcon />
                </Box>

                <Typography gutterBottom variant="p" component="p">
                  kochin
                </Typography>
                <Typography
                  sx={{ color: "red" }}
                  gutterBottom
                  variant="p"
                  component="p"
                >
                  Rs 11500/Month
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  textAlign: "end",
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <Button size="small" sx={{ fontWeight: 600, fontSize: "12px" }}>
                  Explore Now
                </Button>
              </CardActions>
            </Card>
          </Box>

          <Box>
            <Card sx={{ maxWidth: 250, maxHeight: 350 }}>
              <CardMedia
                component="img"
                height="180px"
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography gutterBottom variant="h6" component="div">
                    Lizard
                  </Typography>
                  <FavoriteBorderIcon />
                </Box>

                <Typography gutterBottom variant="p" component="p">
                  kochin
                </Typography>
                <Typography
                  sx={{ color: "red" }}
                  gutterBottom
                  variant="p"
                  component="p"
                >
                  Rs 11500/Month
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  textAlign: "end",
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <Button size="small" sx={{ fontWeight: 600, fontSize: "12px" }}>
                  Explore Now
                </Button>
              </CardActions>
            </Card>
          </Box>

          <Box>
            <Card sx={{ maxWidth: 250, maxHeight: 350 }}>
              <CardMedia
                component="img"
                height="180px"
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography gutterBottom variant="h6" component="div">
                    Lizard
                  </Typography>
                  <FavoriteBorderIcon />
                </Box>

                <Typography gutterBottom variant="p" component="p">
                  kochin
                </Typography>
                <Typography
                  sx={{ color: "red" }}
                  gutterBottom
                  variant="p"
                  component="p"
                >
                  Rs 11500/Month
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  textAlign: "end",
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <Button size="small" sx={{ fontWeight: 600, fontSize: "12px" }}>
                  Explore Now
                </Button>
              </CardActions>
            </Card>
          </Box>
        </Container>
      </Box>
    );
}



export default Carousels