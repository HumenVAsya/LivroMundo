import { Box } from "@mui/material";
import { theme } from "../theme/theme";
import { Form } from "../components/Form";
import { TitleWithDivider } from "./ShopingCardPage/TitleWithDivider";
import { PaymentMethodSelection } from "./ShopingCardPage/PaymentMethodSelection";
import { ShoppingCartSummary } from "./ShopingCardPage/ShoppingCartSummary";
import CancelIcon from "@mui/icons-material/Cancel";

import { useShop } from "../store/store";
import { ShopingCardList } from "../components/ShopingCard/ShopingListCard";

export const ShopingCardPage = () => {
  const { books, deleteBooks } = useShop();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        justifyContent: "center",
        padding: { xs: "65px", md: "145px" },
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          padding: {
            xs: "24px 15px 60px",
            md: "50px 30px 112px",
            lg: "60px 51px 112px 60px",
          },
          borderTopLeftRadius: "30px",
          borderBottomLeftRadius: { xs: "0px", md: "0px", lg: "30px" },
          borderTopRightRadius: { xs: "30px", md: "30px", lg: "0px" },
        }}
      >
        <TitleWithDivider title="Shopping Cart" width={"93%"} />
        <ShopingCardList books={books} />
        <ShoppingCartSummary />
        <CancelIcon
          onClick={deleteBooks}
          sx={{ color: "red", paddingTop: "10px", cursor: "pointer" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: { xs: "20px", md: "60px" },
          backgroundColor: theme.palette.primary.main,
          borderTopRightRadius: { xs: "0px", md: "0px", lg: "30px" },
          borderBottomRightRadius: "30px",
          borderBottomLeftRadius: { xs: "30px", md: "30px", lg: "0px" },
        }}
      >
        <TitleWithDivider
          title="Card details"
          sx={{ color: "white" }}
          backgroundColor={"white"}
        />
        <PaymentMethodSelection />
        <Form />
      </Box>
    </Box>
  );
};
