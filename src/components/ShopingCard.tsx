import { Box, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { ShopingCardImg } from "./ShopingCard/ShopingCardImg";
import { ShopingDetails } from "./ShopingCard/ShopingDetails";
import { FC } from "react";
import { Book } from "../types/Book";

interface Props {
  book: Book;
  onDelete: (id: number) => void;
}
export const ShopingCard: FC<Props> = ({ book, onDelete }) => {
  const { id, img, title, cost, quantity } = book;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          height: { xs: "145px", md: "125px" },
          borderRadius: "30px",
          padding: "10px",
          flexGrow: "1",
          backgroundColor: "#3030301A",
          gap: { xs: "0px", md: "34px" },
          justifyContent: "space-around"
        }}
      >
        <ShopingCardImg img={img} />
        <ShopingDetails title={title} cost={cost} quantity={quantity} />
      </Box>
      <IconButton sx={{ paddingLeft: { xs: "11px", md: "21px" } }}>
        <DeleteIcon onClick={() => onDelete(id)} />
      </IconButton>
    </Box>
  );
};
