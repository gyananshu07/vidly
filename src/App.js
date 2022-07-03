import React from "react";
import { Route, Navigate, Routes, useParams } from "react-router-dom";

import "./App.css";

import Customers from "./components/customers.jsx";
import Movies from "./components/Movie.jsx";
import NotFound from "./components/notFound.jsx";
import Rentals from "./components/rentals.jsx";
import NavBar from "./components/common/navbar";
import MovieForm from "./components/movieForm.jsx";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";

function App() {
  return (
    <>
      <NavBar />
      <main className="container">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path=":id" element={<MovieForm />}></Route>
          <Route path="/movies" element={<Movies />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/not-Found" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
