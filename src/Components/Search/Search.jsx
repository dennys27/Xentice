import { Button, Container, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Search = () => {
  return (
    <Container sx={{ paddingTop: "100px" }}>
      <Box
        sx={{
          width: "410px",
          padding: "30px",
          backgroundColor: "white",
          borderRadius: "12px",
        }}
      >
        <Typography
          sx={{
            fontSize: "2rem",
            fontWeight: 700,
            color: "#000",
            width: "100%",
          }}
        >
          Choose from 25,00+ Spaces for your Business
        </Typography>
        <p>Get inspired and find your perfect place</p>

        <Box sx={{ minWidth: 120, marginBottom: "20px" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Looking for</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={""}
              label="Looking for"
              onChange={() => {}}
            >
              <MenuItem value={10} disabled >
                Looking for
              </MenuItem>
              <MenuItem value={20}>Commercial Shop</MenuItem>
              <MenuItem value={30}>Commercial Office</MenuItem>
              <MenuItem value={30}>Commercial Land</MenuItem>
              <MenuItem value={30}>Commercial Building</MenuItem>
              <MenuItem value={30}>Industrial Building</MenuItem>
              <MenuItem value={30}>Industrial Land</MenuItem>
              <MenuItem value={30}>Co-working space</MenuItem>
              <MenuItem value={30}>Private Office</MenuItem>
              <MenuItem value={30}>Meeting Room</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ minWidth: 120, marginBottom: "20px" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select City</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={""}
              label="Select city"
              onChange={() => {}}
            >
              <MenuItem value={10}>Delhi</MenuItem>
              <MenuItem value={20}>Noida</MenuItem>
              <MenuItem value={30}>Hydrabad</MenuItem>
              <MenuItem value={30}>Mumbai</MenuItem>
              <MenuItem value={30}>Bangalore</MenuItem>
              <MenuItem value={30}>Cochin</MenuItem>
              <MenuItem value={30}>Chennai</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Button
          size="large"
          sx={{
            fontWeight: 700,
            fontSize: "1rem",
            backgroundColor: "rgb(1, 43, 114)",
            width: "100%",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
          variant="contained"
        >
          Search
        </Button>
      </Box>
    </Container>
  );
}

export default Search