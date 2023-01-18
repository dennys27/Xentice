import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Box, Container } from "@mui/system";
import { Button, Typography } from "@mui/material";
import "../../Components/crousel/carousel.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const CoWorkingSpace = ({data}) => {
   return (
     <Box>
       <Typography
         sx={{
           marginLeft: "100px",
           paddingBottom: "30px",
           display: "flex",
           gap: 2,
         }}
         variant="h5"
       >
         <img
           style={{ width: "30px", height: "30px" }}
           src="https://www.xentice.com/static/media/coworking.ae2d86ad.png"
         />
         Co-working Space
       </Typography>

       <Container
         className="scroller"
         sx={{
           marginBottom: "50px",
           display: "flex",
           overflow: "scroll",
           gap: 3,
           scrollbarWidth: 0,
         }}
       >
         {data?.map((item) =>
           JSON.parse(item.propertyType)?.name === "Co-working Space" ? (
             <>
               <Card sx={{ maxWidth: 250, maxHeight: 350, minWidth: 250 }}>
                 <CardMedia
                   component="img"
                   height="180px"
                   image={JSON.parse(item.images)[0]}
                   alt="green iguana"
                 />
                 <CardContent>
                   <Box
                     sx={{ display: "flex", justifyContent: "space-between" }}
                   >
                     <Typography gutterBottom variant="h6" component="div">
                       {JSON.parse(item.details)?.title}
                     </Typography>
                     <FavoriteBorderIcon />
                   </Box>

                   <Typography gutterBottom variant="p" component="p">
                     {JSON.parse(item.location)?.city}
                   </Typography>
                   <Typography
                     sx={{ color: "red" }}
                     gutterBottom
                     variant="p"
                     component="p"
                   >
                     Rs {JSON.parse(item.details)?.price?.rate}
                     {JSON.parse(item.details)?.price?.type}
                   </Typography>
                 </CardContent>
                 <CardActions
                   sx={{
                     textAlign: "end",
                     display: "flex",
                     justifyContent: "end",
                   }}
                 >
                   <Button
                     size="small"
                     sx={{ fontWeight: 600, fontSize: "12px" }}
                   >
                     Explore Now
                   </Button>
                 </CardActions>
               </Card>
             </>
           ) : (
             ""
           )
         )}
       </Container>
     </Box>
   );
};

export default CoWorkingSpace;
