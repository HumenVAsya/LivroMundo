import { Menu, MenuItem, Typography, Box } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";

interface NavMenuProps {
  anchorElNav: null | HTMLElement;
  handleCloseNavMenu: () => void;
  pages: string[];
}

export const NavMenu: FC<NavMenuProps> = ({
  anchorElNav,
  handleCloseNavMenu,
  pages,
}) => (
  <Box
    sx={{
      display: { xs: "flex", md: "none" },
    }}
  >
    <Menu
      id="menu-appbar"
      anchorEl={anchorElNav}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      open={Boolean(anchorElNav)}
      onClose={handleCloseNavMenu}
      sx={{ display: { xs: "block", md: "none" } }}
    >
      {pages.map((page, index) => (
        <Link to={page} key={index} style={{ textDecoration: "none" }}>
          <MenuItem key={page} onClick={handleCloseNavMenu}>
            <Typography color="primary">{page}</Typography>
          </MenuItem>
        </Link>
      ))}
    </Menu>
  </Box>
);
