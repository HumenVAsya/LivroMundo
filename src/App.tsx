import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./index.css";

export function App() {
  return (
    <>
      <Header />
      <main
        style={{ backgroundColor: "#F8D8B8", width: "100%", }}
      >
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
