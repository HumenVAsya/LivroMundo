import { create } from "zustand";
import { Book } from "../types/Book";
import { ShopState } from "../types/Shop";
import {
  calculateUpdatedSubtotal,
  reduceBookQuantity,
  updateBookQuantity,
} from "../utils/storUtils";

export const useShop = create<ShopState>((set) => ({
  books: [],
  subtotal: 0,
  addBook: (newBook: Book) =>
    set((state) => {
      const updatedBooks = updateBookQuantity(state.books, newBook);
      const updatedSubtotal = calculateUpdatedSubtotal(updatedBooks);

      return {
        ...state,
        books: updatedBooks,
        subtotal: updatedSubtotal,
      };
    }),

  calculateSubtotal: () =>
    set((state) => ({
      subtotal: state.books.reduce(
        (acc, book) => acc + book.cost * book.quantity,
        0
      ),
    })),
  deleteBooks: () =>
    set(() => ({
      books: [],
      subtotal: 0,
    })),
  deleteBookById: (id: number) =>
    set((state: ShopState) => {
      const updatedBooks = reduceBookQuantity(state.books, id);
      const updatedSubtotal = calculateUpdatedSubtotal(updatedBooks);

      return {
        books: updatedBooks,
        subtotal: updatedSubtotal,
      };
    }),
}));
