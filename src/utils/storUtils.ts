import { Book } from "../types/Book";

export const reduceBookQuantity = (books: Book[], id: number) => {
  return books.reduce((acc, book) => {
    if (book.id === id) {
      if (book.quantity === 1) {
        return acc; // Remove the book if quantity is 1
      } else {
        return [...acc, { ...book, quantity: book.quantity - 1 }];
      }
    }
    return [...acc, book];
  }, [] as Book[]);
};

export const updateBookQuantity = (books: Book[], newBook: Book) => {
  const existingBookIndex = books.findIndex((book) => book.id === newBook.id);
  if (existingBookIndex !== -1) {
    return books.map((book, index) =>
      index === existingBookIndex
        ? { ...book, quantity: book.quantity + newBook.quantity }
        : book
    );
  }
  return [...books, newBook];
};

export const calculateUpdatedSubtotal = (books: Book[]) => {
  return books.reduce((acc, book) => acc + book.cost * book.quantity, 0);
};
