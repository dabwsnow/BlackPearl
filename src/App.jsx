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
import Account from "./pages/Account";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  // state to control cart visibility
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        {/* Админ-панель БЕЗ хедера и футера */}
        <Route path="/admin" element={<AdminDashboard />} />

        {/* Остальные страницы С хедером и футером */}
        <Route path="*" element={
          <>
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Hero />} />
                
                <Route path="/categories">
                  <Route index element={<Categories />} />
                  <Route path=":brand/models" element={<Models />} />
                  <Route path=":brand/model/:modelId/products" element={<Products />} />
                  <Route path=":brand/model/:modelId/product/:productId" element={<ProductDetail />} />
                </Route>

                <Route path="/checkout" element={<Checkout />} />
                <Route path="/account" element={<Account />} />
              </Routes>
            </main>
            <Cart isOpen={cartOpen} onToggle={() => setCartOpen((v) => !v)} />
            <Footer />
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;