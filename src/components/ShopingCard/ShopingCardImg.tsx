import { Box } from "@mui/material";


export const ShopingCardImg: React.FC<{ img: string }> = ({ img }) => {
  return (
    <Box
      component="img"
      src={img}
      sx={{
        width: "105px",
        height: "105px",
        borderRadius: "30px",
      }}
    />
  );
};
