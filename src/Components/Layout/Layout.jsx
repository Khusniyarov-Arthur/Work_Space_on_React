import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Container } from "../Container/Container";
import { Header } from "../Header/Header";
import style from "./Layout.module.css";

export const Layout = () => {
  return (
    <Container>
      <Header />
      <div className={style.outlet}>
        <Outlet />
      </div>
      <Footer />
    </Container>
  );
};
