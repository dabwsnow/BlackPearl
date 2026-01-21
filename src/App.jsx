import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Categories from "./pages/Categories";
import Models from "./pages/Models";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";

function App() {
  // state to control cart visibility
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <BrowserRouter>
      {/* Хедер будет виден на всех страницах */}
      <Header />
      
      <main>
        <Routes>
          {/* Главная страница */}
          <Route path="/" element={<Hero />} />
          
          {/* Группа маршрутов для категорий */}
          <Route path="/categories">
            {/* Выбор бренда - /categories */}
            <Route index element={<Categories />} />
            
            {/* Выбор модели - /categories/apple/models */}
            <Route path=":brand/models" element={<Models />} />
            
            {/* Товары для модели - /categories/apple/model/1/products */}
            <Route path=":brand/model/:modelId/products" element={<Products />} />
            
            {/* Страница товара - /categories/apple/model/1/product/5 */}
            <Route path=":brand/model/:modelId/product/:productId" element={<ProductDetail />} />
          </Route>

          {/* Страница оформления заказа */}
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>
      
      {/* Передаём управление открыт/закрыт через onToggle */}
      <Cart isOpen={cartOpen} onToggle={() => setCartOpen((v) => !v)} />
      
      {/* Футер также будет виден всегда */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;