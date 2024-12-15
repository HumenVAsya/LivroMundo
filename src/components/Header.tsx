import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

import { Logo } from "./Header/logo";
import { NavLinks } from "./Header/NavLinks";
import { NavMenu } from "./Header/NavMenu";
import { HeaderIcons } from "./Header/HeaderIcons";
import { Box } from "@mui/material";

const pages = ["home", "shop", "about", "contact"];

export function Header() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  console.log(1)

  return (
    <AppBar color="primary" position="static">
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            height: { xs: "60px", md: "120px" },
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Logo
              display={{ xs: "none", md: "flex" }}
              width={"53px"}
              height={"58px"}
              marginRight={"29px"}
              fontSize={"34px"}
              lineHeight={"41.45px"}
            />
          </Box>

          <Logo
            display={{ xs: "flex", md: "none" }}
            width={"39px"}
            height={"43px"}
            marginRight={"4px"}
            fontSize={"16px"}
            lineHeight={"19.5px"}
          />
          <NavLinks handleCloseNavMenu={handleCloseNavMenu} pages={pages} />
          <NavMenu
            pages={pages}
            anchorElNav={anchorElNav}
            handleCloseNavMenu={handleCloseNavMenu}
          />
          <HeaderIcons handleOpenNavMenu={handleOpenNavMenu} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
