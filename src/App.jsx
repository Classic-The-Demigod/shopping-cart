import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ProductDetailsPage from "./pages/productDetails";
import ProductListPage from "./pages/productList";
import CartListPage from "./pages/cartList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/product-details/:id" element={<ProductDetailsPage />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/cart" element={<CartListPage />} />
      </Routes>
    </>
  );
}

export default App;
