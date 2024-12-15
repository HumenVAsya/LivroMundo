import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { App } from "./App";
import { NotfoundPage } from "./pages/NotfoundPage";
import { ShopingCardPage } from "./pages/ShopingCardPage";
import { HomePage } from "./pages/HomePage";
import { StrictMode } from "react";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme/theme";
import { Shop } from "./pages/ShopPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";

export const Root = () => (
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Navigate to="/shop" />} />
            <Route path="home" element={<HomePage />} />
            <Route path="shoping" element={<ShopingCardPage />} />
            <Route path="shop" element={<Shop />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<NotfoundPage />} />
          </Route>
          <Route path="*" element={<NotfoundPage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
