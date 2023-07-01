import React from "react";
import { Avatar, useTheme } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function IconAvatar(props) {
  const theme = useTheme();
  return (
    <Avatar
      sx={{
        width: 80,
        height: 80,
        border: "4px solid",
        borderColor: props.borderColor,
        backgroundColor: props.iconColor,
        "&:hover": {
          borderColor: theme.palette.info.main,
        },
        ...props.wrapperStyle,
      }}
      {...props.avatarProps}
    >
      {props.children}
    </Avatar>
  );
}

IconAvatar.defaultProps = {
  iconColor: "hsla(0,0%,100%,.07)",
  borderColor: "hsla(0,0%,100%,.06)",
  wrapperStyle: {},
  avatarProps: {},
  children: <AccountCircleIcon fontSize="medium" />,
};

export default IconAvatar;
