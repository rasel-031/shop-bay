import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./elements/Home";
import Collection from "./elements/Collection";
import NewArrival from "./elements/NewArrival";
import Product from "./elements/Product";
import AddToCart from "./elements/AddToCart";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {/* route in different navigation path */}
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/new-arrival" element={<NewArrival />} />
          <Route path="/product" element={<Product />} />
          <Route path="/carts" element={<AddToCart />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
