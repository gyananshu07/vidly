import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import Customers from "./components/customers.jsx";
import Movies from "./components/movie.jsx";
import NotFound from "./components/notFound.jsx";
import Rentals from "./components/rentals.jsx";
import NavBar from "./components/common/navbar";
import MovieForm from "./components/movieForm.jsx";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";

function App() {
  return (
    <>
      <ToastContainer />
      <NavBar />
      <main className="container">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/movies/new" element={<MovieForm />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/notfound" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
