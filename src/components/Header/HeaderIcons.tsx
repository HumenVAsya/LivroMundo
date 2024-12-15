import { Box, IconButton } from "@mui/material";
import { theme } from "../../theme/theme";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { FC } from "react";
import { Link } from "react-router-dom";

interface Props {
  handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
}

export const HeaderIcons: FC<Props> = ({ handleOpenNavMenu }) => (
  <Box
    sx={{
      flexGrow: 0,
      display: "flex",
      alignItems: "center",
      gap: "8.5px",
    }}
  >
    <IconButton
      size="large"
      onClick={handleOpenNavMenu}
      color="inherit"
      sx={{
        display: { xs: "flex", md: "none" },
        width: "34px",
        height: "34px",
        borderRadius: "50%",
        backgroundColor: "white",
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      <MenuIcon sx={{ color: "black" }} />
    </IconButton>
    <Link to={"shoping"}>
      <IconButton
        size="large"
        aria-label="cart"
        sx={{
          width: { xs: "34px", md: "44px" },
          height: { xs: "34px", md: "44px" },
          borderRadius: "50%",
          backgroundColor: theme.palette.secondary.main,
          "&:hover": {
            transform: "scale(1.1)",
            backgroundColor: "#fee376",
          },
        }}
      >
        <ShoppingCartOutlinedIcon
          sx={{
            width: { xs: "21px", md: "24px" },
            height: { xs: "18px", md: "21px" },
          }}
        />
      </IconButton>
    </Link>
  </Box>
);
