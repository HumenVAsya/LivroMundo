import { Box } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { CostTypShop } from "../../components/ShopingCard/CustomTypShop";
import { useShop } from "../../store/store";

export const ShoppingCartSummary = () => {
  const { subtotal } = useShop();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: { xs: "column-reverse", md: "row" },
        gap: "19px",
        maxWidth: "93%",
        marginTop: "24px",
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        sx={{
          cursor: "pointer",
          transition: "transform 0.2s ease",
          "&:hover": {
            transform: "scale(1.1)",
          },
          "&:active": {
            transform: "scale(1)",
          },
        }}
      >
        <ArrowBackIosIcon sx={{ width: { xs: "17px", mn: "24px" } }} />
        <CostTypShop paddingLeft="20px">Back to shop</CostTypShop>
      </Box>
      <Box display={"flex"} gap={"78px"}>
        <CostTypShop>Subtotal</CostTypShop>
        <CostTypShop>$ {subtotal}</CostTypShop>
      </Box>
    </Box>
  );
};
