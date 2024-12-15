import { Book } from "./Book";

export interface ShopState {
  books: Book[];
  subtotal: number;
  addBook: (book: Book) => void;
  deleteBooks: () => void;
  calculateSubtotal: () => void;
  deleteBookById: (id: number) => void;
}