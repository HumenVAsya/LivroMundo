import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";

interface Props {
  display: {
    xs: string;
    md: string;
  };
  width: string;
  height: string;
  marginRight: string;
  fontSize: string;
  lineHeight: string;
  flexGrow?: number;
}

export const Logo: FC<Props> = ({
  display,
  width,
  height,
  marginRight,
  fontSize,
  lineHeight,
  flexGrow = 0,
}) => (
  <>
    <Link to={"shop"} style={{ textDecoration: "none", color: "inherit" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          alt="Logo"
          src="/images/logo.svg"
          sx={{
            display,
            md: 1,
            width,
            height,
            marginRight,
          }}
        />
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            mr: 2,
            display,
            flexGrow,
            fontFamily: "Montserrat",
            fontWeight: 700,
            color: "inherit",
            fontSize,
            lineHeight,
            textDecoration: "none",
          }}
        >
          LivroMundo
        </Typography>
      </Box>
    </Link>
  </>
);
