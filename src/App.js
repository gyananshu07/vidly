import { React, Component } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import jwtDecode from "jwt-decode";

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
import Logout from "./components/Logout";

class App extends Component {
  state = {};

  componentDidMount() {
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      this.setState({ user });
    } catch (ex) {}
  }

  render() {
    const { user } = this.state;
    return (
      <>
        <ToastContainer />
        <NavBar user={user} />
        <main className="container">
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/:id" element={<MovieForm />} />
            <Route path="/movies" element={<Movies user={user} />} />
            <Route
              path="/movies/new"
              element={user ? <MovieForm /> : <Navigate replace to="/" />}
            />
            <Route path="/logout" element={<Logout />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/rentals" element={<Rentals />} />
            <Route path="/notfound" element={<NotFound />} />
          </Routes>
        </main>
      </>
    );
  }
}

export default App;
