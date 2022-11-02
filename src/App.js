import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';
import SharedLayout from './pages/SharedLayout';
import Error from './pages/Error';
import Models from './pages/Models';
import Success from './pages/Success';

function App() {
  const user = false;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="products/:category" element={<Products />} />
          <Route path="SingleProduct/:productId" element={<SingleProduct />} />
          <Route
            path="register"
            element={user ? <Navigate replace to="/" /> : <Register />}
          />
          <Route
            path="login"
            element={user ? <Navigate replace to="/" /> : <Login />}
          />
          <Route path="cart" element={<Cart />} />
          <Route path="success" element={<Success />} />
          <Route path="models" element={<Models />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
