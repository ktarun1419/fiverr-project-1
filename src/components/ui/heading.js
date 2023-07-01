import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import { Box, Typography } from "@mui/material";

export function CircularHeading({ wrapperStyle, children }) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 0.5,
        alignItems: "center",
        mb: 2,
        ...wrapperStyle,
      }}
    >
      <CircleIcon color="info" fontSize="10" />
      <Typography fontWeight={"bold"}>{children}</Typography>
      <CircleIcon color="info" fontSize="10" />
    </Box>
  );
}

CircularHeading.defaultProps = {
  wrapperStyle: {},
  children: "",
};
