import { Component } from "react";
import auth from "../services/loginService";

export default class Logout extends Component {
  componentDidMount() {
    auth.logout();
    window.location = "/movies";
  }
  render() {
    return null;
  }
}
