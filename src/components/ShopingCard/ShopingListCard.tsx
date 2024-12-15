import { Stack } from "@mui/material";
import { ShopingCard } from "../ShopingCard";
import { FC } from "react";
import { useShop } from "../../store/store";
import { Book } from "../../types/Book";

interface Props {
  books: Book[];
}

export const ShopingCardList: FC<Props> = ({ books }) => {
  const { deleteBookById } = useShop();
  return (
    <Stack spacing={3}>
      {books.map((book) => (
        <ShopingCard
          key={book.id}
          book={book}
          onDelete={() => deleteBookById(book.id)}
        />
      ))}
    </Stack>
  );
};
