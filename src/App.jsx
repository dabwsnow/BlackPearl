import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Categories from "./pages/Categories";
import Products from "./pages/Products";

function App() {
  return (
    <BrowserRouter>
      {/* Хедер будет виден на всех страницах */}
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Hero />} />

          {/* Группа маршрутов для категорий */}
          <Route path="/categories">
            <Route index element={<Categories />} />{" "}
            {/* Это сработает на /categories */}
            <Route path=":brand" element={<Products />} />{" "}
            {/* Это на /categories/apple */}
          </Route>
        </Routes>
      </main>

      {/* Футер также будет виден всегда */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
