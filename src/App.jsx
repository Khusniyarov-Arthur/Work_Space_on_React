import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Hero } from "./Components/Hero/Hero";
import { Vacancies } from "./Components/Vacancies/Vacancies";
import { Layout } from "./Components/Layout/Layout";
import { AddVacancy } from "./Components/AddVacancy/AddVacancy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <>
                <Hero />
                <Vacancies />
              </>
            }
          />
          <Route path="/:addvacancy" element={<AddVacancy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
