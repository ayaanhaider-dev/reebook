import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Lost from "./Pages/Lost";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Header from "./Components/Header";
import AddBook from "./Pages/AddBook";
import Footer from "./Components/Footer";
import ViewBook from "./Pages/ViewBook";
import ViewOrders from "./Pages/ViewOrders";
import ViewOrderDetails from "./Pages/ViewOrderDetails";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/addbook" element={<AddBook />} />
          <Route exact path="/view/:bookId" element={<ViewBook />} />
          <Route exact path="/orders" element={<ViewOrders />} />
          <Route exact path="/orders/:bookId" element={<ViewOrderDetails />} />
          <Route exact path="*" element={<Lost />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
