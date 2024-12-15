import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { Container, Typography } from "@mui/material";
import { Card } from "../components/Card";
import { CustomButton } from "../components/Card/CustomButton";
import books from "./../api/products.json";
import { useShop } from "../store/store";

interface Book {
  id: number;
  title: string;
  cost: number;
  img: string;
  quantity: number;
}

export function Shop() {
  const addBook = useShop((state) => state.addBook);

  const handleAddBook = (book: Book) => {
    addBook(book);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", margin: "0 auto" }}>
      <Typography
        sx={{
          textTransform: "uppercase",
          margin: { xs: "60px auto 60px auto", md: "145px auto 38px auto" },
          display: "flex",
          fontSize: "36px",
          fontWeight: "700",
          fontFamily: "Montserrat",
          lineHeight: "43.88px",
        }}
      >
        shop
      </Typography>
      <Container maxWidth="lg">
        <Box>
          <Grid
            container
            spacing={{ xs: 5, md: 6 }}
            columns={{ xs: 1, sm: 2, md: 8, lg: 12 }}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            {books.map((book) => (
              <Grid
                key={book.id}
                size={{ xs: 12, sm: 6, md: 3, lg: 3 }}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Card book={book} onClick={handleAddBook} />
              </Grid>
            ))}
          </Grid>
        </Box>

        <CustomButton
          sx={{
            display: "flex",
            margin: { xs: "60px auto 60px auto", md: "38px auto 145px auto" },
            width: "230px",
            height: "60px",
          }}
        >
          See more
        </CustomButton>
      </Container>
    </Box>
  );
}
