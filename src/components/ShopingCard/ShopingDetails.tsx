import { Box } from "@mui/material";
import { CostTypShop } from "./CustomTypShop";

export const ShopingDetails: React.FC<{
  title: string;
  cost: number;
  quantity: number;
}> = ({ title, cost, quantity }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: { xs: "15px", md: "44px" },
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <CostTypShop>{title}</CostTypShop>
      <CostTypShop>{`USD ${cost}`}</CostTypShop>
      <CostTypShop
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "32px",
          height: "32px",
          border: "1px solid black",
          borderRadius: "5px",
        }}
      >
        {quantity}
      </CostTypShop>
      <CostTypShop>{`USD ${quantity * cost}`}</CostTypShop>
    </Box>
  );
};
