import { Typography } from "@mui/material";
import { FC } from "react";


interface TitleWithDividerProps {
  title: string;
  sx?: object;
  backgroundColor?: string;
  width?: string;
}

export const TitleWithDivider: FC<TitleWithDividerProps> = ({
  title,
  sx,
  backgroundColor,
  width = "100%",
}) => {
  return (
    <Typography
      sx={{
        fontFamily: "Poppins",
        fontWeight: "600",
        fontSize: "24px",
        lineHeight: "36px",
        paddingBottom: "24px",
        position: "relative",
        marginBottom: "24px",
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          width,
          height: "1px",
          backgroundColor: backgroundColor || "#3030301A",
        },
        ...sx,
      }}
    >
      {title}
    </Typography>
  );
};
