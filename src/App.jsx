import { Container } from "./Components/Container/Container";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { Hero } from "./Components/Hero/Hero";
import { Modal } from "./Components/Modal/Modal";
import { ModalContent } from "./Components/ModalContent/ModalContent";
import { Vacancies } from "./Components/Vacancies/Vacancies";

function App() {
  return (
    <Container>
      <Header />
      <Hero />
      <Vacancies />
      <Footer />
    </Container>
  );
}

export default App;
