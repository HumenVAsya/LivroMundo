import Box from "@mui/material/Box";
import { FC } from "react";
import { CardImage } from "./Card/CardImage";
import { CardDetails } from "./Card/CardDetails";
import { Book } from "@mui/icons-material";

interface Book {
  id: number;
  title: string;
  cost: number;
  img: string;
  quantity: number;
}

interface Props {
  book: Book;
  onClick: (book: Book) => void;
}

export const Card: FC<Props> = ({ book, onClick }) => {
  const { img, cost, title } = book;

  return (
    <Box onClick={() => onClick(book)}>
      <CardImage img={img} />
      <CardDetails title={title} cost={cost} />
    </Box>
  );
};

