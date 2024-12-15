import { Box, Button } from "@mui/material";
import { theme } from "../../theme/theme";
import { FC } from "react";
import { Link } from "react-router-dom";

interface Props {
  handleCloseNavMenu: () => void;
  pages: string[];
}

export const NavLinks: FC<Props> = ({ handleCloseNavMenu, pages }) => (
  <Box
    sx={{
      display: { xs: "none", md: "flex" },
      width: "432px",
      height: "44px",
      color: "black",
      borderRadius: "24px",
      backgroundColor: "white",
      alignItems: "center",
      margin: "0 auto",
      gap: "24px",
    }}
  >
    {pages.map((page, index) => (
      <Link to={page} key={index} style={{ textDecoration: "none" }}>
        <Button
          key={page}
          onClick={handleCloseNavMenu}
          sx={{
            my: 2,
            color: "black",
            display: "block",
            fontFamily: "Poppins",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "24px",
            padding: "10px 17px",
            borderRadius: "50px",
            transition: "all 0.5s",
            "&:hover": {
              backgroundColor: theme.palette.secondary.main,
            },
          }}
        >
          {page}
        </Button>
      </Link>
    ))}
  </Box>
);
