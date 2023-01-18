import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Box, Container } from "@mui/system";
import { Button, Typography } from "@mui/material";
import "../../Components/crousel/carousel.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const PrivateOffice = ({data}) => {
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
          src="data:image/png;base64,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AABoSAEAgIYUAABoSAEAgIYUAABoSAEAgIYUAABoSAEAgIYUAABoSAEAgIYUAABoSAEAgIYUAABoSAEAgIYUAABoSAEAgIYUAABoSAEAgIYUAABoSAEAgIYUAABoSAEAgIYUAABoSAEAgIYUAABoSAEAgIYUAABoSAEAgIYUAABoSAEAgIYUAABoSAEAgIYUAABoSAEAgIYUAABoaEeSteoQAMBy2QEAgIYUAABoSAEAgIYUAABoSAEAgIYUAABoSAEAgIYUAABoSAEAgIYUAABoSAEAgIYUAABoSAEAgIYUAABoSAEAgIYUAABoSAEAgIYUAABoSAEAgIYUAABoSAEAgIYUAABoSAEAgIYUAABoSAEAgIYUAABoSAEAgIYUAABoSAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANvD/Wo0oZYSSyEoAAAAASUVORK5CYII="
        />
        Private Office
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
          JSON.parse(item.propertyType)?.name === "Private Office" ? (
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

export default PrivateOffice;
