import { Box, Typography } from "@mui/material";

export const PaymentMethodSelection = () => {
  return (
    <Box sx={{ color: "white" }}>
      <Typography sx={{ paddingTop: "24px" }} fontFamily={"inter"}>
        Select payment method
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "24px 0",
          gap: "39px",
        }}
      >
        <Box component="img" src="./../../../public/images/MasterCard.svg" />
        <Box component="img" src="./../../../public/images/ApplePay.svg" />
        <Box component="img" src="./../../../public/images/Visa.svg" />
      </Box>
    </Box>
  );
};
