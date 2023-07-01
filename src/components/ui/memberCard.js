import React from "react";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const MemberCard = ({ name, title, image, social }) => {
  const theme = useTheme();
  return (
    <Card
      variant="elevation"
      sx={{
        maxWidth: 240,
        color: theme.palette.common.white,
        backgroundColor: theme.palette.primary.main,
        textAlign: "center",
        cursor: "pointer",
        margin: "auto",
      }}
    >
      <Avatar
        src={image}
        sx={{
          width: 200,
          height: 200,
          m: "auto",
          filter: "grayscale(1)",
          "&:hover": {
            filter: "none",
          },
        }}
      />

      <CardHeader
        title={<Typography variant="h6">{name}</Typography>}
        subheader={<Typography variant="subtitle2">{title}</Typography>}
      />
      <CardContent>
        <Stack direction="row" spacing={2} justifyContent={"center"}>
          <a href={""}>
            <YouTubeIcon color="warning" />
          </a>
          <a href={""}>
            <TwitterIcon color="warning" />
          </a>
          <a href={""}>
            <FacebookIcon color="warning" />
          </a>
          <a href={""}>
            <InstagramIcon color="warning" />
          </a>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default MemberCard;
