import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Container } from "../Container/Container";
import { Header } from "../Header/Header";

export const Layout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
};
