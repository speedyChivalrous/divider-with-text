import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import React from "react";

const MyDivider = () => {
  return (
    <Box sx={{ m: 2 }}>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id
        dignissim justo. Nulla ut facilisis ligula. Interdum et malesuada fames
        ac ante ipsum primis in faucibus. Sed malesuada lobortis pretium.
      </Typography>
      <Divider>Center</Divider>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id
        dignissim justo. Nulla ut facilisis ligula. Interdum et malesuada fames
        ac ante ipsum primis in faucibus. Sed malesuada lobortis pretium.
      </Typography>
    </Box>
  );
};

export default MyDivider;
