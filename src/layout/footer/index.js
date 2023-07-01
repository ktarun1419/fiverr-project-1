import React from "react";
import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import VisaImg from "../../assets/images/visa.png";
import MastercardImg from "../../assets/images/mastercard.png";
import LockIcon from "@mui/icons-material/Lock";
import "./style.css";

function Footer() {
  const theme = useTheme();
  return (
    <footer>
      <Container maxWidth="md">
        <Stack
          direction={{ xs: "column", lg: "row" }}
          justifyContent={"space-between"}
          textAlign={"center"}
        >
          <Stack direction="row" spacing={2} justifyContent="center">
            <img src={VisaImg} width={32} />
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <img src={MastercardImg} width={32} />
              <Typography variant="caption" color={theme.palette.common.white}>
                Mastercard
              </Typography>
            </Box>
          </Stack>

          <Typography variant="caption">
            <LockIcon
              fontSize="10"
              sx={{ mr: 1, color: theme.palette.common.white }}
            />
            <Typography
              variant="caption"
              component="span"
              color={theme.palette.common.white}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
              aliquam.
            </Typography>
          </Typography>
        </Stack>
      </Container>
    </footer>
  );
}

export default Footer;
